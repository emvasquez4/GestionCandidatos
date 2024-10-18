<!-- Menu.vue -->
<template>
  <v-navigation-drawer app>
    <v-list>
      <v-list-item v-for="item in menuItems" :key="item.title" :to="item.to">
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters(['userRoles']),
    menuItems() {
      const allMenuItems = {
        admin: [
          { title: 'Dashboard', icon: 'mdi-view-dashboard', to: '/dashboard' },
          { title: 'Users', icon: 'mdi-account', to: '/users' },
        ],
        editor: [
          { title: 'Posts', icon: 'mdi-post', to: '/posts' },
          { title: 'Comments', icon: 'mdi-comment', to: '/comments' },
        ],
        user: [
          { title: 'Profile', icon: 'mdi-account', to: '/profile' },
          { title: 'Settings', icon: 'mdi-settings', to: '/settings' },
        ],
      };

      let items = [];
      this.userRoles.forEach(role => {
        if (allMenuItems[role]) {
          items = items.concat(allMenuItems[role]);
        }
      });

      return items;
    },
  },
};
</script>
