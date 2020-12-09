(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{369:function(t,s,a){"use strict";a.r(s);var n=a(42),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"vuepress-搭建个人博客"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vuepress-搭建个人博客"}},[t._v("#")]),t._v(" vuepress 搭建个人博客")]),t._v(" "),a("ol",[a("li",[t._v("全局安装 vuepress")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("   npm install "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("g vuepress\n")])])]),a("ol",{attrs:{start:"2"}},[a("li",[t._v("建立一个文件夹")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("   mkdir myblog"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v("cd myblog\n")])])]),a("ol",{attrs:{start:"3"}},[a("li",[t._v("初始化项目")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("\bnpm init "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("y\n")])])]),a("ol",{attrs:{start:"4"}},[a("li",[t._v("创建文件夹和文件 参考下面的目录")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("   .\n   ├─ docs 文件夹\n   │ ├─ README.md\n   │ └─ .vuepress 文件夹\n   │ └─ config.js\n   └─ package.json\n")])])]),a("ol",{attrs:{start:"5"}},[a("li",[t._v("配置 package.json 的命令")])]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"dev"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"vuepress dev docs"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"build"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"vuepress build docs"')]),t._v("\n")])])]),a("ol",{attrs:{start:"6"}},[a("li",[t._v("配置默认主题 docs/README.md")])]),t._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("---")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("home")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("heroImage")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" /hero.png\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("actionText")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 快速上手 →\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("actionLink")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" /zh/guide/\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("features")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("title")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 简洁至上\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("details")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 以 Markdown 为中心的项目结构，以最少的配置帮助你专注于写作。\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("title")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Vue驱动\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("details")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 享受 Vue + webpack 的开发体验，在 Markdown 中使用 Vue 组件，同时可以使用 Vue 来开发自定义主题。\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("title")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 高性能\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("details")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" VuePress 为每个页面预渲染生成静态的 HTML，同时在页面被加载的时候，将作为 SPA 运行。\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("footer")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" MIT Licensed "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),t._v(" Copyright © 2018"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("present Evan You\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("---")]),t._v("\n\n")])])]),a("ol",{attrs:{start:"6"}},[a("li",[t._v("建立静态资源目录")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("    cd "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("vuepress\n    mkdir "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v("\n")])])]),a("ol",{attrs:{start:"7"}},[a("li",[t._v("在 docs/.vuepress/config.js")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  title"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Hello VuePress"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  description"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Just playing around"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("ol",{attrs:{start:"8"}},[a("li",[t._v("配置导航 .vuepress/config.js,\n可以下拉的导航使用的 items")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("themeConfig"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  nav"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" text"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"首页"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" link"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" text"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"web"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" link"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/web/"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      text"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"js"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      items"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" text"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"js基础"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" link"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token regex"}},[a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[t._v("js")]),a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" text"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"js高级"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" link"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token regex"}},[a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[t._v("jsg")]),a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("ol",{attrs:{start:"9"}},[a("li",[t._v("让导航可以使用\ndocs/web/README.md")]),t._v(" "),a("li",[t._v("一级的侧边栏配置 对应的路径就是 docs 下面的文件夹")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("sidebar"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/web/"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/js/"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/vue/"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("ol",{attrs:{start:"11"}},[a("li",[t._v("侧边栏的分组")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n     title"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'vue学习'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n     collapsable"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n     children"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/vuex/'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/props/'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("ol",{attrs:{start:"12"}},[a("li",[t._v("发布到 github\n建立文件 deploy.sh")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("#"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("usr"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("bin"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("env sh\n\n# 确保脚本抛出遇到的错误\nset "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("e\n\n# 生成静态文件\nnpm run build\n\n# 进入生成的文件夹\ncd docs"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("vuepress"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("dist\n\n# 如果是发布到自定义域名\n# echo "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'www.example.com'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("CNAME")]),t._v("\n\ngit init\ngit add "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("A")]),t._v("\ngit commit "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("m "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'deploy'")]),t._v("\n\n# 如果发布到 https"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("USERNAME")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("github"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("io\ngit push "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("f git@github"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("com"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("fantaofan")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("修改为你的github用户名"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("fantaofan")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("修改为你的github用户名"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("github"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("io"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("git master\n\n# 如果发布到 https"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("USERNAME")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("github"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("io"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("REPO")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n# git push "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("f git@github"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("com"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("USERNAME")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("REPO")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("git master"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("gh"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("pages\n\ncd "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("\n")])])]),a("ol",{attrs:{start:"13"}},[a("li",[t._v("git 仓库起名")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v(" 创建一个新仓库\n 用户名.github.io\n")])])]),a("ol",{attrs:{start:"14"}},[a("li",[t._v("本地运行和发布时候的命令")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("   "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 本地运行")]),t._v("\n   npm run dev\n   "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 发布")]),t._v("\n   npm run deploy\n")])])]),a("p",[t._v("https://fantaofan.github.io")]),t._v(" "),a("h2",{attrs:{id:"主要配置文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#主要配置文件"}},[t._v("#")]),t._v(" 主要配置文件")]),t._v(" "),a("p",[t._v("docs/.vuepress/config.js")]),t._v(" "),a("h2",{attrs:{id:"图片"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#图片"}},[t._v("#")]),t._v(" 图片")]),t._v(" "),a("p",[t._v("doc/.vuepress/public")]),t._v(" "),a("h2",{attrs:{id:"发布-npm-run-deploy"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#发布-npm-run-deploy"}},[t._v("#")]),t._v(" 发布 npm run deploy")]),t._v(" "),a("p",[t._v("访问：https://用户名.github.io")])])}),[],!1,null,null,null);s.default=e.exports}}]);