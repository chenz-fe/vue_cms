<template>
	<div class="tmpl">
		<my-title title="图片详情"></my-title>
		<div class="photo-title">
			<p>{{msg.title}}</p>
			<span>发起日期：{{msg.add_time | format_date}}</span>
			<span>{{msg.click}}次浏览</span>
			<span>分类：民生经济</span>
		</div>
		<ul class="mui-table-view mui-grid-view mui-grid-9">
			<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3" v-for="(item, index) in pics" :key="index">
				<img class="preview-img" :src="item.src" height="100" @click="$preview.open(index, pics)">
			</li>
		</ul>

		<div class="photo-desc">
			<p v-html="msg.content"></p>
		</div>

		<!-- 评论组件 -->
		<comment :cid="this.$route.query.id"></comment>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				msg: {},
				pics: []
			}
		},
		created() {
			// 合并请求：获取图片详情及详情中的缩略图数组
			// let id = this.$route.query.id;
			// this.axios.all([
			// 	this.axios.get('getimageInfo/' + id),
			// 	this.axios.get('getthumimages/' + id)
			// ])
			// .then(this.axios.spread((res1, res2)=>{
			// 	this.msg = res1.data.message[0];
			// 	// console.log(this.msg);
			// 	this.pics = res2.data.message;
			// 	// console.log(this.pics);
			// 	for (var i = 0; i < this.pics.length; i++) {
			// 		this.pics[i].w = 300;
			// 		this.pics[i].h = 300;
			// 	}
			// }))
			// .catch(err=>{
			// 	console.log('获取图片详情失败');
			// })
			
			// 规定请求顺序：先获取图片详情，再获取缩略图中的数组
			let id = this.$route.query.id;
			this.axios.get('getimageInfo/' + id)
			.then(res=>{
				this.msg = res.data.message[0];
				return this.axios.get('getthumimages/' + id)
			})
			.then(res=>{
				this.pics = res.data.message;
				// console.log(this.pics);
				for (var i = 0; i < this.pics.length; i++) {
					this.pics[i].w = 300;
					this.pics[i].h = 300;
				}
			})
			.catch(err=>{
				console.log('获取图片详情失败');
			});

		}
	}
</script>

<style scoped>
	.tmpl {
		margin-top: 100px;
	}
	li {
		list-style: none;
	}

	ul {
		margin: 0;
		padding: 0;
	}

	.photo-title {
		overflow: hidden;
	}

	.photo-title,
	.photo-desc {
		border-bottom: 1px solid rgba(0, 0, 0, 0.2);
		padding-bottom: 5px;
		margin-bottom: 5px;
		padding-left: 5px;
	}

	.photo-title p {
		color: #13c2f7;
		font-size: 20px;
		font-weight: bold;
	}

	.photo-title span {
		margin-right: 20px;
	}

	.mui-table-view.mui-grid-view.mui-grid-9 {
		background-color: white;
		border: 0;
	}

	.mui-table-view.mui-grid-view.mui-grid-9 li {
		border: 0;
	}

	.photo-desc p {
		font-size: 14px;
	}

	.mui-table-view-cell.mui-media.mui-col-xs-4.mui-col-sm-3 {
		padding: 2px;
	}
</style>