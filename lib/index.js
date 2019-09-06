'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var path = _interopDefault(require('path'));

var SETTINGS = {
  showText: '展示代码',
  hideText: '隐藏代码',
  minHeight: 40
};
var getSettings = function getSettings(options) {
  var opts = SETTINGS;

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

module.exports = function (options, ctx) {
  return {
    name: 'vuepress-plugin-code-segment',
    define: {
      SETTINGS: getSettings(options)
    },
    clientRootMixin: path.resolve(__dirname, './mixin.js'),
    extendMarkdown: function extendMarkdown(md) {
      md.use(require('markdown-it-container'), 'code', {
        render: function render(tokens, idx) {
          var nesting = tokens[idx].nesting;
          var config = getSettings(options);

          if (nesting === -1) {
            return "\n            </div>\n              <div class=\"ibox-footer\">\n                <div class=\"btn show visible\">\n                  <span>".concat(config.showText, "</span>\n                </div>\n                <div class=\"btn hide\">\n                  <span>").concat(config.hideText, "</span>\n                </div>\n              </div>\n              </div>\n            ");
          }

          var codeStr = '',
              tipStr = '';
          var i = idx,
              len = tokens.length;

          for (; i < len; i++) {
            var _tokens$i = tokens[i],
                type = _tokens$i.type,
                content = _tokens$i.content,
                info = _tokens$i.info,
                map = _tokens$i.map;
            if (type === 'container_code_close') break;
            if (!content) continue;

            if (type === 'fence') {
              if (info.trim() === 'tip') {
                tipStr = require('markdown-it')().render(content);
              }

              codeStr = encodeURIComponent(content);
            }
          }

          return "\n          <div\n            class=\"ibox\"\n            data-code=\"".concat(codeStr, "\"\n            data-config=\"").concat(encodeURIComponent(JSON.stringify(config)), "\"\n            data-tip=\"").concat(tipStr, "\">\n              <div class=\"ibox-content\">\n                <div class=\"ibox-demo\"></div>\n              </div>\n              <div class=\"ibox-code\">\n          ");
        }
      });
    }
  };
};
