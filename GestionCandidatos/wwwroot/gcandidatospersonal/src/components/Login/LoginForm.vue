<template>
  <v-main>
    <v-container>
      <v-card class="pa-8" elevation="5" max-width="500px" style="margin: auto; border-radius: 16px;"> <!-- Ajusta el max-width para el tamaño del card -->
        <v-row class="align-center">
          <v-col cols="4">
            <v-img src="@/assets/loguito2.png" width="100%" height="auto"></v-img>
          </v-col>
          <v-col cols="8">
            <v-card-title class="headline" style="font-size: 2.5em; padding-top: 1em; text-align: center;">
              BIENVENIDOS
            </v-card-title>
            <v-card-subtitle style="text-align: center;">
              Ingresa con tu cuenta
            </v-card-subtitle>
          </v-col>
        </v-row>
        <v-form class="mt-4" @submit.prevent="login">
          <v-text-field
            label="Usuario"
            v-model="model.username"
            class="mb-4"
            outlined
            :disabled="loading"
          ></v-text-field>
          <v-text-field
            label="Contraseña"
            v-model="model.password"
            type="password"
            class="mb-4"
            outlined
            :disabled="loading"
          ></v-text-field>
          <v-btn
            :loading="loading"
            block
            color="primary"
            @click="login"
            :disabled="loading"
            class="mb-2"
          >
            Iniciar Sesión
          </v-btn>
        </v-form>
      </v-card>
    </v-container>
  </v-main>
</template>

 

<script>
import Services from '../../services/Services';
export default {
  data: () => ({
    model:{
       username: '',
      password: '',
    },
    loading: false,
     rules: {
        required: value => !!value || 'Required.',
      },
  }),
  methods: {
    login() {
        // Verifica si los campos están llenos
        if (!this.model.username || !this.model.password) {
          this.error = 'Username and password are required';
          return;
        }else{
          this.loading = true;
          Services.UsuariosService.Login(this.model)
            .then(async response => {
              // Manejo de la respuesta exitosa
              if (response.data.token) {
                  sessionStorage.setItem('token', response.data.token);
                  const userId = response.data.usuario.id;
                  this.$store.commit('SET_USER_ID', userId);
                  //obteniendo roles y permisos a pantalllas
                  const roles = await Services.UsuariosRolesService.getUserRolPermiso('CODUSUARIO', userId.toString());
                  const rolesAgrupados = roles.data;


                  this.$store.commit('SET_MENUS', rolesAgrupados);
                  this.$router.push({ name: 'Home' });
                   this.Message = error.response?.data?.message || 'Se ha creado el usuario exitosamente.';
                  this.showSuccess = true;
                  this.loading = false;
              }else{
                 this.Message = error.response?.data?.message || 'Ocurrió un error al ingresar.';
                this.showError = true;
                this.loading = false;
              }
             
              // Puedes agregar cualquier acción que necesites tras el registro exitoso.
            })
            .catch(error => {
              // Manejo de errores
              this.Message = error.response?.data?.message || 'Ocurrió un error al ingresar.';
              this.showError = true;
              this.loading = false;
            });
        }
    }
  }
}
</script>