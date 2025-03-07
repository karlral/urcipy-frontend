import { Modalidad } from "./modalidad";
import { Trayecto } from "./trayecto";

export interface Categoria {
    idcategoria: number,
        nomcategoria: string,
        activo: boolean,
        nomcorto:string,
        orden:number,
        tanda:number,
        ascenso:boolean,
        activonacional:number,
        edadinicio:number,
        edadfin:number,
        sexo:number,
        tipo:number,
        trayecto:Trayecto,
        horario:string,
        modalidad:Modalidad
}
