<template>
    <nav class="navbar">
      <ul class="nav-list">
        <li class="nav-item" v-for="route in routes" :key="route.name">
          <router-link :to="route.path" class="nav-link">{{ route.name }}</router-link>
        </li>
      </ul>
    </nav>
  </template>
  
  <script>
  export default {
    data() {
      return {
        routes: [
          { name: 'Home', path: '/home' },
          { name: 'Crear Usuario', path: '/crearusuario' },
          { name: 'Crear Vacante', path: '/crearvacante' },
          { name: 'Crear Candidato', path: '/crearcandidato' },
          { name: 'Crear Permisos', path: '/crearpermisos' },
          { name: 'Programar Entrevista', path: '/progEntrevista' },
          { name: 'Crear Entrevista', path: '/crearEntrevista' },
          { name: 'Reporte Candidato', path: '/reporteCandidato' },
          { name: 'Reporte Permiso', path: '/reportePermiso' },
          { name: 'Reporte Entrevista', path: '/reporteEntrevista' }
        ]
      };
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
  