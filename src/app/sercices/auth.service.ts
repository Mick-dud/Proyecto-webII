import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// CAMBIO 1: Importamos 'map' de rxjs
import { Observable, map } from 'rxjs';
import { Usuario } from '../models/usuario';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private http = inject(HttpClient);
    private API_URL = 'http://localhost:3000/usuarios';

    // CAMBIO 2: Login a prueba de balas
    login(email: string, password: string): Observable<Usuario[]> {
        // 1. Le pedimos a JSON Server TODOS los usuarios sin filtros raros
        return this.http.get<Usuario[]>(this.API_URL).pipe(
            // 2. Angular filtra manualmente el usuario exacto usando JavaScript
            map(usuarios => usuarios.filter(u => u.email === email && u.password === password))
        );
    }

    // --- EL RESTO QUEDA EXACTAMENTE IGUAL ---

    guardarSesion(usuario: Usuario) {
        localStorage.setItem('usuarioSesion', JSON.stringify(usuario));
    }

    sesionIniciada(): boolean {
        return !!localStorage.getItem('usuarioSesion');
    }

    rolActual(): string | null {
        const session = localStorage.getItem('usuarioSesion');
        if (session) {
            const user: Usuario = JSON.parse(session);
            return user.rol;
        }
        return null;
    }

    logout() {
        localStorage.removeItem('usuarioSesion');
    }
}