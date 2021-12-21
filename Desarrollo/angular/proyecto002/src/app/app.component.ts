import { Component } from '@angular/core';
import { ARTICULO } from "./mock-articulo";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'proyecto002';
  articulos = ARTICULO;

  //input
  
    inputcodigo= 0
    inputdescripcion= "";
    inputprecio= 0
  




  agregar() {
    for (let i = 0; i < this.articulos.length; i++) {
      if (this.articulos[i].codigo == this.inputcodigo) {
        console.log(" ya existe")
        return;
      }
    }
    this.articulos.push({
      codigo: this.inputcodigo,
      descripcion: this.inputdescripcion,
      precio: this.inputprecio
    });
    this.inputcodigo = 0;
    this.inputdescripcion = "";
    this.inputprecio = 0;



  }
  modificar() {
    for (let i = 0; i < this.articulos.length; i++) {
      if (this.articulos[i].codigo == this.inputcodigo) {
        this.articulos[i].descripcion = this.inputdescripcion;
        this.articulos[i].precio = this.inputprecio;
        return;
      }
      console.log("no existe el codigo")
    }
  }
  //si existen articulos los devuelve
  hayregistros() {
    return this.articulos.length > 0;
  }

  borrar(codigo: number) {
    for (let i = 0; i < this.articulos.length; i++) {
      console.log(codigo + "codigo")
      console.log(this.articulos[i].codigo + "codigo this")
      if (this.articulos[i].codigo == codigo) {
        this.articulos.splice(i, 1);
        return;
      }

    }
  }
  seleccionar(art: { codigo: number; descripcion: string; precio: number; }) {
    this.inputcodigo = art.codigo;
    this.inputdescripcion = art.descripcion;
    this.inputprecio = art.precio;
  }
}
