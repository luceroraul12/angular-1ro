import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PrimeroComponent } from './components/primero/primero.component';
import { SegundoComponent } from './components/segundo/segundo.component';

@NgModule({
  declarations: [
    AppComponent,
    PrimeroComponent,
    SegundoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
