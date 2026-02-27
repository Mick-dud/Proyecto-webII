import { Component, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // <-- ¡MUY IMPORTANTE para usar formularios!
import { Cita, CitaService } from '../../sercices/cita.service';


@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule], // <-- Lo agregamos aquí también
  templateUrl: './contact.html',
  styleUrls: ['./contact.css']
})
export class Contacto implements OnInit {
  private citaService = inject(CitaService);

  listaCitas = signal<Cita[]>([]);

  // Creamos un objeto vacío donde se guardará lo que escriba el usuario
  nuevaCita: Cita = {
    nombre: '',
    fecha: '',
    hora: '',
    motivo: ''
  };

  ngOnInit() {
    this.cargarCitas();
  }

  // Traer citas de la base de datos
  cargarCitas() {
    this.citaService.getCitas().subscribe(citas => {
      this.listaCitas.set(citas);
    });
  }

  // La función que se activa al darle click al botón "Agendar"
  agendarCita() {
    // 1. Validamos que no envíen el formulario vacío
    if (!this.nuevaCita.nombre || !this.nuevaCita.fecha || !this.nuevaCita.hora || !this.nuevaCita.motivo) {
      alert('Por favor, completa todos los campos para agendar tu cita.');
      return;
    }

    // 2. Enviamos la cita a la base de datos
    this.citaService.crearCita(this.nuevaCita).subscribe(() => {
      alert(`¡Genial, ${this.nuevaCita.nombre}! Tu cita ha sido agendada con éxito.`);

      // 3. Recargamos la lista para que aparezca al instante
      this.cargarCitas();

      // 4. Limpiamos el formulario para el siguiente paciente
      this.nuevaCita = { nombre: '', fecha: '', hora: '', motivo: '' };
    });
  }
}