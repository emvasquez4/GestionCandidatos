import axios from 'axios';
import apiClient from '../Api/api';

const  API_ROUTES = {
  VACANTES: {
    GET_ALL: 'Vacantes/GetAllVacantes',
    
    ADD: 'Vacantes/addVacante',
    UPDATE:`Vacantes/updateVacante/`,
    DELETE: `Vacantes/deleteVacante/`
  },
  // Agrega aquí más controladores y sus endpoints según sea necesario
};

const VacantesService = {
    
    async addVacantes(Vacantes) {
      try {
        return apiClient.post(API_ROUTES.VACANTES.ADD, vacantes);;
      } catch (error) {
        console.error('Error agregando vacantes', error);
        throw error;
      }
    },
    async updateVacantes(data){
        return this.apiClient.post('${Controller}/updateVacantes', data);
      },
      getAll(FiltroInicial, FiltroSecundario){
        var param = {
          "FiltroPrincipal": FiltroInicial,
          "FiltroSecundario": FiltroSecundario
        }
        return this.apiClient.post('${Controller}/GetAllVacantes', param);
      },
    };
    
    export default VacantesService;