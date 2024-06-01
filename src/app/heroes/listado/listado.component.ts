import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {
  heroes:string[]=['Spiderman', 'AntMan', 'Natasha','Ojo de alcon']
  heroesbash:string='';
  borrarHeroe(){
  this.heroesbash= this.heroes.shift() || '';
  }
}
