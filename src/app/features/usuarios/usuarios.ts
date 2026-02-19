import { Component, inject, signal, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; 
import { UsuarioService } from '../../sercices/usuario.service';
import { AuthService } from '../../sercices/auth.service';
import { Usuario } from '../../models/usuario';

@Component({
  selector: 'app-usuarios',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './usuarios.html',
  styleUrl: './usuarios.css' 
})
export class Usuarios implements OnInit {
  private usuarioService = inject(UsuarioService);
  public authService = inject(AuthService); 

  // Lista reactiva para la tabla
  listaUsuarios = signal<Usuario[]>([]);
  editando = false;

  nuevoUsuario: Usuario = {
    name: '',
    email: '',
    phone: '',
    password: '',
    rol: 'EMPLEADO' // rol por defecto
  };

  ngOnInit() {
    this.obtenerUsuarios();
  }

  obtenerUsuarios() {
    this.usuarioService.getUsuarios().subscribe(usuarios => {
      this.listaUsuarios.set(usuarios);
    });
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
      this.usuarioService.deleteUsuario(id).subscribe(() => {
        this.obtenerUsuarios();
      });
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