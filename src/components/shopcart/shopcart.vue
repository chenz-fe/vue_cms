<template>
    <div class="tmpl">
        <my-title title="购物车"></my-title>
        <div class="pay-detail">
            <ul>
                <li class="p-list" v-for="(item, index) in viewprods" :key="index">
                    <mt-switch v-model="item.isSelected"></mt-switch>
                    <img :src="item.thumb_path">
                    <div class="pay-calc">
                        <p>{{item.title}}</p>
                        <div class="calc">
                            <span>￥{{item.sell_price}}</span>
                            <span @click="minusPickNum(item)">-</span>
                            <span>{{item.pickNum}}</span>
                            <span @click="addPickNum(item)">+</span>
                            <a href="javascript:;" @click="del(index)">删除</a>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
        <div class="show-price">
            <div class="show-1">
                <p>总计(不含运费):</p>
                <span>已经选择商品{{payment.count}}件，总价￥{{payment.totalprice}}元</span>
            </div>
            <div class="show-2">
                <mt-button type="danger" size="large" @click="gotopay">去结算</mt-button>
            </div>
        </div>
    </div>
</template>

<script>
    import ShopCartTools from '../common/shopcartools.js';

    export default {
        data() {
            return {
                viewprods: []
            }
        },
        created() {
            let prods = ShopCartTools.getProds();
            // console.log(ShopCartTools);
            // console.log(prods);//Object {88: 4, 91: 3}
            // prods是一个对象，key是所有添加的商品的id，value是id对应的购买数量
            // Object.keys(prods)把对象所有的key取出来放进一个数组
            let ids = Object.keys(prods).join(',');
            this.axios.get('goods/getshopcarlist/'+ ids)
            .then(res=>{
                // 方法1：给viewprods绑定属性，再通过$set通知vue，实现对象属性的响应式
                // this.viewprods = res.data.message;
                // for (var i = 0; i < this.viewprods.length; i++) {
                //     this.viewprods[i].pickNum = prods[this.viewprods[i].id];
                //     this.viewprods[i].isSelected = false;
                //     this.$set(this.viewprods[i],'pickNum',prods[this.viewprods[i].id]);
                //     this.$set(this.viewprods[i],'isSelected',false)
                // }
                
                // 方法2：vue对于双向数据绑定的操作，实际上是通过this.viewprods = res.data.message的时候完成的，此时会去触发到对象的setter，进入到setter之后，就会再去给新赋值的对象遍历所有的属性及子属性，来完成双向数据绑定。
                let tmp = res.data.message;
                for (var i = 0; i < tmp.length; i++) {
                    tmp[i].pickNum = prods[tmp[i].id];
                    tmp[i].isSelected = false;
                }
                this.viewprods = tmp;
                // console.log(this.viewprods);
            })
            .catch(err=>{
                console.log(err);
            })
        },
        methods: {
            gotopay() {
                console.log(this.viewprods);
            },
            minusPickNum(prod) {
                if(prod.pickNum<=0) return;
                prod.pickNum--;
            },
            addPickNum(prod) {
                prod.pickNum++;
            },
            del(index) {
                if(confirm('确定要删除吗')){
                    this.viewprods.splice(index,1);
                    this.saveProds();
                }
            },
            saveProds() {
                // 因为viewprods是个数组，所以不能直接调用ShopCartTools的save方法
                // 将viewprods数组转换成对象
                let obj = {};
                for (let i = 0; i < this.viewprods.length; i++) {
                    let tmp = this.viewprods[i];
                    obj[tmp.id] = tmp.pickNum;
                }
                ShopCartTools.save(obj);
            }
        },
        computed: {
            payment() {
                let count = 0;
                let totalprice = 0;
                for (let i = 0; i < this.viewprods.length; i++) {
                    let tmp = this.viewprods[i];
                    if(tmp.isSelected){
                        count++;
                        totalprice += tmp.pickNum * tmp.sell_price
                    }
                }
                return {
                    count,
                    totalprice
                }
            }
        },
        beforeRouteLeave(to, from, next) {
            // 导航离开该组件的对应路由时调用
            // 可以访问组件实例this
            // 如果当前用户要离开，就会出发
            // 如果否，取消锚点值改变行为，next(false)
            if(confirm('亲，确定要离开购物车吗')){
                next();
                this.saveProds();//保存离开时的购物车数据
                // 如果改变一次保存一次，会降低性能，所以可以选择在离开路由时统一保存
            } else{
                next(false);
            }
        }
    }



</script>

<style scoped>
    .tmpl {
        margin-top: 100px;
    }
    .pay-detail ul li {
        list-style: none;
        border-bottom: 1px solid rgba(0, 0, 0, 0.2);
        margin-bottom: 3px;
    }

    .pay-detail ul {
        padding-left: 5px;
        margin-top: 5px;
    }

    .pay-detail ul li img {
        width: 80px;
        height: 80px;
        display: inline-block;
        vertical-align: top;
        margin-top: 10px;
    }

    .pay-detail ul li >:nth-child(1),
    .pay-detail ul li >:nth-child(3) {
        display: inline-block;
    }

    .pay-calc p {
        display: inline-block;
        width: 250px;
        overflow: hidden;
        color: blue;
        font-size: 15px;
        margin-bottom: 10px;
    }

    .pay-detail ul li >:nth-child(1) {
        line-height: 80px;
    }

    .calc:nth-child(1) {
        color: red;
        font-size: 20px;
    }

    .calc span:not(:nth-child(1)) {
        border: 1px solid rgba(0, 0, 0, 0.3);
        display: inline-block;
        width: 20px;
        text-align: center;
    }

    .calc a {
        margin-left: 20px;
    }

    .show-1,
    .show-2 {
        display: inline-block;
    }

    .show-1,
    .show-2 {
        margin-left: 30px;
    }

    .show-price {
        background-color: rgba(0, 0, 0, 0.2);
    }
</style>
