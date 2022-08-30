import { Component } from '@angular/core';
import { materialize } from 'rxjs';
import { Materia } from 'src/entities/materia';
import { Persona } from 'src/entities/persona';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public informacion: any;

  mostrar(){
    console.log(this.informacion);
  }

  recibirPersona(persona: Persona){
    console.log("Persona recibida en Padre");
    console.log(persona);
    console.log("PRUEBAS DE CLASES");
    console.log("Entre recibido y persona");
    console.log(persona instanceof Persona);
    console.log(persona instanceof Materia);
    
    
    
    
    
  }
}
