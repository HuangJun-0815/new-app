import Vue from 'vue'
import App from './App'
import request from '@/common/request/request.js';
import cuCustom from './colorui/components/cu-custom.vue'
Vue.component('cu-custom',cuCustom)
// 全局配置
request.setConfig({
	baseUrl:'https://easy-mock.com/mock/5d65e4a705d30d7155d6a7d4/example',
	dataType: 'json',
	responseType: 'text',	
})

request.interceptors.request(config => {
	return config;
})

request.interceptors.response(res => {
	return res;
})
Vue.prototype.$api = request;
Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
