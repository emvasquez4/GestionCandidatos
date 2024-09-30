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
            <v-form>
              <v-text-field label="Puesto solicitado" v-model="puestoSolicitado"></v-text-field>
              <v-text-field label="Fecha de solicitud" v-model="fechaSolicitud" type="date"></v-text-field>
              <v-text-field label="Sueldo deseado" v-model="sueldoDeseado" type="number"></v-text-field>
              
              <v-divider class="my-4"></v-divider>
              <v-card-title class="headline"><b>DATOS PERSONALES DEL APLICANTE</b></v-card-title>
              <v-text-field label="Apellido materno" v-model="apellidoMaterno"></v-text-field>
              <v-text-field label="Apellido paterno" v-model="apellidoPaterno"></v-text-field>
              <v-text-field label="Nombres" v-model="nombres"></v-text-field>
              <v-text-field label="Edad" v-model="edad" type="number"></v-text-field>
              <v-select label="Sexo" v-model="sexo" :items="['Masculino', 'Femenino']"></v-select>
              <v-text-field label="Dirección" v-model="direccion"></v-text-field>
              <v-text-field label="Teléfono" v-model="telefono" type="tel"></v-text-field>
              <v-text-field label="Teléfono celular" v-model="telefonoCelular" type="tel"></v-text-field>
              <v-text-field label="Fecha de nacimiento" v-model="fechaNacimiento" type="date"></v-text-field>
              <v-text-field label="Nacionalidad" v-model="nacionalidad"></v-text-field>
              <v-text-field label="Correo electrónico" v-model="correoElectronico" type="email"></v-text-field>
              <v-select label="Estado civil" v-model="estadoCivil" :items="['Soltero', 'Casado', 'Divorciado', 'Viudo']"></v-select>
              <v-text-field label="Con quien vive" v-model="conQuienVive"></v-text-field>
              <v-text-field label="Quienes dependen económicamente de usted" v-model="dependientes"></v-text-field>
              
              <v-divider class="my-4"></v-divider>
              <v-card-title class="headline"><b>DOCUMENTACIÓN</b></v-card-title>
              <v-text-field label="DUI" v-model="dui"></v-text-field>
              <v-text-field label="Número de ISSS" v-model="numeroIsss"></v-text-field>
              <v-text-field label="Número de AFP" v-model="numeroAfp"></v-text-field>
              <v-select label="Posee licencia de conducir" v-model="licenciaConducir" :items="['Sí', 'No']"></v-select>
              
              <v-divider class="my-4"></v-divider>
              <v-card-title class="headline"><b>ESTADO DE SALUD Y HÁBITOS PERSONALES</b></v-card-title>
              <v-text-field label="¿Cómo considera su estado de salud actual?" v-model="estadoSalud"></v-text-field>
              <v-text-field label="¿Padece de una enfermedad crónica? ¿Cuál?" v-model="enfermedadCronica"></v-text-field>
              <v-text-field label="¿Practica usted algún deporte?" v-model="deporte"></v-text-field>
              <v-text-field label="¿Cuál es su pasatiempo favorito?" v-model="pasatiempo"></v-text-field>
              <v-text-field label="¿Cuál es su meta en la vida?" v-model="metaVida"></v-text-field>
              
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
        apellidoMaterno: '',
        apellidoPaterno: '',
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
        metaVida: ''
      };
    },
    methods: {
      guardar() {
        // Lógica para guardar el formulario
      },
      cerrar() {
        // Lógica para cerrar el formulario
        this.$store.commit('setcrearCandidatoState', !this.$store.state.crearCandidatoState);
      }
    },
  };
  </script>
  