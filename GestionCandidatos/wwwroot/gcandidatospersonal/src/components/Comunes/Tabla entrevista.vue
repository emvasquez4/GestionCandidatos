<template>
    <v-card>
      <v-card-title>Entrevistas</v-card-title>
      <v-btn @click="mostrarFormulario" color="primary" class="ml-2">Nuevo</v-btn>
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
          // Aquí debes cargar los datos de las entrevistas desde tu API o donde los tengas
          // Por ejemplo:
          {
            id: 1,
            nombres: 'Jose Antonio',            
            puesto: 'Director de Proyectos',
            recomendacion: 'si',           
          },
          {
            id: 2,
            nombres: 'Jose Antonio',            
            puesto: 'Director de Proyectos',
            recomendacion: 'si',  
          },
          {         
            id: 3,
            nombres: 'Jose Antonio',            
            puesto: 'Director de Proyectos',
            recomendacion: 'si',  
          }
          // ...otras vacantes
        ],
        
        headers: [
          { text: 'Nombre(s)', value: 'nombres' },     
          { text: 'Puesto Solicitado', value: 'puesto' },
          { text: 'Recomendacion', value: 'recomendacion' },
          { text: 'Acciones', value: 'acciones', sortable: false },      
        ],
      };
    },
    methods: {
      mostrarFormulario() {
        // Lógica para mostrar el formulario
        console.log("opne", !this.$store.state.crearEntrevistaState)
         this.$store.commit('setcrearEntrevistaState', !this.$store.state.crearEntrevistaState);
      },
      editarEntrevista(id) {
        // Lógica para editar con el ID proporcionado
      },
      eliminarEntrevista(id) {
        // Lógica para eliminar con el ID proporcionado
      },
      verEntrevista(id) {
        // Lógica para ver con el ID proporcionado
        this.$router.push({ name: 'setEntrevista', params: { id: id } });
      },
    },
  };
  </script>