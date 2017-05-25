// prods是一个含有购物车中所有商品的对象
let prods = {};

let obj = {
    // 把单个商品对象作为参数传入
    addprod: function(prod) {
        prods[prod.id] = prods[prod.id] ? prods[prod.id] + prod.num : prod.num;
        this.save(prods);
    },
    deletprod: function(id) {
        // delete prods.id;
        prods.id = null;
        this.save(prods);
    },

    // 数据持久化
    save: function(prods) {
        localStorage.setItem('prods', JSON.stringify(prods));
    },
    getProds: function() {
        return JSON.parse(localStorage.getItem('prods') || '{}');
    }
}

export default obj;
