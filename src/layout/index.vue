<template>
	<div>
        <nav-bar
		  v-if="$route.meta.navBar.show"
		  :title="$route.meta.title"
		  :is-title="$route.meta.navBar.isTitle"
		  :border="$route.meta.navBar.border"
		  :position="$route.meta.navBar.position"
		  :background="$route.meta.navBar.background"
		  />
        <router-view />
		<tabBar v-if="$route.meta.isTabBar"></tabBar>
	</div>
</template>

<script>
import tabBar from '@/components/tabBar'
import navBar from '@/components/navBar'

export default {
	components: {
		tabBar,
		navBar
	}
};
</script>
