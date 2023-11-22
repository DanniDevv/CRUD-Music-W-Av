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

  getMusic(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getMusicById(id: string): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get(url);
  }

  uploadMusic(formData: FormData): Observable<any> {
    return this.http.post(this.apiUrl, formData);
  }

  updateMusic(id: string, data: any): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put(url, data);
  }

  deleteMusic(id: string): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete(url);
  }
}
