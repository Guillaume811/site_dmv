import { PrestationType } from "../types/prestation.types";
import { GetDataService } from "./GetDataService";

/* PrestationService
* Creates a single instance of "GetDataService" with the type "PrestationType".
* Uses the JSON file located at "/prestations.json" as the source of prestations data.
*/
export const PrestationService = new GetDataService<PrestationType>("/prestations.json");