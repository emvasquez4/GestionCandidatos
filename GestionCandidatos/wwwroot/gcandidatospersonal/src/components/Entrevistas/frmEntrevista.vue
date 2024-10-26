<template>
  <v-main>
    <v-dialog
      v-model="$store.state.crearEntrevistaState"
      persistent
      max-width="800px"
    >
      <v-container>
        <v-card class="pa-3">
          <v-card-title class="headline"><b>Formulario de Evaluación de Entrevista</b></v-card-title>
          <v-form ref="form">
            <v-text-field label="Nombre completo del candidato/a" v-model="form.nombre" :rules="[rules.required, rules.noNumbers]"></v-text-field>
            <v-text-field label="Número de teléfono del candidato/a" v-model="form.telefono" type="tel" :rules="[rules.required, rules.noLetters]"></v-text-field>
            <v-text-field label="Correo electrónico del candidato/a" v-model="form.correo" type="email" :rules="[rules.required, rules.email]"></v-text-field>
            <v-text-field label="Posición aplicada" v-model="form.posicion" :rules="[rules.required]"></v-text-field>
            
            <v-divider class="my-4"></v-divider>
            <v-card-title class="headline"><b>Evaluación</b></v-card-title>
            <v-radio-group v-model="form.comunicacion" :rules="[rules.required]" row>
              <label class="w3-text-blue"><b>Puntúa la habilidad de comunicación del candidato/a (1 - Insatisfactorio, 5 - Excelente)</b></label>                         
              <v-radio v-for="n in 5" :key="n" :label="n" :value="n" class="mr-10"></v-radio>
            </v-radio-group>
            <v-radio-group v-model="form.experiencia" :rules="[rules.required]" row>
              <label class="w3-text-blue"><b>Puntúa la experiencia y conocimientos relevantes del candidato/a para el puesto (1 - Insuficiente, 5 - Experto/a)</b></label>
              <v-radio v-for="n in 5" :key="n" :label="n" :value="n" class="mr-10"></v-radio>
            </v-radio-group>
            <v-radio-group v-model="form.equipo" :rules="[rules.required]" row>
              <label class="w3-text-blue"><b>Puntúa la capacidad del candidato/a para trabajar en equipo (1 - Necesita mejorar, 5 - Sobresaliente)</b></label>
              <v-radio v-for="n in 5" :key="n" :label="n" :value="n" class="mr-10"></v-radio>
            </v-radio-group>
            <v-radio-group v-model="form.iniciativa" :rules="[rules.required]" row>
              <label class="w3-text-blue"><b>Puntúa la capacidad del candidato/a para resolver problemas y tomar iniciativa (1 - Poca iniciativa, 5 - Toma iniciativa)</b></label>
              <v-radio v-for="n in 5" :key="n" :label="n" :value="n" class="mr-10"></v-radio>
            </v-radio-group>
            <v-radio-group v-model="form.impresion" :rules="[rules.required]" row>
              <label class="w3-text-blue"><b>Puntúa la impresión general del candidato/a (1 - Insatisfactorio, 5 - Sobresaliente)</b></label>
              <v-radio v-for="n in 5" :key="n" :label="n" :value="n" class="mr-10"></v-radio>
            </v-radio-group>
            <v-radio-group v-model="form.recomendar" :rules="[rules.required]" row>
              <label class="w3-text-blue"><b>¿Recomendarías al candidato/a para el puesto?</b></label>
              <v-radio label="Sí" value="Sí" class="mr-2"></v-radio>
              <v-radio label="No" value="No" class="mr-2"></v-radio>
            </v-radio-group>
            <v-radio-group v-model="form.expectativas" :rules="[rules.required]" row>
              <label class="w3-text-blue"><b>¿El candidato/a cumplió con las expectativas durante la entrevista?</b></label>
              <v-radio label="Sí" value="Sí" class="mr-2"></v-radio>
              <v-radio label="No" value="No" class="mr-2"></v-radio>
            </v-radio-group>
            <v-textarea label="Comentarios adicionales sobre las fortalezas y áreas de mejora del candidato/a" v-model="form.comentarios" :rules="[rules.required]"></v-textarea>
            <v-textarea label="Recomendaciones para el proceso de contratación o desarrollo profesional" v-model="form.recomendaciones" :rules="[rules.required]"></v-textarea>
            
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
      form: {
        nombre: '',
        telefono: '',
        correo: '',
        posicion: '',
        comunicacion: '',
        experiencia: '',
        equipo: '',
        iniciativa: '',
        impresion: '',
        recomendar: '',
        expectativas: '',
        comentarios: '',
        recomendaciones: ''
      },
      rules: {
        required: value => !!value || 'Este campo es obligatorio',
        email: value => /.+@.+\..+/.test(value) || 'Correo electrónico no válido',
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
      this.$store.commit('setcrearEntrevistaState', false);
    }
  },
};
</script>
