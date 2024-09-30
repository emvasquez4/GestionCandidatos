<template>
  <v-card>
    <v-card-title>Vacantes</v-card-title>
    <v-btn @click="mostrarFormulario" color="primary">Nuevo</v-btn>
    <v-data-table :items="vacantes" :headers="headers">
      <template v-slot:item.acciones="{item}">      
        <v-btn @click="editarVacante(item.id)" color="info">Editar</v-btn>
        <v-btn @click="eliminarVacante(item.id)" color="#F32C52">Eliminar</v-btn>
      </template>
    </v-data-table>
  </v-card>
</template>
<script>
export default {
  data() {
    return {
      vacantes: [
        // Aquí debes cargar los datos de las vacantes desde tu API o donde los tengas
        // Por ejemplo:
        {
          id: 1,
          vacante: 'Director de Proyectos',
          CantVacante: '2',
          salario: '$3000.00',           
        },
        {
          id: 2,
          vacante: 'Developer backend',
          CantVacante: '3',
          salario: '$2,500.00',
        },
        {         
          id: 3,
          vacante: 'Secretario',
          CantVacante: '1',
          salario: '$560.00', 
        }
        // ...otras vacantes
      ],
      
      headers: [
        { text: 'Vacantes', value: 'vacante' },
        { text: 'Disponibles', value: 'CantVacante' },
        { text: 'Salario Asignado', value: 'salario' },
        { text: 'Acciones', value: 'acciones', sortable: false },      
      ],
    };
  },
  methods: {
    mostrarFormulario() {
      // Lógica para mostrar el formulario
      console.log("opne", !this.$store.state.crearVacanteState)
       this.$store.commit('setcrearVacanteState', !this.$store.state.crearVacanteState);
    },
    editarVacante(id) {
      // Lógica para editar con el ID proporcionado
    },
  },
};
</script>
