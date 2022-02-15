# Webpack 代码分割 和 路由懒加载、组件懒加载

## 前言

代码打包是我们平时项目必经的一步，为了减小打包体积，加快加载速度，代码分割是不可缺少的一部分，虽然现在的框架（例如 vue，react）都已经在内部将 webpack 配置好了，但是原理还是要知道的。

  <img src="../.vuepress/public/images/卷.jpg" style="display:block;margin:0 auto"/>

## 代码分割的三种方式

- 入口：使用 `entry` 配置手动地分离代码
- 动态导入：通过 `import()` 来分离代码
- 防止重复：使用 `splitChunks` 去重和分离 `chunk`

本文着重记录第三种 `splitChunks` 的用法

## splitChunks 代码拆分

### 默认配置

```json light
splitChunks: {
    // 表示选择哪些 chunks 进行分割，可选值有：async，initial和all
    chunks: "async",
    // 表示新分离出的chunk必须大于等于minSize，默认为30000，约30kb。
    minSize: 30000,
    // 表示一个模块至少应被minChunks个chunk所包含才能分割。默认为1。
    minChunks: 1,
    // 表示按需加载文件时，并行请求的最大数目。默认为5。
    maxAsyncRequests: 5,
    // 表示加载入口文件时，并行请求的最大数目。默认为3。
    maxInitialRequests: 3,
    // 表示拆分出的chunk的名称连接符。默认为~。如chunk~vendors.js
    automaticNameDelimiter: '~',
    // 设置chunk的文件名。默认为true。当为true时，splitChunks基于chunk和cacheGroups的key自动命名。
    name: true,
    // cacheGroups 下可以可以配置多个组，每个组根据test设置条件，符合test条件的模块，就分配到该组。模块可以被多个组引用，但最终会根据priority来决定打包到哪个组中。默认将所有来自 node_modules目录的模块打包至vendors组，将两个以上的chunk所共享的模块打包至default组。
    cacheGroups: {
        vendors: {
            test: /[\\/]node_modules[\\/]/,
            priority: -10
        },
        default: {
            minChunks: 2,
            priority: -20,
            reuseExistingChunk: true
        }
    }
}

```

### **chunks 字段**

可选值有 `async`、 `initial` 和 `all`，默认值是 `async`，作用范围如下：

- `async` 异步加载的 chunk
- `initial` 非异步加载的初始 chunk
- `all` 包括了`初始chunk` 和 `异步chunk`

推荐使用 **`all`**

### **maxInitialRequests 字段**

maxInitialRequests 字段指 splitchunk 分割代码后请求的初始 chunk 最大数量

**注意：这是一个约束，并不是约束项目线上时请求数量，而是约束在代码分割时，如果遍历到一个满足单独分包为初始 chunk 的文件，这时候已经单独分包为初始 chunk 的数量达到了 maxInitialRequests 设置的数量,则不能拆。**

例如有一个 index.js (是入口文件)

```js
import 'vue'
```

splitChunks 修改为:

```js
chunks: 'initial',
maxInitialRequests: 1
```

则最终 vue 不会被单独打包,因为 vue 是 index.js 的前置依赖,所以要在页面初始时请求,如果单独分包,那么初始化时的请求数变成了 2,不符合 maxInitialRequests 设置的为 1 的条件,所以 splitChunks 不会对 index.js 进行拆分。

### **maxAsyncRequests 字段**

maxAsyncRequests 表示 splitChunks 在拆分 chunk 后，并行加载的异步 chunk 数不超过指定的值。

例如 `import()` 就是异步加载

### **minChunks 字段**

minChunks 表示一个模块至少应被指定个数的 chunk 所共享才能分割。默认为 1。

### **cacheGroups 字段**

cacheGroups 是一个对象,内部每个字段也是对象,并且会继承 splitChunks 的属性,也可以重写覆盖继承来的属性值。还有一些属性只能在 cacheGroups 中使用：`test`、`priority` 、`reuseExistingChunk`。

通过 cacheGroups，我们可以定义自定义 chunk 组，通过 test 条件对模块进行过滤，符合条件的模块分配到相同的组

- test 条件匹配
- priority 被分配到多个不同组的时候根据优先级确定最终分配到哪个组
- name 重命名 chunk 名称
- reuseExistingChunk 如果当前的 chunk 匹配到已经分包的模块，是否重用这个模块

cacheGroups 的默认值:

```json
cacheGroups: {
        // 来自node_modules中的文件
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10
        },
        // 被两个及以上文件共享的文件
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true
        }
      }
```

再看这个例子:

```json
cacheGroups: {
  vendors: {
    test: /[\\/]node_modules[\\/]/,
    name: "customName",
    priority: -10
  },
  customGroup: {
    test: /[\\/]node_modules[\\/]/,
    name: "customName1",
    priority: 0
  }
}
```

模块还可以分配到多个不同的组，但最终会根据 priority 优先级决定打包到哪个 chunk, name 用来重命名打包出来的 chunk 名字(默认是组的 key + '~' + 源 chunk 名组成),所以在这样的配置下, node_modules 中的文件会被打包到名为 customName1 的 chunk 中

## 路由懒加载和组件懒加载

当我们打开浏览器，访问网站时，此时默认是刚打开就去加载所有页面，路由懒加载就是只加载你当前点击的那个模块。 按需去加载路由对应的资源，提高首屏加载速度 , 实现方式则是使用异步加载的写法

懒加载有两种方式:
:::tip
1、vue 异步组件实现路由懒加载 `component：resolve=>(['需要加载的路由的地址'，resolve])`

2、es 提出的 import(推荐使用这种方式) `const HelloWorld = （）=>import('需要加载的模块地址')`
:::

### 路由懒加载

除了 import()的异步加载实现路由懒加载外,这里还有一个 webpackChunkName 魔法注释,按照这个格式书写,如果满足 splitchunks 的条件,单独打包出来的 login.vue 的 chunk 名将会变成 login

```js
let router = new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: () => import(/* webpackChunkName: "login" */ `@/views/login.vue`)
    }
  ]
})
```

### 组件懒加载

```js
<template>
  <div class="hello">
    <One-com></One-com>
  </div>
</template>

<script>
export default {
  components:{
    "One-com": ()=>import("./one");
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

```

本文参考:

[vue 路由懒加载及组件懒加载](https://juejin.cn/post/6985725946598785055)

[如何使用 splitChunks 精细控制代码分割](https://juejin.cn/post/6844904103848443912)
