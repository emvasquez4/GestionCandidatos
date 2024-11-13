<template>
  <v-main>
     <v-dialog
      v-model="crearUsuarioState"
      persistent
      max-width="1000px"
    >
    <v-container>
      <v-card class="pa-3">
        <v-card-title class="headline" v-if="!isViewMode">{{ isEditMode ? 'ACTUALIZAR USUARIO' : 'REGISTRO' }}</v-card-title>
          <v-card-title class="headline" v-if="isViewMode">DATOS DE USUARIO</v-card-title>
        <v-form v-if="!isViewMode">
          <v-text-field label="Nombre" v-model="info.nombre" :rules="[rules.required]"></v-text-field>
          <v-text-field label="Apellido" v-model="info.apellido" :rules="[rules.required]"></v-text-field>
           <v-text-field label="Username" v-model="info.username"></v-text-field>
          <v-text-field label="Correo electrónico" v-model="info.email" :rules="[rules.required, rules.email]"></v-text-field>
          <v-text-field label="Contraseña" v-model="info.password" type="password" :rules="[rules.required]"></v-text-field>
          <v-text-field v-if="!isEditMode" label="Confirmar contraseña" v-model="info.password2" type="password" :rules="[rules.required]"></v-text-field>
          <v-btn color="secondary" @click="Cerrar">Cerrar</v-btn>
          <v-btn color="primary" @click="saveUser">{{ isEditMode ? 'Actualizar' : 'Registrar' }}</v-btn>
        </v-form>
        <v-form v-if="isViewMode">
          <v-text-field label="Nombre" readonly v-model="info.nombre" :rules="[rules.required]"></v-text-field>
          <v-text-field label="Apellido" readonly v-model="info.apellido" :rules="[rules.required]"></v-text-field>
           <v-text-field label="Username" readonly v-model="info.username"></v-text-field>
          <v-text-field label="Correo electrónico" readonly v-model="info.email" :rules="[rules.required, rules.email]"></v-text-field>
          <v-text-field label="Contraseña" readonly v-model="info.password" type="password" :rules="[rules.required]"></v-text-field>
          <v-text-field label="Confirmar contraseña" readonly v-model="info.password2" type="password" :rules="[rules.required]"></v-text-field>
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
      nombre: '',
      apellido: '',
      email: '',
      password: '',
      password2: '',
      username: null,
      },
      dialog: false,
      showError: false,
      showSuccess: false,
      Message: null,
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
                nombre: '',
                apellido: '',
                email: '',
                password: '',
                password2: '',
                username: null,
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
    register() {
     Services.UsuariosService.addUsuario(this.info)
        .then(response => {
          // Manejo de la respuesta exitosa
          var creacion = response.data;
           this.Message = error.response?.data?.message || 'Se ha creado el usuario exitosamente.';
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
        Services.UsuariosService.updateUser(this.info)
          .then(response => {
            this.Message = 'Usuario actualizado exitosamente';
            this.showSuccess = true;
            this.resetForm();
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
        nombre: '',
        apellido: '',
        email: '',
        password: '',
        password2: '',
        username: null,
        };
        this.setcrearUsuarioState();
    },
    generateUsername() {
      // Tomar las primeras tres letras del nombre y las primeras tres del apellido.
      if(this.info.nombre && this.info.apellido){
        const firstPart = this.info.nombre.slice(0, 3).toLowerCase();
      const lastPart = this.info.apellido.slice(0, 3).toLowerCase();

      // Generar un número aleatorio entre 100 y 999 para hacerlo más único.
      const randomNumber = Math.floor(100 + Math.random() * 900);

      // Unir las partes y el número.
      this.info.username = `${firstPart}${lastPart}${randomNumber}`;

      }
      
    },
  },
};
</script>
