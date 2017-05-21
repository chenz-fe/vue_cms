<template>
	<div>
		<nav class="mui-bar mui-bar-tab">
			<router-link to='/home' class="mui-tab-item">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>

			<router-link to='/member' class="mui-tab-item">
				<span class="mui-icon mui-icon-email"></span>
				<span class="mui-tab-label">会员</span>
			</router-link>

			<router-link to='/shopcart' class="mui-tab-item">
				<span class="mui-icon mui-icon-contact"><span class="mui-badge">9</span></span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link to='/search' class="mui-tab-item">
				<span class="mui-icon mui-icon-gear"></span>
				<span class="mui-tab-label">查找</span>
			</router-link>
			
		</nav>
	</div>
</template>

<script type="text/ecmascript-6">
	export default {
		data() {
			return {};
		}
	}

</script>

<style>
	
</style>