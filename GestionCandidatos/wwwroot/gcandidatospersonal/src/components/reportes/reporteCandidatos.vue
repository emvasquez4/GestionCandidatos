<template>
    <div>
      <h1>Reporte de Candidatos Electos</h1>
      <table>
        <thead>
          <tr>
            <th>Candidato</th>
            <th>FX</th>
            <th>EX.A</th>
            <th>TBP</th>
            <th>CA</th>
            <!-- Agrega más columnas según sea necesario -->
          </tr>
        </thead>
        <tbody>
          <tr v-for="candidato in candidatos" :key="candidato.id">
            <td>{{ candidato.nombre }}</td>
            <td>{{ candidato.fx }}</td>
            <td>{{ candidato.exa }}</td>
            <td>{{ candidato.tbp }}</td>
            <td>{{ candidato.ca }}</td>
            <!-- Agrega más celdas según sea necesario -->
          </tr>
        </tbody>
      </table>
      <br>
      <h4>Leyenda</h4>
      <ul>
        <li>FX: Flexibilidad</li>
        <li>EX.A: Experiencia en el Área</li>
        <li>TBP: Trabajo bajo presión</li>
        <li>CA: Comunicación acertiva</li>
      </ul>
      <br>
      <button @click="generarReporte('pdf')">Generar PDF</button>
      <button @click="generarReporte('excel')">Generar Excel</button>
    </div>
  </template>
  
  <script>
 // import jsPDF from 'jspdf';
  //import 'jspdf-autotable';
  //import XLSX from 'xlsx';
  
  export default {
    data() {
      return {
        candidatos: [
          { id: 1, nombre: 'Juan Perez', fx: ' ', exa: '', tbp: '', ca: '' },
          { id: 2, nombre: 'Pedro Juan', fx: ' ', exa: '', tbp: '', ca: '' },
          { id: 3, nombre: 'Juan Ernesto', fx: ' ', exa: '', tbp: '', ca: '' },
          // ...más candidatos
        ],
      };
    },
    methods: {
      generarReporte(formato) {
        if (formato === 'pdf') {
          const doc = new jsPDF();
          doc.text('Reporte de Candidatos', 20, 10);
          doc.autoTable({
            head: [['Candidato', 'FX', 'EX.A', 'TBP', 'CA']],
            body: this.candidatos.map(c => [c.nombre, c.fx, c.exa, c.tbp, c.ca]),
          });
          doc.save('reporte.pdf');
        } else if (formato === 'excel') {
          const worksheet = XLSX.utils.json_to_sheet(this.candidatos);
          const workbook = XLSX.utils.book_new();
          XLSX.utils.book_append_sheet(workbook, worksheet, 'Candidatos');
          XLSX.writeFile(workbook, 'reporte.xlsx');
        }
      },
    },
  };
  </script>
  
  <style scoped>
  table {
    width: 100%;
    border-collapse: collapse;
  }
  
  th, td {
    border: 1px solid #dddddd;
    padding: 8px;
  }
  
  th {
    background-color:#a9a4a4;
  }
  
  button {
    margin-right: 10px;
    padding: 10px;
    background-color: #4CAF50;
    color: white;
    border: none;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #45a049;
  }
  </style>
  