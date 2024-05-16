import { Categoria } from "./categoria";
import { Ciudad } from "./ciudad";
import { Club } from "./club";
import { Usuario } from "./usuario";

export interface Historial {
    idparticipante: number,
    fecha: Date,
    nomevento: string,
    ci: string,
    nomparticipante: string,
    club: string,
    categoria: string,
    puestocat: number,
    promedio: any
}


