<template>
 <div>
  <CrearUsuario />
   <TablaUsuario />
 </div>
</template>

<script>
  import CrearUsuario from '../components/Usuarios/CrearUsuarios.vue'
  import TablaUsuario from '../components/Comunes/Tabla.vue'
  export default {
    components: {
      CrearUsuario,
      TablaUsuario,
    },
  }
</script>
