---
home: true
actionText: My Article →
actionLink: /
---

<p id='label'>开发第15次(不记得多少了，已从零开始), 用作刷新缓存</p>

::: demo

```tip
> 此处为备注信息
```

```html
<template>
  <section>
    <div class="box-vue">{{num}}</div>
    <button @click="add">+</button>
    <button @click="reduce">-</button>
    <el-button>默认按钮</el-button>
    <el-button type="primary">主要按钮</el-button>
    <el-button type="success">成功按钮</el-button>
    <el-button type="info">信息按钮</el-button>
    <el-button type="warning">警告按钮</el-button>
    <el-button type="danger">危险按钮</el-button>
  </section>
</template>
<script>
  export default {
    data: () => ({ num: 1 }),
    methods: {
      add() {
        this.num += 1
      },
      reduce() {
        this.num -= 1
      }
    }
  }
</script>
<style>
  .box-vue {
    margin-bottom: 10px;
    color: #ccc;
  }
</style>
```

:::
