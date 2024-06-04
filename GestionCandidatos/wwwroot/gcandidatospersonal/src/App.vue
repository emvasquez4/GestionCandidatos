<template>
  <v-app>
    
    <Barra />
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import Barra from '../src/components/Comunes/Toolbar.vue'
export default {
  components: {
      Barra,
  },
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
