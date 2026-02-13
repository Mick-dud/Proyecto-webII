import { Component, inject, signal, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Paciente, PacienteService } from '../service/paciente.service';
// ⚠️ IMPORTANTE: Esta ruta busca en shared/services


@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './formulario.html',
  styleUrl: './formulario.css',
})
export class Pacientes implements OnInit {
  
  private servicio = inject(PacienteService);
  
  listaPacientes = signal<Paciente[]>([]);
  
  editando = false;
  idEdicion: string | null = null;

  nuevoPaciente: Paciente = {
    nombre: '',
    email: '',
    telefono: '',
    tratamiento: ''
  };

  ngOnInit() {
    this.cargarPacientes();
  }

  cargarPacientes() {
    this.servicio.getPacientes().subscribe({
      next: (datos) => {
        this.listaPacientes.set(datos);
      },
      error: (e) => console.error('Error:', e)
    });
  }

  guardar() {
    if (this.editando && this.idEdicion) {
      this.servicio.actualizarPaciente(this.idEdicion, this.nuevoPaciente).subscribe(() => {
        this.cargarPacientes();
        this.cancelarEdicion();
      });
    } else {
      this.servicio.crearPaciente(this.nuevoPaciente).subscribe(() => {
        this.cargarPacientes();
        this.cancelarEdicion();
      });
    }
  }

  eliminar(id: string) {
    if (confirm('¿Borrar registro?')) {
      this.servicio.eliminarPaciente(id).subscribe(() => {
        this.cargarPacientes();
      });
    }
  }

  editar(paciente: Paciente) {
    this.editando = true;
    this.idEdicion = paciente.id!;
    this.nuevoPaciente = { ...paciente };
  }

  cancelarEdicion() {
    this.editando = false;
    this.idEdicion = null;
    this.nuevoPaciente = { nombre: '', email: '', telefono: '', tratamiento: '' };
  }
}