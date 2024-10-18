<template>
  <v-card style="max-width: 90%; margin: auto;">
    <v-row no-gutters align="center"> <!-- Añade 'align="center"' para alinear verticalmente -->
      <v-col cols="10"> <!-- Ajusta el tamaño de la columna para el título -->
        <v-card-title class="text-left">Usuarios</v-card-title> <!-- Añade 'text-left' para alinear el título a la izquierda -->
      </v-col>
      <v-col cols="2"  style="padding-rigth: 3em;"> <!-- Ajusta el tamaño de la columna para el botón -->
        <v-btn @click="mostrarFormulario" color="primary" class="float-right">Nuevo</v-btn> <!-- Añade 'float-right' para alinear el botón a la derecha -->
      </v-col>
    </v-row>
    <v-data-table :items="usuarios" :headers="headers">
      <template v-slot:item.acciones="{ item }">
        <v-btn @click="editarUsuario(item.id)" color="info">Editar</v-btn>
      </template>
    </v-data-table>
  </v-card>
</template>
<script>
export default {
  data() {
    return {
      usuarios: [
        // Aquí debes cargar los datos de los usuarios desde tu API o donde los tengas
        // Por ejemplo:
        {
          id: 1,
          nombre: 'Hector',
          apellidoPat: 'Orellana',
          apellidoMat: 'Solar',
          perfil: 'Administrador',
          sucursal: 'Bellavista',
          estado: 'Desactivada',
        },
        // ...otros usuarios
      ],
      headers: [
        { text: 'Nombre', value: 'nombre' },
        { text: 'Apellido Pat.', value: 'apellidoPat' },
        { text: 'Apellido Mat.', value: 'apellidoMat' },
        { text: 'Perfil', value: 'perfil' },
        { text: 'Oficina', value: 'sucursal' },
        { text: 'Estado', value: 'estado' },
        { text: 'Acciones', value: 'acciones', sortable: false },
      ],
    };
  },
  methods: {
    mostrarFormulario() {
      // Lógica para mostrar el formulario de nuevo usuario
      console.log("opne", !this.$store.state.crearUsuarioState)
       this.$store.commit('setcrearUsuarioState', !this.$store.state.crearUsuarioState);
    },
    editarUsuario(id) {
      // Lógica para editar el usuario con el ID proporcionado
    },
  },
};
</script>
