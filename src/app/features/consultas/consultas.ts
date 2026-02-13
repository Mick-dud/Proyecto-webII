import { Component } from '@angular/core';
import { Pacientes } from "../../shared/formulario/formulario";
import { Hero } from "../../shared/hero/hero";
import { Resultados } from "../../shared/resultados/resultados";
import { VideoTour } from "../../shared/video-tour/video-tour";

@Component({
  selector: 'app-consultas',
  imports: [Pacientes, Hero, Resultados, VideoTour],
  templateUrl: './consultas.html',
  styleUrl: './consultas.css',
})
export class Consultas {

}
