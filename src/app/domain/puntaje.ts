import { Regional } from "./regional";
import { Tipopuntos } from "./tipopuntos";

export interface Puntaje {
    idpuntaje: number,
    posicion: number,
    puntos:number,
    regional:Regional,
    tipopuntos: Tipopuntos

}
