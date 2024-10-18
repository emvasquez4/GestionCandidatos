import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    crearUsuarioState: false,
    user:{
      isLoggedIn: false, //se encuentra logueado
      roles: [], //roles a manejar este usuario
    },
  },
  getters: {
    isLoggedIn: state => state.user.isLoggedIn,
    userRoles: state => state.user.roles,
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
