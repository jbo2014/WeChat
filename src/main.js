import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router"
import VueResource from 'vue-resource'

import VueValidator from 'vue-validator'
// 图标
import Icon from 'vue-awesome/components/Icon.vue'
// import 'vue-awesome/icons/flag'

import './style/weui.css'
import './style/example.css'
import './style/style.css'


// 开启debug模式
Vue.config.debug = true;

Vue.use(VueRouter)
Vue.use(VueResource)
Vue.use(VueValidator)
Vue.component('icon',Icon)

// 定义组件
//const first = { template: '<div><h2>我是第1个页面</h2></div>'}
// 共通页面
// 首页
import home from './components/home.vue'
// 服务选择列表
import srvList from './components/srvList.vue'


// 工人-抢单列表
import wkOrderList from './components/wkOrderList.vue'
// 工人-订单详页
// import wkOrderView from './components/wkOrderView.vue'
// // 工人-处理中列表
// import wkDoingList from './components/wkDoingList.vue'
// // 工人-处理中详页
// import wkDoingView from './components/wkDoingView.vue'
// // 工人-历史记录列表
// import wkHistoryList from './components/wkHistoryList.vue'
// // 工人-历史记录详页
// import wkHistoryView from './components/wkHistoryView.vue'

// 业主-下单页面
import cmOrder from './components/cmOrder.vue'
// // 业主-处理中列表
// import cmDoingList from './components/cmDoingList.vue'
// // 业主-处理中详页
// import cmDoingView from './components/cmDoingView.vue'
// // 业主-历史记录列表
// import cmHistoryList from './components/cmHistoryList.vue'
// // 业主-历史记录详页
// import cmHistoryView from './components/cmHistoryView.vue'

import test from './components/test.vue'


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
			path: '/srvList',
			component: srvList
		},
		{
			path: '/wkOrderList',
			component: wkOrderList
		},
		{
			path: '/cmOrder',
			component: cmOrder
		},
		{
			path: '/test',
			component: test
		}
	]
})

const app = new Vue({
	router: router,
	render: h => h(App),
  	components: { 
  		'icon': Icon, 
  		wkOrderList,
  		cmOrder,
  		test,
  		srvList
  	}
}).$mount('#app')

// new Vue({
//   el: '#app',
//   render: h => h(App)
// })
