import { globalModels } from "src/app/core/models/globalModels";
import { Provincias } from "./provincia";

export interface Institutos extends globalModels {
    [x: string]: any;
    id: number;
    canton: string;
    coordinacionZonal: string;
    direccionInstituto: string;
    nombre: string;
    regimenLaboral: string;
    provincias: any;
}