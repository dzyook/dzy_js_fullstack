import Vue from 'vue'
import Vuex from 'vuex'
import products from './modules/products'
import cart from './modules/cart'
Vue.use(Vuex)

// Vuex 管理Vue大型项目中的数据流,小型项目不要用vuex，
// Vue项目将分为两部分
// Vue VueRouter 界面构建 
// Vuex 数据流

export default new Vuex.Store({
    modules : {
        products,
        cart
    }
})