import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userId: null,
    crearUsuarioState: false,
    user:{
      isLoggedIn: false, //se encuentra logueado
      roles: [], //roles a manejar este usuario
    },
    isEditMode: false,
    isViewMode: false,
    menus:[],
    crearVacanteState: false,
    crearCandidatoState: false,
    crearPermisoState: false,
    progEntrevistaState: false,
    mostrarFiltro: false,
    crearEntrevistaState: false
  },  
  getters: {
    isLoggedIn: state => state.user.isLoggedIn,
    userRoles: state => state.user.roles,
  },
  mutations: {
    SET_MENUS(state, menus) {
      state.menus = menus;
    },
    SET_USER_ID(state, userId) {
      state.userId = userId;
    },
    setcrearUsuarioState(state, newValue){
      state.crearUsuarioState = !state.crearUsuarioState
    },
    setcrearVacanteState(state, newValue){
      state.crearVacanteState = !state.crearVacanteState
    },
    setcrearCandidatoState(state, newValue){
      state.crearCandidatoState = !state.crearCandidatoState
    },
    setCandidato(state, candidato) {
      state.candidato = candidato; // Mutación para establecer los datos del candidato
    },
    setcrearPermisoState(state, newValue){
      state.crearPermisoState = !state.crearPermisoState
    },
    setprogEntrevistaState(state, newValue){
      state.progEntrevistaState = !state.progEntrevistaState
    },
    setMostrarFiltro(state, newValue){
      state.mostrarFiltro = !state.mostrarFiltro
    },
    setcrearEntrevistaState(state, newValue){
      state.crearEntrevistaState = !state.crearEntrevistaState
    },
    setIsEditMode(state, newValue){
      state.isEditMode = newValue
    },
    setIsViewMode(state, newValue){
      state.isViewMode = newValue
    }
  },
  actions: {
    
  },
  modules: {
  }
})
