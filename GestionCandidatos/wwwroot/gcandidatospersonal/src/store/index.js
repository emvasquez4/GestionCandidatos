import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    crearUsuarioState: false,
    crearVacanteState: false,
    crearCandidatoState: false,
    crearPermisoState: false,
    progEntrevistaState: false,
  },  
  getters: {
  },
  mutations: {
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
  },
  actions: {
   
  },
  modules: {
  }
})
