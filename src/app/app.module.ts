import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CabeceraPersonaComponent } from './components/cabecera-persona/cabecera-persona.component';
import { CabeceraMateriaComponent } from './components/cabecera-materia/cabecera-materia.component';
import { ExportacionComponent } from './components/exportacion/exportacion.component';

@NgModule({
  declarations: [
    AppComponent,
    CabeceraPersonaComponent,
    CabeceraMateriaComponent,
    ExportacionComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
