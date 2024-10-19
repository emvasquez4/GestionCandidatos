<template>
  <v-main>
     <v-dialog
      v-model="$store.state.crearUsuarioState"
      persistent
      max-width="600px"
    >
    <v-container>
      <v-card class="pa-3">
        <v-card-title class="headline">REGISTRO</v-card-title>
        <v-form>
          <v-text-field label="Nombre" v-model="info.nombre" :rules="[rules.required]"></v-text-field>
          <v-text-field label="Apellido" v-model="info.apellido" :rules="[rules.required]"></v-text-field>
           <v-text-field label="Username" v-model="info.username"></v-text-field>
          <v-text-field label="Correo electrónico" v-model="info.email" :rules="[rules.required, rules.email]"></v-text-field>
          <v-text-field label="Contraseña" v-model="info.password" type="password" :rules="[rules.required]"></v-text-field>
          <v-text-field label="Confirmar contraseña" v-model="info.password2" type="password" type="password" :rules="[rules.required]"></v-text-field>


          <v-text-field label="Nombre" v-model="firstName" ></v-text-field>
          <v-text-field label="Apellido" v-model="lastName" ></v-text-field>
          <v-text-field label="Correo electrónico" v-model="email" ></v-text-field>
          <v-text-field label="Contraseña" v-model="password" type="password" ></v-text-field>
          <v-text-field label="Confirmar contraseña" v-model="confirmPassword" ></v-text-field>
          <v-btn color="primary" @click="register">Registrarse</v-btn>
            <v-btn color="primary" @click="Cerrar">Cerrar</v-btn>
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
import Services from '../../services/Services';
export default {
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
    Cerrar(){
       this.$store.commit('setcrearUsuarioState', !this.$store.state.crearUsuarioState);
       this.info= {
        nombre: '',
        apellido: '',
        email: '',
        password: '',
        password2: '',
        username: null,
        }
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
