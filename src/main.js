import Vue from 'vue';
import MintUi from 'mint-ui';
import 'mint-ui/lib/style.css';
import VueRouter from 'vue-router';
import VuePreview from 'vue-preview';

// 安装插件
Vue.use(MintUi);
Vue.use(VueRouter);
Vue.use(VuePreview);

// 引入css
import '../static/render/mui/dist/css/mui.css';
import '../static/css/global.css';

// 引入组件
import App from './app.vue';
import MyTitle from './components/common/myTitle.vue';
import MyHeader from './components/common/myHeader.vue';
import MySwipe from './components/common/mySwipe.vue';
import Comment from './components/common/comment.vue';

// 注册组件
Vue.component('my-title', MyTitle);
Vue.component('my-header', MyHeader);
Vue.component('my-swipe', MySwipe);
Vue.component('comment', Comment);

// 引入axios, 配置基础路径，将其挂载在Vue实例的原型上
import Axios from 'axios';
Axios.defaults.baseURL = 'http://webhm.top:8899/api/';
Axios.defaults.headers.post = {
    'content-type': 'application/x-www-form-urlencoded'
};
Axios.defaults.transformRequest = function(data) {
    var str = '';
    for (var key in data) {
        str += key + '=' + data[key] + '&';
    }
    return str.substr(0, str.length - 1);
};
Vue.prototype.axios = Axios;

// 引入moment插件(不需要安装)
import Moment from 'moment';
// console.log(Moment);

// 注册日期格式转换全局过滤器
Vue.filter('format_date', function(date) {
    return Moment(date).format('YYYY-MM-DD');
});

// 按需加载
const Home = r => require(['./components/home/home.vue'], r);
const Member = r => require(['./components/member/member.vue'], r);
const ShopCart = r => require(['./components/shopcart/shopcart.vue'], r);
const Search = r => require(['./components/search/search.vue'], r);
const NewsList = r => require(['./components/news/newslist.vue'], r);
const NewsDetail = r => require(['./components/news/detail.vue'], r);
const PhotoShare = r => require(['./components/photo/share.vue'], r);
const PhotoDetail = r => require(['./components/photo/detail.vue'], r);
const GoodsList = r => require(['./components/goods/goodslist.vue'], r);
const GoodsDetail = r => require(['./components/goods/goodsdetail.vue'], r);
const GoodsComment = r => require(['./components/goods/goodscomment.vue'], r);
const GoodsInfo = r => require(['./components/goods/goodsinfo.vue'], r);

// 设置导航按钮点击高亮样式
let router = new VueRouter({
    linkActiveClass: 'mui-active'
});

// 配置路由规则
router.addRoutes([
    { name: 'default', path: '/', redirect: '/home' },
    { name: 'home', path: '/home', component: Home },
    { name: 'member', path: '/member', component: Member },
    { name: 'shopcart', path: '/shopcart', component: ShopCart },
    { name: 'search', path: '/search', component: Search },
    { name: 'newslist', path: '/news/newslist', component: NewsList },
    { name: 'newsdetail', path: '/news/detail', component: NewsDetail },
    { name: 'photoshare', path: '/photo/share', component: PhotoShare },
    { name: 'photodetail', path: '/photo/detail', component: PhotoDetail },
    { name: 'goods', path: '/goods/list', component: GoodsList },
    { name: 'goodsdetail', path: '/goods/detail/:id', component: GoodsDetail },
    { name: 'goodsinfo', path: '/goods/info/:id', component: GoodsInfo },
    { name: 'goodscomment', path: '/goods/comment/:id', component: GoodsComment }
]);

new Vue({
    el: '#app',
    router,
    render: c => c(App)
});
