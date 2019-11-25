import Vue from 'vue'
import App from './App.vue'
import routes from './router'
import VueRouter from 'vue-router'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './plugins/element.js'
Vue.use(ElementUI);
Vue.use(VueRouter);

const router = new VueRouter({
  routes,
  mode: 'history',
  strict: process.env.NODE_ENV !== 'production',
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      if (from.meta.keepAlive) {
        from.meta.savedPosition = document.body.scrollTop;
      }
      return { x: 0, y: to.meta.savedPosition || 0 }
    }
  }
})

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
