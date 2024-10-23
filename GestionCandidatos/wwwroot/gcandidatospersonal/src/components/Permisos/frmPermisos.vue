<template>
    <v-main>
      <v-dialog
        v-model="$store.state.crearPermisoState"
        persistent
        max-width="600px"
      >
        <v-container>
          <v-card class="pa-3">
            <v-card-title class="headline"><b>SOLICITUD DE PERMISOS</b></v-card-title>
            <v-form>
              <v-text-field label="Empleado" v-model="form.empleado" :rules="[rules.required]"></v-text-field>
              <v-text-field label="Desde Fecha" v-model="form.desdeFecha" type="date" :rules="[rules.required]"></v-text-field>
              <v-text-field label="Hasta Fecha" v-model="form.hastaFecha" type="date" :rules="[rules.required]"></v-text-field>
              <v-textarea label="Causa de Ausencia" v-model="form.causa" required></v-textarea>
              
              <v-divider class="my-4"></v-divider>
              <div class="d-flex justify-content-end">
                <v-btn color="green" @click="submitForm" class="mr-2">Enviar</v-btn>
                <v-btn color="#F32C52" @click="cancelForm">Cancelar</v-btn>
              </div>
            </v-form>
          </v-card>
        </v-container>
      </v-dialog>
    </v-main>
  </template>
  
  <script>
  import Services from '../../services/Services';
  export default {
    data() {
      return {  
      form:{      
          empleado: '',
          desdeFecha: '',
          hastaFecha: '',
          causa: '',   
          rules: 
          {
        required: value => !!value || 'Este campo es obligatorio'       
          } 
        }    
      };
    },
    methods: {
      submitForm() {
        // Lógica para enviar el formulario
        //console.log('Formulario enviado:', this.form);
         // Validamos el formulario antes de enviarlo
        if (!this.form.empleado || !this.form.desdeFecha || !this.form.hastaFecha || !this.form.causa) {
          console.error('Por favor complete todos los campos.');
        return;
        }
         // Lógica para enviar el formulario
        console.log('Formulario enviado:', this.form);
         // Limpiar el formulario y cerrar el diálogo tras enviar
        this.resetForm();
        this.$store.commit('setcrearPermisoState', false);
      },
      cancelForm() {
        // Lógica para cancelar el formulario
       // console.log('Formulario cancelado');
        this.$store.commit('setcrearPermisoState', false);
        this.resetForm();
      },
    
      resetForm() {
        // Limpia los valores del formulario
        this.form = {
          empleado: '',
          desdeFecha: '',
          hastaFecha: '',
          causa: ''
        };
      }
    }
  };
  </script>
  
  <style scoped>
  /* Estilos para el formulario */
/*  form div {
    margin-bottom: 10px;
  }
  label {
    display: block;
    margin-bottom: 5px;
  }
  input, textarea {
    width: 100%;
    padding: 8px;
    box-sizing: border-box;
  }
  button {
    margin-right: 10px;
    padding: 10px 20px;
  } */
  </style> 
  