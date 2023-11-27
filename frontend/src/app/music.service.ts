// music.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MusicService {
  private apiUrl = 'http://localhost:3000/api/music';

  constructor(private http: HttpClient) { }

  // Obtener todas las músicas
  getMusic(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  // Obtener información de una música por su ID
  getMusicById(id: string): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get(url);
  }

  // Subir una nueva música
  uploadMusic(formData: FormData): Observable<any> {
    return this.http.post(this.apiUrl, formData);
  }
  // Subir una nueva imagen
  uploadImage(formData: FormData): Observable<any> {
    return this.http.post(`${this.apiUrl}/upload-image`, formData);
  }
  // Actualizar información de una música por su ID
  updateMusic(id: string, data: any): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put(url, data);
  }

  // Eliminar una música por su ID
  deleteMusic(id: string): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete(url);
  }

}
