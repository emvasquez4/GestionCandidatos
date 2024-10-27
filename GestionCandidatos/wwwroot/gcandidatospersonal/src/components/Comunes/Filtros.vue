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
            ></v-autocomplete>
          </v-col>
          <v-col v-if="mostrarCampoAdicional">
              <v-text-field
                v-model="valorFiltro"
                label="Ingrese el valor del filtro"
              ></v-text-field>
          </v-col>
        </v-row>
        <div class="pa-4 text-end">
           <v-row>
          <v-col class="d-flex justify-end"> 
            <v-btn class="ma-2" color="primary"  @click="aplicarFiltro()">Filtrar</v-btn>
            <v-btn class="ma-2" color="primary" @click="Cerrar()">Cerrar</v-btn>
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
      loading: false,
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
      if(this.filtroSeleccionado != null || this.filtroSeleccionado != 'todos' && this.valorFiltro != null){
      this.$emit('filtrar', {
        filtro: this.filtroSeleccionado,
        valor: this.valorFiltro});
      }
      this.Cerrar();
    },
    Cerrar(){
      this.setMostrarFiltro();
    },
  },
};
</script>
