<p id='label'>开发第43次(不记得多少了，已从零开始), 用作刷新缓存</p>

::: code
```tip
> 此处为备注信息
```
```html
<template>
  <section>
   <el-button type="primary">主要按钮</el-button>
  </section>
</template>
<script>
  export default {
    data: () => ({
    })
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




::: code
```tip
> 此处为备注信息
```
```html
<template>
  <section>
      <Table :layout="layout" :list="list">
        <template #address="{scope}"
          >{{scope.row.address}}</template
        >
        <template #operate="{scope}">
          <el-button @click="handleScope(scope)">编辑</el-button>
        </template>
      </Table>
  </section>
</template>
<script>
  export default {
    data: () => ({
      layout: {
        border: true,
        select: true,
        index: true,
        stripe: true,
        operate: {
          visible: true
        },
        props: [
          {
            attr: 'date',
            name: '日期'
          },
          {
            attr: 'name',
            name: '姓名'
          },
          {
            attr: 'address',
            name: '地址',
            slot: 'address'
          }
        ]
      },
      list: [
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        },
        {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }
      ]
    }),
    methods: {
      handleScope(value) {
        console.log(value)
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

