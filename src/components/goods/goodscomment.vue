<template>
	<div class="tmpl">
		<my-title title="商品评论"></my-title>
		<comment :cid="cid"></comment>
	</div>
</template>

<script type="text/ecmascript-6">
	export default{
		data() {
			return {
				cid:''
			}
		},
		created() {
			this.cid = this.$route.params.id;
		}
	}
</script>

<style>
	.tmpl {
		margin-top: 84px;
	}
</style>