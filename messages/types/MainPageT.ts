import { Translation } from "./Translation";
import { FullTranslation } from "./FullTranslation";
export class MainPageT implements Translation {
  // This takes the key value of the namespace in the translation sheet.
  namespace?: keyof FullTranslation = "MainPage";
  constructor() {}
  hero = {
    title: "",
    description: "",
    button: "",
  };
  descriptions = {};
}
