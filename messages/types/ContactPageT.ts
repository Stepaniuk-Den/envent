import { Translation } from "./Translation";
import { FullTranslation } from "./FullTranslation";

export class ContactsPageT implements Translation {
  // This takes the key value of the namespace in the translation sheet.
  namespace?: keyof FullTranslation = "ContactsPage";
  constructor() {}
  hero = {
    title: "",
    description: "",
    button: "",
  };
  locationBtn = {
    description: "",
  };
}
