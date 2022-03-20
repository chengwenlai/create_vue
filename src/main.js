import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import Vant from 'vant';
import api from './api';
import plugins from '@/plugins';
// import { constance } from './utils/constance'

// 静态资源
import '@/assets/styles/index.scss';
import 'vant/lib/index.css';
import './appAdaptation'

Vue.use(Vant);
Vue.use(plugins);
// Vue.use(constance);
Vue.config.productionTip = false;
Vue.prototype.$api = api;

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app');
