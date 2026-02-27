import { Routes } from '@angular/router';
import { Home } from './features/home/home';
import { Acerca } from './features/acerca/acerca';
import { Consultas } from './features/consultas/consultas';
import { Expedientes } from './features/expedientes/expedientes';
import { Contacto } from './shared/contact/contact';
import { ErrorPage } from './shared/error-page/error-page';
import { Login } from './features/login/login';
import { Usuarios } from './features/usuarios/usuarios';
import { Registro } from './features/registro/registro';

import { authGuard } from './guards/auth-guard';
import { usuariosMatchGuard } from './guards/usuarios-match-guard';
import { adminGuard } from './guards/admin-guard';
import { guestGuard } from './guards/guest-guard';
import { Contact } from './features/contacto/contacto';

export const routes: Routes = [
    { path: '', component: Home },
    { path: 'acerca', component: Acerca },
    { path: 'consultas', component: Consultas },
    
    { path: 'expedientes', component: Expedientes, canActivate: [authGuard] }, // 2do CanActivate

    { path: 'contacto', component: Contact },
    { path: 'error-page', component: ErrorPage },
    { path: 'login', component: Login, canActivate: [guestGuard]}, // 1er CanActivate
    { path: 'registro', component: Registro, canActivate: [guestGuard] }, 

    // (Oculto si no eres ADMIN y bloqueado si intentas forzarlo)
    { path: 'usuarios', component: Usuarios, canMatch: [usuariosMatchGuard], // CanMatch
        canActivate: [adminGuard] // 3do CanActivate
    }
];