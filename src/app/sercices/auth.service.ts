import { inject, Injectable, signal } from '@angular/core';
import { UsuarioService } from './usuario.service';
import { map, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    private usuarioService = inject(UsuarioService);

    // Mantienen el estado reactivo de la sesión en toda la app 
    sesionIniciada = signal<boolean>(localStorage.getItem('sesion') === 'true');
    rolActual = signal<string | null>(localStorage.getItem('rol'));
    
    login(email: string, password: string): Observable<boolean> {
        return this.usuarioService.getUsuarios().pipe(
            map(usuarios => {
                const usuarioCoincide = usuarios.find(u => u.email === email && u.password === password);

                if (usuarioCoincide) {
                    localStorage.setItem('sesion', 'true');
                    localStorage.setItem('user', JSON.stringify(usuarioCoincide));
                    localStorage.setItem('rol', usuarioCoincide.rol);

                    this.rolActual.set(usuarioCoincide.rol);
                    this.sesionIniciada.set(true);
                    return true;
                }
                return false;
            })
        );
    }
    
    logout() {
        localStorage.removeItem('sesion');
        localStorage.removeItem('user');
        localStorage.removeItem('rol');

        this.sesionIniciada.set(false);
        this.rolActual.set(null);
    }
}