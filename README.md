<p align="center">
  <a href="http://debug.hefantv.com">
    <img width="251" src="https://i.imgur.com/ZWCTDYJ.png">
  </a>
</p>
<p align="center">
  <a href="https://travis-ci.org/nuxt/nuxt.js"><img src="https://img.shields.io/travis/nuxt/nuxt.js/master.svg" alt="Build Status"></a>
  <a href="https://ci.appveyor.com/project/Atinux/nuxt-js"><img src="https://ci.appveyor.com/api/projects/status/gwab06obc6srx9g4?svg=true" alt="Windows Build Status"></a>
  <a href="https://codecov.io/gh/nuxt/nuxt.js"><img src="https://img.shields.io/codecov/c/github/nuxt/nuxt.js/dev.svg" alt="Coverage Status"></a>
  <a href="https://www.npmjs.com/package/nuxt"><img src="https://img.shields.io/npm/dm/nuxt.svg" alt="Downloads"></a>
  <a href="https://www.npmjs.com/package/nuxt"><img src="https://img.shields.io/npm/v/nuxt.svg" alt="Version"></a>
  <a href="https://www.npmjs.com/package/nuxt"><img src="https://img.shields.io/npm/l/nuxt.svg" alt="License"></a>
  <a href="https://gitter.im/nuxt/nuxt.js"><img src="https://img.shields.io/badge/GITTER-join%20chat-green.svg" alt="Gitter"></a>
 </p>

> 盒饭移动端调试系统


## Description

* hefantv 移动端调试系统项目。
* 项目用于展示其他项目中以Log方法打印出的数据，
* 适用于如移动端项目中无法查看控制台的项目

## Online

debug.hefantv.com

## Structure

assest  --资源文件

component --公用组件库

constant --常量

layout --布局

middleware  --中间件

pages  --页面(nuxt 动态生成路由)

plugins --插件

pm  --server服务管理

server -- server 服务

static  --静态目录

store --vue状态管理

utils  --工具包


## Build

``` bash
# install dependencies
$ npm install # Or yarn install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm start
```

For detailed explanation on how things work, checkout the [Nuxt.js docs](https://github.com/nuxt/nuxt.js).

## Backpack

We use [backpack](https://github.com/palmerhq/backpack) to watch and build the application, so you can use the latest ES6 features (module syntax, async/await, etc.).
