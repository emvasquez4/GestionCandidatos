import axios from 'axios';
import apiClient from '../Api/api';

const  API_ROUTES = {
  MENUS: {
    GET_ALL: 'Menus/GetAllMenus',
    
    ADD: 'Menus/addMenu',
    UPDATE:`Menus/updateMenu/`,
    DELETE: `Menus/deleteMenu/`
  },
  // Agrega aquí más controladores y sus endpoints según sea necesario
};

const MenusService = {
    
    async addMenu(menu) {
      try {
        return apiClient.post(API_ROUTES.MENUS.ADD, menu);;
      } catch (error) {
        console.error('Error agregando menus', error);
        throw error;
      }
    },
    async updateMenu(data){
        return this.apiClient.post('${Controller}/updateMenu', data);
      },
      getAll(FiltroInicial, FiltroSecundario){
        var param = {
          "FiltroPrincipal": FiltroInicial,
          "FiltroSecundario": FiltroSecundario
        }
        return this.apiClient.post('${Controller}/GetAllMenus', param);
      },
    };
    
    export default MenusService;