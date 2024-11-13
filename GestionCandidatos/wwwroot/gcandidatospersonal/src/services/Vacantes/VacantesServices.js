import axios from 'axios';
import apiClient from '../Api/api';

const  API_ROUTES = {
  VACANTES: {
    GET_ALL: 'Vacantes/GetAllVacantes',
    ADD: 'Vacantes/addVacantes',
    UPDATE:`Vacantes/UpdateVacante`,
    DELETE: `Vacantes/deleteVacantes`
  },
  // Agrega aquí más controladores y sus endpoints según sea necesario
};

const VacantesService = {
    
    async addVacantes(vacantes) {
      try {
        return apiClient.post(API_ROUTES.VACANTES.ADD, vacantes);;
      } catch (error) {
        console.error('Error agregando vacantes', error);
        throw error;
      }
    },
    async updateVacantes(data){
        returnapiClient.post(API_ROUTES.VACANTES.UPDATE, data);
      },
      getAll(FiltroInicial, FiltroSecundario){
        var param = {
          "FiltroPrincipal": FiltroInicial,
          "FiltroSecundario": FiltroSecundario
        }
        return apiClient.post(API_ROUTES.VACANTES.GET_ALL, param);
      },
    };
    
    export default VacantesService;