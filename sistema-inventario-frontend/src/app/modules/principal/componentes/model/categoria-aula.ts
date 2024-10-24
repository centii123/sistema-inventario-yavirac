import { globalModels } from "src/app/core/models/globalModels";

export interface CategoriaAula extends globalModels {
    id: number;
    descripcion?: string;
}