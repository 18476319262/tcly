import VueRouter from 'vue-router'

import index from '../components/index/index.vue'
import train from '../components/index/train.vue'
import plane from '../components/index/plane.vue'
import hotel from '../components/index/hotel.vue'
import scenic from '../components/index/scenic.vue'
import login from '../components/index/login.vue'
import register from '../components/index/register.vue'
import carousel from '../components/index/carousel.vue'
import service from '../components/index/service.vue'
import play from '../components/index/play.vue'
export default new VueRouter({
	routes:[
		{
			path:'/',redirect:'/index'
		},
		{
			path:'/index',component:index
		},
		{
			path:'/train',component:train
		},
		{
			path:'/plane',component:plane
		},
		{
			path:'/hotel',component:hotel
		},
		{
			path:'/scenic',component:scenic
		},
		{
			path:'/login',component:login
		},
		{
			path:'/register',component:register
		},
		{
			path:'/carousel',component:carousel
		},
		{
			path:'/service',component:service
		},
		{
			path:'/play',component:play
		}
	]
})