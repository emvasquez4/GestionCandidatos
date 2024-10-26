<template>
    <div>
     <frmCandidatos />
      <TablaCandidatos />
    </div>
   </template>
   
   <script>
     import TablaCandidatos from '../components/Comunes/Tabla candidatos.vue'
     import frmCandidatos from '../components/Candidatos/frmCandidatos.vue'      
   
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
        frmCandidatos,
        TablaCandidatos,
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
            await Services.UsuariosRolesService.getUserPermiso('CODUSUARIO', this.userId.toString(), 'CANDIDATO').
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