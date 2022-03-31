import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DocumentacionComponent } from './documentacion/documentacion.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path:"home",
    component:HomeComponent
  },
  { path: 'Documentacion',
    component:DocumentacionComponent
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
