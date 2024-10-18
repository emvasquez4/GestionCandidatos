import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import LoginForm from '../views/LoginForm.vue'
import Users from '../views/CrearUsuario.vue' //importamos el componente de vista
import MiVista from '../views/MiVista.vue' 

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/',
    name: 'loginform',
    component: LoginForm
  },
  {
    path: '/crearusuario',
    name: 'crearusuario',
    component: Users
  },
  {
    path: '/mivista',
    name: 'mivista',
    component: MiVista
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
