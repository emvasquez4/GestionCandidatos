<template>
    <div>
     <frmEntrevista />
      <TablaEntrevista />
    </div>
   </template>
   
   <script>
     import TablaEntrevista from '../components/Comunes/Tabla entrevista.vue'
     import frmEntrevista from '../components/Entrevistas/frmEntrevista.vue'    
   
     export default {
     
   
       components: {
        frmEntrevista,
        TablaEntrevista,
       },
     }
   </script>