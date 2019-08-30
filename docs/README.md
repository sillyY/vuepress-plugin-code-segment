---
home: true
actionText: My Article →
actionLink: /
---

<p id='label'>开发第4次(不记得多少了，已从零开始)</p>

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
