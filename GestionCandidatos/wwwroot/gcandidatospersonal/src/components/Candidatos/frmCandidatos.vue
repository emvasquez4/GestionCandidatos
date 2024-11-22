<template>
  <v-main>
    <v-dialog
      v-model="crearCandidatoState"
      persistent
      max-width="1000px"
    >
      <v-container>
        <v-card class="pa-3">
          <v-card-title class="headline" v-if="!isViewMode">{{ isEditMode ? 'ACTUALIZAR CANDIDATO' : 'REGISTRO DE CANDIDATO' }}</v-card-title>
          <v-card-title class="headline" v-if="isViewMode">DATOS DEL CANDIDATO</v-card-title>
          <v-form v-if="!isViewMode">
            <v-text-field label="Puesto solicitado" v-model="info.puestoSolicitado" :rules="[rules.required, rules.noNumbers]"></v-text-field>
            <v-text-field label="Fecha de solicitud" v-model="info.fechaSolicitud" type="date" :rules="[rules.required]"></v-text-field>
            <v-text-field label="Sueldo deseado" v-model="info.sueldoDeseado" type="number" :rules="[rules.required, rules.positiveDecimal]"></v-text-field>
            <v-divider class="my-4"></v-divider>
            <v-card-title class="headline"><b>DATOS PERSONALES DEL APLICANTE</b></v-card-title>
            <v-text-field label="Apellidos" v-model="info.apellidos" :rules="[rules.required, rules.noNumbers]"></v-text-field>
            <v-text-field label="Nombres" v-model="info.nombres" :rules="[rules.required, rules.noNumbers]"></v-text-field>
            <v-select label="Género" v-model="info.sexo" :items="['Masculino', 'Femenino']" :rules="[rules.required]"></v-select>
            <v-text-field label="Fecha de nacimiento" v-model="info.fechaNacimiento" type="date" :rules="[rules.required, rules.validDate, rules.adult]"></v-text-field>
            <v-text-field label="Correo electrónico" v-model="info.correoElectronico" type="email" :rules="[rules.required, rules.email]"></v-text-field>
            <v-card-title class="headline"><b>HABILIDADES</b></v-card-title>
            <v-text-field label="Habilidades" v-model="info.habilidades"></v-text-field>
            <v-divider class="my-4"></v-divider>
            <v-card-title class="headline"><b>ESCOLARIDAD</b></v-card-title>
            <v-text-field label="Nivel de Escolaridad" v-model="info.escolaridad" :rules="[rules.required]"></v-text-field>
            <v-divider class="my-4"></v-divider>
            <div class="d-flex justify-content-end">
              <v-btn color="secondary" @click="Cerrar">Cerrar</v-btn>
              <v-btn color="primary" @click="saveCandidato">{{ isEditMode ? 'Actualizar' : 'Registrar' }}</v-btn>
            </div>
          </v-form>
          <v-form v-if="isViewMode">
            <v-text-field label="Puesto solicitado" readonly v-model="info.puestoSolicitado" :rules="[rules.required, rules.noNumbers]"></v-text-field>
            <v-text-field label="Fecha de solicitud" readonly v-model="info.fechaSolicitud" type="date" :rules="[rules.required]"></v-text-field>
            <v-text-field label="Sueldo deseado" readonly v-model="info.sueldoDeseado" type="number" :rules="[rules.required, rules.positiveDecimal]"></v-text-field>
            <v-divider class="my-4"></v-divider>
            <v-card-title class="headline"><b>DATOS PERSONALES DEL APLICANTE</b></v-card-title>
            <v-text-field label="Apellidos" readonly v-model="info.apellidos" :rules="[rules.required, rules.noNumbers]"></v-text-field>
            <v-text-field label="Nombres" readonly v-model="info.nombres" :rules="[rules.required, rules.noNumbers]"></v-text-field>
            <v-select label="Género" readonly v-model="info.sexo" :items="['Masculino', 'Femenino']" :rules="[rules.required]"></v-select>
            <v-text-field label="Fecha de nacimiento" readonly v-model="info.fechaNacimiento" type="date" :rules="[rules.required, rules.validDate, rules.adult]"></v-text-field>
            <v-text-field label="Correo electrónico" readonly v-model="info.correoElectronico" type="email" :rules="[rules.required, rules.email]"></v-text-field>
            <v-card-title class="headline"><b>HABILIDADES</b></v-card-title>
            <v-text-field label="Habilidades" readonly v-model="info.habilidades"></v-text-field>
            <v-divider class="my-4"></v-divider>
            <v-card-title class="headline"><b>ESCOLARIDAD</b></v-card-title>
            <v-text-field label="Nivel de Escolaridad" readonly v-model="info.escolaridad" :rules="[rules.required]"></v-text-field>
            <v-divider class="my-4"></v-divider>
            <div class="d-flex justify-content-end">
              <v-btn color="secondary" @click="Cerrar">Cerrar</v-btn>
            </div>
          </v-form>
        </v-card>
      </v-container>
      <v-snackbar v-model="showError" :timeout="3000" color="error">
        {{ Message }}
      </v-snackbar>
      <v-snackbar v-model="showSuccess" :timeout="3000" color="success">
        {{ Message }}
      </v-snackbar>
    </v-dialog>
  </v-main>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
import Services from '../../services/Services';

export default {
  props: {
    candidatoInfo: {
      type: Object,
      default: () => ({})  // Pasar el candidato a editar cuando esté en modo edición
    },
  },
  data() {
    return {
      info: {
        puestoSolicitado: '',
        fechaSolicitud: '',
        sueldoDeseado: '',
        apellidos: '',
        nombres: '',
        sexo: '',
        fechaNacimiento: '',
        correoElectronico: '',
        habilidades: '',
        escolaridad: '',
      },
      dialog: false,
      showError: false,
      showSuccess: false,
      Message: null,
      rules: {
        required: value => !!value || 'Este campo es obligatorio',
        positiveDecimal: value => value >= 0 || 'El número debe ser positivo',
        email: value => /.+@.+\..+/.test(value) || 'Correo electrónico no válido',
        validDate: value => new Date(value) < new Date() || 'La fecha no puede ser actual',
        noNumbers: value => /^[a-zA-Z\s]*$/.test(value) || 'El campo no debe contener números',
        adult: value => {
          if (!value) return true;
          const birthDate = new Date(value);
          const age = new Date().getFullYear() - birthDate.getFullYear();
          const monthDifference = new Date().getMonth() - birthDate.getMonth();
          if (monthDifference < 0 || (monthDifference === 0 && new Date().getDate() < birthDate.getDate())) {
            return age - 1 >= 18 || 'Debe ser mayor de 18 años';
          }
          return age >= 18 || 'Debe ser mayor de 18 años';
        }
      }
    };
  },
  watch: {
    candidatoInfo: {
      immediate: true,
      handler(newVal) {
        if (this.isEditMode || this.isViewMode) {
          this.info = { ...newVal };  // Cargar datos del candidato en el formulario
        } else {
          this.resetForm();
        }
      }
    }
  },
  computed: {
    ...mapState(['crearCandidatoState', 'isViewMode', 'isEditMode']),
    ...mapMutations(['setcrearCandidatoState', 'SET_CANDIDATOS'])
  },
  methods: {
    register() {
      Services.CandidatosService.addCandidato(this.info)
        .then(response => {
          this.Message = 'Candidato registrado exitosamente';
          this.showSuccess = true;
        })
        .catch(error => {
          this.Message = error.response?.data?.message || 'Ocurrió un error al registrar el candidato.';
          this.showError = true;
        });
    },
    updateCandidato() {
      Services.CandidatosService.updateCandidato(this.info)
        .then(response => {
          this.Message = 'Candidato actualizado exitosamente';
          this.showSuccess = true;
          this.refreshCandidatos();
        })
        .catch(error => {
          this.Message = error.response?.data?.message || 'Ocurrió un error al actualizar el candidato.';
          this.showError = true;
        });
    },
    saveCandidato() {
      if (this.isEditMode) {
        this.updateCandidato();
      } else {
        this.register();
      }
    },
    Cerrar(){
      this.showError = false;
        this.showSuccess = false;
       this.info = {
        puestoSolicitado: '',
        fechaSolicitud: '',
        sueldoDeseado: '',
        apellidos: '',
        nombres: '',
        sexo: '',
        fechaNacimiento: '',
        correoElectronico: '',
        habilidades: '',
        escolaridad: '',
      },
        this.setcrearUsuarioState();
    },
  },
};
</script>
