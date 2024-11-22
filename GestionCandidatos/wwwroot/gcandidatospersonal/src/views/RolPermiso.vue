<template>
  <div>
   <Menu :menus="menus" />
   <BotonTitulo titulo="Gestión de Usuario-Rol" :Permiso="nuevo" :PermisoFiltro="consultar" nombrebtn="Crear Relacion"/>
    <v-slide-y-transition>
       <Filtros 
         v-if="consultar" 
         :opciones="filtros" 
         @filtrar="filtrarUsuarios" 
       />
     </v-slide-y-transition>
   <CrearUsuario 
     :userInfo="selectedUser"
   />
    <TablaUsuario 
    :headers="headers"
    :items="usuarios"
     :btnQry="consultar"
     :btnEdit="actualizar"
     :btnDel="eliminar"
      :loading="loading"
     @consultar="consultarUsuario"
     @editar="editarUsuario"
     @eliminar="eliminarUsuario"
    />
 
    <v-overlay :value="loading" absolute>
       <v-progress-circular indeterminate size="64"></v-progress-circular>
     </v-overlay>
  </div>
 </template>
 
 <script>
   import {  mapState, mapMutations } from 'vuex';
   import BotonTitulo from '../components/Comunes/HeaderBoton.vue';
   import Filtros from '../components/Comunes/Filtros.vue';
   import CrearUsuario from '../components/RolPermiso/RolPermiso.vue'
   import TablaUsuario from '../components/Comunes/Tabla.vue'
   import Services from '../services/Services';
   import Menu from '../components/Comunes/Menu.vue';
   export default {
      components: {
       BotonTitulo,
       Filtros,
       CrearUsuario,
       TablaUsuario,
       Menu,
     },
     data(){
       return {
         nuevo: false,
         actualizar: false,
         eliminar: false,
         consultar: false,
         pdf: false,
         loading: false,
         isEditMode: false,
         isViewMode: false,
         selectedUser: null,
         usuarios:[],
         headers:[
           {text: 'Codigo de Rol', value: 'codigo_rol'},
           {text: 'Codigo de usuario', value: 'codigo_usuario'},
            { text: 'Acciones', value: 'acciones', sortable: false }
         ]
       }
     },
      computed: {
     ...mapState(['permisos', 'userId','menus']),
        ...mapMutations(['setcrearUsuarioState','setIsViewMode','setIsEditMode'])
     }, 
     methods: {
     async getPermisos() {
       try {
          await Services.UsuariosRolesService.getUserPermiso('CODUSUARIO', this.userId.toString(), 'ROLPERMISO').
          then(async response => {
             const permisos =  response.data
             this.nuevo = permisos.nuevo;
             this.actualizar = permisos.actualizar;
             this.eliminar = permisos.eliminar;
             this.consultar = permisos.consultar;
             this.pdf= permisos.pdf;
             console.log("permisos", permisos)
          }).catch(error => {
               // Manejo de errores
               this.Message = error.response?.data?.message || 'Ocurrió un error al ingresar.';
               this.showError = true;
             });
       } catch (error) {
         console.error('Error al obtener permisos:', error);
       }
     },
     filtrarUsuarios({filtro, valorFiltrado}) {
        this.loading = true;
        Services.UsuariosRolesService.getAll(filtro, valorFiltrado)
         .then(response => {
           // Manejo de la respuesta exitosa
           this.usuarios = response.data;
           console.log("usuarios", this.usuarios)
            this.Message = error.response?.data?.message || 'Se ha encontrado información.';
           this.showSuccess = true;
           // Puedes agregar cualquier acción que necesites tras el registro exitoso.
         })
         .catch(error => {
           // Manejo de errores
           this.Message = error.response?.data?.message || 'Ocurrió un error al registrar el usuario.';
           this.showError = true;
         })
         .finally(() => {
         this.loading = false;  // Ocultar el spinner
         });
     },
     consultarUsuario(item) {
        this.loading = true;
       this.$store.commit('setIsEditMode', false);
        this.$store.commit('setIsViewMode', true);
       this.selectedUser = { ...item };
        this.setcrearUsuarioState;
         this.loading = false;
     },
     editarUsuario(item) {
      this.$store.commit('setIsEditMode', true);
        this.$store.commit('setIsViewMode', false);
       this.selectedUser = { ...item };    // Cargar los datos del usuario seleccionado
       this.setcrearUsuarioState;
     },
     eliminarUsuario(item) {
        
     },
      filtrarRol() {
       this.loading = true;
       Services.UsuariosService.getAll("TODOS", valorFiltrado)
        .then(response => {
          // Manejo de la respuesta exitosa
          this.usuarios = response.data;
          console.log("usuarios", this.usuarios)
           this.Message = error.response?.data?.message || 'Se ha encontrado información.';
          this.showSuccess = true;
          // Puedes agregar cualquier acción que necesites tras el registro exitoso.
        })
        .catch(error => {
          // Manejo de errores
          this.Message = error.response?.data?.message || 'Ocurrió un error al registrar el usuario.';
          this.showError = true;
        })
        .finally(() => {
        this.loading = false;  // Ocultar el spinner
        });
    },
   },
   created() {
     this.getPermisos();
   },
   methods: { 
    resetAllStates() { 
      this.$store.dispatch('resetStates'); 
    } 
  }, 
   mounted() {
     this.resetAllStates(); 
     }
   }
 </script>
 