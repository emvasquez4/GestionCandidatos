import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    crearUsuarioState: false,
  },
  state: {
    crearVacanteState: false,
  },
  state: {
    crearCandidatoState: false,
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
    }
  },
  actions: {
    verCandidato({ commit, state }, id) {
      const candidato = state.candidatos.find(c => c.id === id);
      if (candidato) {
        commit('setCandidato', candidato);
      } else {
        console.error('Candidato no encontrado');
      }
    }
  },
  modules: {
  }
})
