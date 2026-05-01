
export interface Partici{
    idparticipante: number,
    idevento: number,
    idcorredor: number,
    idcategoria: number,
    idclub: number,
    ci: string,
    tamano:number,
    telefono: string,
    idregional?: number,
    modificar?: boolean,
    tipocat?: number,
    corredor?: string,
    nombre: string,
    apellido:string,
    fecnac: Date,
    sexo?: number,
    nacionalidad?: string,
    regcorredor?: boolean,
    licencia?: number
    
}