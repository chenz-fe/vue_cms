<template>
	<div>
		<header class="mui-bar mui-bar-nav">
			<a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left" @click="goback"></a>
			<h1 class="mui-title">{{title}}</h1>
		</header>
	</div>
</template>

<script type="text/ecmascript-6">
	export default {
		data() {
			return {
				
			}
		},
		props: ['title'],
		created() {

		},
		methods: {
			goback() {
				this.$router.go(-1);
			}
		}
	}
</script>

<style scoped>
	.mui-bar.mui-bar-nav {
		margin-top: 40px;
	}
</style>