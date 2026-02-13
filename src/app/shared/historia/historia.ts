import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Hito {
  anio: string;
  titulo: string;
  descripcion: string;
  imagen: string;
}

@Component({
  selector: 'app-historia', 
  standalone: true,
  imports: [CommonModule],
  templateUrl: './historia.html', 
  styleUrl: './historia.css'      
})
export class Historia {   
  
  hitos: Hito[] = [
    {
      anio: '2015',
      titulo: 'El Comienzo de un Sueño',
      descripcion: 'Omegadent nace en un pequeño consultorio en el sur de Quito, con una sola unidad dental y la firme convicción de ofrecer odontología humana y honesta.',
      imagen: '/img/consultorio_2015.png'
    },
    {
      anio: '2018',
      titulo: 'Innovación Tecnológica',
      descripcion: 'Adquirimos nuestro primer equipo de radiografía digital y escáner 3D, marcando el inicio de la digitalización de nuestros procesos para diagnósticos precisos.',
      imagen: '/img/consultorio_2018.png'
    },
    {
      anio: '2021',
      titulo: 'Expansión a Nuevas Sedes',
      descripcion: 'Gracias a la confianza de miles de pacientes, inauguramos nuestra sede central en el norte, ampliando nuestro equipo a más de 15 especialistas.',
      imagen: '/img/consultorio_2021.png'
    },
    {
      anio: '2026',
      titulo: 'Líderes en Estética',
      descripcion: 'Nos consolidamos como referentes en Diseño de Sonrisa y Ortodoncia Invisible, combinando arte y ciencia para transformar vidas.',
      imagen: '/img/consultorio_2026.png'
    }
  ];
}