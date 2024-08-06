import { globalModels } from "src/app/core/models/globalModels";
import { CategoriaBienes } from "./categorias-bienes";

export interface Bienes extends globalModels {
    id: number;
    descripcion: string;
    nombre: string,
    codigoDelBien: string,
    marca: string,
    modelo: string,
    custodio: any,
    estado: boolean,
    observaciones: string,
    valor: number,
    valorIva: number,
    serie: string,
    categoriaBien:CategoriaBienes,
    infraestructura:any
}