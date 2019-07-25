# galaco 🌈

## What's this for

提供了构建 react app 的 UI 相关的功能组件，帮助开发者快速构建复杂界面。
It's a toolset based on styled-components ecosystem to build React UI components.

## Install

`npm i --save galaco`

### develop

```
yarn
npm run docz:dev // 运行交互式文档server
npm run build // 编译产出到dist目录，配置详见rollup.config.js
```

### release 

项目采用 lerna 管理多个 package，并且版本是独立管理。

安装 lerna：`npm i -g lerna`

登入 npm 账号（详见 wiki）`npm login`

发布

- `lerna version`选择版本号

- `lerna publish from-package` 发布版本

发布成功打tag并push

- `git tag -a xxx@a.b.c -m 'publish'`

- `git push origin --tags`