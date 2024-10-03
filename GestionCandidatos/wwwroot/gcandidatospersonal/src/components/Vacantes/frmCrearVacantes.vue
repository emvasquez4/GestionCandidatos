<template>
    <v-main>
       <v-dialog
        v-model="$store.state.crearVacanteState"
        persistent
        max-width="600px"
      >
      <v-container>
        <v-card class="pa-3">
          <v-card-title class="headline"><b>REGISTRO DE VACANTES</b></v-card-title>
          <v-form>
            <v-text-field label="Vacante" v-model="vacante"></v-text-field>
            <v-text-field label="Cantidad de Vacantes" v-model="cantVacantes"></v-text-field>
            <v-text-field label="Salario Asignado" v-model="salario"></v-text-field>    
            <v-btn color="green" @click="register" class="mr-2">Crear</v-btn>
              <v-btn color="#F32C52" @click="Cerrar" class="mr-2">Cerrar</v-btn>
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
        vacante: '',
        cantVacantes: '',
        salario: '',        
      };
    },
    methods: {
      register() {
        // Lógica para enviar los datos del formulario al servidor
        // Puedes usar Axios o cualquier otra librería para hacer la solicitud HTTP
        console.log('setcrearVacanteState', this.vacante, this.cantVacantes, this.salario);
      },
      Cerrar(){
         this.$store.commit('setcrearVacanteState', !this.$store.state.crearVacanteState);
      }
    },
  };
  </script>
  