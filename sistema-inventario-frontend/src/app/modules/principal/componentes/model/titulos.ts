import { globalModels } from "src/app/core/models/globalModels";

export interface Titulos extends globalModels {
    id:number;
    titulosOptenidos:string;
    institucion:string;
    anoDelTitulo:Date;
    intruccionFormal:string;
    numeroDeRegistroSenesyt:string;
}