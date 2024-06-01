import { Component } from "@angular/core";

@Component({
    selector:'app-heroe',
    templateUrl:'heroe.component.html'
})
export class HeroeComponent{
   nombre:string= 'Iroman';
   edad:number=45
   
   get NombreCapitalizado(){
    return this.nombre.toUpperCase();
   }

    ObtenerNombre():string{
        return `${this.nombre} - ${this.edad}`;
    }
    cambiarNombre():void{
        console.log('qui ingreso');
        this.nombre='Spiderman';
        
    }

    cambiarEdad():void{
        this.edad=30;
    }
}