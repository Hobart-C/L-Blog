# package.json 的小知识

**`package.json`** 想必是非常熟悉的东西了,本文简单记录一下其中的 `dependencies` 和 `devDependencies` 以及 `peerDependencies` 的区别和作用，还有 `package.json` 和 `package-lock.json` 的区别以及作用。

## 知识支持

### NPM 安装

1. **执行 `npm i module_name`**

   - 将 `module_name` 安装到 `node_modules` 目录下
   - `npm5` 以前不会改变 `package.json` ， `npm5` 之后会自动写入 `dependencies` 中

要关闭这个功能，可以使用

```
 npm config set save false
```

2. **执行 `npm i module_name -S`**

   - 将 `module_name` 安装到 `node_modules` 目录下
   - 同时写入 `package.json` 的 `dependencies` 中
   - 后续 `npm i` 或 `npm i --production` 将自动安装 `module_name` 到 `node_modules` 目录下

3. **执行 `npm i module_name -D`**

   - 将 `module_name` 安装到 `node_modules` 目录下
   - 同时写入 `package.json` 的 `devDependencies` 中
   - 后续 `npm i` 将自动安装 `module_name` 到 `node_modules` 目录下

4. **执行 `npm i module_name -g`**

   - 安装模块到全局，不会在项目 `node_modules` 目录中保存模块包
   - 不会将模块依赖写入 `package.json` 的 `devDependencies` 或 `dependencies`
   - 运行 npm i 初始化项目时不会下载 module_name。

### dependencies 和 devDependencies 的版本号问题

先看下面这个 package.json 中的一截

```json
{
  "devDependencies": {
    "vuepress": "^1.8.2"
  }
}
```

vuepress 的版本号为`1.8.2`，但前面加个了个`^`,其实还有三个描述分别为`~`,`不加符号`和`latest`,在安装指定依赖时，默认为 `^`
:::tip 区别
`^1.8.2` 表示安装 1.x.x 的最新版本，但不低于 1.8.2 ，不安装版本 2.0.0 及以上

`~1.8.2` 表示安装 1.8.x 的最新版本，但不低于 1.8.2 ，不安装版本 1.9.0 及以上

`1.8.2` (不加符号) 表示指定安装 1.8.2 版本

`latest` 安装最新版本

需要注意的是，如果大版本号为 0 (及 0.x.x)，则 `^` 与 `~` 的行为相同， 与 `~` 一致，这是因为此时处于开发阶段，即使是次要版本号变动，也可能带来程序的不兼容，所以此时 `^` 与 `~` 时都是安装`0.n.x 的最新版`( n 是明确的、指定的 )
:::

## package.json 和 package-lock.json

### **`package.json`**

`package.json` 这个文件定义了当前项目所需要的各种模块，以及项目的配置信息（比如名称、版本、许可证等），虽然里面东西特别的多，我们平时用到最多的、最注意的应该就是 `dependencies` 和 `devDependencies`，基于这两个东西，可以来区分一下` package.json` 和 `package-lock.json` 。

刚刚在知识支持中说到了 `dependencies` 和 `devDenpendencies` 中不同符号的区别，因为这些符号的存在，团队在协作开发时，可能会遇到安装依赖时小版本号不同的问题，虽然有时候无伤大雅，但是还是会有遇到一些奇怪的问题，这时就得说说`package-lock.json`了。

### **`package-lock.json`**

简单地说，他就是用来锁版本的。在 `npm install` 的时候它会记录各个模块的具体版本信息和下载路径，这样别人拉项目`npm install`时候， 就会依据 `packgae-lock.json` 去安装与你本地一致的版本，而不是你本地版本所在的大版本或小版本的最新版本，保证大家依赖一致并且安装模块速度也能提高。

**需要注意的是**

- `npm i` 时，如果 `npm` 版本是 **5+**，会自动生成 `package-lock.json`
- 如果项目中有 `package-lock.json` ，则 `npm i` 会默认依据 `package-lock.json` 进行安装，而不是 `package.json`
- `cnpm` 不支持（忽略）依据 `package-lock.json` 文件安装模块，默认依赖 `package.json` 进行安装

## devDependencies 和 dependencies 以及 peerDependencies

### devDependencies 和 dependencies 的区别

devDependencies：本地开发时要用的依赖 比如 eslint、node-sass、babel 等

dependencies：线上项目运行时需要用的依赖 比如 vue、core-js 等

打包时，我们会执行下面的两个命令

```
   npm install
   npm run build
```

个人不喜欢使用 `npm install --production`，因为有时候可能会因为安装时的失误，把一些线上需要使用的东西安装到了 `devDependencies` 中，这时候如果使用这个命令会导致构建失败，总之觉得没必要省安装依赖的一点时间。

**需要注意以下：**
:::warning 注意

webpack 在打包时，会先用 **loader** 和 **polify** 去解析和转换代码到浏览器可以识别的版本，然后再循环递归 js 文件，打包使用到的依赖，而不是全量打包 node_modules，**但是 dependencies 中写的依赖一定会被打包进去**

<!-- 以上 **devDependencies** 和 **dependencies** 的区别是最好这样分配处理，不是语法要求或者说是什么特别的要求。 -->

**在业务项目中**，比如你把所有依赖都放到 **dependencies** 中，项目除了打包后体积会增大以外，不会有什么问题，如果你把东西都放到 **devDependencies** 中，webpack 会根据依赖关系找出需要的依赖，打包起来，所以也不会有什么问题

**但是在 lib 项目中**，在使用这个 lib 的业务项目中，业务项目的 `npm i` 命令只会安装业务项目下面 lib 的 `dependencies` 下的依赖，所以在 lib 项目中，一定要严格区分 `devDependencies` 和 `dependencies`，否则会因为缺少相关依赖而报错
:::

### peerDependencies

如果一个项目 `project` 和他的插件 `pluginA` 、 `pluginB` 都用到了一个依赖 `packageA`，而这个依赖 `packageA` 分别都写在 `dependencies` 中，那么 `project` 这个项目中会安装三个 `packageA`，具体依赖图如下：

```
├── project
│  ├── node_modules
│  │   ├── packageA
│  │   ├── pluginA
│  │   │   └── node_modules
│  │   │       └── packageA
│  │   ├── pluginB
│  │   │   └── node_modules
│  │   │       └── packageA

```

为了避免这种重复下载依赖的情况，我们在开发插件时，可以使用 `peerDependencies`

**`peerDependencies`有以下几个特点：**

- `peerDependencies` 中声明的依赖则不会自动安装，而是会使用主项目的同等依赖，以此使项目依赖扁平化，如下图一般；
- `peerDependencies` 中声明的依赖如果和主项目依赖的版本、各插件依赖的版本之间不相互兼容时，会报错让用户自行修复；

```
├── project
│  ├── node_modules
│  │   ├── packageA
│  │   ├── pluginA
│  │   ├── pluginB

```
