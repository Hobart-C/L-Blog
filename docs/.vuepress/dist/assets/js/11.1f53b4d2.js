(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{406:function(e,v,_){"use strict";_.r(v);var n=_(54),s=Object(n.a)({},(function(){var e=this,v=e.$createElement,_=e._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[_("h1",{attrs:{id:"package-json-的小知识"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#package-json-的小知识"}},[e._v("#")]),e._v(" package.json 的小知识")]),e._v(" "),_("p",[_("strong",[_("code",[e._v("package.json")])]),e._v(" 想必是非常熟悉的东西了,本文简单记录一下其中的 "),_("code",[e._v("dependencies")]),e._v(" 和 "),_("code",[e._v("devDependencies")]),e._v(" 以及 "),_("code",[e._v("peerDependencies")]),e._v(" 的区别和作用，还有 "),_("code",[e._v("package.json")]),e._v(" 和 "),_("code",[e._v("package-lock.json")]),e._v(" 的区别以及作用。")]),e._v(" "),_("h2",{attrs:{id:"知识支持"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#知识支持"}},[e._v("#")]),e._v(" 知识支持")]),e._v(" "),_("h3",{attrs:{id:"npm-安装"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#npm-安装"}},[e._v("#")]),e._v(" NPM 安装")]),e._v(" "),_("ol",[_("li",[_("p",[_("strong",[e._v("执行 "),_("code",[e._v("npm i module_name")])])]),e._v(" "),_("ul",[_("li",[e._v("将 "),_("code",[e._v("module_name")]),e._v(" 安装到 "),_("code",[e._v("node_modules")]),e._v(" 目录下")]),e._v(" "),_("li",[_("code",[e._v("npm5")]),e._v(" 以前不会改变 "),_("code",[e._v("package.json")]),e._v(" ， "),_("code",[e._v("npm5")]),e._v(" 之后会自动写入 "),_("code",[e._v("dependencies")]),e._v(" 中")])])])]),e._v(" "),_("p",[e._v("要关闭这个功能，可以使用")]),e._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[e._v(" npm config set save false\n")])])]),_("ol",{attrs:{start:"2"}},[_("li",[_("p",[_("strong",[e._v("执行 "),_("code",[e._v("npm i module_name -S")])])]),e._v(" "),_("ul",[_("li",[e._v("将 "),_("code",[e._v("module_name")]),e._v(" 安装到 "),_("code",[e._v("node_modules")]),e._v(" 目录下")]),e._v(" "),_("li",[e._v("同时写入 "),_("code",[e._v("package.json")]),e._v(" 的 "),_("code",[e._v("dependencies")]),e._v(" 中")]),e._v(" "),_("li",[e._v("后续 "),_("code",[e._v("npm i")]),e._v(" 或 "),_("code",[e._v("npm i --production")]),e._v(" 将自动安装 "),_("code",[e._v("module_name")]),e._v(" 到 "),_("code",[e._v("node_modules")]),e._v(" 目录下")])])]),e._v(" "),_("li",[_("p",[_("strong",[e._v("执行 "),_("code",[e._v("npm i module_name -D")])])]),e._v(" "),_("ul",[_("li",[e._v("将 "),_("code",[e._v("module_name")]),e._v(" 安装到 "),_("code",[e._v("node_modules")]),e._v(" 目录下")]),e._v(" "),_("li",[e._v("同时写入 "),_("code",[e._v("package.json")]),e._v(" 的 "),_("code",[e._v("devDependencies")]),e._v(" 中")]),e._v(" "),_("li",[e._v("后续 "),_("code",[e._v("npm i")]),e._v(" 将自动安装 "),_("code",[e._v("module_name")]),e._v(" 到 "),_("code",[e._v("node_modules")]),e._v(" 目录下")])])]),e._v(" "),_("li",[_("p",[_("strong",[e._v("执行 "),_("code",[e._v("npm i module_name -g")])])]),e._v(" "),_("ul",[_("li",[e._v("安装模块到全局，不会在项目 "),_("code",[e._v("node_modules")]),e._v(" 目录中保存模块包")]),e._v(" "),_("li",[e._v("不会将模块依赖写入 "),_("code",[e._v("package.json")]),e._v(" 的 "),_("code",[e._v("devDependencies")]),e._v(" 或 "),_("code",[e._v("dependencies")])]),e._v(" "),_("li",[e._v("运行 npm i 初始化项目时不会下载 module_name。")])])])]),e._v(" "),_("h3",{attrs:{id:"dependencies-和-devdependencies-的版本号问题"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#dependencies-和-devdependencies-的版本号问题"}},[e._v("#")]),e._v(" dependencies 和 devDependencies 的版本号问题")]),e._v(" "),_("p",[e._v("先看下面这个 package.json 中的一截")]),e._v(" "),_("div",{staticClass:"language-json extra-class"},[_("pre",{pre:!0,attrs:{class:"language-json"}},[_("code",[_("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),_("span",{pre:!0,attrs:{class:"token property"}},[e._v('"devDependencies"')]),_("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),_("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    "),_("span",{pre:!0,attrs:{class:"token property"}},[e._v('"vuepress"')]),_("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),_("span",{pre:!0,attrs:{class:"token string"}},[e._v('"^1.8.2"')]),e._v("\n  "),_("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),_("p",[e._v("vuepress 的版本号为"),_("code",[e._v("1.8.2")]),e._v("，但前面加个了个"),_("code",[e._v("^")]),e._v(",其实还有三个描述分别为"),_("code",[e._v("~")]),e._v(","),_("code",[e._v("不加符号")]),e._v("和"),_("code",[e._v("latest")]),e._v(",在安装指定依赖时，默认为 "),_("code",[e._v("^")])]),e._v(" "),_("div",{staticClass:"custom-block tip"},[_("p",{staticClass:"custom-block-title"},[e._v("区别")]),e._v(" "),_("p",[_("code",[e._v("^1.8.2")]),e._v(" 表示安装 1.x.x 的最新版本，但不低于 1.8.2 ，不安装版本 2.0.0 及以上")]),e._v(" "),_("p",[_("code",[e._v("~1.8.2")]),e._v(" 表示安装 1.8.x 的最新版本，但不低于 1.8.2 ，不安装版本 1.9.0 及以上")]),e._v(" "),_("p",[_("code",[e._v("1.8.2")]),e._v(" (不加符号) 表示指定安装 1.8.2 版本")]),e._v(" "),_("p",[_("code",[e._v("latest")]),e._v(" 安装最新版本")]),e._v(" "),_("p",[e._v("需要注意的是，如果大版本号为 0 (及 0.x.x)，则 "),_("code",[e._v("^")]),e._v(" 与 "),_("code",[e._v("~")]),e._v(" 的行为相同， 与 "),_("code",[e._v("~")]),e._v(" 一致，这是因为此时处于开发阶段，即使是次要版本号变动，也可能带来程序的不兼容，所以此时 "),_("code",[e._v("^")]),e._v(" 与 "),_("code",[e._v("~")]),e._v(" 时都是安装"),_("code",[e._v("0.n.x 的最新版")]),e._v("( n 是明确的、指定的 )")])]),e._v(" "),_("h2",{attrs:{id:"package-json-和-package-lock-json"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#package-json-和-package-lock-json"}},[e._v("#")]),e._v(" package.json 和 package-lock.json")]),e._v(" "),_("h3",{attrs:{id:"package-json"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#package-json"}},[e._v("#")]),e._v(" "),_("strong",[_("code",[e._v("package.json")])])]),e._v(" "),_("p",[_("code",[e._v("package.json")]),e._v(" 这个文件定义了当前项目所需要的各种模块，以及项目的配置信息（比如名称、版本、许可证等），虽然里面东西特别的多，我们平时用到最多的、最注意的应该就是 "),_("code",[e._v("dependencies")]),e._v(" 和 "),_("code",[e._v("devDependencies")]),e._v("，基于这两个东西，可以来区分一下"),_("code",[e._v("package.json")]),e._v(" 和 "),_("code",[e._v("package-lock.json")]),e._v(" 。")]),e._v(" "),_("p",[e._v("刚刚在知识支持中说到了 "),_("code",[e._v("dependencies")]),e._v(" 和 "),_("code",[e._v("devDenpendencies")]),e._v(" 中不同符号的区别，因为这些符号的存在，团队在协作开发时，可能会遇到安装依赖时小版本号不同的问题，虽然有时候无伤大雅，但是还是会有遇到一些奇怪的问题，这时就得说说"),_("code",[e._v("package-lock.json")]),e._v("了。")]),e._v(" "),_("h3",{attrs:{id:"package-lock-json"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#package-lock-json"}},[e._v("#")]),e._v(" "),_("strong",[_("code",[e._v("package-lock.json")])])]),e._v(" "),_("p",[e._v("简单地说，他就是用来锁版本的。在 "),_("code",[e._v("npm install")]),e._v(" 的时候它会记录各个模块的具体版本信息和下载路径，这样别人拉项目"),_("code",[e._v("npm install")]),e._v("时候， 就会依据 "),_("code",[e._v("packgae-lock.json")]),e._v(" 去安装与你本地一致的版本，而不是你本地版本所在的大版本或小版本的最新版本，保证大家依赖一致并且安装模块速度也能提高。")]),e._v(" "),_("p",[_("strong",[e._v("需要注意的是")])]),e._v(" "),_("ul",[_("li",[_("code",[e._v("npm i")]),e._v(" 时，如果 "),_("code",[e._v("npm")]),e._v(" 版本是 "),_("strong",[e._v("5+")]),e._v("，会自动生成 "),_("code",[e._v("package-lock.json")])]),e._v(" "),_("li",[e._v("如果项目中有 "),_("code",[e._v("package-lock.json")]),e._v(" ，则 "),_("code",[e._v("npm i")]),e._v(" 会默认依据 "),_("code",[e._v("package-lock.json")]),e._v(" 进行安装，而不是 "),_("code",[e._v("package.json")])]),e._v(" "),_("li",[_("code",[e._v("cnpm")]),e._v(" 不支持（忽略）依据 "),_("code",[e._v("package-lock.json")]),e._v(" 文件安装模块，默认依赖 "),_("code",[e._v("package.json")]),e._v(" 进行安装")])]),e._v(" "),_("h2",{attrs:{id:"devdependencies-和-dependencies-以及-peerdependencies"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#devdependencies-和-dependencies-以及-peerdependencies"}},[e._v("#")]),e._v(" devDependencies 和 dependencies 以及 peerDependencies")]),e._v(" "),_("h3",{attrs:{id:"devdependencies-和-dependencies-的区别"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#devdependencies-和-dependencies-的区别"}},[e._v("#")]),e._v(" devDependencies 和 dependencies 的区别")]),e._v(" "),_("p",[e._v("devDependencies：本地开发时要用的依赖 比如 eslint、node-sass、babel 等")]),e._v(" "),_("p",[e._v("dependencies：线上项目运行时需要用的依赖 比如 vue、core-js 等")]),e._v(" "),_("p",[e._v("打包时，我们会执行下面的两个命令")]),e._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[e._v("   npm install\n   npm run build\n")])])]),_("p",[e._v("个人不喜欢使用 "),_("code",[e._v("npm install --production")]),e._v("，因为有时候可能会因为安装时的失误，把一些线上需要使用的东西安装到了 "),_("code",[e._v("devDependencies")]),e._v(" 中，这时候如果使用这个命令会导致构建失败，总之觉得没必要省安装依赖的一点时间。")]),e._v(" "),_("p",[_("strong",[e._v("需要注意以下：")])]),e._v(" "),_("div",{staticClass:"custom-block warning"},[_("p",{staticClass:"custom-block-title"},[e._v("注意")]),e._v(" "),_("p",[e._v("webpack 在打包时，会先用 "),_("strong",[e._v("loader")]),e._v(" 和 "),_("strong",[e._v("polify")]),e._v(" 去解析和转换代码到浏览器可以识别的版本，然后再循环递归 js 文件，打包使用到的依赖，而不是全量打包 node_modules，"),_("strong",[e._v("但是 dependencies 中写的依赖一定会被打包进去")])]),e._v(" "),_("p",[_("strong",[e._v("在业务项目中")]),e._v("，比如你把所有依赖都放到 "),_("strong",[e._v("dependencies")]),e._v(" 中，项目除了打包后体积会增大以外，不会有什么问题，如果你把东西都放到 "),_("strong",[e._v("devDependencies")]),e._v(" 中，webpack 会根据依赖关系找出需要的依赖，打包起来，所以也不会有什么问题")]),e._v(" "),_("p",[_("strong",[e._v("但是在 lib 项目中")]),e._v("，在使用这个 lib 的业务项目中，业务项目的 "),_("code",[e._v("npm i")]),e._v(" 命令只会安装业务项目下面 lib 的 "),_("code",[e._v("dependencies")]),e._v(" 下的依赖，所以在 lib 项目中，一定要严格区分 "),_("code",[e._v("devDependencies")]),e._v(" 和 "),_("code",[e._v("dependencies")]),e._v("，否则会因为缺少相关依赖而报错")])]),e._v(" "),_("h3",{attrs:{id:"peerdependencies"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#peerdependencies"}},[e._v("#")]),e._v(" peerDependencies")]),e._v(" "),_("p",[e._v("如果一个项目 "),_("code",[e._v("project")]),e._v(" 和他的插件 "),_("code",[e._v("pluginA")]),e._v(" 、 "),_("code",[e._v("pluginB")]),e._v(" 都用到了一个依赖 "),_("code",[e._v("packageA")]),e._v("，而这个依赖 "),_("code",[e._v("packageA")]),e._v(" 分别都写在 "),_("code",[e._v("dependencies")]),e._v(" 中，那么 "),_("code",[e._v("project")]),e._v(" 这个项目中会安装三个 "),_("code",[e._v("packageA")]),e._v("，具体依赖图如下：")]),e._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[e._v("├── project\n│  ├── node_modules\n│  │   ├── packageA\n│  │   ├── pluginA\n│  │   │   └── node_modules\n│  │   │       └── packageA\n│  │   ├── pluginB\n│  │   │   └── node_modules\n│  │   │       └── packageA\n\n")])])]),_("p",[e._v("为了避免这种重复下载依赖的情况，我们在开发插件时，可以使用 "),_("code",[e._v("peerDependencies")])]),e._v(" "),_("p",[_("strong",[_("code",[e._v("peerDependencies")]),e._v("有以下几个特点：")])]),e._v(" "),_("ul",[_("li",[_("code",[e._v("peerDependencies")]),e._v(" 中声明的依赖则不会自动安装，而是会使用主项目的同等依赖，以此使项目依赖扁平化，如下图一般；")]),e._v(" "),_("li",[_("code",[e._v("peerDependencies")]),e._v(" 中声明的依赖如果和主项目依赖的版本、各插件依赖的版本之间不相互兼容时，会报错让用户自行修复；")])]),e._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[e._v("├── project\n│  ├── node_modules\n│  │   ├── packageA\n│  │   ├── pluginA\n│  │   ├── pluginB\n\n")])])])])}),[],!1,null,null,null);v.default=s.exports}}]);