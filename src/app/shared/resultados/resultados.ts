import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-resultados',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './resultados.html',
  styleUrl: './resultados.css'
})
export class Resultados {
  
  // Inputs existentes...
  @Input() tituloSeccion: string = 'Transformaciones';
  @Input() tituloPrincipal: string = 'Resultados que Hablan';
  @Input() descripcion: string = 'Desliza para ver la magia de la odontología estética moderna.';
  @Input() imagenAntes: string = '/img/dientes_sin_otodoncia.png';
  @Input() imagenDespues: string = '/img/dientes_blancos.jpg';
  
  // --- NUEVOS INPUTS PARA EL BOTÓN ---
  @Input() textoBoton: string = 'Ver galería completa de casos'; // Texto por defecto
  @Input() urlBoton: string = '#';                               // Enlace por defecto
  @Input() mostrarBoton: boolean = true;                         // Opción para ocultarlo
  
  // Lógica del slider...
  sliderPosition: number = 50;

  updateSlider(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    this.sliderPosition = Number(inputElement.value);
  }
}