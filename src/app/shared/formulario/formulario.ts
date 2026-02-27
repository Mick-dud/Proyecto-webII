import { Component, inject, signal, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Paciente, PacienteService } from '../../sercices/paciente.service';
// Importamos la interfaz y el servicio que ya creaste


@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './formulario.html',
  styleUrls: ['./formulario.css']
})
export class Formulario implements OnInit {
  private pacienteService = inject(PacienteService);

  // Signal para mantener la tabla actualizada en tiempo real
  listaPacientes = signal<Paciente[]>([]);

  editando = false;

  // Objeto inicial para el formulario
  nuevoPaciente: Paciente = {
    id: '',
    nombre: '',
    email: '',
    telefono: '',
    tratamiento: '',
    edad: 0,
    saldoPendiente: 0
  };

  ngOnInit() {
    this.obtenerPacientes();
  }

  // Leer (Read)
  obtenerPacientes() {
    this.pacienteService.getPacientes().subscribe(pacientes => {
      this.listaPacientes.set(pacientes);
    });
  }

  // Crear o Actualizar (Create / Update)
  guardar() {
    if (this.editando && this.nuevoPaciente.id) {
      // CAMBIO: Usamos putPaciente y enviamos SOLO this.nuevoPaciente
      this.pacienteService.actualizarPaciente(this.nuevoPaciente).subscribe(() => {
        this.obtenerPacientes();
        this.cancelarEdicion();
        alert('Expediente actualizado correctamente.');
      });
    } else {
      //Autoincrementable
      let proximoId = 1;
      const pacientesActuales = this.listaPacientes();
      if(pacientesActuales.length > 0){
        const ids= pacientesActuales.map (p =>Number(p.id));
        const maxId = Math.max(...ids);
        proximoId = maxId + 1;
      }
      this.nuevoPaciente.id = Date.now().toString();
      
      //Guardamos el JSON Server
      this.pacienteService.crearPaciente(this.nuevoPaciente).subscribe(() => {
        this.obtenerPacientes();
        this.cancelarEdicion();
        alert('Paciente registrado con éxito.');
      });
    }
  }

  // Cargar datos al formulario para editar
  editar(paciente: Paciente) {
    this.editando = true;
    this.nuevoPaciente = { ...paciente };
  }

  // Eliminar (Delete)
  eliminar(id: string) {
    if (confirm('¿Estás seguro de eliminar este expediente? Esta acción no se puede deshacer.')) {
      this.pacienteService.eliminarPaciente(id).subscribe(() => {
        this.obtenerPacientes();
      });
    }
  }

  // Limpiar el formulario
  cancelarEdicion() {
    this.editando = false;
    this.nuevoPaciente = {id: '', nombre: '', email: '', telefono: '', tratamiento: '', edad: 0, saldoPendiente: 0 };
  }
}
