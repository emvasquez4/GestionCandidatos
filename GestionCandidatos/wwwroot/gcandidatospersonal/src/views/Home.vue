<template>
  <div>
   <Menu :menus="menus" />
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
    ...mapState(['menus'])
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