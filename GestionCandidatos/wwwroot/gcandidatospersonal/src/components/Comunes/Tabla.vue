<template>
  <v-card>
    <v-card-title>Usuarios</v-card-title>
    <v-btn @click="mostrarFormulario" color="primary">Nuevo</v-btn>
    <v-data-table :items="usuarios" :headers="headers">
      <template v-slot:item.acciones="{ item }">       
        <v-btn @click="editarVacante(item.id)" color="info" class="mr-2">Editar</v-btn>
        <v-btn @click="eliminarVacante(item.id)" color="#F32C52" class="mr-2">Eliminar</v-btn>
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
