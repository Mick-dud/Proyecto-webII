import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../sercices/auth.service';


export const authGuard: CanActivateFn = (route, state) => {
  const servicioAuth = inject(AuthService);
  const router = inject(Router);

  // Si hay sesión, lo dejamos pasar
  if (servicioAuth.sesionIniciada()) {
    return true;
  }
  
  // Si no hay sesión, lo pateamos al login
  return router.parseUrl('/login');
};