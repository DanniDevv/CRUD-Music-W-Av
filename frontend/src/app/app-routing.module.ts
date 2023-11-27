import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemComponent } from './item/item.component';
import { MusicComponent } from './music/music.component';

const routes: Routes = [
  // puedes descomentarlo si quieres usar esta ruta
  // {path:'items',component:ItemComponent},
  {path:'items',component:ItemComponent},
  {path:'music',component:MusicComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
