import { ProjectType } from "../types/project.types";
import { GetDataService } from "./GetDataService";

/* ProjectService
* Creates a single instance of "GetDataService" with the type "ProjectType".
* Uses the JSON file located at "/projects.json" as the source of projects data.
*/
export const ProjectService = new GetDataService<ProjectType>("/projects.json");