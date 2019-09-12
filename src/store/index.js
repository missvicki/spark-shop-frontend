import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,

  plugins: [createPersistedState()],

  state: {
    items: [
      { name: "Item 1", code: "334XDF", price: 4000 },
      { name: "Item 2", code: "434DEZ", price: 8000 },
      { name: "Item 3", code: "434ABD", price: 6000 }
    ],
    cart: []
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