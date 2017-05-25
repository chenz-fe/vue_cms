<template>
    <div class="tmpl">
        <my-title title="商品列表"></my-title>
        <mt-loadmore :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" ref="loadmore" @bottom-status-change="handleTopChange" :auto-fill="autoFill">
            <ul class="mui-table-view mui-grid-view">
                <li class="mui-table-view-cell mui-media mui-col-xs-6" v-for="item in goods" :key="item.id">
                    <router-link :to="{name:'goodsdetail', params:{id:item.id}}">
                        <img class="mui-media-object" :src="item.img_url" v-lazy="item.img_url">
                        <div class="mui-media-body">{{item.title}}</div>
                        <div class="desc">
                            <div class="sell">
                                <span>￥{{item.sell_price}}</span>
                                <s>￥{{item.market_price}}</s>
                            </div>
                            <div class="detail">
                                <div class="hot">
                                    热卖中
                                </div>
                                <div class="count">
                                    剩{{item.stock_quantity}}件
                                </div>
                            </div>
                        </div>
                    </router-link>
                </li>
            </ul>
            <div slot="top" class="mint-loadmore-top">
              <span v-show="topStatus !== 'loading'" :class="{ 'rotate': topStatus === 'drop' }">↑</span>
              <!-- <span v-show="topStatus === 'loading'">Loading...</span> -->
              <mt-spinner type="triple-bounce" v-show="topStatus === 'loading'" color="#26a2ff"></mt-spinner>
            </div>
        </mt-loadmore>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                pageindex:1,
                goods:[],
                allLoaded: false, //当数据全部加载完毕，上拉刷新事件就不会再执行了
                autoFill: false, //一般设为false，否则会不断调用上拉刷新函数
                topStatus:'' //记录当前组件上的下拉pull,drop状态
            }
        },
        created() {
            this.getGoodsByPage();
        },
        methods: {
            handleTopChange(status) {
                this.topStatus = status;
                // console.log(this.topStatus);
            },
            loadBottom() {
              this.getGoodsByPage();
              
            },
            getGoodsByPage() {
                this.axios.get('getgoods?pageindex='+ this.pageindex)
                .then(res=>{
                    this.goods = this.goods.concat(res.data.message);
                    this.pageindex++;
                    if(res.data.message.length != 10){
                        this.allLoaded = true;
                        this.$refs.loadmore.onBottomLoaded();//进入到pull初始状态
                    }
                })
                .catch(err=>{
                    console.log('商品列表获取失败');
                })
            }
        }
    }
</script>
<style scoped>
    .tmpl {
        margin-top: 84px;
        height: 100%;
    }

    image[lazy=loading] {
      width: 40px;
      height: 300px;
      margin: auto;
    }

    .mui-table-view.mui-grid-view .mui-table-view-cell > a:not(.mui-btn) {
        margin: 0px;
        padding: 0px;
        border: 1px solid #5c5c5c;
        box-shadow: 0 0 4px #666;
    }

    .sell > span {
        float: left;
        color: red;
        text-align: left;
    }

    .detail >.hot {
        float: left;
        text-align: left;
        font-size: 15px;
    }

    .detail >.count {
        float: right;
        text-align: right;
        font-size: 15px;
    }


    /*撑开，去除浮动没有的高度*/

    .detail {
        overflow: hidden;
    }

    .desc {
        color: rgba(92, 92, 92, 0.8);
        background-color: rgba(0, 0, 0, 0.2);
    }

    .mui-table-view.mui-grid-view .mui-table-view-cell .mui-media-object {
        height: 200px;
    }
</style>
