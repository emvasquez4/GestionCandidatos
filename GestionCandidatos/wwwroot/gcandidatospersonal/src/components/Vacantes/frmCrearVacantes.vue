<template>
    <v-main>
       <v-dialog
        v-model="$store.state.crearVacanteState"
        persistent
        max-width="600px"
      >
      <v-container>
        <v-card class="pa-3">
          <v-card-title class="headline"><b>REGISTRO DE VACANTES</b></v-card-title>
          <v-form>
            <v-text-field label="Vacante" v-model="info.vacante"></v-text-field>
            <v-text-field label="Cantidad de Vacantes" v-model="info.cantVacantes"></v-text-field>
            <v-text-field label="Fecha de Publicación" v-model="info.fechaPublicacion" type="date" :rules="[rules.required]"></v-text-field>
            <v-btn color="green" @click="register" class="mr-2">Crear</v-btn>
              <v-btn color="#F32C52" @click="Cerrar" class="mr-2">Cerrar</v-btn>
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
      return{
        info: {
          vacante: '',
          cantVacantes: '',
          salario: '', 
          fechaPublicacion: new Date().toISOString().split('T')[0], // Establece la fecha actual       
        }
      };
    },
    methods: {
      register() {
        // Lógica para enviar los datos del formulario al servidor
        // Puedes usar Axios o cualquier otra librería para hacer la solicitud HTTP
       // console.log('setcrearVacanteState', this.vacante, this.cantVacantes, this.salario);
          // Validar si los campos están llenos
        if (!this.info.vacante || !this.info.cantVacantes || !this.info.salario) {
          this.Message = 'Todos los campos son obligatorios.';
          this.showError = true;
          return;
        }
         // Llamada al servicio para registrar la vacante
        Services.VacantesService.addVacante(this.info)
          .then(response => {
            this.Message = 'La vacante ha sido creada exitosamente.';
            this.showSuccess = true;
            this.resetForm();
          })
          .catch(error => {
            this.Message = error.response?.data?.message || 'Ocurrió un error al registrar la vacante.';
            this.showError = true;
          });
      },
      Cerrar(){
         this.$store.commit('setcrearVacanteState', !this.$store.state.crearVacanteState);
         this.resetForm();
      },
      resetForm() {
      // Restablecer los campos del formulario
        this.info = {
          vacante: '',
          cantVacantes: '',
          salario: '',
          fechaPublicacion:'',
      };
      }
    },
  };
  </script>
  