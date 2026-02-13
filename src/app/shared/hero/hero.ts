import { Component, Input } from '@angular/core'; // 1. Importar Input
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.html',
  styleUrl: './hero.css'
})
export class Hero {
  // 2. Definir las variables que recibirán datos desde fuera
  @Input() subtitulo: string = '';        // Ej: "Odontología Premium"
  @Input() titulo: string = '';           // Ej: "El Arte de una Sonrisa Perfecta,"
  @Input() tituloDestacado: string = '';  // Ej: "Redefinido." (Saldrá en color dorado)
  @Input() descripcion: string = '';      // El párrafo largo
  @Input() imagen: string = '';           // URL de la foto
  @Input() mostrarBotones: boolean = true; // Para ocultar botones en páginas como "Acerca"
}