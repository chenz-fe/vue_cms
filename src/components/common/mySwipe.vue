<template>
	<div>
		<div class="swipe-wrap">
			<mt-swipe :auto="4000" class>
			<mt-swipe-item v-for="(img,index) in imgs" :key="index">
				<a :href="img.url"><img :src="img.img"></a>
			</mt-swipe-item>
		</mt-swipe>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		props: ['imgs']
	}
</script>

<style scoped>
	.mint-swipe {
		height: 220px;
		width: 100%;
	}
	.mint-swipe-item img{
		height: 220px;
		width: 100%;
		vertical-align: center;
	}
</style>