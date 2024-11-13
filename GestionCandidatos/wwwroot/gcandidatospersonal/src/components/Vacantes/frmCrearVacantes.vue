<template>
    <v-main>
       <v-dialog
        v-model="crearUsuarioState"
        persistent
        max-width="600px"
      >
      <v-container>
        <v-card class="pa-3">
          <v-card-title class="headline" v-if="!isViewMode"><b>{{ isEditMode ? 'ACTUALIZAR VACANTE' : 'REGISTRO VACANTE' }}</b></v-card-title>
            <v-card-title class="headline" v-if="isViewMode">DATOS DE VACANTE</v-card-title>
           <v-form v-if="!isViewMode">
            <v-text-field label="Vacante" v-model="info.vacante"></v-text-field>
            <v-text-field label="Cantidad de Vacantes" v-model="info.cantVacantes"></v-text-field>
            <v-text-field label="Fecha de Publicación" v-model="info.fechaPublicacion" type="date"></v-text-field>
           
            <v-btn color="secondary" @click="Cerrar" class="mr-2">Cerrar</v-btn>
             <v-btn color="primary" @click="register" class="mr-2">Crear</v-btn>
          </v-form>
          <v-form v-if="isViewMode">
            <v-text-field label="Vacante" readonly v-model="info.vacante"></v-text-field>
            <v-text-field label="Cantidad de Vacantes" readonly v-model="info.cantVacantes"></v-text-field>
            <v-text-field label="Fecha de Publicación" readonly v-model="info.fechaPublicacion" type="date" ></v-text-field>
              <v-btn color="#F32C52" @click="Cerrar" class="mr-2">Cerrar</v-btn>
          </v-form>
        </v-card>
      </v-container>

       <!-- Snackbar para mostrar el mensaje de error -->
    <v-snackbar
      v-model="showError"
      :timeout="3000"
      color="error"
    >
      {{ Message }}
    </v-snackbar>
    <v-snackbar
      v-model="showSuccess"
      :timeout="3000"
      color="success"
    >
      {{ Message }}
    </v-snackbar>
       </v-dialog>
    </v-main>
  </template>
  
  <script>
import Services from '../../services/Services';
  import { mapState, mapActions, mapMutations } from 'vuex';
  export default {
     props: {
      userInfo: {
        type: Object,
        default: () => ({})  // Pasar el usuario a editar cuando esté en modo edición
      },
     
  },
    data() {
      return{
        showError:null,
        showSuccess:null,
        Message: null,
        info: {
          vacante: '',
          cantVacantes: '',
          salario: '', 
          fechaPublicacion: new Date().toISOString().split('T')[0], // Establece la fecha actual       
        }
      };
    },
    watch: {
    userInfo: {
        immediate: true,
        handler(newVal) {
          if (this.isEditMode || this.isViewMode) {
            this.info = { ...newVal };  // Cargar datos del usuario en el formulario
          }else{
              this.info = {
              vacante: '',
              cantVacantes: '',
              fechaPublicacion: new Date().toISOString().split('T')[0], // Establece la fecha actual       
            }
          }
        }
      },
  },
   computed: {
    ...mapState(['crearUsuarioState','isViewMode','isEditMode']),
    ...mapMutations(['setcrearUsuarioState'])
  },
    methods: {
      register() {
        // Lógica para enviar los datos del formulario al servidor
        // Puedes usar Axios o cualquier otra librería para hacer la solicitud HTTP
          // Validar si los campos están llenos
        if (!this.info.vacante || !this.info.cantVacantes) {
          this.Message = 'Todos los campos son obligatorios.';
          this.showError = true;
          return;
        }
         // Llamada al servicio para registrar la vacante
        Services.VacantesService.addVacantes(this.info)
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
       updateUser() {
        // Lógica para actualizar el usuario
        Services.VacantesService.updateVacantes(this.info)
          .then(response => {
            this.Message = 'Usuario actualizado exitosamente';
            this.showSuccess = true;
          })
          .catch(error => {
            this.Message = error.response?.data?.message || 'Ocurrió un error al actualizar el usuario.';
            this.showError = true;
          });
      },
      saveUser() {
        if (this.isEditMode) {
          this.updateUser();
        } else {
          this.register();
        }
      },
      Cerrar(){
         this.setcrearUsuarioState();
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
  