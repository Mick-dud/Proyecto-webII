import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-video-tour',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './video-tour.html',
  styleUrl: './video-tour.css'
})
export class VideoTour {
  
  // 1. Inyectamos el Sanitizer para que Angular confíe en la URL de YouTube
  private sanitizer = inject(DomSanitizer);

  // 2. Inputs de Texto
  @Input() subtitulo?: string;
  @Input() titulo?: string;
  @Input() descripcion?: string;
  
  // 3. Input para el ID del video de YouTube (Ej: xUR-uERZnF4)
  @Input() videoId!: string; 

  // 4. Getter para generar la URL segura
  get videoSeguro(): SafeResourceUrl {
    const url = `https://www.youtube.com/embed/${this.videoId}`;
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}