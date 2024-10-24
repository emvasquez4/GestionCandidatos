<template>
    <div id="app">
      <ReporteEntrevista />
    </div>
  </template>
  
  <script>
  import ReporteEntrevista from '../components/Entrevistas/ReporteEntrevista.vue';
  
  export default {
    components: {
      ReporteEntrevista
    }
  };
  </script>
  
  <style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
  </style>
  