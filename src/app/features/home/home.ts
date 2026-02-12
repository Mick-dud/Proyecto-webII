import { Component } from '@angular/core';
import { Hero } from "../../shared/hero/hero";
import { Servicios } from "../../shared/servicios/servicios";
import { Resultados } from "../../shared/resultados/resultados";
import { Testimonios } from "../../shared/testimonios/testimonios";

@Component({
  selector: 'app-home',
  imports: [Hero, Servicios, Resultados, Testimonios],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
