import { Categoriah } from "./categoriah";
import { Club } from "./club";

export interface Campeones {
    idcampeones: number,
    nombre: string,
    apellido: string,
    nacionalidad: string,
    ano: number,
    peso: number,
    altura: number,
    bici: string,
    velmedia: string,
    puntos: number,
    puesto: number,
    rutabici:string,
    ruta:string,
    promedio:any,
    kmts:number,
    cantidad:number,
    categoriah:Categoriah
    club:Club
}