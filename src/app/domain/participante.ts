import { Corredor } from "./corredor";
import { Evento } from "./evento";
import { Region } from "./region";
import { Regional } from "./regional";

export interface Participante {
    idparticipante: number,
    fecha: Date,
    pagado:number,
    nrogiro:string,
    costo:number,
    dorsal:number,
    puesto:number,
    puestocat:number,
    puntaje:number,
    tiempo:Date,
    participo:number,
    completo:number,
    descalif:number,
    promedio:any,
    km:number,
    orden:number,
    puntajeaux:number,
    puntua:number,
    totalpuntos:number,
    acobrar:number,
    corredor:Corredor,
    evento:Evento,
    regional:Regional,
    region:Region

}

