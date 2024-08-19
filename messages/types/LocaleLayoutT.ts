import { Translation } from "./Translation";
import { FullTranslation } from "./FullTranslation";
export class LocaleLayoutT implements Translation {
  // This takes the key value of the namespace in the translation sheet.
  namespace?: keyof FullTranslation = "LocaleLayout";
  constructor() {}
  title = "";
  description = "";
}
