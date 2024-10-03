<template>
    <v-main>
      <v-dialog
        v-model="$store.state.progEntrevistaState"
        persistent
        max-width="600px"
      >
        <v-container>
          <v-card class="pa-3">
            <v-card-title class="headline"><b>PROGRAMAR ENTREVISTA</b></v-card-title>
            <v-form>
              <v-text-field label="Candidato" v-model="candidato"></v-text-field>
              <v-text-field label="Fecha" v-model="fecha" type="date"></v-text-field>
              <v-text-field label="Lugar" v-model="lugar"></v-text-field>
              <v-text-field label="Hora" v-model="hora" type="hour"></v-text-field>
              
              <v-divider class="my-4"></v-divider>
              <div class="d-flex justify-content-end">
                <v-btn color="green" @click="guardar" class="mr-2">Guardar</v-btn>
                <v-btn color="#F32C52" @click="cerrar">Cerrar</v-btn>
              </div>
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
        candiadto: '',
        fecha: '',
        lugar: '',
        hora: ''        
      };
    },
    methods: {
      guardar() {
        // Lógica para guardar el formulario
      },
      cerrar() {
        // Lógica para cerrar el formulario
        this.$store.commit('setprogEntrevistaState', !this.$store.state.progEntrevistaState);
      }
    },
  };
  </script>
  