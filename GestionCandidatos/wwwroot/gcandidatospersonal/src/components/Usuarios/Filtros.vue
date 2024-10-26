<!-- Filtros.vue -->
<template>
  <div>
    <v-select
      v-model="selectedFilter"
      :items="filters"
      label="Seleccionar filtro"
      @change="updateFilter"
    ></v-select>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  data() {
    return {
      selectedFilter: 'all',
      filters: ['all', 'codigo'] // Puedes cargar estos filtros desde una API
    };
  },
  methods: {
    ...mapActions(['setFilter']),
    updateFilter() {
      this.setFilter(this.selectedFilter);
    }
  }
};
</script>
