<template>
 <div >
  <Barra />
  <Login />
 </div>
</template>

<script>
  import Login from '../components/Login/LoginForm'
  import Barra from '../components/Comunes/Toolbar.vue'

  export default {
  

    components: {
      Login,
      Barra,
    },
  }
</script>
