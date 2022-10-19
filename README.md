# vue-music-next

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### appearence 
  新增了换肤 
  ![image](./preview//%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202022-10-19%20194325.png)
  ![image](./preview/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202022-10-19%20194602.png)
  ![image](./preview/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202022-10-19%20194704.png)


### project features
- [x]  使用自定义指令开发 loading 组件和 no-result 组件
- [x]  实现路由过渡效果
- [x]  封装了滚动歌词的组件 lyricBox，会根据当前播放进度，将对应歌词滚动到容器中间
- [x]  封装了滚动条组件 process，支持拖动和点击修改进度
- [x]  使用 localstorage 和 vuex 实现数据持久：收藏列表、历史列表、播放列表
- [x]  封面和歌词的视图层切换功能
- [x]  使用代理转发请求到第三方服务
- [x]  项目部署地址 http://150.158.196.194/#/recommend
- [x]  在此基础上进行整合出音乐播放插件（2022.08-至今），旨在使每一个 vue3 项目以拥有音乐播放功能，用 webpack 打包成库即插即用。 musicplugin - npm (npmjs.com)
