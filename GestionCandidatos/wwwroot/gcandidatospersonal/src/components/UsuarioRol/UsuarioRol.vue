<template>
  <v-main>
     <v-dialog
      v-model="crearUsuarioState"
      persistent
      max-width="1000px"
    >
    <v-container>
      <v-card class="pa-3">
        <v-card-title class="headline" v-if="!isViewMode">{{ isEditMode ? 'ACTUALIZAR ROL' : 'REGISTRO' }}</v-card-title>
          <v-card-title class="headline" v-if="isViewMode">DATOS DE ROL</v-card-title>
        <v-form v-if="!isViewMode">
          <v-autocomplete
            label="User"
            v-model="info.codigo_usuario"
            :items="Usuarios"
            item-title="username"
            item-value="username"
          ></v-autocomplete>
          <v-autocomplete
            label="Rol"
            v-model="info.codigo_rol"
            :items="Permisos"
            item-title="descripcion"
            item-value="codigo_rol"
          ></v-autocomplete>
          <v-btn color="secondary" @click="Cerrar">Cerrar</v-btn>
          <v-btn color="primary" @click="saveUser">{{ isEditMode ? 'Actualizar' : 'Registrar' }}</v-btn>
        </v-form>
        <v-form v-if="isViewMode">
          <v-autocomplete
            label="User"
            v-model="info.codigo_usuario"
            :items="Usuarios"
            item-title="username"
            readonly
          ></v-autocomplete>
          <v-autocomplete
            label="Permiso"
            v-model="info.codigo_rol"
            :items="Permisos"
            item-title="descripcion"
             readonly
          ></v-autocomplete>
          <v-btn color="secondary" @click="Cerrar()">Cerrar</v-btn>
        </v-form>
      </v-card>
    </v-container>
    <!-- Snackbar para mostrar el mensaje de error -->
    <v-snackbar
      v-model="showError"
      :timeout="3000"
      color="error"
    >
      {{ Message }}
    </v-snackbar>
    <v-snackbar
      v-model="showSuccess"
      :timeout="3000"
      color="success"
    >
      {{ Message }}
    </v-snackbar>
     </v-dialog>
  </v-main>
</template>

<script>
import { mapState, mapActions, mapMutations } from 'vuex';
import Services from '../../services/Services';
export default {
  props: {
      userInfo: {
        type: Object,
        default: () => ({})  // Pasar el usuario a editar cuando esté en modo edición
      },
     
  },
  data() {
    return {
      info: {
      codigo_rol:null,
      codigo_usuario:null,
      descripcion: '',
      estado: '',
      },
      dialog: false,
      showError: false,
      showSuccess: false,
      Message: null,
      Estados:[{text:'Activo',value:'A'},{text:'Inactivo',value:'I'}],
      Usuarios:[],
      Permisos:[],
      rules: 
      {
        required: value => !!value || 'Este campo es obligatorio',       
        email: value => /.+@.+\..+/.test(value) || 'Correo electrónico no válido'        
      }
    };
  },
  watch: {
    userInfo: {
        immediate: true,
        handler(newVal) {
          if (this.isEditMode || this.isViewMode) {
            this.info = { ...newVal };  // Cargar datos del usuario en el formulario
            console.log("info", this.info)
          }else{
            this.$validator.resetAll();
             this.info= {
                codigo_rol:'',
                codigo_usuario:'',
                descripcion: '',
                estado: '',
              };
          }
        }
      },
  },
  computed: {
    ...mapState(['crearUsuarioState','isViewMode','isEditMode']),
    ...mapMutations(['setcrearUsuarioState']),
  },
  methods: {
    GetUser() {
     Services.UsuariosService.getAll("TODOS","")
        .then(response => {
          // Manejo de la respuesta exitosa
           this.Usuarios = response.data ;
           console.log(this.Usuarios);
          // Puedes agregar cualquier acción que necesites tras el registro exitoso.
        })
        .catch(error => {
          // Manejo de errores
        });
    },
    GetPermisos() {
     Services.RolesService.getAll("TODOS","")
        .then(response => {
          // Manejo de la respuesta exitosa
           this.Permisos = response.data ;
           console.log("permisos",this.Permisos);
           var per = this.Permisos.find(s => s.codigo_rol == this.info.codigo_rol);
           console.log("s", per)
          // Puedes agregar cualquier acción que necesites tras el registro exitoso.
        })
        .catch(error => {
          // Manejo de errores
        });
    },
    register() {
     Services.UsuariosRolesService.addUsuarioRole(this.info)
        .then(response => {
          // Manejo de la respuesta exitosa
           this.Message = response.data ;
          this.showSuccess = true;
          // Puedes agregar cualquier acción que necesites tras el registro exitoso.
        })
        .catch(error => {
          // Manejo de errores
          this.Message = error.response?.data?.message || 'Ocurrió un error al registrar el usuario.';
          this.showError = true;
        });
    },
    updateUser() {
        // Lógica para actualizar el usuario
        Services.UsuariosRolesService.updateUsuarioRole(this.info)
          .then(response => {
            this.Message = 'Usuario actualizado exitosamente';
            this.showSuccess = true;
          })
          .catch(error => {
            this.Message = error.response?.data?.message || 'Ocurrió un error al actualizar el usuario.';
            this.showError = true;
          });
      },
     saveUser() {
        if (this.isEditMode) {
          this.updateUser();
        } else {
          this.register();
        }
      },
    Cerrar(){
      this.showError = false;
        this.showSuccess = false;
       this.info= {
       codigo_rol:'',
        codigo_usuario:'',
        descripcion: '',
        estado: 'A',
        };
        this.setcrearUsuarioState();
    },
  },
  created() {
     this.GetUser();
     this.GetPermisos();
   },
};
</script>
