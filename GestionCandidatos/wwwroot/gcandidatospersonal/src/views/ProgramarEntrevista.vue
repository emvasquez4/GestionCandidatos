<template>
    <div>
     <FrmProg_Entrevista />
      <TablaProgEntrevista />
    </div>
   </template>
   
   <script>
     import TablaProgEntrevista from '../components/Comunes/Tabla ProgEntrevistas.vue'      
     import FrmProg_Entrevista from '@/components/Entrevistas/frmProg_Entrevista.vue';
   
     export default {
     
   
       components: {
        FrmProg_Entrevista,
        TablaProgEntrevista,
       },
     }
   </script>