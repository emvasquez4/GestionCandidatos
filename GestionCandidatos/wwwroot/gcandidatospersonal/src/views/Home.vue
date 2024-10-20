<template>
  <div>
   <Menu :permisos="permisos" />
  </div>
</template>

<script>
import Menu from '../components/Comunes/Menu.vue';
import {mapState} from 'vuex';
export default {
  name: 'Home',
  components: {
    Menu
  },
  computed: {
    ...mapState(['permisos'])
  },
  data() {
    return {
    };
  },
  created() {
  },
  methods: {
  }
};
</script>