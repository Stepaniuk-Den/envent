import { Translation } from "./Translation";
import { FullTranslation } from "./FullTranslation";

export class ProjectsPageT implements Translation {
  namespace?: keyof FullTranslation = "ProjectsPage";
  constructor() {}

  hero = {
    title: "",
    description: "",
    button: "",
  };

  projects = {};
}
