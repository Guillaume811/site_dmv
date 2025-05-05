import { ProjectType } from "./project.types";

// Création d'une classe de service qui centralise les accès aux données
export class ProjectService {
    // Stocke les projets une fois chargés, pour éviter de refaire des appels
    private static cache: ProjectType[] | null = null;
  
    // Fonction privée pour charger les projets depuis le fichier JSON
    private static async fetchData(): Promise<ProjectType[]> {
      // Si on a déjà les projets en cache, on les renvoie directement
      if (this.cache) return this.cache;
  
      // Sinon, on récupère le fichier JSON situé dans /public
      const res = await fetch("/projects.json");
  
      // Si la requête échoue, on lève une erreur
      if (!res.ok) throw new Error("Erreur lors du chargement des projets");
  
      // On parse le fichier JSON en tableau d'objets typés Project
      const data: ProjectType[] = await res.json();
  
      // On met le résultat en cache
      this.cache = data;
  
      // On renvoie les projets
      return data;
    }
  
    // Fonction publique pour obtenir tous les projets
    static async getAllProjects(): Promise<ProjectType[]> {
      return this.fetchData();
    }
  
    // Fonction publique pour obtenir uniquement les 6 premiers projets
    static async getFeaturedProjects(): Promise<ProjectType[]> {
      const all = await this.fetchData();
      return all.slice(0, 6); // On garde uniquement les 6 premiers
    }

     // Optionnel : permet de vider manuellement le cache (utile en développement)
    static clearCache() {
    this.cache = null;
    }

    // Recherche un projet unique dans le fichier json à partir de son slug
    static async getProjectBySlug(slug: string): Promise<ProjectType | undefined> {
      // Charge tous les projets depuis le fichier JSON (avec mise en cache si déjà récupérés)
      const all = await this.fetchData();
      // Retourne le projet dont le slug correspond à celui passé en paramètre
      return all.find((p) => p.slug === slug);
    }
}