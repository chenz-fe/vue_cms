<template>
    <div class="tmpl">
        <my-title title="商品详情"></my-title>
        <div class="outer-swiper">
            <div class="swiper">
                <!-- 轮播图组件 -->
                <my-swipe :imgs="imgs"></my-swipe>
            </div>
        </div>
        <div class="product-desc">
            <ul>
                <li><span class="product-desc-span">
                    {{info.title}}
                </span></li>
                <li class="price-li">市场价：
                    <s>￥{{info.market_price}}</s> 销售价：<span>￥{{info.sell_price}}</span></li>
                <li class="number-li">购买数量：<span @click="minus">-</span><span>{{buyNum}}</span><span @click="add">+</span></li>
                <li>
                <mt-button type="primary">立即购买</mt-button>
                <mt-button type="danger" @click="addShopCar">加入购物车</mt-button>
                </li>
            </ul>
        </div>
        <transition name="ball" v-on:after-enter="afterEnter">
            <div class="ball" v-if="isShow"></div>
        </transition>
        <div class="product-props">
            <ul>
                <li>商品参数</li>
                <li>商品货号：{{info.goods_no}}</li>
                <li>库存情况：{{info.stock_quantity}}件</li>
                <li>上架时间：{{info.add_time | format_date}}</li>
            </ul>
        </div>
        <div class="product-info">
            <ul>
                <li>
                    <mt-button type="primary" size="large" plain @click="goodsIntro">图文介绍</mt-button>
                </li>
                <li>
                    <mt-button type="danger" size="large" plain @click="goodsComment">商品评论</mt-button>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import MyBus from '../common/myBus.js';
    // 引入购物车工具，用于将添加购物车的数据存入到localstorage中
    import ShopCartTools from '../common/shopcartools.js';

    export default {
        data() {
            return {
                imgs: [],
                info: {},
                id: 0,
                buyNum: 1,
                isShow: false
            }
        },
        created() {
            // 获取轮播图图片
            this.id = this.$route.params.id;
            this.axios.get('getthumimages/'+this.id)
            .then(res=>{
                this.imgs = res.data.message;
            })
            .catch(err=>{
                console.log('获取商品轮播图失败');
            })

            // 获取商品详情
            this.axios.get('goods/getinfo/'+this.id)
            .then(res=>{
                this.info = res.data.message[0];
                // console.log(this.info);
            })
            .catch(err=>{
                console.log('获取商品轮播图失败');
            })
        },
        methods: {
            goodsIntro() {
                this.$router.push('/goods/info/' + this.id);
            },
            goodsComment() {
                this.$router.push('/goods/comment/' + this.id);
            },
            minus() {
                if(this.buyNum>1){
                    this.buyNum--;
                }
            },
            add() {
                if(this.buyNum<this.info.stock_quantity){
                    this.buyNum++;
                }
            },
            addShopCar() {
                MyBus.$emit('buyNumChange', this.buyNum);
                this.isShow = true;
                // 将数据保存到localstorage中
                ShopCartTools.addprod({
                    id:this.id,
                    num: this.buyNum
                });
            },
           afterEnter() {
                this.isShow = false;
           }

        }
    }
</script>
<style scoped>
    .tmpl {
        margin-top: 84px;
    }

    .ball-enter-active {
        animation: bounce-in 1s;
    }

    @keyframes bounce-in {
        0% {
            transform: translate3d(0, 0, 0);
        }
        50% {
            transform: translate3d(140px, -50px, 0);
        }
        75% {
            transform: translate3d(160px, 0px, 0);
        }
        100% {
            transform: translate3d(140px, 300px, 0);
        }
    }

    .swiper {
        border: 1px solid rgba(0, 0, 0, 0.2);
        margin: 8px;
        width: 95%;
        border-radius: 15px;
        overflow: hidden;
    }

    .outer-swiper,
    .product-desc,
    .product-props,
    .product-info {
        border-radius: 5px;
        border: 1px solid rgba(0, 0, 0, 0.2);
        margin: 3px;
    }

    /*清ulpadding*/
    .outer-swiper ul,
    .product-desc ul,
    .product-props ul,
    .product-info ul {
        padding: 0;
    }

    .product-desc ul li,
    .product-props ul li,
    .product-info ul li {
        list-style: none;
        font-size: 15px;
        color: rgba(0, 0, 0, 0.5);
        margin-top: 8px;
    }

    .product-desc ul >:nth-child(1) span {
        color: blue;
        font-size: 22px;
        font-weight: bold;
    }

    .product-desc ul >:nth-child(1) {
        border-bottom: 1px solid rgba(0, 0, 0, 0.5);
    }

    .product-desc ul,
    .product-info ul,
    .product-props ul {
        padding-left: 10px;
    }

    .price-li span {
        color: red;
        font-size: 25px;
    }

    .price-li s {
        margin-right: 16px;
    }

    /*加减*/

    .number-li span {
        display: inline-block;
        border: 2px solid rgba(0, 0, 0, 0.1);
        width: 25px;
    }


    /*商品参数*/

    .product-props ul >:nth-child(1) {
        text-align: left;
    }

    .product-props ul:not(:nth-child(1)) {
        margin-left: 40px;
    }

    .product-info ul {
        margin-bottom: 70px;
        padding: 0 5;
    }

    .number-li span {
        text-align: center;
    }

    .number-li >:nth-child(2) {
        width: 40px;
    }

    .ball {
        border-radius: 50%;
        background-color: red;
        width: 24px;
        height: 24px;
        position: absolute;
        top: 440px;
        left: 120px;
        display: inline-block;
        z-index: 9999;
    }
</style>
