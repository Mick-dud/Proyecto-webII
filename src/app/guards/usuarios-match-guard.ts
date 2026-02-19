import { inject } from '@angular/core';
import { CanMatchFn, Router } from '@angular/router';
import { AuthService } from '../sercices/auth.service';


export const usuariosMatchGuard: CanMatchFn = (route, segments) => {
  const servicioAuth = inject(AuthService);
  const router = inject(Router);
  
  // Si es ADMIN, Angular reconoce que la ruta existe
  if (servicioAuth.sesionIniciada() && servicioAuth.rolActual() === 'ADMIN') {
    return true;
  }
  
  // Si no es ADMIN, hacemos que Angular redirija a la página de error 404 (como si no existiera)
  return router.parseUrl('/error-page');
};