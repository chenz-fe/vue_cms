<template>
	<div class="tmpl">
		<my-title title="新闻资讯"></my-title>
		<!-- 把title封装成my-title组件 -->
		<!-- <header class="mui-bar mui-bar-nav">
			<a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></a>
			<h1 class="mui-title">新闻资讯</h1>
		</header> -->
		<div class="news-wrap">
			<ul class="mui-table-view">
				<li class="mui-table-view-cell mui-media" v-for="(msg,index) in msgs" :key="index" >
					<router-link :to="{name:'newsdetail', query:{id: msg.id}}">
						<img class="mui-media-object mui-pull-left" :src="msg.img_url" v-lazy="msg.img_url">
						<div class="mui-media-body">
							{{msg.title}}
							<div class='mui-ellipsis'>
								<span class="left">点击数：{{msg.click}}</span>
								<span class="right">发表日期：{{msg.add_time | format_date}}</span>
							</div>
						</div>
					</router-link>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				msgs: []
			}
		},
		created() {
			this.axios.get('getnewslist').then(res=>{
				// console.log(res);
				this.msgs = res.data.message;
				// 下面代码用全局过滤器代替，方便复用
				// for (var i = 0; i < this.msgs.length; i++) {
				// 	this.msgs[i].add_time = this.moment(this.msgs[i].add_time).format('YYYY-MM-DD')
				// }
				// console.log(this.moment);
				
			}, res=>{
				console.log('获取新闻列表失败');
			});
		}
	}
</script>

<style scoped>
	.tmpl {
		margin-top: 84px;
	}
	image[lazy=loading] {
		width: 40px;
		height: 300px;
		margin: auto;
	}
	.mui-media-body {
		font-size: 14px;
	}
	.mui-ellipsis {
		color: #04a1f0;
		position: relative;
		height: 20px;
	}
	.mui-ellipsis .left {
		position: absolute;
		left:0;
		top:3px;
	}
	.mui-ellipsis .right {
		position: absolute;
		right:10px;
		top:3px;
	}

	
</style>