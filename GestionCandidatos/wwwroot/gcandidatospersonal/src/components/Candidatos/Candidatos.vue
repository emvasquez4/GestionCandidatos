<template>
  <v-main>
     <v-dialog
      v-model="crearUsuarioState"
      persistent
      max-width="1000px"
    >
    <v-container>
      <v-card class="pa-3">
        <v-card-title class="headline" v-if="!isViewMode">{{ isEditMode ? 'ACTUALIZAR Entrevista' : 'REGISTRO' }}</v-card-title>
          <v-card-title class="headline" v-if="isViewMode">DATOS DE LA ENTREVISTA</v-card-title>
        <v-form v-if="!isViewMode">
          
            <v-text-field label="Codigo Candidato" v-model="info.codigo_candidato" :rules="[rules.required, rules.positiveDecimal]"></v-text-field>
            <v-text-field label="Puesto solicitado" v-model="info.puesto_solicitado" :rules="[rules.required, rules.noNumbers]"></v-text-field>
            <v-text-field label="Fecha de solicitud" v-model="info.fechaSolicitud" type="date" :rules="[rules.required]"></v-text-field>
            <v-text-field label="Sueldo deseado" v-model="info.expectativa_salarial" type="number" :rules="[rules.required, rules.positiveDecimal]"></v-text-field>
            <v-divider class="my-4"></v-divider>
            <v-card-title class="headline"><b>DATOS PERSONALES DEL APLICANTE</b></v-card-title>
            <v-text-field label="Apellidos" v-model="info.apellido" :rules="[rules.required, rules.noNumbers]"></v-text-field>
            <v-text-field label="Nombres" v-model="info.nombre" :rules="[rules.required, rules.noNumbers]"></v-text-field>
            <v-select label="Género" v-model="info.genero" :items="['Masculino', 'Femenino']" :rules="[rules.required]"></v-select>
            <v-text-field label="Fecha de nacimiento" v-model="info.fechaNacimiento" type="date" :rules="[rules.required, rules.validDate, rules.adult]"></v-text-field>
            <v-text-field label="Correo electrónico" v-model="info.correo" type="email" :rules="[rules.required, rules.email]"></v-text-field>
            <v-card-title class="headline"><b>HABILIDADES</b></v-card-title>
            <v-text-field label="Habilidades" v-model="info.habilidades"></v-text-field>
            <v-divider class="my-4"></v-divider>
            <v-card-title class="headline"><b>ESCOLARIDAD</b></v-card-title>
            <v-text-field label="Nivel de Escolaridad" v-model="info.escolaridad" :rules="[rules.required]"></v-text-field>
            <v-autocomplete
              label="Estado"
              v-model="info.estado"
              :items="Estados"
              item-title="text"
              item-value="value"
            ></v-autocomplete>
          <v-btn color="secondary" @click="Cerrar">Cerrar</v-btn>
          <v-btn color="primary" @click="saveUser">{{ isEditMode ? 'Actualizar' : 'Registrar' }}</v-btn>
        </v-form>
        <v-form v-if="isViewMode">
          <v-text-field label="Codigo Candidato" v-model="info.codigo_candidato" :rules="[rules.required, rules.positiveDecimal]"></v-text-field>
            <v-text-field label="Puesto solicitado" v-model="info.puesto_solicitado" :rules="[rules.required, rules.noNumbers]"></v-text-field>
            <v-text-field label="Fecha de solicitud" v-model="info.fechaSolicitud" type="date" :rules="[rules.required]"></v-text-field>
            <v-text-field label="Sueldo deseado" v-model="info.expectativa_salarial" type="number" :rules="[rules.required, rules.positiveDecimal]"></v-text-field>
            <v-divider class="my-4"></v-divider>
            <v-card-title class="headline"><b>DATOS PERSONALES DEL APLICANTE</b></v-card-title>
            <v-text-field label="Apellidos" v-model="info.apellido" :rules="[rules.required, rules.noNumbers]"></v-text-field>
            <v-text-field label="Nombres" v-model="info.nombre" :rules="[rules.required, rules.noNumbers]"></v-text-field>
            <v-select label="Género" v-model="info.genero" :items="['Masculino', 'Femenino']" :rules="[rules.required]"></v-select>
            <v-text-field label="Fecha de nacimiento" v-model="info.fechaNacimiento" type="date" :rules="[rules.required, rules.validDate, rules.adult]"></v-text-field>
            <v-text-field label="Correo electrónico" v-model="info.correo" type="email" :rules="[rules.required, rules.email]"></v-text-field>
            <v-card-title class="headline"><b>HABILIDADES</b></v-card-title>
            <v-text-field label="Habilidades" v-model="info.habilidades"></v-text-field>
            <v-divider class="my-4"></v-divider>
            <v-card-title class="headline"><b>ESCOLARIDAD</b></v-card-title>
            <v-text-field label="Nivel de Escolaridad" v-model="info.escolaridad" :rules="[rules.required]"></v-text-field>
          <v-autocomplete
            label="Estado"
            v-model="info.estado"
            :items="Estados"
            item-title="text"
            item-value="value"
          ></v-autocomplete>
          <v-btn color="secondary" @click="Cerrar()">Cerrar</v-btn>
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
import { mapState, mapActions, mapMutations } from 'vuex';
import Services from '../../services/Services';
export default {
  props: {
      userInfo: {
        type: Object,
        default: () => ({})  // Pasar el usuario a editar cuando esté en modo edición
      },
     
  },
  data() {
    return {
      info: {
      codigo_rol:'',
      descripcion: '',
      estado: '',
      },
      dialog: false,
      showError: false,
      showSuccess: false,
      Message: null,
      Estados:[{text:'Activo',value:'A'},{text:'Inactivo',value:'I'}],
      Candidatos:[{}],
      rules: 
      {
        required: value => !!value || 'Este campo es obligatorio',       
        email: value => /.+@.+\..+/.test(value) || 'Correo electrónico no válido'        
      }
    };
  },
  watch: {
    'info.nombre': 'generateUsername',
    'info.apellido': 'generateUsername',
    userInfo: {
        immediate: true,
        handler(newVal) {
          if (this.isEditMode || this.isViewMode) {
            this.info = { ...newVal };  // Cargar datos del usuario en el formulario
          }else{
            this.$validator.resetAll();
             this.info= {
                codigo_rol:'',
                descripcion: '',
                estado: '',
              };
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
     Services.CandidatosService.addCandidato(this.info)
        .then(response => {
          // Manejo de la respuesta exitosa
           this.Message = response.data ;
          this.showSuccess = true;
          // Puedes agregar cualquier acción que necesites tras el registro exitoso.
        })
        .catch(error => {
          // Manejo de errores
          this.Message = error.response?.data?.message || 'Ocurrió un error al registrar el Entrevista.';
          this.showError = true;
        });
    },
    updateUser() {
        // Lógica para actualizar el usuario
        Services.CandidatosService.updateCandidato(this.info)
          .then(response => {
            this.Message = 'Entrevista actualizado exitosamente';
            this.showSuccess = true;
          })
          .catch(error => {
            this.Message = error.response?.data?.message || 'Ocurrió un error al actualizar el Entrevista.';
            this.showError = true;
          });
      },
     saveUser() {
      console.log(this.isEditMode);
      console.log(this.isEditMode);
        if (this.isEditMode) {
          this.updateUser();
        } else {
          this.register();
        }
      },
      
    GetCandidatos() {
      console.log("Entra metodo busqueda ");
     Services.CandidatosService.getAll("TODOS","")
        .then(response => {
          // Manejo de la respuesta exitosa
           this.Candidatos = response.data ;
           console.log("candidatos",this.Candidatos);
           console.log("candidatos !!!!!!!!!!!!!!");
           console.log(this.Candidatos);
          // Puedes agregar cualquier acción que necesites tras el registro exitoso.
        })
        .catch(error => {
          // Manejo de errores
        });
    },
    Cerrar(){
      this.showError = false;
        this.showSuccess = false;
       this.info= {
        nombre: '',
        apellido: '',
        email: '',
        password: '',
        password2: '',
        username: null,
        };
        this.setcrearUsuarioState();
    },
  },
  created() {
     this.GetCandidatos();
   },
};
</script>
