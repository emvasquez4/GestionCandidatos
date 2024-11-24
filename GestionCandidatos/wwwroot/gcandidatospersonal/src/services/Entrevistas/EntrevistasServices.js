import axios from 'axios';
import apiClient from '../Api/api';

const  API_ROUTES = {
  ENTREVISTAS: {
    GET_ALL: 'Entrevistas/GetAllEntrevistas',
    ADD: 'Entrevistas/addEntrevista',
    UPDATE:`Entrevistas/updateEntrevista/`,
    DELETE: `Entrevistas/deleteEntrevista/`
  },
  // Agrega aquí más controladores y sus endpoints según sea necesario
};

const EntrevistasService = {
    
    async addEntrevista(entrevista) {
      try {
        return apiClient.post(API_ROUTES.ENTREVISTAS.ADD, entrevista);;
      } catch (error) {
        console.error('Error agregando entrevistas', error);
        throw error;
      }
    },
    async updateEntrevista(data){
        return apiClient.post(API_ROUTES.ENTREVISTAS.UPDATE, data);
      },
      getAll(FiltroInicial, FiltroSecundario){
        var param = {
          "FiltroPrimario": FiltroInicial,
          "FiltroSecundario": FiltroSecundario
        }
        return apiClient.post(API_ROUTES.ENTREVISTAS.GET_ALL, param);
      },
    };
    
    export default EntrevistasService;