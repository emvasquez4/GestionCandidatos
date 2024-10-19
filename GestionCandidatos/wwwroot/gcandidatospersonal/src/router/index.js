import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import LoginForm from '../views/LoginForm.vue'
import Users from '../views/CrearUsuario.vue'
import Vacantes from '../views/CrearVacantes.vue'
import Candidatos from '../views/CrearCandidatos.vue'
import Permisos from '../views/CrearPermisos.vue'
import ProgEntrevista from '../views/ProgramarEntrevista.vue'


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
    path: '/crearvacante',
    name: 'crearvacante',
    component: Vacantes
  },
  {
    path: '/crearcandidato',
    name: 'crearcandidato',
    component: Candidatos
  },
  {
    path: '/crearpermisos',
    name: 'crearpermisos',
    component: Permisos
  },
  {
    path: '/progEntrevista',
    name: 'progEntrevista',
    component: ProgEntrevista
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
