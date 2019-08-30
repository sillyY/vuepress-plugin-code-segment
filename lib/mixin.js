function styleInject(css, ref) {
  if (ref === void 0) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') {
    return;
  }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css = ".ibox {\n  margin-top: 10px;\n  margin-bottom: 10px;\n  background: #fff;\n  border-radius: 8px;\n  border: 1px solid #ccc;\n}\n.ibox:hover {\n  box-shadow: 0px 4px 12px 0px rgba(17, 35, 58, 0.1);\n}\n.ibox-content {\n  padding: 40px;\n}\n\n.ibox-code {\n  position: relative;\n  overflow: hidden;\n  height: 0;\n  padding: 0 !important;\n  transition: height 0.5s;\n  background-color: #282c34;\n}\n.ibox-tip {\n  position: absolute;\n  top: 0;\n}\n\n/* 重写markdown样式 */\n.language-tip {\n  margin: 40px;\n  padding: 10px;\n  background-color: #fff !important;\n  border-radius: 8px !important;\n  border: 1px solid #ccc;\n}\n.language-html {\n  border-radius: 0 !important;\n  margin: 0 !important;\n}\n\n.ibox-footer {\n  height: 80px;\n  background: #f0f3f8;\n  box-shadow: 0px 4px 12px 0px rgba(17, 35, 58, 0.1);\n  border-radius: 0px 0px 8px 8px;\n  border-top: 1px solid #ccc;\n  cursor: pointer;\n}\n.ibox-footer:hover > .btn > span {\n  color: #5075ff;\n}\n\n.ibox-footer > .btn {\n  display: none;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n}\n.ibox-footer > .btn > span {\n  margin-left: 10px;\n  font-size: 16px;\n  font-weight: 500;\n  line-height: 22px;\n  color: #ccc;\n}\n.ibox-footer > .visible {\n  display: flex;\n}\n";
styleInject(css);

var _once = {};
var $ = function $(parent, className) {
  var isFirst = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  var node = parent.querySelectorAll("".concat(className));
  return isFirst ? node[0] : node;
};
var h = function h(tag, attrs, children) {
  var node = document.createElement(tag);
  attrs && Object.keys(attrs).forEach(function (key) {
    if (!key.indexOf('data')) {
      var k = key.replace('data', '');
      node.dataset[k] = attrs[key];
    } else {
      node[key] = attrs[key];
    }
  });
  children && children.forEach(function (_ref) {
    var tag = _ref.tag,
        attrs = _ref.attrs,
        children = _ref.children;
    node.appendChild(h(tag, attrs, children));
  });
  return node;
};

var getHtmlTpl = function getHtmlTpl(html) {
  return "<div id=\"app\">\n".concat(html, "\n</div>");
};

var getVueJsTpl = function getVueJsTpl(js) {
  var jsContent = js.replace(/export\s+default\s*?\{\n*/, '').replace(/\n*\}\s*$/, '').trim();
  return "new Vue({\n  el: '#app',\n  ".concat(jsContent, "\n})");
};

var getVueScript = function getVueScript(js, html) {
  var scripts = js.split(/export\s+default/);
  var scriptStrOrg = "(function() {".concat(scripts[0], " ; return ").concat(scripts[1], "})()");
  var scriptStr = window.Babel ? window.Babel.transform(scriptStrOrg, {
    presets: ['es2015']
  }).code : scriptStrOrg;
  var scriptObj = [eval][0](scriptStr);
  scriptObj.template = html;
  return scriptObj;
};

var getVueDetail = function getVueDetail(code) {
  var cssBlock = code.match(/<style>([\s\S]+)<\/style>/);
  var htmlBlock = code.match(/<template>([\s\S]+)<\/template>/);
  var jsBlock = code.match(/<script>([\s\S]+)<\/script>/);
  var result = {
    css: cssBlock && cssBlock[1].replace(/^\n|\n$/g, ''),
    html: htmlBlock && htmlBlock[1].replace(/^\n|\n$/g, ''),
    js: jsBlock && jsBlock[1].replace(/^\n|\n$/g, ''),
    jsLib: ['https://cdn.jsdelivr.net/npm/vue/dist/vue.min.js'] //   cssLib: config.cssLib || []

  };
  result.htmlTpl = getHtmlTpl(result.html);
  result.jsTpl = getVueJsTpl(result.js);
  result.script = getVueScript(result.js, result.html); // const vueResource = getSettings('vue')
  // result.jsLib.unshift(vueResource)

  return result;
};

var injectCss = function injectCss(css) {
  if (_once[css]) return;
  var style = h('style', {
    innerHTML: css
  });
  document.body.appendChild(style);
  _once[css] = true;
};

function initEvent(node) {
  var footerNode = $(node, '.ibox-footer');
  var codeNode = $(node, '.ibox-code');
  var tipNode = $(codeNode, '.language-tip');
  var showNode = $(footerNode, '.show');
  var hideNode = $(footerNode, '.hide');
  var iconNode = $(showNode, 'img');
  var hideIconNode = $(hideNode, 'img');
  var iconUrl = window.$VUEPRESS_DEMO_BLOCK.showText.icon,
      hoverIconUrl = window.$VUEPRESS_DEMO_BLOCK.showText.hoverIcon,
      HideIconUrl = window.$VUEPRESS_DEMO_BLOCK.hideText.icon,
      hideHoverIconUrl = window.$VUEPRESS_DEMO_BLOCK.hideText.hoverIcon;
  initHover(showNode, iconNode, iconUrl, hoverIconUrl);
  initHover(hideNode, hideIconNode, HideIconUrl, hideHoverIconUrl);
  initClick(showNode, codeNode, hideNode);
  tipNode && replaceTip(tipNode, node.dataset.tip);
}

function initHover(node, iconNode, iconUrl, hoverIconUrl) {
  node.addEventListener('mouseover', function () {
    iconNode.setAttribute('src', hoverIconUrl);
  });
  node.addEventListener('mouseout', function () {
    iconNode.setAttribute('src', iconUrl);
  });
}

function initClick(showNode, handler, hideNode) {
  showNode.addEventListener('click', function () {
    var height = 82;
    var likeArr = handler.querySelectorAll('div');
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = likeArr[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var value = _step.value;
        height += value.clientHeight;
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator["return"] != null) {
          _iterator["return"]();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }

    handler.style.height = height + 'px';
    showNode.classList.remove('visible');
    hideNode.classList.add('visible');
  });
  hideNode.addEventListener('click', function () {
    handler.style.height = '0';
    showNode.classList.add('visible');
    hideNode.classList.remove('visible');
  });
} // 更换tip


function replaceTip(self, tip) {
  self.innerHTML = tip;
}

function compile() {
  var nodes = $(document, '.ibox', false);
  if (!nodes || !nodes.length) return;
  nodes.forEach(function (node) {
    node.style.display = 'block';
    var codeNode = $(node, '.ibox-main');
    var displayNode = $(node, '.ibox-content');
    var footerNode = $(node, '.ibox-footer');
    var appNode = $(displayNode, '.ibox-demo');
    var code = decodeURIComponent(node.dataset.code);
    var detail = getVueDetail(code); // 注册css

    detail.css && injectCss(detail.css); // 传递node，确保事件注册在指定的node节点上

    initEvent(node);
    var Comp = Vue.extend(detail.script);
    var app = new Comp().$mount();
    appNode.appendChild(app.$el);
  });
}

var mixin = {
  mounted: function mounted() {
    window.$VUEPRESS_DEMO_BLOCK = SETTINGS;
    compile();
  },
  updated: function updated() {
    compile();
  }
};

export default mixin;
