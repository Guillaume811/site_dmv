import { GalleryType } from "../types/gallery.types";
import { GetDataService } from "./GetDataService";

// Création de l'instance unique typée pour les projets
export const GalleryService = new GetDataService<GalleryType>("/projects.json");