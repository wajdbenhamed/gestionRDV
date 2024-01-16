import { Medicament } from "./medicament";

export interface Maladie {
    id: number;
    createdAt: Date;
    updatedAt: Date;
    titre: string;
    description: string;
    gravite:string;
    type:string;
    debut: Date;
    fin: Date;
    medicaments: Medicament[];
}
