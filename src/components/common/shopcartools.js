// prods是一个含有购物车中所有商品的对象
let prods = {};

let obj = {
    // 把单个商品对象作为参数传入
    // 这个函数在商品详情页进行调用
    addprod: function(prod) {
        prods[prod.id] = prods[prod.id] ? prods[prod.id] + prod.num : prod.num;
        this.save(prods);
    },
    // 删除函数在购物车组件进行调用
    deletprod: function(id) {
        // delete prods.id;
        prods.id = null;
        this.save(prods);
    },

    // 数据持久化
    save: function(prods) {
        localStorage.setItem('prods', JSON.stringify(prods));
    },

    // 在购物车组件进行调用
    getProds: function() {
        return JSON.parse(localStorage.getItem('prods') || '{}');
    },

    // 需要实现footer中红色小球数量也进行同步变化
    // 保证刷新以后数据还在，不会清0
    // 这个函数在footer上进行调用
    // 这么做有个小bug，footer上购物车的数字应该随着购物车组件的+-操作时时改变
    // 用vuex做数据共享可以解决这个问题
    getProdsCount: function() {
        let prods = this.getProds(); // 从localstorage中获取到最新的对象数据
        let prodscount = 0;
        for (var k in prods) {
            prodscount += prods[k] - 0;
        }
        return prodscount;
    }
}

export default obj;
