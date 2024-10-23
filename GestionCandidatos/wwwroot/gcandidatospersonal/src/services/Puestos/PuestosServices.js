import axios from 'axios';
import apiClient from '../Api/api';

const  API_ROUTES = {
  PUESTOS: {
    GET_ALL: 'Puestos/GetAllPuestos',
    
    ADD: 'Puestos/addPuesto',
    UPDATE:`Puestos/updatePuesto/`,
    DELETE: `Puestos/deletePuesto/`
  },
  // Agrega aquí más controladores y sus endpoints según sea necesario
};


const PuestosService = {
    
    async addPuesto(puesto) {
      try {
        return apiClient.post(API_ROUTES.PUESTOS.ADD, puesto);;
      } catch (error) {
        console.error('Error agregando puestos', error);
        throw error;
      }
    },

    async updatePuesto(data){
        return this.apiClient.post('${Controller}/updatePuesto', data);
      },
      getAll(FiltroInicial, FiltroSecundario){
        var param = {
          "FiltroPrincipal": FiltroInicial,
          "FiltroSecundario": FiltroSecundario
        }
        return this.apiClient.post('${Controller}/GetAllPuestos', param);
      },
    };
    
    export default PuestosService;