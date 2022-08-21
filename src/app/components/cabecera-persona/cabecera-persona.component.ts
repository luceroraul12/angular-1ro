import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Persona } from 'src/entities/persona';

@Component({
  selector: 'persona',
  templateUrl: './cabecera-persona.component.html',
  styleUrls: ['./cabecera-persona.component.css']
})
export class CabeceraPersonaComponent implements OnInit {

  public persona: Persona;
  @Output() personaParaEnviar = new EventEmitter<Persona>();

  constructor(
  ) {
    this.persona = new Persona();
   }

  ngOnInit(): void {
  }

  onSubmit(){
    this.prepararPersona();
  }

  prepararPersona(){
    console.log("Persona generada en cabecera");
    console.log(this.persona);
    
    this.personaParaEnviar.emit(this.persona);
  }
}
