<template>
	<div class="tmpl">

		<!-- 轮播图组件 -->
		<my-swipe :imgs="imgs"></my-swipe>

		<div class="mui-content">
	        <ul class="mui-table-view mui-grid-view mui-grid-9">
	            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
	            	<router-link :to="{name:'newslist'}">
	            		<span class="mui-icon mui-icon-home"></span>
                    	<div class="mui-media-body">新闻资讯</div>
	            	</router-link>
                </li>
	            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
	            	<router-link :to="{name:'photoshare'}">
	                    <span class="mui-icon mui-icon-email"></span>
	                    <div class="mui-media-body">图片分享</div>
	                </router-link>
	            </li>
	            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
		            <router-link :to="{name:'goods'}">
	                    <span class="mui-icon mui-icon-chatbubble"></span>
	                    <div class="mui-media-body">商品展示</div>
	                </router-link>
                </li>
	            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <span class="mui-icon mui-icon-location"></span>
                    <div class="mui-media-body">留言反馈</div></a></li>
	            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <span class="mui-icon mui-icon-search"></span>
                    <div class="mui-media-body">搜索资讯</div></a></li>
	            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <span class="mui-icon mui-icon-phone"></span>
                    <div class="mui-media-body">联系我们</div></a></li>
	           
	        </ul> 
		</div>
	</div>
</template>

<script type="text/ecmascript-6">
	export default {
		data() {
			return {
				imgs: []
			}
		},
		created() {
			this.axios.get('getlunbo')
			.then(res=>{
				// console.log(res);
				this.imgs = res.data.message;
				// console.log(this.imgs);
			},res=>{
				console.log('获取轮播图失败');
			})
		},
		methods: {

		}
	}
</script>

<style scoped>
	.tmpl {
		margin-top: 40px;
	}
	
	/*9宫格*/
	.mui-icon-home:before, 
	.mui-icon-email:before, 
	.mui-icon-chatbubble:before, 
	.mui-icon-location:before, 
	.mui-icon-search:before, 
	.mui-icon-search:before, 
	.mui-icon-phone:before{
		content: '';
	}

	.mui-content {
		background-color: #fff;
	}

	.mui-grid-view.mui-grid-9 {
		background-color: #fff;
		border: 0;
	}

	.mui-grid-view.mui-grid-9 .mui-table-view-cell {
		border: 0;
	}

	.mui-icon-home {
		display: inline-block;
		background: url(../../../static/images/news.png);
		background-repeat: round;
		width: 50px;
		height: 50px;
	}

	.mui-icon-email {
		display: inline-block;
		background: url(../../../static/images/picShare.png);
		background-repeat: round;
		width: 50px;
		height: 50px;
	}

	.mui-icon-chatbubble {
		display: inline-block;
		background: url(../../../static/images/goodShow.png);
		background-repeat: round;
		width: 50px;
		height: 50px;
	}

	.mui-icon-location {
		display: inline-block;
		background: url(../../../static/images/feedback.png);
		background-repeat: round;
		width: 50px;
		height: 50px;
	}

	.mui-icon-search {
		display: inline-block;
		background: url(../../../static/images/search.png);
		background-repeat: round;
		width: 50px;
		height: 50px;
	}

	.mui-icon-phone {
		display: inline-block;
		background: url(../../../static/images/callme.png);
		background-repeat: round;
		width: 50px;
		height: 50px;
	}


</style>