import { ProjectType } from "../types/project.types";
import { GetDataService } from "./GetDataService";

// Création de l'instance unique typée pour les projets
export const ProjectService = new GetDataService<ProjectType>("/projects.json");