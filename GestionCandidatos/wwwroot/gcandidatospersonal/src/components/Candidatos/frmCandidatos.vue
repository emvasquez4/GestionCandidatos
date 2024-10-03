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
            <v-text-field label="Puesto solicitado" v-model="puestoSolicitado" :rules="[rules.required, rules.noNumbers]"></v-text-field>
            <v-text-field label="Fecha de solicitud" v-model="fechaSolicitud" type="date" :rules="[rules.required]"></v-text-field>
            <v-text-field label="Sueldo deseado" v-model="sueldoDeseado" type="number" :rules="[rules.required, rules.positiveDecimal]"></v-text-field>
            
            <v-divider class="my-4"></v-divider>
            <v-card-title class="headline"><b>DATOS PERSONALES DEL APLICANTE</b></v-card-title>
            <v-text-field label="Apellidos" v-model="apellidos" :rules="[rules.required,rules.noNumbers]"></v-text-field>            
            <v-text-field label="Nombres" v-model="nombres" :rules="[rules.required, rules.noNumbers]"></v-text-field>
            <v-text-field label="Edad" v-model="edad" type="number" :rules="[rules.required, rules.adult, rules.noLetters]"></v-text-field>
            <v-select label="Sexo" v-model="sexo" :items="['Masculino', 'Femenino']" :rules="[rules.required]"></v-select>
            <v-text-field label="Dirección" v-model="direccion" :rules="[rules.required]"></v-text-field>
            <v-text-field label="Teléfono" v-model="telefono" type="tel" :rules="[rules.required, rules.noLetters]"></v-text-field>
            <v-text-field label="Teléfono celular" v-model="telefonoCelular" type="tel" :rules="[rules.required, rules.noLetters]"></v-text-field>
            <v-text-field label="Fecha de nacimiento" v-model="fechaNacimiento" type="date" :rules="[rules.required, rules.validDate]"></v-text-field>
            <v-text-field label="Nacionalidad" v-model="nacionalidad" :rules="[rules.required]"></v-text-field>
            <v-text-field label="Correo electrónico" v-model="correoElectronico" type="email" :rules="[rules.required, rules.email]"></v-text-field>
            <v-select label="Estado civil" v-model="estadoCivil" :items="['Soltero', 'Casado', 'Divorciado', 'Viudo']" :rules="[rules.required]"></v-select>
            <v-text-field label="Con quien vive" v-model="conQuienVive" :rules="[rules.required]"></v-text-field>
            <v-text-field label="Cuantos dependen económicamente de usted" v-model="dependientes" :rules="[rules.required]"></v-text-field>
            
            <v-divider class="my-4"></v-divider>
            <v-card-title class="headline"><b>DOCUMENTACIÓN</b></v-card-title>
            <v-text-field label="DUI" v-model="dui" :rules="[rules.required, rules.noLetters]"></v-text-field>
            <v-text-field label="Número de ISSS" v-model="numeroIsss" :rules="[rules.required, rules.noLetters]"></v-text-field>
            <v-text-field label="Número de AFP" v-model="numeroAfp" :rules="[rules.required, rules.noLetters]"></v-text-field>
            <v-select label="Posee licencia de conducir" v-model="licenciaConducir" :items="['Sí', 'No']" :rules="[rules.required]"></v-select>
            
            <v-divider class="my-4"></v-divider>
            <v-card-title class="headline"><b>ESTADO DE SALUD Y HÁBITOS PERSONALES</b></v-card-title>
            <v-text-field label="¿Cómo considera su estado de salud actual?" v-model="estadoSalud" :rules="[rules.required]"></v-text-field>
            <v-text-field label="¿Padece de una enfermedad crónica? ¿Cuál?" v-model="enfermedadCronica" :rules="[rules.required]"></v-text-field>
            <v-text-field label="¿Que tipo de deporte Practica usted?" v-model="deporte" :rules="[rules.required]"></v-text-field>
            <v-text-field label="¿Cuál es su pasatiempo favorito?" v-model="pasatiempo" :rules="[rules.required]"></v-text-field>
            <v-text-field label="¿Cuál es su meta en la vida?" v-model="metaVida" :rules="[rules.required]"></v-text-field>
            
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
export default {
  data() {
    return {
      puestoSolicitado: '',
      fechaSolicitud: '',
      sueldoDeseado: '',
      apellidos: '',
      nombres: '',
      edad: '',
      sexo: '',
      direccion: '',
      telefono: '',
      telefonoCelular: '',
      fechaNacimiento: '',
      nacionalidad: '',
      correoElectronico: '',
      estadoCivil: '',
      conQuienVive: '',
      dependientes: '',
      dui: '',
      numeroIsss: '',
      numeroAfp: '',
      licenciaConducir: '',
      estadoSalud: '',
      enfermedadCronica: '',
      deporte: '',
      pasatiempo: '',
      metaVida: '',
      rules: {
        required: value => !!value || 'Este campo es obligatorio',
        positiveDecimal: value => value >= 0 || 'El número debe ser positivo',
        positiveNumber: value => value >= 0 || 'El número debe ser positivo',
        email: value => /.+@.+\..+/.test(value) || 'Correo electrónico no válido',
        validDate: value => new Date(value) < new Date() || 'La fecha no puede ser actual',
        adult: value => value >= 18 || 'Debe ser mayor de 18 años',
        noNumbers: value => /^[a-zA-Z\s]*$/.test(value) || 'El campo no debe contener números',
        noLetters: value => /^[0-9]*$/.test(value) || 'El campo no debe contener letras'
      }
    };
  },
  methods: {
    guardar() {
      this.$refs.form.validate();
      // Lógica para guardar el formulario
    },
    cerrar() {
      // Lógica para cerrar el formulario
      this.$store.commit('setcrearCandidatoState', !this.$store.state.crearCandidatoState);
    }
  },
};
</script>
