#!/usr/bin/env bash
export PATH=/home/scmtools/buildkit/node/node_8.10.0/bin:$PATH
# 用于build rubik-ui文档
# 配置内网 代理github
# 配置内网 registry
npm set registry http://pnpm.baidu.com
npm config list
# install yarn
npm install yarn
# 配置内网 registry
npx yarn config set registry 'http://pnpm.baidu.com'
# yarn install
npx yarn

cd packages/rubik-ui
npx yarn

# 运行scripts:build 命令
npm run docz:build
# 进入编译产出的目录 dist
mkdir build
cp -r .docz/dist/* build
cd build
# 上一层创建一个output目录待用
mkdir -p ../../../output
# 打包 dist 内所有资源并创建为 output.tar.gz 然后放入 ../output 目录
tar zcf ../../../output/output.tar.gz *