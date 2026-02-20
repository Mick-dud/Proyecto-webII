import { inject } from '@angular/core';
import { CanMatchFn, Router } from '@angular/router';
import { AuthService } from '../sercices/auth.service';

export const usuariosMatchGuard: CanMatchFn = (route, segments) => {
  const servicioAuth = inject(AuthService);
  const router = inject(Router);
  
  if (servicioAuth.sesionIniciada() && servicioAuth.rolActual() === 'ADMIN') {
    return true;
  }
  
  return router.parseUrl('/error-page');
};