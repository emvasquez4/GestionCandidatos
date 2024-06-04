<template>
  <v-main>
    <v-container>
      <v-card class="pa-10"> <!-- Reducido el padding para hacerlo más compacto -->
        <v-card-title class="headline">BIENVENIDOS</v-card-title>
        <v-card-subtitle>Ingresa con tu cuenta</v-card-subtitle>
        <v-form>
          <v-text-field label="Usuario" v-model="username" class="small"></v-text-field>
          <v-text-field label="Contraseña" v-model="password" type="password" class="small"></v-text-field>
          <v-btn color="primary" @click="login">Login</v-btn>
        </v-form>
      </v-card>
    </v-container>
  </v-main>
</template>


 

<script>
export default {
  data: () => ({
    username: '',
    password: ''
  }),
  methods: {
    login() {
      // Aquí va tu lógica de autenticación
    }
  }
}
</script>