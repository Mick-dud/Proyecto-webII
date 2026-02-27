import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../models/usuario';

@Injectable({
    providedIn: 'root'
})
export class UsuarioService {
    private http = inject(HttpClient);

    // CAMBIO CLAVE: Ahora apuntamos a tu JSON Server local
    private API_URL = 'http://localhost:3000/usuarios';

    // Obtener todos los usuarios
    getUsuarios(): Observable<Usuario[]> {
        return this.http.get<Usuario[]>(this.API_URL);
    }

    // Crear un nuevo usuario (Registro)
    postUsuario(usuario: Usuario): Observable<Usuario> {
        // Le generamos un ID único usando la fecha (igual que hicimos con los pacientes)
        const usuarioConId = { ...usuario, id: Date.now().toString() };
        return this.http.post<Usuario>(this.API_URL, usuarioConId);
    }

    // Actualizar un usuario existente
    putUsuario(id: string, usuario: Usuario): Observable<Usuario> {
        return this.http.put<Usuario>(`${this.API_URL}/${id}`, usuario);
    }

    // Eliminar un usuario
    deleteUsuario(id: string): Observable<void> {
        return this.http.delete<void>(`${this.API_URL}/${id}`);
    }
}