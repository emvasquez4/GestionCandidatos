import axios from 'axios';
import UsuariosService from './Usuarios/UsuariosServices';
import UsuariosRolesService from './UsuariosRoles/UsuariosRolesServices';
import VacantesService from './Vacantes/VacantesServices';
import RolesService from './Roles/RolesServices';
import PermisosService from './Permisos/PermisosServices';
import MenusService from './Menus/MenusServices';
import EntrevistasService from './Entrevistas/EntrevistasServices';
import CandidatosService from './Candidatos/CandidatosServices';
import PuestosService from './Puestos/PuestosServices';
import RolesPermisosService from './RolesPermisos/RolesPermisosServices';

const Services = {
  UsuariosService,
  UsuariosRolesService,
  VacantesService,
  PuestosService, 
  RolesPermisosService,
  RolesService,
  PermisosService,
  MenusService,
  EntrevistasService,
  CandidatosService,
};

export default Services;