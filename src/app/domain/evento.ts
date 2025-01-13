import { Club } from "./club";
import { Regional } from "./regional";

export interface Evento {
    idevento: number,
    fecha:Date,
    nomevento: string,
    activo: number,
    direccion: string,
    orden: number,
    tipoevento: number,
    modo: number,
    verencuesta: number,
    ranqueable: number,
    preinscrip: number,
    doble: number,
    km: number,
    kmpromo:number,
    kmmenor:number,
    informacion:string,
    locales: string,
    deposito: string,
    urlpromocional: string,
    urlcategoria: string,
    contacto: string,
    montopric: number,
    montopris: number,
    montomenc: number,
    montomens: number,
    fondocolor:string,
    fondo: string,
    club: Club,
    regional:Regional
}
