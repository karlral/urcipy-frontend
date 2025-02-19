import { Concepto } from "./concepto";
import { Corredor } from "./corredor";
import { Usuario } from "./usuario";

export interface Movimiento {
        idmovimiento: number,
        fecha: Date,
        entrada: number,
        salida: number,
        concepto: Concepto,
        corredor: Corredor,
        usuario: Usuario
}

