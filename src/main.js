import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue'
import Bmob from "hydrogen-js-sdk";
Vue.config.productionTip = false
// 初始化 SDK版本 2.0.0 以下保留之前的初始化方法
Bmob.initialize("8c7d0a8b94c55a34", "123456");

// 挂载到全局使用
Vue.prototype.Bmob = Bmob
Vue.use(ElementUI);



new Vue({
  render: h => h(App),
}).$mount('#app')
