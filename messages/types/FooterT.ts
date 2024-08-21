import { Translation } from "./Translation";
import { FullTranslation } from "./FullTranslation";

export class FooterT implements Translation {
  // This takes the key value of the namespace in the translation sheet.
  namespace?: keyof FullTranslation = "Footer";
  constructor() {}
  formTitle = "";
  placeholderName = "";
  placeholderEmail = "";
  placeholderMessage = "";
  button = "";
}
