import { Routes } from '@angular/router';
import { Home } from './features/home/home';
import { Acerca } from './features/acerca/acerca';
import { Consultas } from './features/consultas/consultas';
import { Expedientes } from './features/expedientes/expedientes';
import { Contacto } from './features/contacto/contacto';
import { ErrorPage } from './shared/error-page/error-page';
import { Login } from './features/login/login';
import { Usuarios } from './features/usuarios/usuarios';

import { authGuard } from './guards/auth-guard';
import { usuariosMatchGuard } from './guards/usuarios-match-guard';
import { adminGuard } from './guards/admin-guard';
import { Registro } from './features/registro/registro';

export const routes: Routes = [
    { path: '', component: Home },
    { path: 'acerca', component: Acerca },
    { path: 'consultas', component: Consultas },

    // 1. Protegido por authGuard (Cualquiera que haya iniciado sesión)
    { path: 'expedientes', component: Expedientes, canActivate: [authGuard] },

    { path: 'contacto', component: Contacto },
    { path: 'error-page', component: ErrorPage },
    { path: 'login', component: Login },
    { path: 'registro', component: Registro },

    // 2. Protegido fuertemente (Oculto si no eres ADMIN y bloqueado si intentas forzarlo)
    { path: 'usuarios', component: Usuarios, canMatch: [usuariosMatchGuard], // Cumple tu CanMatch
        canActivate: [adminGuard] // Cumple tu 2do CanActivate
    }
];