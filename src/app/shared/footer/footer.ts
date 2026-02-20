import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './footer.html',
  styleUrl: './footer.css'
})
export class Footer {
  anio: number = new Date().getFullYear();

  
  enlaces = [
    { texto: 'Home', link: '/' },
    { texto: 'Acerca', link: '/acerca' },
    { texto: 'Consultas', link: '/consultas' },
    { texto: 'Expedientes', link: '/expedientes' },
    { texto: 'Contacto', link: '/contacto' },
    { texto: 'Acceso Privado', link: '/login' }
  ];
}