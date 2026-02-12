import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Necesario para ngClass, etc.

interface Servicio {
  id: number;
  nombre: string;
  descripcion: string;
  imagen: string;
  activo: boolean; // Esto controla si está disponible o "Próximamente"
}

@Component({
  selector: 'app-servicios',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './servicios.html',
  styleUrl: './servicios.css',
})
export class Servicios {
  
  // Variables de control
  subtitulo: string = "Resultados para:";
  servicioSeleccionado: string = "Ninguno";

  // Datos de los servicios
  servicios: Servicio[] = [
    {
      id: 1,
      nombre: 'Implantes Dentales',
      descripcion: 'Recupera tu sonrisa y funcionalidad con soluciones fijas y duraderas de aspecto natural.',
      imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTxPguY79_e0_xA0gYDr5gPWlJJdQiF034mg&s',
      activo: true
    },
    {
      id: 2,
      nombre: 'Rehabilitación Oral',
      descripcion: 'Devolvemos la función estética y armonía oral mediante prótesis y tecnología avanzada.',
      imagen: 'https://www.odontoadvance.ec/wp-content/uploads/2016/05/rehabilitacionoral.jpg',
      activo: true
    },
    {
      id: 3,
      nombre: 'Diseño de Sonrisa',
      descripcion: 'Carillas y blanqueamientos personalizados para que luzcas radiante.',
      imagen: 'https://www.dentaldelaware.com/wp-content/uploads/2023/04/Smile_Design-1024x576.png',
      activo: true
    },
    {
      id: 4,
      nombre: 'Ortodoncia Invisible',
      descripcion: 'Alineación dental discreta y efectiva sin los brackets tradicionales.',
      imagen: 'https://www.teeth22.com/wp-content/uploads/2018/11/cuidados-diferentes-tipos-ortodoncia-1024x511.jpg',
      activo: true
    },
    {
      id: 5,
      nombre: 'Cirugía Maxilofacial',
      descripcion: 'Procedimientos quirúrgicos complejos realizados por especialistas certificados.',
      imagen: 'https://prixz.com/salud/wp-content/uploads/2022/03/Cirugia-Maxilofacial-Que-es-y-para-que-sirve.jpg',
      activo: false // <--- ESTE ES EL QUE SALDRÁ COMO "PRÓXIMAMENTE"
    }
  ];

  // Array que se muestra en el HTML (inicialmente igual a todos los servicios)
  serviciosFiltrados: Servicio[] = this.servicios;

  // Función para seleccionar un servicio (Click en el botón)
  seleccionar(nombre: string) {
    this.servicioSeleccionado = nombre;
    // Aquí podrías agregar lógica para navegar a otra página o abrir un modal
    console.log("Servicio seleccionado:", nombre);
  }

  // Función de Búsqueda (Tal cual tu lógica)
  busqueda(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    const valor = inputElement.value;
    
    // Filtramos la lista original
    this.serviciosFiltrados = this.servicios.filter(s => 
      s.nombre.toLowerCase().includes(valor.toLowerCase())
    );
  }
}