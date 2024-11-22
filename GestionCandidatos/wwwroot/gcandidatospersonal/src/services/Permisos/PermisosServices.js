import axios from 'axios';
import apiClient from '../Api/api';

const  API_ROUTES = {
  PERMISOS: {
    GET_ALL: 'Permiso/GetAllPermisos',
    ADD: 'Permiso/addPermisos',
    UPDATE:`Permiso/updatePermiso/`,
    DELETE: `Permiso/deletePermiso/`
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
        return apiClient.post(API_ROUTES.PERMISOS.UPDATE, data);
      },
      getAll(FiltroInicial, FiltroSecundario){
        var param = {
          "FiltroPrimario": FiltroInicial,
          "FiltroSecundario": FiltroSecundario
        }
        return apiClient.post(API_ROUTES.PERMISOS.GET_ALL, param);
      },
    };
    
    export default PermisosService;