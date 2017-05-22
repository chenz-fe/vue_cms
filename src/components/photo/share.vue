<template>
	<div class="tmpl">
		<my-title title="图片分享"></my-title>
		<div class="phote-tab">
			<ul>
				<li v-for="category in categories" :key="category.id">
					<a href="javascript:;" @click="getImgById(category.id)">{{category.title}}</a>
				</li>
			</ul>
		</div>
		
		<div class="photo-list">
			<ul>
				<li v-for="item in imgs" :key="item.id">
					<router-link :to="{name:'photodetail', query:{id:item.id}}">
						<img :src="item.img_url">
						<p>
							<span>{{item.title}}</span><br>
							<span>{{item.zhaiyao}}</span>
						</p>
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
				categories: [],
				imgs: []
			}
		},

		created() {
			// 用axios合并发送请求
			/*this.axios.all([
				this.axios.get('getimgcategory'),
				this.axios.get('getimages/0')
			])
			.then(this.axios.spread((res1, res2)=>{
				// console.log(res1);
				this.categories = res1.data.message;
				this.categories.unshift({id:0, title:'全部'});
				// console.log(res2);
				this.imgs = res2.data.message;
				// console.log(this.imgs);

			}))
			.catch(err=>{
				console.log(err);
				console.log('获取图片数据失败');
			})*/

			// 分开发送请求
			this.axios.get('getimgcategory')
			.then(res=>{
				this.categories = res.data.message;
				this.categories.unshift({id:0, title:'全部'});
			})
			.catch(err=>{
				console.log('获取图片数据失败');
			})

			// 默认加载全部，id为0，调用methods中的方法
			this.getImgById(0);
		},

		methods: {
			getImgById(id) {
				this.axios.get('getimages/' + id)
				.then(res=>{
					this.imgs = res.data.message;
				})
				.catch(err=>{
					console.log('获取分类图片失败');
				})
			}
		}
	}
</script>

<style scoped>
	.tmpl {
		margin-top: 84px;
	}

	.phote-tab ul {
		list-style: none;
		white-space: nowrap;
		padding: 0;
		padding-top: 10px;
		padding-left: 5px;
		overflow-x: auto;
		/* 给tab栏添加滚动条 */
	}

	.phote-tab li {
		display: inline-block;
		margin-right: 8px;
	}

	.phote-tab a.mui-active {
		border-bottom: 2px solid #26a2ff;
	}

	.photo-list li {
		list-style: none;
		position: relative;
	}

	.photo-list li img {
		width: 100%;
		height: 230px;
		vertical-align: top;
	}

	.photo-list ul {
		padding-left: 0px;
		margin: 0;
	}

	.photo-list p {
		position: absolute;
		bottom: 0px;
		color: white;
		background-color: rgba(0, 0, 0, 0.3);
		margin-bottom: 0px;
	}

	.photo-list p span:nth-child(1) {
		font-weight: bold;
		font-size: 16px;
	}

</style>