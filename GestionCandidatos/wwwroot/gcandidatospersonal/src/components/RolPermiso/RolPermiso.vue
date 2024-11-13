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
          <v-row>
            <v-col cols="5">
                <v-select
                v-model="info.codigo_rol"
                :items="rolesDisponibles"
                label="Seleccionar Rol"
                item-value="codigo_rol"
                item-text="descripcion"
              ></v-select>
            </v-col>
          </v-row>
          <div v-if="info.codigo_rol != null">
            <v-simple-table>
              <thead>
                <tr>
                  <th>Permiso</th>
                  <th>Asignado</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="permiso in Permisos" :key="permiso.codigo_permiso">
                  <td>{{ permiso.descripcion }}</td>
                  <td>
                    <v-checkbox v-model="info.permisos" :value="permiso.codigo_permiso"></v-checkbox>
                  </td>
                </tr>
              </tbody>
            </v-simple-table>
  </div>
          <v-btn color="secondary" @click="Cerrar">Cerrar</v-btn>
          <v-btn color="primary" @click="saveUser">{{ isEditMode ? 'Actualizar' : 'Registrar' }}</v-btn>
        </v-form>
        <v-form v-if="isViewMode">
          <v-autocomplete
            label="User"
            v-model="info.codigo_usuario"
            :items="Usuarios"
            item-title="username"
            item-value="id"
          ></v-autocomplete>
          <v-autocomplete
            label="Permiso"
            v-model="info.codigo_rol"
            :items="Permisos"
            item-title="codigo_rol"
            item-value="codigo_rol"
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
      codigo_rol:'',
      permisos:[],
      },
      selectedRol:null,
      rolesDisponibles:[],
      dialog: false,
      showError: false,
      showSuccess: false,
      Message: null,
      Estados:[{text:'Activo',value:'A'},{text:'Inactivo',value:'I'}],
      Usuarios:[],
      Permisos:[],
      selectedPermisos:[],
      rules: 
      {
        required: value => !!value || 'Este campo es obligatorio',       
        email: value => /.+@.+\..+/.test(value) || 'Correo electrónico no válido'        
      }
    };
  },
  watch: {
    'info.nombre': 'generateUsername',
    'info.apellido': 'generateUsername',
    userInfo: {
        immediate: true,
        handler(newVal) {
          if (this.isEditMode || this.isViewMode) {
            this.info = { ...newVal };  // Cargar datos del usuario en el formulario
          }else{
            this.$validator.resetAll();
             this.info= {
                codigo_rol:'',
                descripcion: '',
                estado: '',
              };
          }
        }
      },
  },
  computed: {
    ...mapState(['crearUsuarioState','isViewMode','isEditMode']),
    ...mapMutations(['setcrearUsuarioState'])
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
    GetRoles() {
     Services.RolesService.getAll("TODOS","")
        .then(response => {
          // Manejo de la respuesta exitosa
           this.rolesDisponibles = response.data ;
           console.log("rol", this.rolesDisponibles)
          // Puedes agregar cualquier acción que necesites tras el registro exitoso.
        })
        .catch(error => {
          // Manejo de errores
        });
    },
    GetPermisos() {
     Services.PermisosService.getAll("TODOS","")
        .then(response => {
          // Manejo de la respuesta exitosa
           this.Permisos = response.data ;
           console.log("rol", this.Permisos)
          // Puedes agregar cualquier acción que necesites tras el registro exitoso.
        })
        .catch(error => {
          // Manejo de errores
        });
    },
    register() {
     Services.RolesPermisosService.addRolesPermisos(this.info)
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
        Services.RolesPermisosService.updateRolesPermisos(this.info)
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
      console.log(this.isEditMode);
      console.log(this.isEditMode);
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
        nombre: '',
        apellido: '',
        email: '',
        password: '',
        password2: '',
        username: null,
        };
        this.setcrearUsuarioState();
    },
  },
  created() {
    this.GetRoles();
    this.GetPermisos();
     this.GetUser();
   },
};
</script>
