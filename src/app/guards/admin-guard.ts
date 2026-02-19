import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { AuthService } from '../sercices/auth.service';


export const adminGuard: CanActivateFn = (route, state) => {
  const servicioAuth = inject(AuthService);
  
  if (servicioAuth.rolActual() === 'ADMIN') {
    return true;
  }
  
  alert('Acceso restringido. Solo los especialistas (ADMIN) tienen acceso a esta sección.');
  return false; 
};