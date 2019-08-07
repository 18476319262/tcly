import Vue from 'vue'
// vue文件自动去node_modules文件夹寻找
import VueRouter from 'vue-router'

import App from './App.vue'

import router from './js/router.js'
// 当前路径 ./

//import axios from 'axios'
//Vue.prototype.$http = axios

// import Mint from 'mint-ui';
import '../node_modules/mint-ui/lib/style.css'
// Vue.use(Mint);

import { Swipe, SwipeItem } from 'mint-ui';
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

import { Button } from 'mint-ui';
Vue.component(Button.name, Button);

import { Navbar, TabItem } from 'mint-ui';
Vue.component(Navbar.name, Navbar);
Vue.component(TabItem.name, TabItem);

import { TabContainer, TabContainerItem } from 'mint-ui';

Vue.component(TabContainer.name, TabContainer);
Vue.component(TabContainerItem.name, TabContainerItem);

import { Cell, Checklist } from 'mint-ui';
Vue.component(Cell.name, Cell);
Vue.component(Checklist.name, Checklist);

import { Search } from 'mint-ui';
Vue.component(Search.name, Search);

import { Header } from 'mint-ui';
Vue.component(Header.name, Header);


// 配置每个实例对象可以使用vue
Vue.use(VueRouter)

new Vue({
	el: '#app',
	router,
	render: h => h(App),
})