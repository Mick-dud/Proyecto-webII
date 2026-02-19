import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Paciente {
    id?: string;
    nombre: string;
    email: string;
    telefono: string;
    tratamiento: string;
}
@Injectable({
    providedIn: 'root'
})
export class PacienteService {
    private http = inject(HttpClient);
    
    private API_URL = 'https://actividad-autonoma-2522b-default-rtdb.firebaseio.com/';
    getPacientes(): Observable<Paciente[]> {
        return this.http.get<{ [key: string]: Paciente }>(`${this.API_URL}/pacientes.json`)
            .pipe(
                map(respuesta => {
                    if (!respuesta) return [];
                    const pacientesArray: Paciente[] = [];
                    for (const key in respuesta) {
                        if (respuesta.hasOwnProperty(key)) {
                            pacientesArray.push({ ...respuesta[key], id: key });
                        }
                    }
                    return pacientesArray;
                })
            );
    }
    crearPaciente(paciente: Paciente) {
        return this.http.post(`${this.API_URL}/pacientes.json`, paciente);
    }
    actualizarPaciente(id: string, paciente: Paciente) {
        return this.http.put(`${this.API_URL}/pacientes/${id}.json`, paciente);
    }
    eliminarPaciente(id: string) {
        return this.http.delete(`${this.API_URL}/pacientes/${id}.json`);
    }
}