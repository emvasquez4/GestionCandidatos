<template>
    <div class="report-container">
      <header>
        <h1>Informe de Entrevista de Selección</h1>
      </header>
      <section class="section">
        <h2>1. Identificación del candidato</h2>
        <div class="info-grid">
          <p><strong>Nombre:</strong> {{ candidato.nombre }}</p>
          <p><strong>DUI:</strong> {{ candidato.dui }}</p>
          <p><strong>Edad:</strong> {{ candidato.edad }}</p>
          <p><strong>Teléfono:</strong> {{ candidato.telefono }}</p>
          <p><strong>Ciudad de Residencia:</strong> {{ candidato.ciudad }}</p>
          <p><strong>Estudios:</strong> {{ candidato.estudios }}</p>
        </div>
      </section>
      <section class="section">
        <h2>2. Antecedentes de la entrevista</h2>
        <div class="info-grid">
          <p><strong>Solicitante:</strong> {{ entrevista.solicitante }}</p>
          <p><strong>Evaluador:</strong> {{ entrevista.evaluador }}</p>
          <p><strong>Cargo evaluado:</strong> {{ entrevista.cargo }}</p>
          <p><strong>Fecha de solicitud:</strong> {{ entrevista.fechaSolicitud }}</p>
          <p><strong>Fecha de entrevista:</strong> {{ entrevista.fechaEntrevista }}</p>
          
        </div>
      </section>
      <section class="section">
        <h2>3. Análisis de competencia</h2>
      <table class="competence-table">
        <thead>
          <tr>
            <th>COMPETENCIAS</th>
            <th>1</th>
            <th>2</th>
            <th>3</th>
            <th>4</th>
            <th>5</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Comprensión de instrucción y procedimiento</td>
            <td>{{ competencias.intelectual1 }}</td>
            <td>{{ competencias.intelectual2 }}</td>
            <td>{{ competencias.intelectual3 }}</td>
            <td>{{ competencias.intelectual4 }}</td>
            <td>{{ competencias.intelectual5 }}</td>
          </tr>
          <tr>
            <td>Atención y concentración</td>
            <td>{{ competencias.atencion1 }}</td>
            <td>{{ competencias.atencion2 }}</td>
            <td>{{ competencias.atencion3 }}</td>
            <td>{{ competencias.atencion4 }}</td>
            <td>{{ competencias.atencion5 }}</td>
          </tr>
          <tr>
            <td>Capacidad de aprendizaje e integración</td>
            <td>{{ competencias.aprendizaje1 }}</td>
            <td>{{ competencias.aprendizaje2 }}</td>
            <td>{{ competencias.aprendizaje3 }}</td>
            <td>{{ competencias.aprendizaje4 }}</td>
            <td>{{ competencias.aprendizaje5 }}</td>
          </tr>
          <tr>
            <td>Trabajo en equipo/cooperación</td>
            <td>{{ competencias.equipo1 }}</td>
            <td>{{ competencias.equipo2 }}</td>
            <td>{{ competencias.equipo3 }}</td>
            <td>{{ competencias.equipo4 }}</td>
            <td>{{ competencias.equipo5 }}</td>
          </tr>
          <tr>
            <td>Integridad y respeto mutuo</td>
            <td>{{ competencias.integridad1 }}</td>
            <td>{{ competencias.integridad2 }}</td>
            <td>{{ competencias.integridad3 }}</td>
            <td>{{ competencias.integridad4 }}</td>
            <td>{{ competencias.integridad5 }}</td>
          </tr>
          <tr>
            <td>Trabajo bajo presión</td>
            <td>{{ competencias.presion1 }}</td>
            <td>{{ competencias.presion2 }}</td>
            <td>{{ competencias.presion3 }}</td>
            <td>{{ competencias.presion4 }}</td>
            <td>{{ competencias.presion5 }}</td>
          </tr>
        </tbody>
      </table>
    </section>
    <button class="btn-green" @click="generatePDF">Generar PDF</button>
  </div>
</template>

<script>
import axios from 'axios';
import jsPDF from 'jspdf';

export default {
  data() {
    return {
      candidato: {},
      entrevista: {},
      competencias: {}
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      try {
        const response = await axios.get('URL_DE_TU_API');
        this.candidato = response.data.candidato;
        this.entrevista = response.data.entrevista;
        this.competencias = response.data.competencias;
      } catch (error) {
        console.error('Error fetching data:', error);
        }
      },
      generatePDF() {
      const doc = new jsPDF();
      doc.text("Informe de Entrevista de Selección", 10, 10);
      doc.text("1. Identificación del candidato", 10, 20);
      doc.text(`Nombre: ${this.candidato.nombre}`, 10, 30);
      doc.text(`DUI: ${this.candidato.dui}`, 10, 40);
      doc.text(`Edad: ${this.candidato.edad}`, 10, 50);
      doc.text(`Teléfono: ${this.candidato.telefono}`, 10, 60);
      doc.text(`Ciudad de Residencia: ${this.candidato.ciudad}`, 10, 70);
      doc.text(`Estudios: ${this.candidato.estudios}`, 10, 80);

      doc.text("2. Antecedentes de la entrevista", 10, 90);
      doc.text(`Solicitante: ${this.entrevista.solicitante}`, 10, 100);
      doc.text(`Evaluador: ${this.entrevista.evaluador}`, 10, 110);
      doc.text(`Cargo evaluado: ${this.entrevista.cargo}`, 10, 120);
      doc.text(`Fecha de solicitud: ${this.entrevista.fechaSolicitud}`, 10, 130);
      doc.text(`Fecha de entrevista: ${this.entrevista.fechaEntrevista}`, 10, 140);      
    }
  }
}
  </script>
  
  <style scoped>
  .report-container {
    font-family: Arial, sans-serif;
    margin: 20px;
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 8px;
    background-color: #f9f9f9;
  }
  
  header {
    text-align: center;
    margin-bottom: 20px;
  }
  
  h1 {
    color: #2c3e50;
    font-size: 24px;
  }
  
  .section {
    margin-bottom: 20px;
  }
  
  h2 {
    color: #34495e;
    font-size: 20px;
    border-bottom: 2px solid #ddd;
    padding-bottom: 5px;
  }
  
  .info-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
  }
  
  .info-grid p {
    margin: 5px 0;
  }
  
  .competence-table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 10px;
  }
  
  .competence-table th, .competence-table td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: center;
  }
  
  .competence-table th {
    background-color: #f2f2f2;
    color: #333;
  }

  .btn-green {
  background-color: #4CAF50; /* Verde */
  border: none;
  color: white;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 4px;
  transition: background-color 0.3s ease;
}

.btn-green:hover {
  background-color: #45a049; /* Verde más oscuro al pasar el ratón */
}
  </style>
  