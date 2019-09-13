import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,

  plugins: [createPersistedState()],

  state: {
    items: [
      { name: "Fanta Soda (500ml)", code: "334XDF", price: 1000 },
      { name: "Ice Cream", code: "434DEZ", price: 1000 },
      { name: "Note Book", code: "434ABD", price: 1000 }
    ],
    cart: [{ name: "Note Book", code: "434ABD", price: 1000 }]
  },

  mutations: {
    addToCart(state, code) {
      const item = state.items.find(item => item.code === code);
      state.cart.push(item);
    },

    removeFromCart(state, code) {
      const itemIndex = state.cart.findIndex(item => item.code === code);
      state.cart.splice(itemIndex, 1);
    }
  },

  getters: {
    totalCost: state => {
      return state.cart
        .map(item => item.price)
        .reduce((prev, current) => prev + current, 0);
    }
  },

  actions: {
    addToCart({ commit }, code) {
      commit("addToCart", code);
    },

    removeFromCart({ commit }, code) {
      commit("removeFromCart", code);
    }
  }
});