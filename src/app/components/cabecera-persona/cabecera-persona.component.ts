import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/entities/persona';

@Component({
  selector: 'persona',
  templateUrl: './cabecera-persona.component.html',
  styleUrls: ['./cabecera-persona.component.css']
})
export class CabeceraPersonaComponent implements OnInit {

  public persona: Persona;

  constructor(
  ) {
    this.persona = new Persona();
   }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.persona);
  }
}
