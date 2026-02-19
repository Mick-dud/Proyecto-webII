import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Usuario } from '../models/usuario';

@Injectable({
    providedIn: 'root',
})
export class UsuarioService {
    private http = inject(HttpClient);
    
    private API_URL = 'https://actividad-autonoma-2522b-default-rtdb.firebaseio.com/';

    // Obtener todos los usuarios y mapearlos con su ID de Firebase
    getUsuarios(): Observable<Usuario[]> {
        return this.http.get<{ [key: string]: Usuario }>(`${this.API_URL}/usuarios.json`).pipe(
            map(respuesta => {
                if (!respuesta) return [];
                return Object.keys(respuesta).map(id => ({ ...respuesta[id], id }));
            })
        );
    }

    // Crear un nuevo usuario
    postUsuario(usuario: Usuario): Observable<Usuario> {
        return this.http.post<Usuario>(`${this.API_URL}/usuarios.json`, usuario);
    }

    // Actualizar un usuario existente
    putUsuario(id: string, usuario: Usuario): Observable<Usuario> {
        return this.http.put<Usuario>(`${this.API_URL}/usuarios/${id}.json`, usuario);
    }

    // Eliminar un usuario
    deleteUsuario(id: string): Observable<void> {
        return this.http.delete<void>(`${this.API_URL}/usuarios/${id}.json`);
    }
}