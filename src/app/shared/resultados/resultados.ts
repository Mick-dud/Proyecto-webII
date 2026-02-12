import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-resultados',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './resultados.html',
  styleUrl: './resultados.css'
})
export class Resultados {
  // Valor inicial del slider al 50%
  sliderPosition: number = 50;

  // Función para actualizar la posición cuando el usuario arrastra
  updateSlider(event: Event) {
    const input = event.target as HTMLInputElement;
    this.sliderPosition = Number(input.value);
  }
}