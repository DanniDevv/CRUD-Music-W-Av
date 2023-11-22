import { Component, OnInit } from '@angular/core';
import { MusicService } from '../music.service';

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.css']
})
export class MusicComponent implements OnInit {
  musicList: any[] = [];
  currentMusic: any = {};
  formData: FormData = new FormData();

  constructor(private musicService: MusicService) { }

  ngOnInit(): void {
    this.getMusic();
  }

  getMusic(): void {
    this.musicService.getMusic()
      .subscribe((music) => {
        this.musicList = music;
      });
  }

  uploadMusic(event: any): void {
    const files = event.target.files;
    if (files.length > 0) {
      const file = files[0];
      this.formData.append('file', file, file.name);
    }
  }
  uploadImage(event: any): void {
    const files = event.target.files;
    if (files.length > 0) {
      const file = files[0];
      this.formData.append('file', file, file.name);
    }
  }

  createMusic(title: string): void {
    this.formData.append('title', title);
    this.musicService.uploadMusic(this.formData)
      .subscribe(() => {
        this.getMusic();
        this.currentMusic = {};
        this.formData = new FormData(); // Limpiar el FormData después de la subida
      });
  }

  updateMusic(id: string, title: string): void {
    this.musicService.updateMusic(id, { title: title })
      .subscribe(() => {
        this.getMusic();
        this.currentMusic = {};
      });
  }

  deleteMusic(id: string): void {
    this.musicService.deleteMusic(id)
      .subscribe(() => {
        this.getMusic();
      });
  }

  editMusic(id: string): void {
    this.musicService.getMusicById(id)
      .subscribe((music) => {
        this.currentMusic = music;
      });
  }
}
