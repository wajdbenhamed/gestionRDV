import { Maladie } from "./maladie";
import { Profile } from "./profile";

export interface User {
    
id: number;
createdAt: Date;
updatedAt: Date;
nom: string;
prenom: string;
email: string;
password: string;
age: number;
profile: Profile;
maladies: Maladie[];
genre: string;


}
