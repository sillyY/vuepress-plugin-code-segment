# Vue 示例

## 常见示例

````
::: code
```html
<template>
  <div class="box1">Hello {{message}}</div>
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
  .box1 {
    color: green;
  }
</style>
` ` ` // <= 删除空格
:::
````

::: code

```html
<template>
  <div class="box1">Hello {{message}}</div>
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
  .box1 {
    color: green;
  }
</style>
```

:::

## Tip 示例

````
::: code
```tip
> 这里是Tip示例中的tip
` ` ` // <= 删除空格

```html
<template>
  <div class="box2">
    <button @click="handleClick">看Tip</button>
  </div>
</template>
<script>
  export default {
    methods: {
      handleClick() {
        alert('Tip支持markdown写法哦')
      }
    }
  }
</script>
<style>
  .box2 {
    color: green;
  }
</style>
` ` ` // <= 删除空格
:::
````

::: code

```tip
> 这里是Tip示例中的tip
```

```html
<template>
  <div class="box2">
    <button @click="handleClick">看Tip</button>
  </div>
</template>
<script>
  export default {
    methods: {
      handleClick() {
        alert('Tip支持markdown写法哦')
      }
    }
  }
</script>
<style>
  .box2 {
    color: green;
  }
  .box2 > button {
    background-color: #1890ff;
    height: 32px;
    padding: 0 15px;
    border: 1px solid transparent;
    border-color: #1890ff;
    border-radius: 4px;
    outline:none;
    color: #fff;
    font-size: 14px;
    line-height: 1.5; 
    cursor: pointer; 
  }
</style>
```

:::

## 第三方组件库
<br>
在代码中如果要使用其他的库，可以引入对应库的 umd 文件到 config.js head 属性中, 然后在代码里直接使用即可。

```
module.export = {
 head: [
    ['script', { src: 'https://cdn.jsdelivr.net/npm/vue/dist/vue.min.js' }],
    ['script', { src: 'https://unpkg.com/element-ui/lib/index.js' }],
    [
      'link',
      {
        rel: 'stylesheet',
        href: 'https://unpkg.com/element-ui/lib/theme-chalk/index.css'
      }
    ]
  ],
}
```

### Element-UI 示例

```
::: code

```html
<template>
  <div class="box3">
    <el-button>默认按钮</el-button>
    <el-button type="primary">主要按钮</el-button>
    <el-button type="success">成功按钮</el-button>
    <el-button type="info">信息按钮</el-button>
    <el-button type="warning">警告按钮</el-button>
    <el-button type="danger">危险按钮</el-button>
  </div>
</template>
<script>
  export default {}
</script>
<style>
  .box3 {
    display: grid;
    grid-template-columns: 33.33% 33.33% 33.33%;
    grid-template-rows: 50% 50%;
    grid-row-gap: 10px;
    grid-column-gap: 10px;
  }
</style>
` ` ` // <= 删除空格 
:::
```

::: code
```html
<template>
  <div class="box3">
    <el-button>默认按钮</el-button>
    <el-button type="primary">主要按钮</el-button>
    <el-button type="success">成功按钮</el-button>
    <el-button type="info">信息按钮</el-button>
    <el-button type="warning">警告按钮</el-button>
    <el-button type="danger">危险按钮</el-button>
  </div>
</template>
<script>
  export default {}
</script>
<style>
  .box3 {
    display: grid;
    grid-template-columns: 33.33% 33.33% 33.33%;
    grid-template-rows: 50% 50%;
    grid-row-gap: 10px;
    grid-column-gap: 10px;
  }
</style>
```
:::

### IView 示例
```
::: code
```html
<template>
  <div class="box4">
    <Button type="default" ghost>Default</Button>
    <Button type="primary" ghost>Primary</Button>
    <Button type="dashed" ghost>Dashed</Button>
    <Button type="text" ghost>Text</Button>
    <Button type="info" ghost>Info</Button>
    <Button type="success" ghost>Success</Button>
    <Button type="warning" ghost>Warning</Button>
    <Button type="error" ghost>Error</Button>
  </div>
</template>
<script>
  export default {}
</script>
<style>
  .box4 {
    display: grid;
    grid-template-columns: 25% 25% 25%;
    grid-template-rows: 25% 25% 25%;
    grid-row-gap: 10px;
    grid-column-gap: 10px;
    padding: 10px;
    background: #bec8c8
  }
</style>
` ` ` // <= 删除空格
:::
```

::: code
```html
<template>
  <div class="box4">
    <Button type="default" ghost>Default</Button>
    <Button type="primary" ghost>Primary</Button>
    <Button type="dashed" ghost>Dashed</Button>
    <Button type="text" ghost>Text</Button>
    <Button type="info" ghost>Info</Button>
    <Button type="success" ghost>Success</Button>
    <Button type="warning" ghost>Warning</Button>
    <Button type="error" ghost>Error</Button>
  </div>
</template>
<script>
  export default {}
</script>
<style>
  .box4 {
    display: grid;
    grid-template-columns: 25% 25% 25%;
    grid-template-rows: 25% 25% 25%;
    grid-row-gap: 10px;
    grid-column-gap: 10px;
    padding: 10px;
    background: #bec8c8
  }
</style>
```
:::
