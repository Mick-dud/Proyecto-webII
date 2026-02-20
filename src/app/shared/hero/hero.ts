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
  // variables que recibirán datos desde fuera
  @Input() subtitulo: string = '';
  @Input() titulo: string = '';
  @Input() tituloDestacado: string = '';
  @Input() descripcion: string = '';
  @Input() imagen: string = '';
  @Input() mostrarBotones: boolean = true; 
}