import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Sede {
  nombre: string;
  ciudad: string;
  concurrencia: 'alta' | 'media' | 'baja';
  capacidad: number; // Porcentaje de ocupación actual
  imagen: string;
}

@Component({
  selector: 'app-sedes', // Puedes cambiar el selector si quieres
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './sedes.html',
  styleUrl: './sedes.css'
})
export class Sedes {
  
  // Variable para el input del buscador
  filtroNombre: string = '';

  // Datos de las sedes (Simulando tu array original)
  sedes: Sede[] = [
    { 
      nombre: 'Sede Quitumbe', 
      ciudad: 'Quito Sur', 
      concurrencia: 'alta', 
      capacidad: 88,
      imagen: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2053&auto=format&fit=crop'
    },
    { 
      nombre: 'Sede Quicentro', 
      ciudad: 'Quito Norte', 
      concurrencia: 'media', 
      capacidad: 50,
      imagen: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2068&auto=format&fit=crop'
    },
    { 
      nombre: 'Sede Ambato', 
      ciudad: 'Ambato Centro', 
      concurrencia: 'baja', 
      capacidad: 25,
      imagen: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=2070&auto=format&fit=crop'
    },
    { 
      nombre: 'Sede Cumbayá', 
      ciudad: 'Valle', 
      concurrencia: 'media', 
      capacidad: 60,
      imagen: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop'
    }
  ];

  // Getter para filtrar automáticamente cuando cambia el input
  get sedesFiltradas() {
    return this.sedes.filter(sede => 
      sede.nombre.toLowerCase().includes(this.filtroNombre.toLowerCase()) ||
      sede.ciudad.toLowerCase().includes(this.filtroNombre.toLowerCase())
    );
  }
}