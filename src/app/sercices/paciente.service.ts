import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Paciente {
    id?: string;
    nombre: string;
    edad: number;
    email: string;
    telefono: string;
    tratamiento: string;
    saldoPendiente: number;
}
@Injectable({
    providedIn: 'root'
})
export class PacienteService {
    private http = inject(HttpClient);
    
  // Puerto 
    private API_URL = 'http://localhost:3000/pacientes';

  // Obtener todos (GET)
    getPacientes(): Observable<Paciente[]> {
    return this.http.get<Paciente[]>(this.API_URL);
    }

  // Crear uno nuevo (POST)
    crearPaciente(paciente: Paciente): Observable<Paciente> {
    return this.http.post<Paciente>(this.API_URL, paciente);
    }
        
  // Editar (PUT)
    actualizarPaciente(paciente: Paciente): Observable<Paciente> {
    // JSON Server requiere que le pases el ID en la URL: .../pacientes/1
    return this.http.put<Paciente>(`${this.API_URL}/${paciente.id}`, paciente);
    }

  // Eliminar (DELETE)
    eliminarPaciente(id: string): Observable<void> {
    return this.http.delete<void>(`${this.API_URL}/${id}`);
    }

}
    // private http = inject(HttpClient);
    
    // private API_URL = 'https://actividad-autonoma-2522b-default-rtdb.firebaseio.com/';
    // getPacientes(): Observable<Paciente[]> {
    //     return this.http.get<{ [key: string]: Paciente }>(`${this.API_URL}/pacientes.json`)
    //         .pipe(
    //             map(respuesta => {
    //                 if (!respuesta) return [];
    //                 const pacientesArray: Paciente[] = [];
    //                 for (const key in respuesta) {
    //                     if (respuesta.hasOwnProperty(key)) {
    //                         pacientesArray.push({ ...respuesta[key], id: key });
    //                     }
    //                 }
    //                 return pacientesArray;
    //             })
    //         );
    // }
    // crearPaciente(paciente: Paciente) {
    //     return this.http.post(`${this.API_URL}/pacientes.json`, paciente);
    // }
    // actualizarPaciente(id: string, paciente: Paciente) {
    //     return this.http.put(`${this.API_URL}/pacientes/${id}.json`, paciente);
    // }
    // eliminarPaciente(id: string) {
    //     return this.http.delete(`${this.API_URL}/pacientes/${id}.json`);
    // }
