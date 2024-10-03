<template>
    <v-main>
      <v-dialog
        v-model="$store.state.progEntrevistaState"
        persistent
        max-width="600px"
      >
        <v-container>
          <v-card class="pa-3">
            <v-card-title class="headline"><b>PROGRAMAR ENTREVISTA</b></v-card-title>
            <v-form>
              <v-text-field label="Candidato" v-model="candidato" :rules="[rules.required, rules.noNumbers]"></v-text-field>
              <v-text-field label="Fecha" v-model="fecha" type="date" :rules="[rules.required]"></v-text-field>
              <v-text-field label="Lugar" v-model="lugar" :rules="[rules.required]"></v-text-field>
              <v-text-field label="Hora" v-model="hora" type="time" :rules="[rules.required]" @blur="formatTime"></v-text-field>
              
              <v-divider class="my-4"></v-divider>
              <div class="d-flex justify-content-end">
                <v-btn color="green" @click="guardar" class="mr-2">Guardar</v-btn>
                <v-btn color="#F32C52" @click="cerrar">Cerrar</v-btn>
              </div>
            </v-form>
          </v-card>
        </v-container>
      </v-dialog>
    </v-main>
  </template>
  
  <script>
  export default 
  {
    data() {
      return {
        candiadto: '',
        fecha: '',
        lugar: '',
        hora: '',
        rules: 
        {
        required: value => !!value || 'Este campo es obligatorio',        
        positiveNumber: value => value >= 0 || 'El número debe ser positivo',
        email: value => /.+@.+\..+/.test(value) || 'Correo electrónico no válido',      
        noNumbers: value => /^[a-zA-Z\s]*$/.test(value) || 'El campo no debe contener números',
        noLetters: value => /^[0-9]*$/.test(value) || 'El campo no debe contener letras'
        }        
      };
    },
    methods: 
    {
      guardar() 
      {
        // Lógica para guardar el formulario
      },
      cerrar() 
      {
        // Lógica para cerrar el formulario
        this.$store.commit('setprogEntrevistaState', !this.$store.state.progEntrevistaState);
      },
      formatTime() {
      if (this.hora) {
        let [time, period] = this.hora.split(' ');
        let [hours, minutes] = time.split(':');
        hours = parseInt(hours, 10);
        if (period === 'PM' && hours < 12) {
          hours += 12;
        } else if (period === 'AM' && hours === 12) {
          hours = 0;
        }
        this.hora = `${hours.toString().padStart(2, '0')}:${minutes}`;
      }
    }
  }
  };
  </script>
  