import { Component } from '@angular/core';
import { ALBUMES } from "../app/mock-album";



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Proyecto001';

  albumes = ALBUMES;

  nombre = 'Rodriguez Pablo';
  edad = 40;
  email = 'rpablo@gmail.com';
  sueldos = [750, 760, 650];
  activo = true;

  esActivo() {
    if (this.activo)
      return 'Trabajador Activo';
    else
      return 'Trabajador Inactivo';
  }

  ultimos3Sueldos() {
    let suma = 0;
    for (let x = 0; x < this.sueldos.length; x++)
      suma += this.sueldos[x];
    return suma;
  }

  //incrementar
  contador = 0;
  incrementar() {
    this.contador++;
  }

  decrementar() {
    this.contador--;
  }

  ocultar() {
  }



  userId=0;
  id=0;
  titulo="";




}


