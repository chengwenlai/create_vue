import Vue from 'vue';
import VueRouter from 'vue-router';
import Layout from '@/layout'
import store from '@/store'
import { getToken } from '@/utils/auth' // get token

Vue.use(VueRouter);

const routes = [
	{
		path: '/login',
		name: 'login',
		component: () => import('@/views/login'),
		meta: {
			title: '登录'
		}
	},
	{
		path: '/',
		name: 'Layout',
		redirect: '/Home',
		component: Layout,
		children: [
			{
				path: '/Home', // 工作列表
				name: 'Home',
				component: () => import('@/views/Home'),
				meta: {
					title: '主页'
				}
			},
		]
	}
];

const router = new VueRouter({
	// mode: 'history',
	// scrollBehavior: () => ({ y: 0 }),
	routes
});

const whiteList = ['/login', '/Home'] // no redirect whitelist

router.beforeEach(async (to, from, next) => {
	document.title = to.meta.title
	const hasToken = getToken()
	store.commit('app/SET_LOADING', true)
	if (hasToken) {
		// if (!store.getters.userInfo) {
		// 	await store.dispatch('user/getInfo')
		// }
		if (to.path === '/login') {
				store.commit('app/SET_LOADING', false)
				next({ path: '/' })
		} else {
				next()
		}
	} else {
		if (whiteList.indexOf(to.path) !== -1) {
			// in the free login whitelist, go directly
    	next()
		} else {
			store.commit('app/SET_LOADING', false)
			next(`/login?redirect=${to.path}`)
		}
	}
})

// // 解决上面跳转加参数报错问题
// const originalPush = VueRouter.prototype.push;
// VueRouter.prototype.push = function push(location, onResolve, onReject) {
//   if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject);
//   return originalPush.call(this, location).catch(err => err);
// };

// // 修改路由replace方法,阻止重复点击报错
// const originalReplace = VueRouter.prototype.replace;
// VueRouter.prototype.replace = function replace(location) {
//   return originalReplace.call(this, location).catch(err => err);
// };
// router.afterEach(() => {
// 	store.commit('app/SET_LOADING', false)
// })

export default router;
