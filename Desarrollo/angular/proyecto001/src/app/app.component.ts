import { Component } from '@angular/core';
import { ALBUMES } from "../app/mock-album";



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '';

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
  anadir(){
    let existe = false;
    for (let i = 0; i < this.albumes.length; i++) {
      console.log(this.albumes[i].userId)
      console.log("userid"+this.userId)
      console.log("userid"+this.titulo)
      if (this.albumes[i].userId == this.userId && this.albumes[i].id == this.id &&  this.albumes[i].title == this.titulo ) {
        existe = true;
      }
      //
      if (existe = true) {
        alert("existe")
      }else{
       
      }
      
    }
  }







}


