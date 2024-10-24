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
import Menu from '../src/components/Comunes/menu2.vue';
export default {
  components: {
      Barra,
      Menu
  },
  name: 'App',

  data: () => ({
    //
  }),
};
</script>

<style>
/**esto es formato para el menu */
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: ant
}