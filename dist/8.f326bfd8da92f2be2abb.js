webpackJsonp([8],{197:function(t,e,o){o(272);var a=o(3)(o(227),o(260),"data-v-508e697e",null);a.options.__file="/Users/zengchen/Desktop/my_vue_cms/src/components/goods/goodslist.vue",a.esModule&&Object.keys(a.esModule).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),a.options.functional&&console.error("[vue-loader] goodslist.vue: functional components are not supported with templates, they should use render functions."),t.exports=a.exports},227:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data(){return{pageindex:1,goods:[],allLoaded:!1,autoFill:!1,topStatus:""}},created(){this.getGoodsByPage()},methods:{handleTopChange(t){this.topStatus=t},loadBottom(){this.getGoodsByPage()},getGoodsByPage(){this.axios.get("getgoods?pageindex="+this.pageindex).then(t=>{this.goods=this.goods.concat(t.data.message);this.pageindex++;10!=t.data.message.length&&(this.allLoaded=!0,this.$refs.loadmore.onBottomLoaded())}).catch(t=>{console.log("商品列表获取失败")})}}}},242:function(t,e,o){e=t.exports=o(2)(void 0),e.push([t.i,"\n.tmpl[data-v-508e697e] {\n    margin-top: 84px;\n    height: 100%;\n}\nimage[lazy=loading][data-v-508e697e] {\n  width: 40px;\n  height: 300px;\n  margin: auto;\n}\n.mui-table-view.mui-grid-view .mui-table-view-cell > a[data-v-508e697e]:not(.mui-btn) {\n    margin: 0px;\n    padding: 0px;\n    border: 1px solid #5c5c5c;\n    box-shadow: 0 0 4px #666;\n}\n.sell > span[data-v-508e697e] {\n    float: left;\n    color: red;\n    text-align: left;\n}\n.detail >.hot[data-v-508e697e] {\n    float: left;\n    text-align: left;\n    font-size: 15px;\n}\n.detail >.count[data-v-508e697e] {\n    float: right;\n    text-align: right;\n    font-size: 15px;\n}\n\n\n/*撑开，去除浮动没有的高度*/\n.detail[data-v-508e697e] {\n    overflow: hidden;\n}\n.desc[data-v-508e697e] {\n    color: rgba(92, 92, 92, 0.8);\n    background-color: rgba(0, 0, 0, 0.2);\n}\n.mui-table-view.mui-grid-view .mui-table-view-cell .mui-media-object[data-v-508e697e] {\n    height: 200px;\n}\n",""])},260:function(t,e,o){t.exports={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"tmpl"},[o("my-title",{attrs:{title:"商品列表"}}),t._v(" "),o("mt-loadmore",{ref:"loadmore",attrs:{"bottom-method":t.loadBottom,"bottom-all-loaded":t.allLoaded,"auto-fill":t.autoFill},on:{"bottom-status-change":t.handleTopChange}},[o("ul",{staticClass:"mui-table-view mui-grid-view"},t._l(t.goods,function(e){return o("li",{key:e.id,staticClass:"mui-table-view-cell mui-media mui-col-xs-6"},[o("router-link",{attrs:{to:{name:"goodsdetail",params:{id:e.id}}}},[o("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.img_url,expression:"item.img_url"}],staticClass:"mui-media-object",attrs:{src:e.img_url}}),t._v(" "),o("div",{staticClass:"mui-media-body"},[t._v(t._s(e.title))]),t._v(" "),o("div",{staticClass:"desc"},[o("div",{staticClass:"sell"},[o("span",[t._v("￥"+t._s(e.sell_price))]),t._v(" "),o("s",[t._v("￥"+t._s(e.market_price))])]),t._v(" "),o("div",{staticClass:"detail"},[o("div",{staticClass:"hot"},[t._v("\n                                热卖中\n                            ")]),t._v(" "),o("div",{staticClass:"count"},[t._v("\n                                剩"+t._s(e.stock_quantity)+"件\n                            ")])])])])],1)})),t._v(" "),o("div",{staticClass:"mint-loadmore-top",slot:"top"},[o("span",{directives:[{name:"show",rawName:"v-show",value:"loading"!==t.topStatus,expression:"topStatus !== 'loading'"}],class:{rotate:"drop"===t.topStatus}},[t._v("↑")]),t._v(" "),o("mt-spinner",{directives:[{name:"show",rawName:"v-show",value:"loading"===t.topStatus,expression:"topStatus === 'loading'"}],attrs:{type:"triple-bounce",color:"#26a2ff"}})],1)])],1)},staticRenderFns:[]},t.exports.render._withStripped=!0},272:function(t,e,o){var a=o(242);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);o(4)("8d627b54",a,!1)}});