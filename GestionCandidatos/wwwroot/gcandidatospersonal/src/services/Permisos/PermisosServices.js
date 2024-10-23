import axios from 'axios';
import apiClient from '../Api/api';

const  API_ROUTES = {
  PERMISOS: {
    GET_ALL: 'Permisos/GetAllPermisos',
    
    ADD: 'Permisos/addPermiso',
    UPDATE:`Permisos/updatePermiso/`,
    DELETE: `Permisos/deletePermiso/`
  },
  // Agrega aquí más controladores y sus endpoints según sea necesario
};


const PermisosService = {
   
    async addPermiso(permiso) {
      try {
        return apiClient.post(API_ROUTES.PERMISOS.ADD, permiso);;
      } catch (error) {
        console.error('Error agregando permisos', error);
        throw error;
      }
    },

    async updatePermiso(data){
        return this.apiClient.post('${Controller}/updatePermiso', data);
      },
      getAll(FiltroInicial, FiltroSecundario){
        var param = {
          "FiltroPrincipal": FiltroInicial,
          "FiltroSecundario": FiltroSecundario
        }
        return this.apiClient.post('${Controller}/GetAllPermisos', param);
      },
    };
    
    export default PermisosService;