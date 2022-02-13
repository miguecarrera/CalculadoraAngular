import { Component, OnInit } from '@angular/core';
import { flatMap } from 'rxjs';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {
  //declaro las variables que necesita el componente
  public titulo:string;
  public num1:any;
  public num2:any;
  public resultado:any;
  public historial:string[];
  public verdad:boolean

  constructor() { 
    //asigno valores iniciales a las variables
    this.titulo = 'Calculadora';
    this.num1 = null;
    this.num2 = null;
    this.resultado = null;
    this.historial = [];
    this.verdad = false;

  }


  ngOnInit(): void {
  }

  //Creamos los métodos sumar, restar, multiplicar y dividir con un condicional para evitar que el usuario introduzca letras
  sumar():void{
    this.resultado = Number(this.num1) + Number(this.num2);
    if(Object.is(this.resultado, NaN)){
      alert("Debes introducir solamente números")
    }else{
      this.verdad = true;
      this.historial.push(this.num1 + " + " + this.num2 + " = " + this.resultado)
    }
  }

  restar():void{
    this.resultado = Number(this.num1) - Number(this.num2);
    if(Object.is(this.resultado, NaN)){
      alert("Debes introducir solamente números")
    }else{
      this.verdad = true;
      this.historial.push(this.num1 + " - " + this.num2 + " = " + this.resultado)
    }
  }

  multiplicar():void{
    this.resultado = Number(this.num1) * Number(this.num2);
    if(Object.is(this.resultado, NaN)){
      alert("Debes introducir solamente números")
    }else{
      this.verdad = true;
      this.historial.push(this.num1 + " * " + this.num2 + " = " + this.resultado)
    }
  }

  dividir():void{
    this.resultado = Number(this.num1) / Number(this.num2);
    if(Object.is(this.resultado, NaN)){
      alert("Debes introducir solamente números")
    }else{
      this.verdad = true;
      this.historial.push(this.num1 + " / " + this.num2 + " = " + this.resultado)
    }
  }


  //Para el método de convertir a binario usamos toString e introducimos un condicional para evitar que el usuario ingrese letras
  binario():void{
    this.resultado = Number(this.num1).toString(2);
    if(this.resultado == "NaN"){
      alert("Debes introducir solamente números")
    }else{
      this.verdad = true;
      this.historial.push("El número " + this.num1 + " en binario es " + this.resultado)
    }
  }


  //creamos el método limpiar historial
  limpiarHistorial():void{
    this.num1 = null;
    this.num2 = null;
    this.verdad = false;
    this.historial = []
  }
}