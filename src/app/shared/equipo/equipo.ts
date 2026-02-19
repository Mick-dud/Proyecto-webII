import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Especialista {
  nombre: string;
  cargo: string;
  descripcion: string;
  imagen: string;  
}
@Component({
  selector: 'app-equipo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './equipo.html',
  styles: []
})
export class Equipo {  
  especialistas: Especialista[] = [
    {
      nombre: 'Dr. Alejandro Vega',
      cargo: 'Implantólogo',
      descripcion: 'Especialista en rehabilitación oral compleja con más de 15 años devolviendo sonrisas.',
      imagen: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=2665&auto=format&fit=crop',
    },
    {
      nombre: 'Dra. Camila Torres',
      cargo: 'Ortodoncia Invisible',
      descripcion: 'Certificada en Invisalign. Experta en alinear tu sonrisa sin que nadie lo note.',
      imagen: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=3387&auto=format&fit=crop',
      
    },
    {
      nombre: 'Dr. Martín Solares',
      cargo: 'Estética Dental',
      descripcion: 'El artista detrás de nuestros Diseños de Sonrisa. Perfeccionista en cada carilla.',
      imagen: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=3000&auto=format&fit=crop',
      
    },
    {
      nombre: 'Dra. Elena Rivas',
      cargo: 'Odontopediatría',
      descripcion: 'Su dulzura y paciencia hacen que la visita al dentista sea un juego para los niños.',
      imagen: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=3456&auto=format&fit=crop',
      
    }
  ];
}