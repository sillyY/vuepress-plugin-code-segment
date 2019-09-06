# Vue 示例

## 常见实例1
::: code
```html
<template>
  <div class="box">Hello {{message}}</div>
</template>
<script>
  export default {
    data() {
      return {
        message: 'Vuepress-Plugin-Code-Segment'
      }
    }
  }
</script>
<style>
  .box {
    color: transparent;
    font-size: 20px;
    font-weight: bold;
    background: linear-gradient(
      45deg,
      rgba(0, 173, 181, 1) 0%,
      rgba(0, 173, 181, 0.4) 100%
    );
    -webkit-background-clip: text;
  }
</style>
```
:::
