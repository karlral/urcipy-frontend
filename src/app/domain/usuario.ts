import { Regional } from "./regional";

export interface Usuario {
    idusuario:number,
    nombre:string,
    apellido:string,
    telefono:string,
    perfil:string,
    email:string,
    username:string,
    password:string,
    enabled:boolean,
    idevento:number,
    regional:Regional
}
