import axios from 'axios';
import apiClient from '../Api/api';

const  API_ROUTES = {
  ROLESPERMISOS: {
    GET_ALL: 'Roles_Permisos/GetAllRolesPermisos',
    ADD: 'Roles_Permisos/addRolesPermisos',
    UPDATE:`Roles_Permisos/updateRolesPermisos/`,
    DELETE: `Roles_Permisos/deleteRolesPermisos/`
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
        return apiClient.post(API_ROUTES.ROLESPERMISOS.UPDATE, data);
      },
      getAll(FiltroInicial, FiltroSecundario){
        var param = {
          "FiltroPrimario": FiltroInicial,
          "FiltroSecundario": FiltroSecundario
        }
        return apiClient.post(API_ROUTES.ROLESPERMISOS.GET_ALL, param);
      },
    };
    
    export default RolesPermisosService;