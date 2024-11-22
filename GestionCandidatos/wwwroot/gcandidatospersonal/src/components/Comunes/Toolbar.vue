<template> 
  <v-app-bar app color="primary" dark> <div class="d-flex align-center">
     <v-img alt="Logo" class="shrink mr-2" contain src="https://cdn.vuetifyjs.com/images/" transition="scale-transition" width="40" /> 
     </div> <v-spacer></v-spacer> <!-- Añadir un nuevo v-spacer para empujar el botón al extremo derecho --> 
     <v-spacer></v-spacer> <!-- Añadir el botón de deslogueo -->
      <v-btn @click="logout" color="secondary"> Logout </v-btn>
       </v-app-bar>
</template>


<script>
export default {
  data() {
    return {
      routes: [
      
      { name: 'loginform', path: '/login' },     
        
        { name: 'Crear Usuario', path: '/crearusuario' },
        { name: 'Crear Vacante', path: '/crearvacante' },
        { name: 'Crear Candidato', path: '/crearcandidato' },
        { name: 'Crear Permisos', path: '/crearpermisos' },
        { name: 'Programar Entrevista', path: '/progEntrevista' },
        { name: 'Crear Entrevista', path: '/crearEntrevista' },
        { name: 'Reporte Candidato', path: '/reporteCandidato' },
        { name: 'Reporte Permiso', path: '/reportePermiso' },
        { name: 'Reporte Entrevista', path: '/reporteEntrevista' }
      ],

    };
  },
  computed: { menus() { return this.$store.state.menus; } },
  methods: { 
    logout() { 
      // Lógica de deslogueo 
       this.$store.commit('SET_MENUS', []);
      this.$store.dispatch('logout'); 
      this.$router.push('/login'); 
    } 
  }
};
</script>

<style scoped>
.navbar {
  background-color: #333;
  padding: 10px;
}
.nav-list {
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: space-around;
}
.nav-item {
  margin: 0 10px;
}
.nav-link {
  color: white;
  text-decoration: none;  
  padding: 10px 20px;
  border-radius: 4px;
  transition: background-color 0.3s ease;
}
.nav-link:hover {
  background-color: #555;
}
</style>