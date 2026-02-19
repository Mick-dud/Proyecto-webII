import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

import { Usuario } from '../../models/usuario';
import { UsuarioService } from '../../sercices/usuario.service';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './registro.html',
  styles: []
})
export class Registro {
  private usuarioService = inject(UsuarioService);
  private router = inject(Router);

  // Inicializamos los datos vacíos
  nuevoUsuario: Usuario = {
    name: '',
    email: '',
    phone: '',
    password: '',
    rol: 'ADMIN' // Lo forzamos a ADMIN para que sea tu cuenta principal
  };

  registrar() {
    this.usuarioService.postUsuario(this.nuevoUsuario).subscribe(() => {
      alert('¡Cuenta creada con éxito! Ahora puedes iniciar sesión.');
      this.router.navigate(['/login']); // Lo mandamos al login
    });
  }
}