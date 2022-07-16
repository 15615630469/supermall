import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import FastClick from 'fastclick'
import VueLazyLoad from 'vue-lazyload'

import toast from 'components/common/toast'

createApp(App).config.productionTip = false

// 添加事件总线对象
createApp(App).prototype.$bus = new Vue()

// 解决移动端300ms延迟
FastClick.attach(document.body)

// 图片懒加载
createApp(App).use(VueLazyLoad, {
  loading: require('./assets/img/common/placeholder.png')
})

createApp(App).use(router).use(store).use(toast).mount('#app')
