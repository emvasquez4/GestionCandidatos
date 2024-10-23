<template>
  <v-main>
    <v-dialog
      v-model="$store.state.crearCandidatoState"
      persistent
      max-width="600px"
    >
      <v-container>
        <v-card class="pa-3">
          <v-card-title class="headline"><b>SOLICITUD DE EMPLEO</b></v-card-title>
          <v-form ref="form">
            <v-text-field label="Puesto solicitado" v-model="info.puestoSolicitado" :rules="[rules.required, rules.noNumbers]"></v-text-field>
            <v-text-field label="Fecha de solicitud" v-model="info.fechaSolicitud" type="date" :rules="[rules.required]"></v-text-field>
            <v-text-field label="Sueldo deseado" v-model="info.sueldoDeseado" type="number" :rules="[rules.required, rules.positiveDecimal]"></v-text-field>
            
            <v-divider class="my-4"></v-divider>
            <v-card-title class="headline"><b>DATOS PERSONALES DEL APLICANTE</b></v-card-title>
            <v-text-field label="Apellidos" v-model="info.apellidos" :rules="[rules.required,rules.noNumbers]"></v-text-field>            
            <v-text-field label="Nombres" v-model="info.nombres" :rules="[rules.required, rules.noNumbers]"></v-text-field>
            <v-select label="Genero" v-model="info.sexo" :items="['Masculino', 'Femenino']" :rules="[rules.required]"></v-select>
            <v-text-field label="Fecha de nacimiento" v-model="info.fechaNacimiento" type="date" :rules="[rules.required, rules.validDate,rules.adult]"></v-text-field>
            <v-text-field label="Correo electrónico" v-model="info.correoElectronico" type="email" :rules="[rules.required, rules.email]"></v-text-field>
            
            <v-card-title class="headline"><b>HABILIDADES</b></v-card-title>
            <v-text-field label="Habilidades" v-model="info.habilidades"></v-text-field>

            <v-divider class="my-4"></v-divider>
            <v-card-title class="headline"><b>ESCOLARIDAD</b></v-card-title>
            <v-text-field label="Nivel de Escolaridad" v-model="info.escolaridad" :rules="[rules.required]"></v-text-field>
            <!-- 
            <v-divider class="my-4"></v-divider>
            <v-card-title class="headline"><b>DOCUMENTACIÓN</b></v-card-title>
            <v-text-field label="DUI" v-model="info.dui" :rules="[rules.required, rules.noLetters]"></v-text-field>
            <v-text-field label="Número de ISSS" v-model="info.numeroIsss" :rules="[rules.required, rules.noLetters]"></v-text-field>
            <v-text-field label="Número de AFP" v-model="info.numeroAfp" :rules="[rules.required, rules.noLetters]"></v-text-field>
            <v-select label="Posee licencia de conducir" v-model="info.licenciaConducir" :items="['Sí', 'No']" :rules="[rules.required]"></v-select>
          --> 
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
import Services from '../../services/Services';
export default {
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
      // Agrega aquí más campos si es necesario...
      rules: {
        required: value => !!value || 'Este campo es obligatorio',
        positiveDecimal: value => value >= 0 || 'El número debe ser positivo',
        positiveNumber: value => value >= 0 || 'El número debe ser positivo',
        email: value => /.+@.+\..+/.test(value) || 'Correo electrónico no válido',
        validDate: value => new Date(value) < new Date() || 'La fecha no puede ser actual',
        //adult: value => value >= 18 || 'Debe ser mayor de 18 años',
        noNumbers: value => /^[a-zA-Z\s]*$/.test(value) || 'El campo no debe contener números',
        noLetters: value => /^[0-9]*$/.test(value) || 'El campo no debe contener letras',
        adult: value => {
          if (!value) return true; // No validamos si no hay valor
          const birthDate = new Date(value);
          const age = new Date().getFullYear() - birthDate.getFullYear();
          const monthDifference = new Date().getMonth() - birthDate.getMonth();
          if (monthDifference < 0 || (monthDifference === 0 && new Date().getDate() < birthDate.getDate())) {
            return age - 1; // Si aún no ha cumplido años este año
          }
          return age >= 18 || 'Debe ser mayor de 18 años';
        }
      }
    }
    };
  },
  methods: {
    guardar() {
      this.$refs.form.validate();
      // Lógica para guardar el formulario
      // Primero valida todo el formulario antes de continuar
    if (this.$refs.form.validate()) {
      // Aquí puedes hacer la lógica para enviar los datos al servidor.
      console.log(this.info)
      Services.CandidatosService.addCandidato(this.info)
        .then(response => {
          // Lógica para manejar una respuesta exitosa
          console.log('Candidato guardado exitosamente', response);
        })
        .catch(error => {
          console.error('Error al guardar el candidato:', error);
        });
    } else {
      console.log('Formulario no válido');
    }
    },
    cerrar() {
      // Lógica para cerrar el formulario
      this.$store.commit('setcrearCandidatoState', !this.$store.state.crearCandidatoState);
       // Limpia el formulario reseteando el objeto info
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
          // Añadir más campos según sea necesario
        }
    }
  },
};
</script>
