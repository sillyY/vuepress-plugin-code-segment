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

var css = ".ibox {\n  margin-top: 10px;\n  margin-bottom: 10px;\n  background: #fff;\n  border-radius: 8px;\n  border: 1px solid #ccc;\n}\n.ibox:hover {\n  box-shadow: 0px 4px 12px 0px rgba(17, 35, 58, 0.1);\n}\n.ibox-content {\n  padding: 40px;\n}\n.ibox-code {\n  position: relative;\n  overflow: hidden;\n  height: 0;\n  padding: 0 !important;\n  transition: height 0.5s;\n  background-color: #282c34;\n}\n.ibox-tip {\n  position: absolute;\n  top: 0;\n}\n\n/* 重写markdown样式 */\n.language-tip {\n  position: relative;\n  margin: 40px;\n  padding: 10px;\n  background-color: #fff !important;\n  border-radius: 8px !important;\n  border: 1px solid #ccc;\n}\n.language-tip::before {\n  top: -2.5em !important;\n  right: -2.4em !important;\n  content: 'tip';\n}\n.language-html {\n  border-radius: 0 !important;\n  margin: 0 !important;\n}\n\n.ibox-footer {\n  height: 80px;\n  background: #f0f3f8;\n  box-shadow: 0px 4px 12px 0px rgba(17, 35, 58, 0.1);\n  border-radius: 0px 0px 8px 8px;\n  border-top: 1px solid #ccc;\n  cursor: pointer;\n}\n.ibox-footer:hover > .btn > span {\n  color: #5075ff;\n}\n\n.ibox-footer > .btn {\n  display: none;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n}\n.ibox-footer > .btn > span {\n  position: relative;\n  margin-left: 10px;\n  font-size: 16px;\n  font-weight: 500;\n  line-height: 22px;\n  color: #ccc;\n}\n.ibox-footer > .hide > span:before {\n  position: absolute;\n  left: -28px;\n  top: 5px;\n  width: 0;\n  height: 0;\n  content: '';\n  border-style: solid;\n  border-width: 0 9px 13px 9px;\n  border-color: transparent transparent #ccc transparent;\n}\n.ibox-footer:hover > .hide > span:before {\n  position: absolute;\n  left: -28px;\n  top: 5px;\n  width: 0;\n  height: 0;\n  content: '';\n  border-style: solid;\n  border-width: 0 9px 13px 9px;\n  border-color: transparent transparent #5075ff transparent;\n}\n.ibox-footer > .show > span:before {\n  position: absolute;\n  left: -28px;\n  top: 5px;\n  width: 0;\n  height: 0;\n  content: '';\n  border-style: solid;\n  border-width: 13px 9px 0 9px;\n  border-color: #ccc transparent transparent transparent;\n}\n.ibox-footer:hover > .show > span:before {\n  position: absolute;\n  left: -28px;\n  top: 5px;\n  width: 0;\n  height: 0;\n  content: '';\n  border-style: solid;\n  border-width: 13px 9px 0 9px;\n  border-color: #5075ff transparent transparent transparent;\n}\n.ibox-footer > .visible {\n  display: flex;\n}\n.is-fixed {\n  position: fixed;\n  bottom: 0;\n  z-index: 99;\n  border-radius: 0;\n}\n\n/* 初始化样式 */\n.el-table table {\n  margin: 0;\n}\n";
styleInject(css);

var _once = {};
var $ = function $(parent, className) {
  var isFirst = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  var node = parent.querySelectorAll("".concat(className));
  return isFirst ? node[0] : node;
};

var getHtml = function getHtml(html) {
  return "<div id=\"app\">\n".concat(html, "\n</div>");
};

var getVueJs = function getVueJs(js) {
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
  var cssSegment = code.match(/<style>([\s\S]+)<\/style>/);
  var htmlSegment = code.match(/<template>([\s\S]+)<\/template>/);
  var jsSegment = code.match(/<script>([\s\S]+)<\/script>/);
  var result = {
    css: cssSegment && cssSegment[1].replace(/^\n|\n$/g, ''),
    html: htmlSegment && htmlSegment[1].replace(/^\n|\n$/g, ''),
    js: jsSegment && jsSegment[1].replace(/^\n|\n$/g, '')
  };
  result.htmlTpl = getHtml(result.html);
  result.jsTpl = getVueJs(result.js);
  result.script = getVueScript(result.js, result.html);
  return result;
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
var injectCss = function injectCss(css) {
  if (_once[css]) return;
  var style = h('style', {
    innerHTML: css
  });
  document.body.appendChild(style);
  _once[css] = true;
};

var SETTINGS$1 = {
  showText: '展示代码',
  hideText: '隐藏代码',
  minHeight: 40
};
var getSettings = function getSettings(options) {
  var opts = SETTINGS$1;

  for (var key in options) {
    switch (key) {
      case 'showText':
      case 'hideText':
      case 'minHeight':
        opts[key] = options[key] ? options[key] : opts[key];
        break;

      default:
        break;
    }
  }

  return opts;
};

function initEvent(node) {
  var footerNode = $(node, '.ibox-footer');
  var codeNode = $(node, '.ibox-code');
  var contentNode = $(node, '.ibox-content');
  var tipNode = $(codeNode, '.language-tip');
  var showNode = $(footerNode, '.show');
  var hideNode = $(footerNode, '.hide');
  initClick(showNode, codeNode, hideNode, footerNode);
  initFixed(codeNode, footerNode, contentNode);
  initHeight(contentNode);
  tipNode && replaceTip(tipNode, node.dataset.tip);
}

function initClick(showNode, handler, hideNode, footerNode) {
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
    footerNode.classList.add('is-fixed');
    var style = getComputedStyle(handler, null);
    footerNode.style.width = style.width; // code下拉存在0.5s动画，会导致位置获取不准确

    setTimeout(function () {
      resetStatus();
    }, 500);
  });
  hideNode.addEventListener('click', function () {
    handler.style.height = '0';
    showNode.classList.add('visible');
    hideNode.classList.remove('visible');
    footerNode.classList.remove('is-fixed');
  });
}

function resetStatus() {
  var nodes = $(document, '.ibox', false),
      height = window.innerHeight || document.documentElement.clientHeight;
  nodes.forEach(function (node) {
    var contentNode = $(node, '.ibox-content'),
        footerNode = $(node, '.ibox-footer'),
        codeNode = $(node, '.ibox-code');
    var h1 = contentNode.getBoundingClientRect(),
        rect = codeNode.getBoundingClientRect(); // h1.y + h1.height + 80 > height 表示footer上拉超过code部分则取消fixed

    if (h1.y + h1.height + 80 > height || rect.y + codeNode.scrollHeight < height) {
      footerNode.classList.remove('is-fixed');
    }
  });
}

function initFixed(codeNode, footerNode, contentNode) {
  document.addEventListener('scroll', function () {
    var rect = codeNode.getBoundingClientRect(),
        height = window.innerHeight || document.documentElement.clientHeight;
    if (rect.height === 0) return;

    if (rect.height + rect.y > height) {
      footerNode.classList.add('is-fixed');
      var style = getComputedStyle(codeNode, null);
      footerNode.style.width = style.width;
    }

    var h1 = contentNode.getBoundingClientRect();

    if (rect.height + rect.y + 91 < height || rect.y > height || h1.y + h1.height + 80 > height) {
      footerNode.classList.remove('is-fixed');
    }
  });
}

function initHeight(node) {
  var options = getSettings(window.$VUEPRESS_CODE_SEGMENT),
      minHeight = options.minHeight;
  if (minHeight <= 40) return;
  node.style.paddingTop = (minHeight - 40) / 2 + 'px';
  node.style.paddingBottom = (minHeight - 40) / 2 + 'px';
} // 更换tip


function replaceTip(self, tip) {
  self.innerHTML = tip;
}

function compile() {
  var nodes = $(document, '.ibox', false);
  if (!nodes || !nodes.length) return;
  nodes.forEach(function (node) {
    node.style.display = 'block';
    var displayNode = $(node, '.ibox-content');
    var appNode = $(displayNode, '.ibox-demo');
    var code = decodeURIComponent(node.dataset.code);
    var config = decodeURIComponent(node.dataset.config);
    config = config ? JSON.parse(config) : {};
    var detail = getVueDetail(code); // 注册组件样式

    detail.css && injectCss(detail.css);
    var Comp = Vue.extend(detail.script);
    var app = new Comp().$mount(); // 修复因滚动多次触发编译，导致多个组件内容

    Array.from(appNode.children).length < 1 && appNode.appendChild(app.$el); // 传递node，确保事件注册在指定的node节点上

    initEvent(node);
  });
}

var mixin = {
  mounted: function mounted() {
    window.$VUEPRESS_CODE_SEGMENT = SETTINGS;
    compile();
  },
  updated: function updated() {
    compile();
  }
};

export default mixin;
