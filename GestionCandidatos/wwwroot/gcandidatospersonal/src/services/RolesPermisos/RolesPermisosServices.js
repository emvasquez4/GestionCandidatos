import axios from 'axios';
import apiClient from '../Api/api';

const  API_ROUTES = {
  ROLESPERMISOS: {
    GET_ALL: 'RolesPermisos/GetAllRolesPermisos',
    
    ADD: 'RolesPermisos/addRolesPermisos',
    UPDATE:`RolesPermisos/updateRolesPermisos/`,
    DELETE: `RolesPermisos/deleteRolesPermisos/`
  },
  // Agrega aquí más controladores y sus endpoints según sea necesario
};

const RolesPermisosService = {
    
    async addRolesPermisos(rolespermisos) {
      try {
        return apiClient.post(API_ROUTES.ROLESPERMISOS.ADD, rolespermisos);;
      } catch (error) {
        console.error('Error agregando rolespermisos', error);
        throw error;
      }
    },
    async updateRolesPermisos(data){
        return this.apiClient.post('${Controller}/updateRolesPermisos', data);
      },
      getAll(FiltroInicial, FiltroSecundario){
        var param = {
          "FiltroPrincipal": FiltroInicial,
          "FiltroSecundario": FiltroSecundario
        }
        return this.apiClient.post('${Controller}/GetAllRolesPermisos', param);
      },
    };
    
    export default RolesPermisosService;