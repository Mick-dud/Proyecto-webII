import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// 1. Actualizamos el molde para que sea PÚBLICO
export interface Cita {
    id?: string;
    nombre: string; 
    fecha: string;
    hora: string;
    motivo: string;
}

@Injectable({
    providedIn: 'root'
})
export class CitaService {
    private http = inject(HttpClient);
    private API_URL = 'http://localhost:3000/citas';

    getCitas(): Observable<Cita[]> {
        return this.http.get<Cita[]>(this.API_URL);
    }

    // Esta función envía la nueva cita a tu JSON Server
    crearCita(cita: Cita): Observable<Cita> {
        const citaConId = { ...cita, id: Date.now().toString() };
        return this.http.post<Cita>(this.API_URL, citaConId);
    }
}