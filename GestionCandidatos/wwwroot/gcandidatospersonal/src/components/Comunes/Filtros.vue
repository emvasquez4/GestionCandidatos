<template>
  <v-dialog 
  v-model="mostrarFiltro"
  persistent
  max-width="600px"
    class="pa-4">
    <v-container>
      <v-card>
        <v-row  class="pa-3">
          <v-col>
            <v-autocomplete
              :items="opciones"
              v-model="filtroSeleccionado"
              label="Seleccione un filtro"
              @change="aplicarFiltro"
            ></v-autocomplete>
          </v-col>
          <v-col v-if="mostrarCampoAdicional">
              <v-text-field
                v-model="valorFiltro"
                label="Ingrese el valor del filtro"
                @input="aplicarFiltro"
              ></v-text-field>
          </v-col>
        </v-row>
        <div class="pa-4 text-end">
           <v-row>
          <v-col>
            <v-btn color="primary" @click="Cerrar">Cerrar</v-btn>
          </v-col>
        </v-row>
        </div>
       
     
      </v-card>
    </v-container>
  </v-dialog>
</template>

<script>
import { mapState, mapActions, mapMutations } from 'vuex';
export default {
  props: {
    opciones: {
      type: Array,
      default: () => [
        { text: 'Todos', value: 'todos' },
        { text: 'Activos', value: 'activos' },
        { text: 'Inactivos', value: 'inactivos' },
      ],
    },
  },
  data() {
    return {
      filtroSeleccionado: null,
    };
  },
  computed: {
    ...mapState(['mostrarFiltro']),
    ...mapMutations(['setMostrarFiltro']),
    mostrarCampoAdicional() {
      return this.filtroSeleccionado && this.filtroSeleccionado !== 'todos';
    },
  },
  methods: {
    aplicarFiltro() {
      this.$emit('filtrar', {
        filtro: this.filtroSeleccionado,
        valor: this.valorFiltro});
    },
    Cerrar(){
      this.setMostrarFiltro();
    },
  },
};
</script>
