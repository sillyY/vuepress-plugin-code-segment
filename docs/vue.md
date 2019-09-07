# Vue Example

## Common Example

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
` ` ` // <= remove spaces
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

## Tip Example

````
::: code
```tip
> Here is the tip in the Tip example.
` ` ` // <= remove spaces

```html
<template>
  <div class="box2">
    <button @click="handleClick">Look Tip</button>
  </div>
</template>
<script>
  export default {
    methods: {
      handleClick() {
        alert('Tip supports markdown writing')
      }
    }
  }
</script>
<style>
  .box2 {
    color: green;
  }
</style>
` ` ` // <= remove spaces
:::
````

::: code

```tip
> Here is the tip in the Tip example.
```

```html
<template>
  <div class="box2">
    <button @click="handleClick">Look Tip</button>
  </div>
</template>
<script>
  export default {
    methods: {
      handleClick() {
        alert('Tip supports markdown writing')
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
    outline: none;
    color: #fff;
    font-size: 14px;
    line-height: 1.5;
    cursor: pointer;
  }
</style>
```

:::

## Component Library

<br>
If you want to use other libraries in your code, you can import the umd file of the corresponding library into the config.js head property, and then use it directly in the code.

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

### Element-UI Example

````
::: code
```html
<template>
  <div class="box3">
      <el-button>Default</el-button>
      <el-button type="primary">Primary</el-button>
      <el-button type="success">Success</el-button>
      <el-button type="info">Info</el-button>
      <el-button type="warning">Warning</el-button>
      <el-button type="danger">Danger</el-button>
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
` ` ` // <= remove spaces
:::
````

::: code

```html
<template>
  <div class="box3">
    <el-button>Default</el-button>
    <el-button type="primary">Primary</el-button>
    <el-button type="success">Success</el-button>
    <el-button type="info">Info</el-button>
    <el-button type="warning">Warning</el-button>
    <el-button type="danger">Danger</el-button>
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

### IView Example

````
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
` ` ` // <= remove
:::
````

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
