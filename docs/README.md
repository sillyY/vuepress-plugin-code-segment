# Instroduction
Vuepress-Plugin-Code-Segment helps you add vue examples when writing a document. When you write component documentation, you often need to add component code and examples. Use this plugin to add quickly and efficiently.

## Install

### Vuepress
<br>
official document [Vuepress](https://v1.vuepress.vuejs.org/zh/)

> The plugin only supports V1.x and above, and the 0.x version has no plugin system.

### Plugin

```
npm i --save-dev vuepress-plugin-code-segment
```

### Configure vuepress config
```
module.exports = {
    head: [
        ['script', { src: 'https://cdn.jsdelivr.net/npm/vue/dist/vue.min.js' }]
    ],
    plugins: ['code-segment']
}
```

## Feats
<br>

- single code generates both demo and code
- the code can be folded and the stow button is automatically fixed to the bottom
- support for displaying hidden button copy configuration
- support demo display area height configuration
