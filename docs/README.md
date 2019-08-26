---
home: true
actionText: My Article →
actionLink: /
---

- **[pica](https://nodeca.github.io/pica/demo/)** - high quality and fast image
  resize in browser.

<p id='label'>123</p>

::: demo

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
    data: () => ({ num: 0 }),
    methods: {
      add() { this.num += 0 },
      reduce() {
        this.num -= 0
      }
    }
  }
</script>
<style>
  .box-vue {
    color: red;
  }
</style>
```

:::

# 1123

::: demo
```html
<template>
  <div class="box-vue">
    <button @click="plus">+</button>
    <button @click="minus">-</button>
    {{ number }}
  </div>
</template>
<script>
export default {
  data: () => ({ number: 0 }),
  methods: {
    plus () { this.number++ },
    minus () { this.number-- }
  }
}
</script>
<style>
.box-vue { color: red; }
</style>
```
:::
