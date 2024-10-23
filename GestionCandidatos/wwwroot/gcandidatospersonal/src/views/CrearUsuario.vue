<template>
 <div>
  <BotonTitulo titulo="Gestión de Usuarios" :Permiso="nuevo" />
  <CrearUsuario />
   <TablaUsuario />
 </div>
</template>

<script>
  import {  mapState, mapMutations } from 'vuex';
  import BotonTitulo from '../components/Comunes/HeaderBoton.vue';
  import CrearUsuario from '../components/Usuarios/CrearUsuarios.vue'
  import TablaUsuario from '../components/Comunes/Tabla.vue'
  import Services from '../services/Services';
  export default {
    data(){
      return {
        nuevo: false,
        actualizar: false,
        eliminar: false,
        consultar: false,
        pdf: false,
      }
    },
    components: {
      BotonTitulo,
      CrearUsuario,
      TablaUsuario,
       ...mapState(['menus']),
       ...mapMutations(['setcrearUsuarioState'])
    },
    methods: {
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
  created() {
    this.getPermisos();
  },
  computed: {
    ...mapState(['permisos', 'userId'])
  }
  }
</script>
