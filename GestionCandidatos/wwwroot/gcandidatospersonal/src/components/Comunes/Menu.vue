<!-- Menu.vue -->
<template>
  <v-navigation-drawer app>
    <v-list>
      <v-subheader>Menú</v-subheader>
      <v-list-group
        v-for="grupo in menuGrupos"
        :key="grupo.view"
        :prepend-icon="grupo.icon"
      >
        <template v-slot:activator>
          <v-list-item-content>
            <v-list-item-title>{{ grupo.view }}</v-list-item-title>
          </v-list-item-content>
        </template>
        <v-list-item
          v-for="permiso in grupo.permisos"
          :key="permiso.id"
          :to="permiso.to"
        >
          <v-list-item-icon>
            <v-icon>{{ permiso.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-title>{{ permiso.titulo }}</v-list-item-title>
        </v-list-item>
      </v-list-group>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  props: {
    permisos: Array
  },
  computed: {
    menuGrupos() {
      return this.permisos;
    }
  }
};
</script>
