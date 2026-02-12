import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-footer',
  imports: [RouterLink],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
  anio: number = new Date().getFullYear();

  enlaces = [
    { texto: "Home", link: "HOME" },
    { texto: "Acerca", link: "ACERCA" },
    { texto: "Consultas", link: "CONSULTAS" },
    { texto: "Mascotas", link: "PACIENTES" },
    { texto: "Contacto", link: "CONTACTO" },    
    { texto: "Registro", link: "REGISTRO" },
  ];
}
