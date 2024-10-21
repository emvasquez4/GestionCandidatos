<template>
    <div>
      <h1>Reporte de Permisos por Empleados</h1>
      <table>
        <thead>
          <tr>
            <th>Empleado</th>
            <th>Fecha de Inicio</th>
            <th>Fecha de Fin</th>
            <th>Motivo</th>
            <th>Estado</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="permiso in permisos" :key="permiso.id">
            <td>{{ permiso.empleado }}</td>
            <td>{{ permiso.fechaInicio }}</td>
            <td>{{ permiso.fechaFin }}</td>
            <td>{{ permiso.motivo }}</td>
            <td>{{ permiso.estado }}</td>
          </tr>
        </tbody>
      </table>
      <br>
      <button @click="generarReporte('pdf')">Generar PDF</button>
      <button @click="generarReporte('excel')">Generar Excel</button>
    </div>
  </template>
  
  <script>
  //import jsPDF from 'jspdf';
  //import 'jspdf-autotable';
  //import XLSX from 'xlsx';
  
  export default {
    data() {
      return {
        permisos: [
          { id: 1, empleado: 'Juan Perez', fechaInicio: '2024-01-01', fechaFin: '2024-01-03', motivo: 'Vacaciones', estado:'Rechazado' },
          { id: 2, empleado: 'Ana Lopez', fechaInicio: '2024-02-01', fechaFin: '2024-02-02', motivo: 'Enfermedad', estado:'Rechazado' },
          // ...más permisos
        ],
      };
    },
    methods: {
      generarReporte(formato) {
        if (formato === 'pdf') {
          const doc = new jsPDF();
          doc.text('Reporte de Permisos por Empleados', 20, 10);
          doc.autoTable({
            head: [['Empleado', 'Fecha de Inicio', 'Fecha de Fin', 'Motivo']],
            body: this.permisos.map(p => [p.empleado, p.fechaInicio, p.fechaFin, p.motivo]),
          });
          doc.save('reporte.pdf');
        } else if (formato === 'excel') {
          const worksheet = XLSX.utils.json_to_sheet(this.permisos);
          const workbook = XLSX.utils.book_new();
          XLSX.utils.book_append_sheet(workbook, worksheet, 'Permisos');
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
    border: 1px solid #ddd;
    padding: 8px;
  }
  
  th {
    background-color: #f2f2f2;
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
  