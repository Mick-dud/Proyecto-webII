import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../sercices/auth.service';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './login.html',
  styles: [] // Puedes dejarlo vacío o referenciar tu .css
})
export class Login {
  email = '';
  password = '';

  private servicioAuth = inject(AuthService);
  private router = inject(Router);

  iniciarSesion() {
    this.servicioAuth.login(this.email, this.password).subscribe(success => {
      if (success) {
        alert('¡Bienvenido al sistema Omegadent!');
        // Si el login es exitoso, lo mandamos a los expedientes
        this.router.navigate(['/expedientes']);
      } else {
        alert('Credenciales incorrectas. Inténtalo de nuevo.');
      }
    });
  }

  cerrarSesion() {
    this.servicioAuth.logout();
    alert('Sesión cerrada correctamente');
  }
}