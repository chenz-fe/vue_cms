<template>
	<div>
		<nav class="mui-bar mui-bar-tab">
			<router-link to='/home' class="mui-tab-item">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>

			<router-link to='/member' class="mui-tab-item">
				<span class="mui-icon mui-icon-member"></span>
				<span class="mui-tab-label">会员</span>
			</router-link>

			<router-link to='/shopcart' class="mui-tab-item">
				<span class="mui-icon mui-icon-shopcart"><span class="mui-badge" ref="shopcartNum">{{buyNum}}</span></span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link to='/search' class="mui-tab-item">
				<span class="mui-icon mui-icon-search"></span>
				<span class="mui-tab-label">查找</span>
			</router-link>
			
		</nav>
	</div>
</template>

<script type="text/ecmascript-6">

	import MyBus from '../common/myBus.js';
	import ShopCartTools from '../common/shopcartools.js';

	export default {
		data() {
			return {
				buyNum: ShopCartTools.getProdsCount()
			};
		},
		created() {
			MyBus.$on('buyNumChange', (num)=>{
				this.buyNum += num;
			})
		}
		

	}

</script>

<style>
	
</style>