<template>
    <div id="app">
      <ReporteEntrevista />
    </div>
  </template>
  
  <script>
  import ReporteEntrevista from '../components/Entrevistas/ReporteEntrevista.vue';
  
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
      ReporteEntrevista
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
            await Services.UsuariosRolesService.getUserPermiso('CODUSUARIO', this.userId.toString(), 'USER').
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

  };
  </script>
  
  <style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
  </style>
  