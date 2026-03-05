import { Evento } from "./evento";
import { Asignacion } from "./asignacion";
import { Corredor } from "./corredor";

export interface EventoAsignacion {
        ideventoAsignacion: number,
        evento: Evento,
        corredor:Corredor,
        asignacion: Asignacion,
        puntaje: number 
}

