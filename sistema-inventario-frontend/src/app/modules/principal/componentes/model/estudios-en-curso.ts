import { globalModels } from "src/app/core/models/globalModels";

export interface EstudiosEnCurso extends globalModels{
    id: number;
    tipoDeTitulo: string;
    fechaDeInicio: Date;
    fechaDeFin: Date;
    nombre: string;
    numeroDeHoras: number
}