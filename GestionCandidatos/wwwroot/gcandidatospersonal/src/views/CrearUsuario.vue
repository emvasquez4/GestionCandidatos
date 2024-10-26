<template>
 <div>
  <BotonTitulo titulo="Gestión de Usuarios" :Permiso="nuevo" :PermisoFiltro="consultar"/>
   <v-slide-y-transition>
      <Filtros 
        v-if="consultar" 
        :opciones="filtros" 
        @filtrar="filtrarUsuarios" 
      />
    </v-slide-y-transition>
  <CrearUsuario />
   <TablaUsuario 
   :headers="headers"
   :items="usuarios"
   :botones="{
    consultar: consultar,
    editar: editar,
    eliminar: eliminar
   }"
    @consultar="consultarUsuario"
    @editar="editarUsuario"
    @eliminar="eliminarUsuario"
   />
 </div>
</template>

<script>
  import {  mapState, mapMutations } from 'vuex';
  import BotonTitulo from '../components/Comunes/HeaderBoton.vue';
  import Filtros from '../components/Comunes/Filtros.vue';
  import CrearUsuario from '../components/Usuarios/CrearUsuarios.vue'
  import TablaUsuario from '../components/Comunes/Tabla.vue'
  import Services from '../services/Services';
  export default {
     components: {
      BotonTitulo,
      Filtros,
      CrearUsuario,
      TablaUsuario,
    },
    data(){
      return {
        nuevo: false,
        actualizar: false,
        eliminar: false,
        consultar: false,
        pdf: false,
        usuarios:[],
        headers:[
          {text: 'id', value: 'id'},
          {text: 'usuario', value: 'username'},
          {text: 'nombres', value: 'nombre'},
          {text: 'apellido', value: 'apellido'},
          {text: 'Estado', value: 'estado'},
        ]
      }
    },
     computed: {
    ...mapState(['permisos', 'userId']),
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
    },
    filtrarUsuarios({filtro, valorFiltrado}) {
       Services.UsuariosService.getAll(filtro, valorFiltrado)
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
        });
    },
    consultarUsuario(item) {
      
    },
    editarUsuario(item) {
      
    },
    eliminarUsuario(item) {
     
    }
  },
  created() {
    this.getPermisos();
  },
  }
</script>
