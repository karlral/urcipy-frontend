import { Injectable } from "@angular/core";

@Injectable()
export class Datasys {
    getOrdenesData(){
        return [
            { label: 'Primera', value: 1 },
            { label: 'Segunda', value: 2 },
            { label: 'Tercera', value: 3 },
            { label: 'Cuarta',  value: 4 },
            { label: 'Quinta',  value: 5 },
            { label: 'Sexta',   value: 6 },
            { label: 'Septima', value: 7 },
            { label: 'Octava',  value: 8 },
            { label: 'Novena',  value: 9 },
            { label: 'Decima',  value: 10 }
          ]
    }
    getOrdenes() {
        return Promise.resolve(this.getOrdenesData());
    }
}
