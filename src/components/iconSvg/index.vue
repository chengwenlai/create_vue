<template>
	<svg class="icon-svg" aria-hidden="true">
	  <use :xlink:href="'#icon-'+name"></use>
	</svg>
</template>

<script>
export default {
	props: {
		name: {
			type: String,
			default: ''
		}
	}
};
</script>

<style lang="scss" scoped>
    .icon-svg {
      width: 1em;
      height: 1em;
      vertical-align: -0.15em;
      fill: currentColor;
      overflow: hidden;
	}
</style>
