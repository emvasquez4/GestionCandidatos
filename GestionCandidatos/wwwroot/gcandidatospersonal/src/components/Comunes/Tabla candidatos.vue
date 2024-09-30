<template>
    <v-card>
      <v-card-title>Solicitud de Candidatos</v-card-title>
      <v-btn @click="mostrarFormulario" color="primary" class="ml-2">Nuevo</v-btn>
      <v-data-table :items="vacantes" :headers="headers">
        <template v-slot:item.acciones="{item}">      
          <v-btn @click="editarCandidato(item.id)" color="info" class="mr-2">Editar</v-btn>
          <v-btn @click="eliminarCandidato(item.id)" color="#F32C52" class="mr-2">Eliminar</v-btn>
          <v-btn @click="verCandidato(item.id)" color="#d3d3d3" class="mr-2"><v-icon>mdi-eye</v-icon></v-btn>
        </template>
      </v-data-table>
    </v-card>
  </template>
  <script>
  export default {
    data() {
      return {
        vacantes: [
          // Aquí debes cargar los datos de los candidatos desde tu API o donde los tengas
          // Por ejemplo:
          {
            id: 1,
            nombres: 'Jose Antonio',
            apellido: 'Zuniga Flores',
            profesion: 'Administrador de Empresas',
            puesto: 'Director de Proyectos',
            contactos: '7550 7555',           
          },
          {
            id: 2,
            nombres: 'Agustino Hessen',
            apellido: 'Martir Cley',
            profesion: 'Contador Auxiliar',
            puesto: 'Contabilidad',
            contactos: '7550 7555',
          },
          {         
            id: 3,
            nombres: 'Jaime',
            apellido: 'Loreto Castro',
            profesion: 'Ingenieria en Sistemas',
            puesto: 'Programador',
            contactos: '7550 7555',
          }
          // ...otras vacantes
        ],
        
        headers: [
          { text: 'Nombre(s)', value: 'nombres' },
          { text: 'Apellidos', value: 'apellido' },
          { text: 'Profesion', value: 'profesion' },
          { text: 'Puesto Solicitado', value: 'puesto' },
          { text: 'Contactos', value: 'contactos' },
          { text: 'Acciones', value: 'acciones', sortable: false },      
        ],
      };
    },
    methods: {
      mostrarFormulario() {
        // Lógica para mostrar el formulario
        console.log("opne", !this.$store.state.crearCandidatoState)
         this.$store.commit('setcrearCandidatoState', !this.$store.state.crearCandidatoState);
      },
      editarCandidato(id) {
        // Lógica para editar con el ID proporcionado
      },
      eliminarCandidato(id) {
        // Lógica para eliminar con el ID proporcionado
      },
      verCandidato(id) {
        // Lógica para ver con el ID proporcionado
        this.$router.push({ name: 'setCandidato', params: { id: id } });
      },
    },
  };
  </script>