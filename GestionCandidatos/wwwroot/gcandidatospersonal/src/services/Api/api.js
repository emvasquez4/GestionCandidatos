// api.js
import axios from 'axios';

const apiClient = axios.create({
      baseURL: 'https://localhost:44390/api/', //test
      //baseURL: 'http://dsicandidatosapi.somee.com/api/', //prod
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    }
});

export default apiClient;
