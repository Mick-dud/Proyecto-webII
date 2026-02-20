import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../sercices/auth.service'; 

export const guestGuard: CanActivateFn = (route, state) => {
  const servicioAuth = inject(AuthService);
  const router = inject(Router);

  // Si NO hay sesión iniciada, le permitimos ver la pantalla de Login/Registro
  if (!servicioAuth.sesionIniciada()) {
    return true;
  }
  
  // Si YA inició sesión, lo redirigimos automáticamente a su área de trabajo
  return router.parseUrl('/expedientes');
};