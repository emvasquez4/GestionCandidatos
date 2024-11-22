import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userId: null,
    crearUsuarioState: false,
    user: {
      isLoggedIn: false,
      roles: [],
    },
    isEditMode: false,
    isViewMode: false,
    menus: [],
    roles: [],
    crearVacanteState: false,
    crearCandidatoState: false,
    crearPermisoState: false,
    progEntrevistaState: false,
    mostrarFiltro: false,
    crearEntrevistaState: false,
  },
  getters: {
    isLoggedIn: (state) => state.user.isLoggedIn,
    userRoles: (state) => state.user.roles,
  },
  mutations: {
    SET_MENUS(state, menus) {
      state.menus = menus;
    },
    SET_ROLES(state, roles){
      state.roles = roles;
    },
    SET_USER_ID(state, userId) {
      state.userId = userId;
    },
    setcrearUsuarioState(state, newValue) {
      state.crearUsuarioState = !state.crearUsuarioState;
    },
    setcrearVacanteState(state, newValue) {
      state.crearVacanteState = !state.crearVacanteState;
    },
    setcrearCandidatoState(state, newValue) {
      state.crearCandidatoState = !state.crearCandidatoState;
    },
    setCandidato(state, candidato) {
      state.candidato = candidato;
    },
    setcrearPermisoState(state, newValue) {
      state.crearPermisoState = !state.crearPermisoState;
    },
    setprogEntrevistaState(state, newValue) {
      state.progEntrevistaState = !state.progEntrevistaState;
    },
    setMostrarFiltro(state, newValue) {
      state.mostrarFiltro = !state.mostrarFiltro;
    },
    setcrearEntrevistaState(state, newValue) {
      state.crearEntrevistaState = !state.crearEntrevistaState;
    },
    setIsEditMode(state, newValue) {
      state.isEditMode = newValue;
    },
    setIsViewMode(state, newValue) {
      state.isViewMode = newValue;
    },
    SET_USER(state, user) {
      state.user = user;
    }
  },
  actions: {
    logout({ commit }) {
      commit('SET_MENUS', []);
      commit('SET_USER_ID', null);
      commit('setIsEditMode', false);
      commit('setIsViewMode', false);
      commit('setcrearUsuarioState', false);
      commit('setcrearVacanteState', false);
      commit('setcrearCandidatoState', false);
      commit('setcrearPermisoState', false);
      commit('setprogEntrevistaState', false);
      commit('setMostrarFiltro', false);
      commit('setcrearEntrevistaState', false);
      commit('SET_USER', { isLoggedIn: false, roles: [] });
    },
    resetStates({ commit }) { 
      commit('setIsEditMode', false); 
      commit('setIsViewMode', false); 
      commit('setcrearUsuarioState', false); 
      commit('setcrearVacanteState', false); 
      commit('setcrearCandidatoState', false); 
      commit('setcrearPermisoState', false); 
      commit('setprogEntrevistaState', false);
       commit('setMostrarFiltro', false); 
      commit('setcrearEntrevistaState', false); 
    }
  },
  modules: {}
});
