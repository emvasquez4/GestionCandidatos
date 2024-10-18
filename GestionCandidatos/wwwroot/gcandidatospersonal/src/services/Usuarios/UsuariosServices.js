import axios from 'axios';
import apiClient from '../Api/api';

const  API_ROUTES = {
  USUARIOS: {
    GET_ALL: 'Usuarios/GetAllUsuarios',
    GET_USER: `Usuarios/Login`,
    ADD: 'Usuarios/addUsuario',
    UPDATE:`Usuarios/updateUsuario/`,
    DELETE: `Usuarios/deleteUsuario/`
  },
  // Agrega aquí más controladores y sus endpoints según sea necesario
};

const UsuariosService = {
  async Login(usuario) {
    try {
      return apiClient.post(API_ROUTES.USUARIOS.GET_USER, usuario);
    } catch (error) {
      console.error('Error obteniendo usuarios:', error);
      throw error;
    }
  },
  async addUsuario(usuario) {
    try {
      return apiClient.post(API_ROUTES.USUARIOS.ADD, usuario);;
    } catch (error) {
      console.error('Error agregando usuario:', error);
      throw error;
    }
  },
  async updateUser(data){
    return this.apiClient.post('${Controller}/updateUsuario', data);
  },
  getAll(FiltroInicial, FiltroSecundario){
    var param = {
      "FiltroPrincipal": FiltroInicial,
      "FiltroSecundario": FiltroSecundario
    }
    return this.apiClient.post('${Controller}/GetAllUsuarios', param);
  },
};

export default UsuariosService;
