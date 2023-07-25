import { Regional } from "./regional";

export interface Club {
    idclub: number,
    nomclub: string,
    presidente: string,
    telepresi:string,
    vicepresidente:string,
    telvice:string,
    telefono:string,
    email:string,
    ruta:string,
    rutagrande:string,
    regional: Regional,
    cantidad?:number
}