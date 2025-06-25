import { GalleryType } from "../types/gallery.types";
import { GetDataService } from "./GetDataService";

/* GalleryService
* Creates a single instance of "GetDataService" with the type "GalleryType".
* Uses the JSON file located at "/gallery.json" as the source of gallery data.
*/
export const GalleryService = new GetDataService<GalleryType>("/gallery.json");