import { PrestationType } from "../types/prestation.types";
import { GetDataService } from "./GetDataService";

// Création de l'instance unique typée pour les projets
export const PrestationService = new GetDataService<PrestationType>("/prestations.json");