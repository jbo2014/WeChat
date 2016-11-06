import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router"
import VueResource from 'vue-resource'

import './style/weui.css'
// import './style/example.css'
import './style/style.css'

// 开启debug模式
Vue.config.debug = true;

Vue.use(VueRouter);
Vue.use(VueResource);

// 定义组件
import home from './components/home.vue'
const first = { template: '<div><h2>我是第1个页面</h2></div>'}
import second from './components/second.vue'

// 创建一个路由器实例，并配置路由规则
const router = new VueRouter({
	mode: 'history',
	base: __dirname,
	routes: [
		{
			path: '/',
			component: home
		},
		{
			path: '/first',
			component: first
		},
		{
			path: '/second',
			component: second
		}
	]
})

const app = new Vue({
	router: router,
	render: h => h(App),
  	components: { first, second }
}).$mount('#app')

// new Vue({
//   el: '#app',
//   render: h => h(App)
// })
