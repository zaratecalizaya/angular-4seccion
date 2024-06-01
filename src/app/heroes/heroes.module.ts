import { NgModule } from "@angular/core";
import { HeroeComponent } from "./heroe/heroe.component";
import { ListadoComponent } from "./listado/listado.component";
import { CommonModule } from "@angular/common";

@NgModule({
    //que componentes contiene este modulo
    declarations:[
    HeroeComponent, ListadoComponent
    ],
    //que cosas quiero que sean show fuera del modulo
    exports:[
        ListadoComponent
    ],
    //modulos que quiero importar
    //usamos common Modulo para usar el ngIf o for
    imports:[CommonModule]
})

export class HeroesModule {

}