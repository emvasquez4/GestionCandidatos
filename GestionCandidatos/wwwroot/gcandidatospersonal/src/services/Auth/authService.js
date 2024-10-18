// authService.js
import store from './store';

export async function login(username, password) {
  // Simulación de llamada a la API
  const response = await fakeApiLogin(username, password);
  if (response.success) {
    store.commit('setUser', {
      isLoggedIn: true,
      roles: response.roles, // Aquí se obtienen los roles desde la base de datos
    });
  }
}

async function fakeApiLogin(username, password) {
  // Simulación de respuesta de la API
  return {
    success: true,
    roles: ['admin', 'editor'], // Ejemplo de roles obtenidos
  };
}
