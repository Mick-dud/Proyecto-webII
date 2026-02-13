import { Routes } from '@angular/router';
import { Home } from './features/home/home';
import { Acerca } from './features/acerca/acerca';
import { Consultas } from './features/consultas/consultas';
import { Contacto } from './features/contacto/contacto';
import { Expedientes } from './features/expedientes/expedientes';
import { ErrorPage } from './shared/error-page/error-page';

export const routes: Routes = [
    //1. Ruta inicial
    { path: '', component: Home },
    //2.Rutas de Navegacion
    { path: 'acerca', component: Acerca },
    { path: 'consultas', component: Consultas },
    { path: 'expedientes', component: Expedientes },
    { path: 'contacto', component: Contacto },
    { path: 'error-page', component: ErrorPage },

];
