<template>
    <div>
     <frmCrearVacantes />
      <TablaVacante />
    </div>
   </template>
   
   <script>
     import TablaVacante from '../components/Comunes/Tabla vacantes.vue'
     import frmCrearVacantes from '../components/Vacantes/frmCrearVacantes.vue'      
   
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
         frmCrearVacantes,
         TablaVacante,
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
            await Services.UsuariosRolesService.getUserPermiso('CODUSUARIO', this.userId.toString(), 'VACANTE').
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