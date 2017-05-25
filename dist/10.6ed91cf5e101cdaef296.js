webpackJsonp([10],{195:function(n,t,a){a(275);var i=a(3)(a(225),a(263),"data-v-8fbcea98",null);i.options.__file="/Users/zengchen/Desktop/my_vue_cms/src/components/goods/goodsdetail.vue",i.esModule&&Object.keys(i.esModule).some(function(n){return"default"!==n&&"__esModule"!==n})&&console.error("named exports are not supported in *.vue files."),i.options.functional&&console.error("[vue-loader] goodsdetail.vue: functional components are not supported with templates, they should use render functions."),n.exports=i.exports},225:function(n,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=a(141),e=a.n(i),o=a(140),s=a.n(o);t.default={data(){return{imgs:[],info:{},id:0,buyNum:1,isShow:!1}},created(){this.id=this.$route.params.id,this.axios.get("getthumimages/"+this.id).then(n=>{this.imgs=n.data.message}).catch(n=>{console.log("获取商品轮播图失败")}),this.axios.get("goods/getinfo/"+this.id).then(n=>{this.info=n.data.message[0]}).catch(n=>{console.log("获取商品轮播图失败")})},methods:{goodsIntro(){this.$router.push("/goods/info/"+this.id)},goodsComment(){this.$router.push("/goods/comment/"+this.id)},minus(){this.buyNum>1&&this.buyNum--},add(){this.buyNum<this.info.stock_quantity&&this.buyNum++},addShopCar(){e.a.$emit("buyNumChange",this.buyNum),this.isShow=!0,s.a.addprod({id:this.id,num:this.buyNum})},afterEnter(){this.isShow=!1}}}},245:function(n,t,a){t=n.exports=a(2)(void 0),t.push([n.i,"\n.tmpl[data-v-8fbcea98] {\n    margin-top: 84px;\n}\n.ball-enter-active[data-v-8fbcea98] {\n    animation: bounce-in 1s;\n}\n@keyframes bounce-in {\n0% {\n        transform: translate3d(0, 0, 0);\n}\n50% {\n        transform: translate3d(140px, -50px, 0);\n}\n75% {\n        transform: translate3d(160px, 0px, 0);\n}\n100% {\n        transform: translate3d(140px, 300px, 0);\n}\n}\n.swiper[data-v-8fbcea98] {\n    border: 1px solid rgba(0, 0, 0, 0.2);\n    margin: 8px;\n    width: 95%;\n    border-radius: 15px;\n    overflow: hidden;\n}\n.outer-swiper[data-v-8fbcea98],\n.product-desc[data-v-8fbcea98],\n.product-props[data-v-8fbcea98],\n.product-info[data-v-8fbcea98] {\n    border-radius: 5px;\n    border: 1px solid rgba(0, 0, 0, 0.2);\n    margin: 3px;\n}\n\n/*清ulpadding*/\n.outer-swiper ul[data-v-8fbcea98],\n.product-desc ul[data-v-8fbcea98],\n.product-props ul[data-v-8fbcea98],\n.product-info ul[data-v-8fbcea98] {\n    padding: 0;\n}\n.product-desc ul li[data-v-8fbcea98],\n.product-props ul li[data-v-8fbcea98],\n.product-info ul li[data-v-8fbcea98] {\n    list-style: none;\n    font-size: 15px;\n    color: rgba(0, 0, 0, 0.5);\n    margin-top: 8px;\n}\n.product-desc ul >:nth-child(1) span[data-v-8fbcea98] {\n    color: blue;\n    font-size: 22px;\n    font-weight: bold;\n}\n.product-desc ul >[data-v-8fbcea98]:nth-child(1) {\n    border-bottom: 1px solid rgba(0, 0, 0, 0.5);\n}\n.product-desc ul[data-v-8fbcea98],\n.product-info ul[data-v-8fbcea98],\n.product-props ul[data-v-8fbcea98] {\n    padding-left: 10px;\n}\n.price-li span[data-v-8fbcea98] {\n    color: red;\n    font-size: 25px;\n}\n.price-li s[data-v-8fbcea98] {\n    margin-right: 16px;\n}\n\n/*加减*/\n.number-li span[data-v-8fbcea98] {\n    display: inline-block;\n    border: 2px solid rgba(0, 0, 0, 0.1);\n    width: 25px;\n}\n\n\n/*商品参数*/\n.product-props ul >[data-v-8fbcea98]:nth-child(1) {\n    text-align: left;\n}\n.product-props ul[data-v-8fbcea98]:not(:nth-child(1)) {\n    margin-left: 40px;\n}\n.product-info ul[data-v-8fbcea98] {\n    margin-bottom: 70px;\n    padding: 0 5;\n}\n.number-li span[data-v-8fbcea98] {\n    text-align: center;\n}\n.number-li >[data-v-8fbcea98]:nth-child(2) {\n    width: 40px;\n}\n.ball[data-v-8fbcea98] {\n    border-radius: 50%;\n    background-color: red;\n    width: 24px;\n    height: 24px;\n    position: absolute;\n    top: 440px;\n    left: 120px;\n    display: inline-block;\n    z-index: 9999;\n}\n",""])},263:function(n,t,a){n.exports={render:function(){var n=this,t=n.$createElement,a=n._self._c||t;return a("div",{staticClass:"tmpl"},[a("my-title",{attrs:{title:"商品详情"}}),n._v(" "),a("div",{staticClass:"outer-swiper"},[a("div",{staticClass:"swiper"},[a("my-swipe",{attrs:{imgs:n.imgs}})],1)]),n._v(" "),a("div",{staticClass:"product-desc"},[a("ul",[a("li",[a("span",{staticClass:"product-desc-span"},[n._v("\n                "+n._s(n.info.title)+"\n            ")])]),n._v(" "),a("li",{staticClass:"price-li"},[n._v("市场价：\n                "),a("s",[n._v("￥"+n._s(n.info.market_price))]),n._v(" 销售价："),a("span",[n._v("￥"+n._s(n.info.sell_price))])]),n._v(" "),a("li",{staticClass:"number-li"},[n._v("购买数量："),a("span",{on:{click:n.minus}},[n._v("-")]),a("span",[n._v(n._s(n.buyNum))]),a("span",{on:{click:n.add}},[n._v("+")])]),n._v(" "),a("li",[a("mt-button",{attrs:{type:"primary"}},[n._v("立即购买")]),n._v(" "),a("mt-button",{attrs:{type:"danger"},on:{click:n.addShopCar}},[n._v("加入购物车")])],1)])]),n._v(" "),a("transition",{attrs:{name:"ball"},on:{"after-enter":n.afterEnter}},[n.isShow?a("div",{staticClass:"ball"}):n._e()]),n._v(" "),a("div",{staticClass:"product-props"},[a("ul",[a("li",[n._v("商品参数")]),n._v(" "),a("li",[n._v("商品货号："+n._s(n.info.goods_no))]),n._v(" "),a("li",[n._v("库存情况："+n._s(n.info.stock_quantity)+"件")]),n._v(" "),a("li",[n._v("上架时间："+n._s(n._f("format_date")(n.info.add_time)))])])]),n._v(" "),a("div",{staticClass:"product-info"},[a("ul",[a("li",[a("mt-button",{attrs:{type:"primary",size:"large",plain:""},on:{click:n.goodsIntro}},[n._v("图文介绍")])],1),n._v(" "),a("li",[a("mt-button",{attrs:{type:"danger",size:"large",plain:""},on:{click:n.goodsComment}},[n._v("商品评论")])],1)])])],1)},staticRenderFns:[]},n.exports.render._withStripped=!0},275:function(n,t,a){var i=a(245);"string"==typeof i&&(i=[[n.i,i,""]]),i.locals&&(n.exports=i.locals);a(4)("0b982d92",i,!1)}});