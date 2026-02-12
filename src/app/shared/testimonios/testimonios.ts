import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Testimonio {
  nombre: string;
  tratamiento: string;
  comentario: string;
  imagen: string; // URL de la foto del paciente
  estrellas: number; // Del 1 al 5
}

@Component({
  selector: 'app-testimonios',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testimonios.html',
  styles: []
})
export class Testimonios {
  
  testimonios: Testimonio[] = [
    {
      nombre: 'María Fernanda G.',
      tratamiento: 'Diseño de Sonrisa',
      comentario: 'Llegué con mucha inseguridad sobre mis dientes y salí sonriendo como nunca. El equipo de Omegadent entendió exactamente lo que quería: algo natural pero perfecto.',
      imagen: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop',
      estrellas: 5
    },
    {
      nombre: 'Carlos Ramírez',
      tratamiento: 'Implantes Dentales',
      comentario: 'La tecnología que usan es impresionante. Me mostraron cómo quedaría mi implante antes de la cirugía. El proceso fue rápido y sin dolor. Totalmente recomendado.',
      imagen: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1887&auto=format&fit=crop',
      estrellas: 5
    },
    {
      nombre: 'Sofía L.',
      tratamiento: 'Ortodoncia Invisible',
      comentario: 'Me encantó el trato personalizado. Los alineadores son súper cómodos y nadie nota que los llevo puestos. Mi sonrisa ha cambiado muchísimo en solo 4 meses.',
      imagen: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop',
      estrellas: 4
    },
    {
      nombre: 'Elena Velasco',
      tratamiento: 'Blanqueamiento Dental',
      comentario: 'Tenía un evento importante y necesitaba resultados rápidos. El blanqueamiento fue espectacular, mis dientes bajaron varios tonos y lo mejor es que no sentí nada de sensibilidad.',
      imagen: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1888&auto=format&fit=crop',
      estrellas: 5
    },
    {
      nombre: 'Javier Méndez',
      tratamiento: 'Endodoncia sin Dolor',
      comentario: 'Siempre le tuve pánico al dentista, pero en Omegadent es otra historia. El ambiente es tan tranquilo y el doctor tan suave que casi me quedo dormido durante el procedimiento.',
      imagen: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop',
      estrellas: 4
    },
    {
      nombre: 'Andrés Torres',
      tratamiento: 'Carillas de Porcelana',
      comentario: 'La mejor inversión profesional que he hecho. Quería un cambio estético pero que no se viera falso. El resultado es tan natural que nadie cree que son carillas. ¡Gracias!',
      imagen: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop',
      estrellas: 5
    }
  ];

  // Función auxiliar para generar el array de estrellas en el HTML
  getEstrellas(numero: number): number[] {
    return Array(numero).fill(0);
  }
}