<template>
    <v-card>
      <v-card-title>SOLICITUD DE PERMISOS</v-card-title>
      <v-btn @click="mostrarFormulario" color="primary" class="ml-2">Crear</v-btn>
      <v-data-table :items="permiso" :headers="headers">
        <template v-slot:item.acciones="{item}">      
          <v-btn @click="editarPermiso(item.id)" color="info" class="mr-2">Editar</v-btn>
          <v-btn @click="eliminarPermiso(item.id)" color="#F32C52" class="mr-2">Eliminar</v-btn>
          <v-btn @click="verPermiso(item.id)" color="#d3d3d3" class="mr-2"><v-icon>mdi-eye</v-icon></v-btn>
        </template>
      </v-data-table>
    </v-card>
  </template>
  <script>
  export default {
    data() {
      return {
        permiso: [
          // Aquí debes cargar los datos de los candidatos desde tu API o donde los tengas
          // Por ejemplo:
          {
            id: 1,
            empleado: 'Jose Antonio',
            diasausencia: '3',
            causa: 'Muerte Familiar',                      
          },
          {
            id: 2,
            empleado: 'Antonio Gomez',
            diasausencia: '15',
            causa: 'Incapacidad',
          },
          {         
            id: 3,
            empleado: 'Maria Rivas',
            diasausencia: '1',
            causa: 'Consulta Medica',
          }
          // ...otras vacantes
        ],
        
        headers: [
          { text: 'Empleado', value: 'empleado' },
          { text: 'Dias de Ausencias', value: 'diasausencia' },
          { text: 'Causa', value: 'causa' },
          { text: 'Acciones', value: 'acciones', sortable: false },                
        ],
      };
    },
    methods: {
      mostrarFormulario() {
        // Lógica para mostrar el formulario
        console.log("opne", !this.$store.state.crearPermisoState)
         this.$store.commit('setcrearPermisoState', !this.$store.state.crearPermisoState);
         
      },
      editarPermiso(id) {
        // Lógica para editar con el ID proporcionado
      },
      eliminarPermiso(id) {
        // Lógica para eliminar con el ID proporcionado
      },
      verPermiso(id) {
        // Lógica para ver con el ID proporcionado
        //this.$router.push({ name: 'setPermiso', params: { id: id } });
      },
    },
  };
  </script>