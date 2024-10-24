import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import LoginForm from '../views/LoginForm.vue';
import Users from '../views/CrearUsuario.vue';
import Vacantes from '../views/CrearVacantes.vue';
import Candidatos from '../views/CrearCandidatos.vue';
import Permisos from '../views/CrearPermisos.vue';
import ProgEntrevista from '../views/ProgramarEntrevista.vue';
import Entrevista from '../views/crearEntrevista.vue';
//reportes
import reporteCandidato from '../components/reportes/reporteCandidatos.vue';
import reportePermiso from '../components/reportes/reportePermiso.vue';
import ReporteEntrevista from '../components/Entrevistas/ReporteEntrevista.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'loginform',
    component: LoginForm
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
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
  {
    path: '/crearEntrevista',
    name: 'crearEntrevista',
    component: Entrevista
  },
  {
    path: '/reporteCandidato',
    name: 'reporteCandidato',
    component: reporteCandidato
  },
  {
    path: '/reportePermiso',
    name: 'reportePermiso',
    component: reportePermiso
  },
  {
    path: '/reporteEntrevista',
    name: 'reporteEntrevista',
    component: ReporteEntrevista
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

// Guardias de navegación
router.beforeEach((to, from, next) => {
  const loggedIn = sessionStorage.getItem('token');
  if (to.matched.some(record => record.meta.requiresAuth) && !loggedIn) {
    next({ name: 'loginform' });
  } else {
    next();
  }
});

// // Guardias de navegación
// router.beforeEach((to, from, next) => {

//   const publicPages = ['/loginform'];
//   const authRequired = !publicPages.includes(to.path);
//   const loggedIn = localStorage.getItem('token');

//   // if(!loggedIn){
//   //   return next('/login')
//   // }

//   // if(loggedIn){
//   //   return next('/home')
//   // }

//   if (!loggedIn) {
//   next( '/loginform');
//   } else {
//     next('/Home');
//   }
// });

export default router;
