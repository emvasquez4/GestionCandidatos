<template>
  <v-main>
    <v-container>
      <v-card class="pa-3">
        <v-card-title class="headline">CAMBIAR CONTRASEÑA</v-card-title>
        <v-form>
          <v-text-field label="Contraseña actual" v-model="currentPassword" type="password"></v-text-field>
          <v-text-field label="Nueva contraseña" v-model="newPassword" type="password" :rules="passwordRules"></v-text-field>
          <v-text-field label="Confirmar nueva contraseña" v-model="confirmNewPassword" type="password" :rules="confirmPasswordRules"></v-text-field>
          <v-btn color="primary" @click="changePassword">Cambiar contraseña</v-btn>
        </v-form>
      </v-card>
    </v-container>
  </v-main>
</template>

<script>
export default {
  data() {
    return {
      currentPassword: '',
      newPassword: '',
      confirmNewPassword: '',
      passwordRules: [
        v => !!v || 'La contraseña es obligatoria',
        v => (v && v.length >= 6) || 'La contraseña debe tener al menos 6 caracteres',
      ],
      confirmPasswordRules: [
        v => !!v || 'Confirma la nueva contraseña',
        v => v === this.newPassword || 'Las contraseñas no coinciden',
      ],
    };
  },
  methods: {
    changePassword() {
      // Lógica para enviar los datos del formulario al servidor y cambiar la contraseña
      // Puedes usar Axios o cualquier otra librería para hacer la solicitud HTTP
      console.log('Contraseña actual:', this.currentPassword);
      console.log('Nueva contraseña:', this.newPassword);
    },
  },
};
</script>
