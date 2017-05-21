import Vue from 'vue';
import MintUi from 'mint-ui';
import 'mint-ui/lib/style.css';
import VueRouter from 'vue-router';
// 引入css
import '../static/render/mui/dist/css/mui.css';
import '../static/css/global.css';

// 引入组件
import App from './app.vue';



// 按需加载
const Home = r => require(['./components/home/home.vue'], r);
const Member = r => require(['./components/member/member.vue'], r);
const ShopCart = r => require(['./components/shopcart/shopcart.vue'], r);
const Search = r => require(['./components/search/search.vue'], r);

// 安装插件
Vue.use(MintUi);
Vue.use(VueRouter);

// 设置导航按钮点击高亮样式
let router = new VueRouter({
    linkActiveClass: 'mui-active'
});

// 配置路由规则
router.addRoutes([
    { path: '/', redirect: '/home' },
    { path: '/home', component: Home },
    { path: '/member', component: Member },
    { path: '/shopcart', component: ShopCart },
    { path: '/search', component: Search },


])




new Vue({
    el: '#app',
    router,
    render: c => c(App)
})
