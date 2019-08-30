'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var path = _interopDefault(require('path'));

var ICON_URL = '../assets/img/icon-caret-bottom.svg';
var ICON_HOVER_URL = '../assets/img/icon-caret-bottom-blue.svg';
var HIDE_ICON_URL = '../assets/img/icon-caret-top.svg';
var HIDE_ICON_HOVER_URL = '../assets/img/icon-caret-top-blue.svg';
var SETTINGS = {
  showText: {
    icon: ICON_URL,
    text: '展示代码',
    hoverIcon: ICON_HOVER_URL
  },
  hideText: {
    icon: HIDE_ICON_URL,
    text: '隐藏代码',
    hoverIcon: HIDE_ICON_HOVER_URL
  },
  minHeight: 40,
  jsLibs: ['https://cdn.jsdelivr.net/npm/vue/dist/vue.min.js', 'https://cdn.jsdelivr.net/npm/@babel/standalone/babel.min.js'],
  cssLibs: []
};
var getSettings = function getSettings(options) {
  var opts = {};

  for (var key in options) {
    switch (key) {
      case 'showText':
      case 'hideText':
        opts[key] = {
          icon: options[key].icon || SETTINGS[key].icon,
          text: options[key].text || SETTINGS[key].text,
          hoverIcon: options[key].hoverIcon || SETTINGS[key].hoverIcon
        };
        break;

      case 'jsLibs':
      case 'cssLibs':
        opts[key] = [].concat(options[key], SETTINGS[key]);
        break;

      case 'minHeight':
        opts[key] = options[key];
        break;

      default:
        break;
    }
  }

  return opts;
};

module.exports = function (options, ctx) {
  return {
    name: 'vuepress-plugin-code-segment',
    define: {
      SETTINGS: getSettings(options.settings)
    },
    clientRootMixin: path.resolve(__dirname, './mixin.js'),
    extendMarkdown: function extendMarkdown(md) {
      md.use(require('markdown-it-container'), 'demo', {
        render: function render(tokens, idx) {
          var _tokens$idx = tokens[idx],
              nesting = _tokens$idx.nesting,
              info = _tokens$idx.info;

          if (nesting === -1) {
            var config = getSettings(options.settings);
            return "\n            </div>\n              <div class=\"ibox-footer\">\n                <div class=\"btn show visible\">\n                  <img src=\"".concat(config.showText.icon, "\"/>\n                  <span>").concat(config.showText.text, "</span>\n                </div>\n                <div class=\"btn hide\">\n                  <img src=\"").concat(config.hideText.icon, "\"/>\n                  <span>").concat(config.hideText.text, "</span>\n                </div>\n              </div>\n              </div>\n            ");
          }

          var codeStr = '',
              tipStr = '';
          var i = 0,
              len = tokens.length;

          for (; i < len; i++) {
            var _tokens$i = tokens[i],
                type = _tokens$i.type,
                content = _tokens$i.content,
                _info = _tokens$i.info;
            if (type === 'container_demo_close') break;
            if (!content) continue;

            if (type === 'fence') {
              if (_info.trim() === 'tip') {
                tipStr = require('markdown-it')().render(content);
              }

              codeStr = encodeURIComponent(content);
            }
          }

          return "\n          <div\n            class=\"ibox\"\n            data-code=\"".concat(codeStr, "\"\n            data-tip=\"").concat(tipStr, "\">\n              <div class=\"ibox-content\">\n                <div class=\"ibox-demo\"></div>\n              </div>\n              <div class=\"ibox-code\">\n          ");
        }
      });
    }
  };
};
