# 简介

Vuepress-Plugin-Code-Segment 帮助你在编写文档时添加 vue 示例。当你编写组件文档时，常常需要添加组件代码及示例。使用该插件可以快速添加，且高效修改。

## 安装
  
### 安装 Vuepress
<br>
参考官方文档 [Vuepress](https://v1.vuepress.vuejs.org/zh/)

> 该插件仅支持 V1.x 以上版本, 0.x 版本无插件系统

### 安装插件

```
npm i --save-dev vuepress-plugin-code-segment
```

### 配置 vuepress config

```
module.exports = {
    head: [
        ['script', { src: 'https://cdn.jsdelivr.net/npm/vue/dist/vue.min.js' }]
    ],
    plugins: ['code-segment']
}
```

## 功能
<br>

- 单一代码同时生成 demo 和 code  
- 代码可折叠，收起按钮自动固定到最下方  
- 支持展示隐藏按钮文案配置  
- 支持 demo 显示区域高度配置  
