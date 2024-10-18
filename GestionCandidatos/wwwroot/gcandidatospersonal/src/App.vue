<template>
  <v-app>
    <Barra />
    <v-main style="background-color: #f5f5f5;">
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
