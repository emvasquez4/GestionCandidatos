import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    crearUsuarioState: false,
  },
  getters: {
  },
  mutations: {
    setcrearUsuarioState(state, newValue){
      state.crearUsuarioState = !state.crearUsuarioState
    }
  },
  actions: {
  },
  modules: {
  }
})
