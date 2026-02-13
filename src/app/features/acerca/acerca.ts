import { Component } from '@angular/core';
import { Historia } from "../../shared/historia/historia";
import { Mision } from "../../shared/mision/mision";
import { Vision } from "../../shared/vision/vision";
import { Equipo } from "../../shared/equipo/equipo";

@Component({
  selector: 'app-acerca',
  imports: [Historia, Mision, Vision, Equipo],
  templateUrl: './acerca.html',
  styleUrl: './acerca.css',
})
export class Acerca {

}
