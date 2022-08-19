import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-primero',
  templateUrl: './primero.component.html',
  styleUrls: ['./primero.component.css']
})
export class PrimeroComponent implements OnInit {

  public palabras: number[];

  constructor() {
    this.palabras = [];
    for(let i = 0; i <= 30; i++){
      this.palabras.push(i);
    }
   }

  prueba(numero: number): boolean{
    if((numero >= 0 && numero <= 10) || ( numero >= 20 && numero <= 30)){
      return true;
    } 
    return false;
  }

  pruebaPar(numero: number): boolean{

    if(numero % 2 == 0){
      return true;
    }
    return false;
  }

  ngOnInit(): void {
  }

}
