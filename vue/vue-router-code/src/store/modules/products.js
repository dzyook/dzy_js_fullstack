import shop from '../../api/shop'


// Store 里的一间库房 modules
// 搬运 actions 动作
// state 状态数据
// getters 获取状态的get方法
// mutations 改变 会计 记账

const state = {
    all:[]
}

const getters = {}
const actions = {
    getAllProducts({commit}){
        console.log('发动')
        shop.getProducts(products => {
            console.log('回来')
            commit('setProducts',products)
        })
    },
    
}
const mutations = {
    setProducts(state,products){
        console.log('入库')
        state.all = products
    },
    decrementProductInventory(state,{id}){
        const products = state.all.find(product => product.id === id);
        products.inventory--
    },
    reduceProducts(state,{id}){
        const products = state.all.find(product => product.id === id);
        products.inventory++
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}