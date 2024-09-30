<template>
    <div>
     <frmCrearVacantes />
      <TablaVacante />
    </div>
   </template>
   
   <script>
     import TablaVacante from '../components/Comunes/Tabla vacantes.vue'
     import frmCrearVacantes from '../components/Vacantes/frmCrearVacantes.vue'      
   
     export default {
     
   
       components: {
         frmCrearVacantes,
         TablaVacante,
       },
     }
   </script>