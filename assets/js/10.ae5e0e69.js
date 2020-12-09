(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{359:function(a,s,t){"use strict";t.r(s);var e=t(42),r=Object(e.a)({},(function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"git-多人合作"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#git-多人合作"}},[a._v("#")]),a._v(" git 多人合作")]),a._v(" "),t("p",[a._v("在组织上创建一个仓库存放项目，并提交项目到本仓库，其他成员就可以克隆项目（克隆下来的项目不需要 git init 初始化了）")]),a._v(" "),t("h3",{attrs:{id:"克隆指令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#克隆指令"}},[a._v("#")]),a._v(" 克隆指令")]),a._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[a._v("git clone 仓库地址\n")])])]),t("h3",{attrs:{id:"上传代码"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#上传代码"}},[a._v("#")]),a._v(" 上传代码")]),a._v(" "),t("ol",[t("li",[a._v("查看被修改的文件")])]),a._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[a._v("git status\n")])])]),t("ol",{attrs:{start:"2"}},[t("li",[a._v("选择所有未提交的文件")])]),a._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[a._v("git add "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("\n")])])]),t("ol",{attrs:{start:"3"}},[t("li",[a._v("添加注释")])]),a._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[a._v("git commit "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("m"),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'注释'")]),a._v("\n")])])]),t("ol",{attrs:{start:"4"}},[t("li",[a._v("推送到自己的远程分支")])]),a._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[a._v("git push origin 自己的分支名\n")])])]),t("ol",{attrs:{start:"5"}},[t("li",[a._v("将分支切换到主分支")])]),a._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[a._v("git checkout 主分支名\n")])])]),t("ol",{attrs:{start:"6"}},[t("li",[a._v("主分支合并自己的分支")])]),a._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[a._v("git merge 自己的分支名\n")])])]),t("ol",{attrs:{start:"7"}},[t("li",[a._v("拉取代码")])]),a._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[a._v("git pull\n")])])]),t("h3",{attrs:{id:"如果没有冲突直接执行"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#如果没有冲突直接执行"}},[a._v("#")]),a._v(" *如果没有冲突直接执行")]),a._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[a._v("git push origin 主分支名\n")])])]),t("h3",{attrs:{id:"如果有冲突"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#如果有冲突"}},[a._v("#")]),a._v(" *如果有冲突")]),a._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[a._v("git add "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("\ngit commit "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("m"),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'注释'")]),a._v("\ngit push origin 主分支名\n")])])]),t("ol",{attrs:{start:"8"}},[t("li",[a._v("切换到自己的分支")])]),a._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[a._v("git checkout 自己的分支名\n")])])]),t("h4",{attrs:{id:"当你需要小组其他成员的代码时需要下拉代码"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#当你需要小组其他成员的代码时需要下拉代码"}},[a._v("#")]),a._v(" 当你需要小组其他成员的代码时需要下拉代码")]),a._v(" "),t("h3",{attrs:{id:"下拉代码"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#下拉代码"}},[a._v("#")]),a._v(" 下拉代码")]),a._v(" "),t("ol",[t("li",[a._v("将分支切换到主分支")])]),a._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[a._v("git checkout 主分支名\n")])])]),t("ol",{attrs:{start:"2"}},[t("li",[a._v("拉取代码")])]),a._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[a._v("git pull\n")])])]),t("ol",{attrs:{start:"3"}},[t("li",[a._v("切换到自己的分支")])]),a._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[a._v("git checkout 自己的分支名\n")])])]),t("ol",{attrs:{start:"4"}},[t("li",[a._v("自己的分支合并主分支")])]),a._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[a._v("git merge 主分支名\n")])])]),t("h3",{attrs:{id:"强制退出并保存"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#强制退出并保存"}},[a._v("#")]),a._v(" 强制退出并保存")]),a._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[a._v("输入esc，和"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v("wq\n")])])])])}),[],!1,null,null,null);s.default=r.exports}}]);