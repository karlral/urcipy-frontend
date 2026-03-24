import { Evento } from "./evento";
import { Asignacion } from "./asignacion";
import { Corredor } from "./corredor";

export interface EventoAsignacion {
        ideventoAsignacion: number,
        fecha: Date,
        evento: Evento,
        corredor:Corredor,
        asignacion: Asignacion,
        puntaje: number 
}

