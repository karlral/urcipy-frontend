import { Categoria } from "./categoria";
import { Ciudad } from "./ciudad";
import { Club } from "./club";
import { Usuario } from "./usuario";

export interface Corredor {
    idcorredor: number,
    nombre: string,
    apellido: string,
    ci: string,
    sexo: number,
    fecnac: Date,
    telefono: string,
    direccion: string,
    email: string,
    verificar: number,
    nacionalidad: string,
    carnet: string,
    carnetatras:string,
    foto:string,
    cidelante: string,
    tipocat: number,
    tutorp: string,
    citp: string,
    licencia: number,
    modificar: boolean,
    gruposanguineo: string,
    puntua: boolean,
    fecmodi: Date,
    montopuntua: number,
    carnetfpc: boolean,
    observacion: string,
    categoria: Categoria,
    ciudad: Ciudad,
    club: Club,
    usuario: Usuario
}


