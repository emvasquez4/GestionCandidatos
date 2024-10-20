<template  >
  <v-main>
   <v-container >
  <v-card class="pa-10" elevation="2" style="max-width: 60%; margin: auto;"> <!-- Aumenta el número para una sombra más pronunciada -->
    <v-row>
      <v-col cols="3">
        <v-img src="@/assets/loguito2.png" width="100%" height="auto"></v-img>
      </v-col>
      <v-col cols="8"  justify="center">
        <v-card-title class="headline" style="font-size: 5em; padding-top: 3em;">BIENVENIDOS</v-card-title> <!-- Ajusta el tamaño de la fuente como prefieras -->
        <v-card-subtitle>Ingresa con tu cuenta</v-card-subtitle>
      </v-col>
    </v-row>
    <v-form>
      <v-text-field label="Usuario" v-model="model.username" class="small"></v-text-field>
      <v-text-field label="Contraseña" v-model="model.password" type="password" class="small"></v-text-field>
      <v-btn color="primary" @click="login()">Login</v-btn>
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
          Services.UsuariosService.Login(this.model)
            .then(async response => {
              // Manejo de la respuesta exitosa
              if (response.data.token) {
                  sessionStorage.setItem('token', response.data.token);
                  const userId = response.data.usuario.id;

                  //obteniendo roles y permisos a pantalllas
                  const roles = await Services.UsuariosRolesService.getUserRolPermiso('CODUSUARIO', userId.toString());
                  const rolesAgrupados = roles.data;


                  this.$store.commit('SET_PERMISOS', rolesAgrupados);
                  this.$router.push({ name: 'Home' });
                   this.Message = error.response?.data?.message || 'Se ha creado el usuario exitosamente.';
                  this.showSuccess = true;
              }else{
                 this.Message = error.response?.data?.message || 'Ocurrió un error al ingresar.';
                this.showError = true;
              }
             
              // Puedes agregar cualquier acción que necesites tras el registro exitoso.
            })
            .catch(error => {
              // Manejo de errores
              this.Message = error.response?.data?.message || 'Ocurrió un error al ingresar.';
              this.showError = true;
            });
        }
    }
  }
}
</script>