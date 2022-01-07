<h1 align="center">rad</h1>
<div align="center">

[![Node.js CI](https://github.com/kaokei/rad/actions/workflows/build.yml/badge.svg)](https://github.com/kaokei/rad/actions/workflows/build.yml) [![Coverage Status](https://coveralls.io/repos/github/kaokei/rad/badge.svg?branch=main)](https://coveralls.io/github/kaokei/rad?branch=main)

</div>

## 待修改的 5 个名字

- 项目名，也就是项目文件夹的名称，这个在我们创建项目时就已经指定了。
- package.json 中的 name，这个大多数时可能就是和项目名一致了，但是如果是带有 scope 的，或者驼峰的，都需要自己修改。
- package.json 中的 browserVariableName，这个大多数情况下不关心也不会有问题，但是如果我们想要编译的代码想要在浏览器中直接使用，最好是指定一个全局变量。
- package.json 中的 homepage，bugs-url，repository-url 这些外部链接。
- README.md 中的 github 地址。

## github 地址

- [github](https://github.com/kaokei/rad)

## 解决了什么问题？

## 整体方案以及使用方式

## 特性

使用 typescript，并且类型定义统一在 types 文件夹中，建议使用 module 来管理类型，而不是 script 来创建全局的类型。
`tsconfig.json`作为编辑器的默认配置文件，方便编辑器识别。实际构建时使用`tsconfig.app.json`文件

使用 esm 模块化规范

使用 npm 作为包管理

使用 git 作为代码版本工具。

编码规范使用 eslint+prettier+editorconfig

git commit message 采用 angular 规范，以及使用 commitlint 校验

使用 yorkie 自动化校验并格式化代码，自动化校验 commit message

使用 jest 作为单元测试，统一放在`tests`文件夹中。

可以在 playground 中进行代码实验，使用 vscode 配置.vscode/launch.json 可以调试 nodejs

使用 rollup 作为打包工具，同时打包出多个版本的 bundle。支持压缩/未压缩、使用 runtime/不使用 runtime、commonjs/esm、浏览器版本总共 10 个版本。

npm run release:first 第一次发布，会自动创建 CHANGELOG.md 文件
npm run release patch 发布新版本

使用 MIT 作为开源协议
