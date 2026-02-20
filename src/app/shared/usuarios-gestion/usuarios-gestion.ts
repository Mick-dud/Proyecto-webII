import { Component, inject, signal, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Usuario } from '../../models/usuario'; 
import { UsuarioService } from '../../sercices/usuario.service';
import { AuthService } from '../../sercices/auth.service';

@Component({
  selector: 'app-usuarios-gestion',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './usuarios-gestion.html',
  styleUrl: './usuarios-gestion.css'
})
export class UsuariosGestion implements OnInit { 
  private usuarioService = inject(UsuarioService);
  public authService = inject(AuthService);

  listaUsuarios = signal<Usuario[]>([]);
  editando = false;

  nuevoUsuario: Usuario = { name: '', email: '', phone: '', password: '', rol: 'EMPLEADO' };

  ngOnInit() { this.obtenerUsuarios(); }

  obtenerUsuarios() {
    this.usuarioService.getUsuarios().subscribe(usuarios => this.listaUsuarios.set(usuarios));
  }

  guardarUsuario() {
    if (this.editando && this.nuevoUsuario.id) {
      this.usuarioService.putUsuario(this.nuevoUsuario.id, this.nuevoUsuario).subscribe(() => {
        this.obtenerUsuarios();
        this.resetear();
        alert('Usuario actualizado correctamente');
      });
    } else {
      this.usuarioService.postUsuario(this.nuevoUsuario).subscribe(() => {
        this.obtenerUsuarios();
        this.resetear();
        alert('Nuevo usuario registrado con éxito');
      });
    }
  }

  eliminarUsuario(id: string) {
    if (confirm('¿Deseas eliminar este usuario del sistema?')) {
      this.usuarioService.deleteUsuario(id).subscribe(() => this.obtenerUsuarios());
    }
  }

  seleccionarParaEditar(user: Usuario) {
    this.editando = true;
    this.nuevoUsuario = { ...user };
  }

  resetear() {
    this.editando = false;
    this.nuevoUsuario = { name: '', email: '', phone: '', password: '', rol: 'EMPLEADO' };
  }
}