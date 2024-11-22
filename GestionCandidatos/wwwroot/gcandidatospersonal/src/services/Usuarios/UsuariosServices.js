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
    try{
    return apiClient.post(API_ROUTES.USUARIOS.UPDATE, data);
    }catch (error) {
      console.error('Error actualizando usuario:', error);
      throw error;
    }
  },
  getAll(FiltroInicial, FiltroSecundario){
    var param = {
      "FiltroPrimario": FiltroInicial,
      "FiltroSecundario": FiltroSecundario
    }
    return apiClient.post(API_ROUTES.USUARIOS.GET_ALL, param);
  },
};

export default UsuariosService;
