# 讲清楚 this

## 前言

我个人感觉，this 乱是因为 js 语法标准的不断更新以及 js 本身的灵活性，有利有弊。所以 this 的指向等问题还是必须要弄清楚的，不然 bug 都不会改了，还会写出一堆 bug

## 正文

JavaScript 的 `this` 是在**调用阶段**进行绑定的

### 什么是 this

首先对 this 的下个定义：**this 是在执行上下文创建时确定的一个在执行过程中不可更改的变量**

所谓**执行上下文**，就是 JavaScript 引擎在执行一段代码之前将代码内部会用到的一些**变量**、**函数**、**this**提前声明然后保存在变量对象中的过程。这个'代码片段'包括：**全局代码**(script 标签内部的代码)、**函数内部代码**、**eval 内部代码**。而我们所熟知的作用域链也会在保存在这里，以一个类数组的形式存储在对应函数的[[Scopes]]属性中。

因为是在**执行上下文**确定 this，所以就产生了多变性，即：**当函数在不同的调用方式下都可能会导致 this 的值不同。**、

先简单区分以下**严格模式**和**非严格模式**

```js
// 严格模式
var a = 1
function fun() {
  'use strict'
  var a = 2
  return this.a
}
fun() //报错 Cannot read property 'a' of undefined
```

```js
// 非严格模式
var a = 1
function fun() {
  var a = 2
  return this.a
}
fun() //1
```

在看一个关于 obj 的例子：

结论：**当函数独立调用的时候，在严格模式下它的 this 指向 undefined，在非严格模式下，当 this 指向 undefined 的时候，自动指向全局对象(浏览器中就是 window)**

```js
var a = 1000
var obj = {
  a: 1,
  b: this.a + 1
}
function fun() {
  var obj = {
    a: 1,
    c: this.a + 2 //严格模式下这块报错 Cannot read property 'a' of undefined
  }
  return obj.c
}
console.log(fun()) //1002
console.log(obj.b) //1001
```

结论：**当 obj 在全局声明的时候，obj 内部属性中的 this 指向全局对象，当 obj 在一个函数中声明的时候，严格模式下 this 会指向 undefined，非严格模式自动转为指向全局对象。**

### 直接调用

```js
var a = 1
var obj = {
  a: 2,
  b: function () {
    function fun() {
      return this.a
    }
    console.log(fun())
  }
}
obj.b() //1
```

这里乍一看，看似是 obj 调用方法，但实际上最终打印的是 fun(),所以是独立调用函数
结论：**当函数独立调用的时候，在严格模式下它的 this 指向 undefined，在非严格模式下，当 this 指向 undefined 的时候，自动指向全局对象(浏览器中就是 window)。**

### 作为对象的方法

```js
var a = 1
var obj = {
  a: 2,
  b: function () {
    return this.a
  }
}
console.log(obj.b()) //2
```

这里最终调用的地方是 obj 所以 this 指向 obj 打印的是 obj 下面的 a

```js
var a = 1
var obj = {
  a: 2,
  b: function () {
    return this.a
  }
}
var t = obj.b
console.log(t()) //1
```

这里用 t 存储了 obj.b 这个函数（存的 b 函数的指针，所以之后就和 obj 没有关系了）但这里执行时时单独调用了 b 函数 所以 this 指向了 window

## 待续......
