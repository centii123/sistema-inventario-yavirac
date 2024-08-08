import { globalModels } from "src/app/core/models/globalModels";

export interface EscalaOcupacional extends globalModels {
    id: number;
    grupoOcupacional: string;
    grado: number;
    remuneracion: number;
}
