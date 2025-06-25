/* GetDataService
* A generic class named "GetDataService" that works with any type "T".
* It helps load and manage typed data from a JSON file in one place.
* Functions :
* -> getAll()
* -> getBySlug(slug: string)
* -> getFirst(n: number)
* -> clearCache()
*/
export class GetDataService<T> {

    /* cache
    * Creates a private property named "cache" that starts as null.
    * It will store a list of items in memory so the data doesn't have to be fetched again every time.
    */
    private cache: T[] | null = null;

    /* constructor
    * Takes a "path" as a parameter, which is the location of the JSON file (like "/projects.json").
    * Saves this "path" as a private and read-only property so it can be used later in the class.
    */
    constructor(private readonly path: string) {}
 
    /* Function getAll
    * Checks if "this.cache" already has data.
    * If yes, returns the cached data right away.
    * If not, makes an HTTP request to fetch data from the path stored in "this.path".
    * If the response is not OK (like a 404), throws an error saying the file couldn't be loaded.
    * If the response is OK, turns it into a typed list of items "T[]".
    * Saves the result into "this.cache" so next time it doesn't fetch again.
    * Returns the list of items.
    */
    // Charge tous les éléments depuis le fichier JSON, avec mise en cache
    async getAll(): Promise<T[]> {

        if (this.cache) return this.cache;

        const res = await fetch(this.path);

        if (!res.ok) {
            throw new Error(`Erreur lors du chargement de ${this.path}`);
        }

        const data: T[] = await res.json();

        this.cache = data;

        return data;
   }
 
    /* Function getBySlug
    * Calls "this.getAll()" to get the full list of items.
    * Since TypeScript doesn’t know if "T" has a "slug", casts the list to "any[]".
    * Searches the list to find the first item where "item.slug" is equal to the given "slug".
    * Returns the found item or "undefined" if none match.
    */
    async getBySlug(slug: string): Promise<T | undefined> {
        const all = await this.getAll();
        return (all as any[]).find((item) => item.slug === slug);
    }
 
    /* Function getFirst
    * Calls "this.getAll()" to get the full list of items.
    * Uses "slice(0, n)" to return only the first "n" items from the list.
    */
    async getFirst(n: number): Promise<T[]> {
        const data = await this.getAll();
        return data.slice(0, n);
    }
 
    /* Function clearCache
    * Sets "this.cache" to null to remove any saved data.
    * This allows the data to be reloaded fresh next time, which is useful during development.
    */
    clearCache() {
        this.cache = null;
    }
}