import { Routes } from '@angular/router';
import { Home } from './features/home/home';
import { Acerca } from './features/acerca/acerca';
import { Consultas } from './features/consultas/consultas';
import { Pacientes } from './features/pacientes/pacientes';
import { Contacto } from './features/contacto/contacto';

export const routes: Routes = [
    //1. Ruta inicial
    { path: '', component: Home },
    //2.Rutas de Navegacion
    { path: 'acerca', component: Acerca },
    { path: 'consultas', component: Consultas },
    { path: 'mascotas', component: Pacientes },
    { path: 'usuarios', component: Contacto },

];
