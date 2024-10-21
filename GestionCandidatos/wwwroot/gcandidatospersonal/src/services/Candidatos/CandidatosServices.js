import axios from 'axios';
import apiClient from '../Api/api';

const  API_ROUTES = {
  CANDIDATOS: {
    GET_ALL: 'Candidatos/GetAllCandidatos',
    
    ADD: 'Candidatos/addCandidato',
    UPDATE:`Candidatos/updateCandidato/`,
    DELETE: `Candidatos/deleteCandidato/`
  },
  // Agrega aquí más controladores y sus endpoints según sea necesario
};

const CandidatosService = {
   
    async addCandidato(candidato) {
      try {
        return apiClient.post(API_ROUTES.CANDIDATOS.ADD, candidato);;
      } catch (error) {
        console.error('Error agregando candidatos', error);
        throw error;
      }
    },
async updateCandidato(data){
    return this.apiClient.post('${Controller}/updateCandidato', data);
  },
  getAll(FiltroInicial, FiltroSecundario){
    var param = {
      "FiltroPrincipal": FiltroInicial,
      "FiltroSecundario": FiltroSecundario
    }
    return this.apiClient.post('${Controller}/GetAllCandidatos', param);
  },
};

export default CandidatosService;