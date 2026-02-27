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
    // 1. Limpiamos espacios invisibles antes y después del texto
    const correoLimpio = this.email.trim();
    const claveLimpia = this.password.trim();

    console.log('Intentando loguear con:', correoLimpio, claveLimpia);

    // 2. Usamos las variables limpias
    this.servicioAuth.login(correoLimpio, claveLimpia).subscribe((usuarios) => {

      // ESTE CONSOLE.LOG ES CLAVE: Nos dirá qué envió el servidor
      console.log('Respuesta exacta del servidor:', usuarios);

      if (usuarios.length > 0) {
        const usuarioAutenticado = usuarios[0];
        this.servicioAuth.guardarSesion(usuarioAutenticado);

        alert(`¡Bienvenido al sistema Omegadent, ${usuarioAutenticado.name}!`);
        this.router.navigate(['/expedientes']);
      } else {
        alert('Credenciales incorrectas. Revisa tu correo o contraseña.');
      }
    });
  }

  cerrarSesion() {
    this.servicioAuth.logout();
    alert('Sesión cerrada correctamente');
    this.router.navigate(['/login']); // Lo regresamos al login para mayor seguridad
  }

  //   iniciarSesion() {
  //     this.servicioAuth.login(this.email, this.password).subscribe(success => {
  //       if (success) {
  //         alert('¡Bienvenido al sistema Omegadent!');
  //         // Si el login es exitoso, lo mandamos a los expedientes
  //         this.router.navigate(['/expedientes']);
  //       } else {
  //         alert('Credenciales incorrectas. Inténtalo de nuevo.');
  //       }
  //     });
  //   }

  //   cerrarSesion() {
  //     this.servicioAuth.logout();
  //     alert('Sesión cerrada correctamente');
  //   }
}