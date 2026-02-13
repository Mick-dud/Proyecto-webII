import { Component, inject } from '@angular/core'; // Importar inject
import { CommonModule, Location } from '@angular/common'; // Importar Location
import { RouterLink } from '@angular/router'; // Importar RouterLink

@Component({
  selector: 'app-error-page',
  standalone: true,
  imports: [CommonModule, RouterLink], // Agregar RouterLink aquí
  templateUrl: './error-page.html',
  styles: `
    @keyframes float {
      0%, 100% { transform: translateY(0px); }
      50% { transform: translateY(-20px); }
    }
    .animate-float {
      animation: float 6s ease-in-out infinite;
    }
  `
})
export class ErrorPage {
  
  // Inyectar Location para poder volver atrás en el historial
  private location = inject(Location);

  goBack() {
    this.location.back();
  }
}