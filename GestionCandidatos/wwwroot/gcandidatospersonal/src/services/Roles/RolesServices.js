import axios from 'axios';
import apiClient from '../Api/api';

const  API_ROUTES = {
  ROLES: {
    GET_ALL: 'Roles/GetAllRoles',
    
    ADD: 'Roles/addRoles',
    UPDATE:`Roles/updateRoles/`,
    DELETE: `Roles/deleteRoles/`
  },
  // Agrega aquí más controladores y sus endpoints según sea necesario
};

const RolesService = {
    
    async addRoles(roles) {
      try {
        return apiClient.post(API_ROUTES.ROLES.ADD, roles);;
      } catch (error) {
        console.error('Error agregando roles', error);
        throw error;
      }
    },
async updateRoles(data){
    return this.apiClient.post('${Controller}/updateRoles', data);
  },
  getAll(FiltroInicial, FiltroSecundario){
    var param = {
      "FiltroPrincipal": FiltroInicial,
      "FiltroSecundario": FiltroSecundario
    }
    return this.apiClient.post('${Controller}/GetAllRoles', param);
  },
};

export default RolesService;