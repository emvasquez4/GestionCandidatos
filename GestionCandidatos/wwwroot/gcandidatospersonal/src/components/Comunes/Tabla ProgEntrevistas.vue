<template>
    <v-card>
      <v-card-title>Programar Entrevista</v-card-title>
      <v-btn @click="mostrarFormulario" color="primary" class="ml-2">Crear</v-btn>
      <v-data-table :items="entrevista" :headers="headers">
        <template v-slot:item.acciones="{item}">      
          <v-btn @click="editarEntrevista(item.id)" color="info" class="mr-2">Editar</v-btn>
          <v-btn @click="eliminarEntrevista(item.id)" color="#F32C52" class="mr-2">Eliminar</v-btn>
          <v-btn @click="verEntrevista(item.id)" color="#d3d3d3" class="mr-2"><v-icon>mdi-eye</v-icon></v-btn>
        </template>
      </v-data-table>
    </v-card>
  </template>
  <script>
  export default {
    data() {
      return {
        entrevista: [
          // Aquí debes cargar los datos de los candidatos desde tu API o donde los tengas
          // Por ejemplo:
          {
            id: 1,
            candidato: 'Jose Antonio',
            fecha: '25/10/2024',
            lugar: 'Salon 1',
            hora: '10:00 a.m',                       
          },
          {
            id: 2,
            candidato: 'Jose Antonio',
            fecha: '25/10/2024',
            lugar: 'Salon 1',
            hora: '10:00 a.m',
          },
          {         
            id: 3,
            candidato: 'Jose Antonio',
            fecha: '25/10/2024',
            lugar: 'Salon 1',
            hora: '10:00 a.m',
          }
          // ...otras vacantes
        ],
        
        headers: [
          { text: 'Candidato(s)', value: 'candidato' },
          { text: 'Fecha', value: 'fecha' },
          { text: 'Lugar', value: 'lugar' },
          { text: 'Hora', value: 'hora' },          
          { text: 'Acciones', value: 'acciones', sortable: false },      
        ],
      };
    },
    methods: {
      mostrarFormulario() {
        // Lógica para mostrar el formulario
        console.log("opne", !this.$store.state.progEntrevistaState)
         this.$store.commit('setprogEntrevistaState', !this.$store.state.progEntrevistaState);
      },
      editarEntrevista(id) {
        // Lógica para editar con el ID proporcionado
      },
      eliminarEntrevista(id) {
        // Lógica para eliminar con el ID proporcionado
      },
      verEntrevista(id) {
        // Lógica para ver con el ID proporcionado
      },
    },
  };
  </script>