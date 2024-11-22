import axios from 'axios';
import apiClient from '../Api/api';

const  API_ROUTES = {
  USERROL: {
    GET_ALL: 'Usuarios_Roles/GetAllUR',
    ADD: 'Usuarios_Roles/addUsuariosRoles',
    UPDATE:`Usuarios_Roles/updateUsuariosRoles/`,
    DELETE: `Usuarios_Roles/deleteUsuariosRoles/`,
    MENUS: 'Usuarios_Roles/GetUserRolePermiso',
    PERMISOS: 'Usuarios_Roles/getPermisosUsuarios'
  },
};

const UsuariosRolesService = {
  async addUsuarioRole(usuario) {
    try {
      return apiClient.post(API_ROUTES.USERROL.ADD, usuario);;
    } catch (error) {
      console.error('Error agregando usuario:', error);
      throw error;
    }
  },
  async updateUsuarioRole(data){
    return this.apiClient.post(API_ROUTES.USERROL.UPDATE, data);
  },
  getAll(FiltroInicial, FiltroSecundario){
    try{
      var param = {
        "FiltroPrimario": FiltroInicial,
        "FiltroSecundario": FiltroSecundario
      }
      return apiClient.post(API_ROUTES.USERROL.GET_ALL, param);
    }catch(error){
      console.error('Error consultando usuario-rol:', error);
      throw error;
    }
  },

  async getUserRolPermiso(FiltroInicial, FiltroSecundario){
    try{
      var param = {
        "FiltroPrimario": FiltroInicial,
        "FiltroSecundario": FiltroSecundario
      }
      return await apiClient.post(API_ROUTES.USERROL.MENUS, param);
    }catch(error){
      console.error('Error consultando usuario-rol:', error);
      throw error;
    }
  },

  async getUserPermiso(FiltroInicial, FiltroSecundario, FiltroTerciario){
    try{
      var param = {
        "FiltroPrimario": FiltroInicial,
        "FiltroSecundario": FiltroSecundario,
        "FiltroTerciario": FiltroTerciario
      }
      return await apiClient.post(API_ROUTES.USERROL.PERMISOS, param);
    }catch(error){
      console.error('Error consultando permisos', error);
      throw error;
    }
  },
};

export default UsuariosRolesService;
