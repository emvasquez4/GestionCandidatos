<template>
    <div>
     <FrmPermisos />
      <TablaPermisos />
    </div>
   </template>
   
   <script>
     import TablaPermisos from '../components/Comunes/Tabla Permisos.vue'
     import frmPermisos from '../components/Permisos/frmPermisos.vue'
   
     export default {
     
   
       components: {
        frmPermisos,
        TablaPermisos,
       },
     }
   </script>