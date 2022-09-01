import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatTabsModule} from '@angular/material/tabs';
import {MatGridListModule} from '@angular/material/grid-list';

import { AppComponent } from './app.component';
import { CabeceraPersonaComponent } from './components/cabecera-persona/cabecera-persona.component';
import { CabeceraMateriaComponent } from './components/cabecera-materia/cabecera-materia.component';
import { ExportacionComponent } from './components/exportacion/exportacion.component';

import { FormularioPruebaComponent } from './components/formulario-prueba/formulario-prueba.component';

@NgModule({
  declarations: [
    AppComponent,
    CabeceraPersonaComponent,
    CabeceraMateriaComponent,
    ExportacionComponent,
    FormularioPruebaComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatTabsModule,
    MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
