<template>
    <div>
     <FrmProg_Entrevista />
      <TablaProgEntrevista />
    </div>
   </template>
   
   <script>
     import TablaProgEntrevista from '../components/Comunes/Tabla ProgEntrevistas.vue'      
     import FrmProg_Entrevista from '@/components/Entrevistas/frmProg_Entrevista.vue';
   
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
        FrmProg_Entrevista,
        TablaProgEntrevista,
       },
      created() {
        this.getPermisos();
      },
       computed:{
        ...mapState(['permisos','userId']),
        ...mapMutations(['setcrearUsuarioState'])
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