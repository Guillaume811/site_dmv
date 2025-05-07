/*import { ProjectType } from "../types/project.types";

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
}*/

// Classe générique pour centraliser le chargement de données typées
export class GetDataService<T> {

   // Cache en mémoire locale (évite de refetch à chaque appel)
   private cache: T[] | null = null;

   // Le chemin du fichier JSON dans /public (ex: "/projects.json")
   constructor(private readonly path: string) {}
 
   // Charge tous les éléments depuis le fichier JSON, avec mise en cache
   async getAll(): Promise<T[]> {
     // Si les données sont déjà en cache, on les renvoie directement
     if (this.cache) return this.cache;
     // Sinon on fait une requête HTTP vers le fichier JSON
     const res = await fetch(this.path);
     // Si la réponse est mauvaise (404, etc.), on lève une erreur explicite
     if (!res.ok) {
       throw new Error(`Erreur lors du chargement de ${this.path}`);
     }
     // On récupère les données typées (tableau d'objets T)
     const data: T[] = await res.json();
     // On les stocke en cache
     this.cache = data;
     // On les retourne pour l'utilisation
     return data;
   }
 
   // Recherche un élément unique par son slug (suppose que T a une propriété 'slug')
   async getBySlug(slug: string): Promise<T | undefined> {
     const all = await this.getAll();
     // TypeScript ne sait pas que T a une propriété 'slug', donc on cast en any[]
     return (all as any[]).find((item) => item.slug === slug);
   }
 
   // Récupère uniquement les N premiers éléments (utile pour les "featured", etc.)
   async getFirst(n: number): Promise<T[]> {
     const data = await this.getAll();
     return data.slice(0, n);
   }
 
   // Permet de forcer le vidage du cache (utile en développement)
   clearCache() {
     this.cache = null;
   }
}