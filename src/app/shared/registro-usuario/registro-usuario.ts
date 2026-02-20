import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

import { Usuario } from '../../models/usuario';
import { UsuarioService } from '../../sercices/usuario.service';

@Component({
  selector: 'app-registro-usuario',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './registro-usuario.html',
  styles: []
})
export class RegistroUsuario {
  private usuarioService = inject(UsuarioService);
  private router = inject(Router);

  nuevoUsuario: Usuario = {
    name: '',
    email: '',
    phone: '',
    password: '',
    rol: 'ADMIN' // Forzado a ADMIN para tu primera cuenta
  };

  registrar() {
    this.usuarioService.postUsuario(this.nuevoUsuario).subscribe(() => {
      alert('¡Cuenta creada con éxito! Ahora puedes iniciar sesión.');
      this.router.navigate(['/login']);
    });
  }
}