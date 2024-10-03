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
          <v-text-field label="Nombre" v-model="firstName" :rules="[rules.required]"></v-text-field>
          <v-text-field label="Apellido" v-model="lastName" :rules="[rules.required]"></v-text-field>
          <v-text-field label="Correo electrónico" v-model="email" :rules="[rules.required, rules.email]"></v-text-field>
          <v-text-field label="Contraseña" v-model="password" type="password" :rules="[rules.required]"></v-text-field>
          <v-text-field label="Confirmar contraseña" v-model="confirmPassword" type="password" :rules="[rules.required]"></v-text-field>
          <v-btn color="primary" @click="register">Registrarse</v-btn>
            <v-btn color="primary" @click="Cerrar">Cerrar</v-btn>
        </v-form>
      </v-card>
    </v-container>
     </v-dialog>
  </v-main>
</template>

<script>
export default {
  data() {
    return {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
      dialog: false,
      rules: 
      {
        required: value => !!value || 'Este campo es obligatorio',       
        email: value => /.+@.+\..+/.test(value) || 'Correo electrónico no válido'        
      }
    };
  },
  methods: {
    register() {
      // Lógica para enviar los datos del formulario al servidor
      // Puedes usar Axios o cualquier otra librería para hacer la solicitud HTTP
      console.log('Datos de registro:', this.firstName, this.lastName, this.email, this.password);
    },
    Cerrar(){
       this.$store.commit('setcrearUsuarioState', !this.$store.state.crearUsuarioState);
    }
  },
};
</script>
