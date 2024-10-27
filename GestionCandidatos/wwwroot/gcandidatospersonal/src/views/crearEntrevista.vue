<template>
    <div>
     <frmEntrevista />
      <TablaEntrevista />
    </div>
   </template>
   
   <script>
     import TablaEntrevista from '../components/Comunes/Tabla entrevista.vue'
     import frmEntrevista from '../components/Entrevistas/frmEntrevista.vue'    
   import {  mapState, mapMutations } from 'vuex';
     export default {
      data(){
        return{
          nuevo: false,
          actualizar: false,
          eliminar: false,
          consultar: false,
          pdf: false,
        }
      },

       components: {
        frmEntrevista,
        TablaEntrevista,
       },
       computed:{
        ...mapState(['permisos','userId']),
        ...mapMutations(['setcrearUsuarioState'])
       },
       created() {
          this.getPermisos();
        },
       methods:{
        async getPermisos() {
          try {
            await Services.UsuariosRolesService.getUserPermiso('CODUSUARIO', this.userId.toString(), 'ENTREVISTA').
            then(async response => {
              const permisos =  response.data
              this.nuevo = permisos.nuevo;
              this.actualizar = permisos.actualizar;
              this.eliminar = permisos.eliminar;
              this.consultar = permisos.consultar;
              this.pdf= permisos.pdf;
            }).catch(error => {
              // Manejo de errores
              this.Message = error.response?.data?.message || 'Ocurrió un error al ingresar.';
              this.showError = true;
            });
          } catch (error) {
              console.error('Error al obtener permisos:', error);
            }
        }
      },
     }
   </script>