import { Component } from '@angular/core';

import { Contacto } from '../../shared/contact/contact'; 

@Component({
  selector: 'app-contacto-page', 
  standalone: true,
  imports: [Contacto],  
  templateUrl: './contacto.html',
  styleUrls: ['./contacto.css']
})
export class Contact {
}