import { globalModels } from "src/app/core/models/globalModels";
import { CategoriaBienes } from "./categorias-bienes";

export interface Bienes extends globalModels {
    id: number;
    descripcion: string;
    codigoDelBien: string,
    marca: string,
    estado: number,
    observaciones: string,
    valor: number,
    valorIva: number,
    serie: string,
    categoriaBien:CategoriaBienes,
    infraestructura:any
}