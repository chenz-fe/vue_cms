<template>
	<div>
		<mt-header title="小菠萝CMS系统"></mt-header>

        <router-view></router-view>

        <footer-vue></footer-vue>
    
	</div>

</template>

<script>
	import footerVue from './components/partials/footer.vue';
	export default {
		data() {
			return {};
		},
		components: {
			footerVue
		}
	}
</script>

<style>
	
</style>