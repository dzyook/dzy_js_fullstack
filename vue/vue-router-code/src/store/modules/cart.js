const state = {
    items: [],
    checkoutStatus: null 
  }
  //对state的计算或处理 vuex store 一棵树,树根,products.all
  const getters = {
    cartProducts:(state,getters,rootState)=>{
        return state.items.map(({id,quantity})=>{
            const product = rootState.products.all.find(product=>product.id==id);
            return{
                id:product.id,
                title:product.title,
                quantity,
                price:product.price,
            }
        })
    },
    cartTotalPrice:(state,getters)=>{
        return getters.cartProducts.reduce((total,product) => {
            return  total + product.quantity * product.price
        },0) 
    }

  }      
  const actions = {
    addProductToCart ({ state, commit }, product) {
    //   console.log(product);
    //   是否已经在购物车？
    if(product.inventory > 0) {
        const cartItem = state.items.find(item => item.id === product.id)
        console.log(cartItem)
        if(!cartItem){
            commit('pushProductToCart',{ id: product.id})
        }else {
            commit('incrementItemQuantity',cartItem)
        }
        commit('decrementProductInventory',{id:product.id})
    }
    },
    addCart({state,commit},card){
        const cardItem = state.items.find(item => item.id === card.id)
        console.log(cardItem)
        if(cardItem) {
            commit('addCardnum',cardItem)
        }
        commit('decrementProductInventory',{id:card.id})
    },
    reduceCart({state,commit},card){
        const cardItem = state.items.find(item => item.id === card.id)
        console.log(cardItem)
        if(cardItem) {
            commit('reduceCardnum',cardItem)
        }
        commit('reduceProducts',{id:card.id})
    },
  }
  const mutations = {
    addCardnum(state,{id}){
        const cardItem = state.items.find(item => item.id === id);
        console.log(cardItem)
        cardItem.quantity++
    },
    reduceCardnum(state,{id}){
        const cardItem = state.items.find(item => item.id === id);
        console.log(cardItem)
        cardItem.quantity--
    },
    pushProductToCart(state,{id}){
        state.items.push({
            id:id,
            quantity:1
        })
    },
    incrementItemQuantity(state,{id}){
        const cartItem = state.items.find(item => item.id === id);
        cartItem.quantity++
    }
  }
  export default {
    state,
    getters,
    mutations,
    actions
  }