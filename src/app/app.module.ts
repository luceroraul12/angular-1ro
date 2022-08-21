import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PrimeroComponent } from './components/primero/primero.component';
import { SegundoComponent } from './components/segundo/segundo.component';
import { CabeceraPersonaComponent } from './components/cabecera-persona/cabecera-persona.component';
import { CabeceraMateriaComponent } from './components/cabecera-materia/cabecera-materia.component';
import { ExportacionComponent } from './components/exportacion/exportacion.component';
import { TablaComponent } from './components/tabla/tabla.component';

@NgModule({
  declarations: [
    AppComponent,
    PrimeroComponent,
    SegundoComponent,
    CabeceraPersonaComponent,
    CabeceraMateriaComponent,
    ExportacionComponent,
    TablaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
