<template>
<v-card style="max-width: 90%; margin: 0px auto;">
  <v-data-table
    :headers="headers"
    :items="items"
    :items-per-page="5"
    class="elevation-1"
  >
    <template v-slot:item.acciones="{ item }">
      <v-btn
        v-if="btnQry"
        icon
        @click="$emit('consultar', item)"
      >
        <v-icon>mdi-eye</v-icon>
      </v-btn>
      <v-btn
        v-if="btnEdit"
        icon
        @click="$emit('editar', item)"
      >
        <v-icon>mdi-pencil</v-icon>
      </v-btn>
      <v-btn
        v-if="btnDel"
        icon
        @click="$emit('eliminar', item)"
      >
        <v-icon>mdi-delete</v-icon>
      </v-btn>
    </template>
  </v-data-table>
</v-card>
</template>

<script>
export default {
  props: {
    headers: {
      type: Array,
      required: true
    },
    items: {
      type: Array,
      required: true
    },
     btnEdit:{
      type: Boolean,
      required: true
    }, 
    btnDel:{
      type: Boolean,
      required: true
    }, 
     btnQry:{
      type: Boolean,
      required: true
    }, 
    botones: {
      type: Object,
      default: () => ({
        consultar: false,
        editar: false,
        eliminar: false
      })
    }
  }
};
</script>
