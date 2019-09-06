# Vue 示例

## 常见示例

````
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
    color: green;
  }
</style>
` ` ` // <= 删除空格
:::
````

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
  <div class="box">
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
  .box {
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
  <div class="box">
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
  .box {
    color: green;
  }
</style>
```

:::

## 第三方组件库

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

````
::: code

```tip
> 此处为备注信息1
````

```html
<template>
  <div class="box">
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
` ` ` // <= 删除空格 :::
```

::: code

```tip
> 此处为备注信息1
```

```html
<template>
  <div class="box">
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
```

:::

### IView 示例

::: code

```html
<template>
  <div class="box">
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
  .box {
    padding: 20px;
    background: rgb(190, 200, 200);
  }
</style>
```

:::
