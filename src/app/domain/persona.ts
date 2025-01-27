import { Ciudad } from "./ciudad";

export interface Persona {
    idpersona: number,
    nombre: string,
    apellido: string,
    ci: string,
    sexo: number,
    fecnac: Date,
    telefono: string,
    direccion: string,
    email: string,
    foto:string,
    cidelante: string,
    gruposanguineo: string,
    tutorp: string,
    citp: string,
    nacionalidad: string,
    ciudad: Ciudad
    
}


