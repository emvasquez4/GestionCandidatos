<template>
    <div>
     <frmCandidatos />
      <TablaCandidatos />
    </div>
   </template>
   
   <script>
     import TablaCandidatos from '../components/Comunes/Tabla candidatos.vue'
     import frmCandidatos from '../components/Candidatos/frmCandidatos.vue'      
   
     export default {
     
   
       components: {
        frmCandidatos,
        TablaCandidatos,
       },
     }
   </script>