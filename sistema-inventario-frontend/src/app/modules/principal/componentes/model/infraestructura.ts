import { globalModels } from "src/app/core/models/globalModels";

export interface Infraestructura extends globalModels{
    id: number;
    nombre: string;
    descripcion: string;
    persona: any;
    categoriaAula: number;
}

