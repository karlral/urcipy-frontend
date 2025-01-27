import { Categoria } from "./categoria";
import { Club } from "./club";
import { Persona } from "./persona";
import { Regional } from "./regional";
import { Usuario } from "./usuario";

export interface Corredor {
    idcorredor: number,
    persona: Persona,
    club: Club,
    categoria: Categoria,
    usuario: Usuario,
    regional:Regional
    verificar: number,
    carnet: string,
    carnetatras:string,
    tipocat: number,
    licencia: number,
    modificar: boolean,
    gruposanguineo: string,
    puntua: number,
    fecmodi: Date,
    montopuntua: number,
    carnetfpc: number,
    observacion: string,
    catalianza:number,
 
}


