<!-- BotonTitulo.vue -->
<template>
  <v-card style="max-width: 90%; margin: 50px auto;">
    <div class="margin: auto">
    <v-row>
        <v-col cols="10"> <!-- Ajusta el tamaño de la columna para el título -->
            <v-card-title class="text-left;">{{ titulo }}</v-card-title> <!-- Añade 'text-left' para alinear el título a la izquierda -->
      </v-col>
        <v-col>
             <v-btn v-if="Permiso" @click="setcrearUsuarioState()" color="primary" class="float-right">
                Crear Usuario
            </v-btn>
        </v-col>
    </v-row>
  </div>
  </v-card>
</template>

<script>
import {mapState, mapMutations} from 'vuex';
export default {
  props: {
    titulo: {
      type: String,
      required: true
    },
    Permiso: {
      type: Boolean,
      required: true
    }
  },
  computed:{
    ...mapMutations(['setcrearUsuarioState'])
  },
  methods: {
    
  }
};
</script>
