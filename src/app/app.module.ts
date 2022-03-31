import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './public/navbar/navbar.component';
import { NinosComponent } from './public/ninos/ninos.component';
import { NinosService } from './services/ninos.service';
import {HttpClientModule} from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { LoadingComponent } from './public/loading/loading.component';
import { NinasComponent } from './public/ninas/ninas.component';
import { FooterComponent } from './public/footer/footer.component';
import { DocumentacionComponent } from './documentacion/documentacion.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    NinosComponent,
    LoadingComponent,
    NinasComponent,
    FooterComponent,
    DocumentacionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [NinosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
