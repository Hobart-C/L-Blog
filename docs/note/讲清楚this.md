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

注意看下面这个例子：

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

这里用 t 存储了 obj.b 这个函数（存的 b 函数的指针，所以之后就和 obj 没有关系了）所以这里执行时就是单独调用了 b 函数 所以 this 指向了 window

结论：**所以 this 就是方法被调用时的`直接调用者`**

### 使用 apply,call

结论：this 指向 apply 和 call 指定的对象

顺便解释一下 为什么直接调用函数 严格模式下指向 undefined 非严格模式下指向 window

```js
var a = 1
function fun() {
  return this.a
}
fun()
// 相当于 👇
//严格模式
fun.call(undefined)
//非严格模式
fun.call(window)
```

**但是！但是！ call 不能万能的这么思考 箭头函数就不是这样的！！**

**箭头函数最后说**

### 作为构造函数

```js
function Fun() {
  this.name = 'Damonre'
  this.age = 21
  this.sex = 'man'
  this.run = function () {
    return this.name + '正在跑步'
  }
}
Fun.prototype = {
  contructor: Fun,
  say: function () {
    return this.name + '正在说话'
  }
}
var f = new Fun()
f.run() //Damonare正在跑步
f.say() //Damonare正在说话
```

如上，**如果函数作为构造函数用，那么其中的 this 就代表它即将 new 出来的对象**

这都归于 new 所作的事情 new 所作的事情大致如下：

```js
function Fun() {
  //new做的事情
  var obj = {};
  obj.__proto__ = Fun.prototype;
  obj.name = 'Damonare';
  ...//一系列赋值以及更多的事
  return obj
}
```

所以 new 做了下面这些事情，其实可以理解为语法糖，还是没有逃脱上面所讲的那些规则

- 创建一个临时对象
- 给临时对象绑定原型
- 给临时对象对应属性赋值
- 将临时对象 return

### 箭头函数

刚刚说过，箭头函数不能通过 call 和 apply 改变 this 的指向,如下

```js
var a = 1
var obj = {
  a: 2
}
var fun = () => console.log(this.a)
fun() //1
fun.call(obj) //1
```

那么箭头函数的 this 是怎么确定的呢？

**箭头函数会捕获其所在上下文的 this 值，作为自己的 this 值**，也就是说箭头函数的 this 在词法层面就完成了绑定。apply，call 方法只是传入参数，却改不了 this。 看下例：

```js
var a = 1
var obj = {
  a: 2
}
function fun() {
  var a = 3
  let f = () => console.log(this.a)
  f()
}
fun() //1
fun.call(obj) //2
```

此处，f 在声明时的 this 就是它的上下文 this，它的上下文时 fun，而 fun 的上下文 this 是 window，所以 f 的 this 也是 window。

但是当执行`fun.call(obj)`之后，fun 上下文的 this 就指向了 obj，所以 f 的 this 变成了 obj

再看两个比较搞的例子：

```js
function Fun() {
  this.name = 'Damonare'
}
Fun.prototype.say = () => {
  console.log(this)
}
var f = new Fun()
f.say() //window
```

此处虽然 say 的调用者是 f，但是 say 是箭头函数，它的 this 在词法层面时的上下文是 Fun 构造函数的原型的上下文，循着原型链往上，就是 Object 函数的上下文，this 就是全局对象 window

再看下一个：

```js
function Fun() {
  this.name = 'Damonare'
  this.say = () => {
    console.log(this)
  }
}
var f = new Fun()
f.say() //Fun的实例对象 f
```

此时 this 在词法层面时，它的 this 就是 this.say 的上下文，也就是 Fun 的上下文，而 Fun 作为构造函数，this 指向即将 new 出来的对象，所以此处的 this 指向实例对象 f

参考：
[JavaScript 中的 this](https://juejin.cn/post/6844903488304971789#heading-0)
