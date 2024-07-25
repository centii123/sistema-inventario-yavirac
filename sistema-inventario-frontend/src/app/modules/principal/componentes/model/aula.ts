import { globalModels } from "src/app/core/models/globalModels";
import { CategoriaAula } from "./categoria-aula";

export interface Aulas extends globalModels{
    id: number;
    nombre: string;
    descripcion: string;
    persona: any;
    categoriaAula: CategoriaAula
}

