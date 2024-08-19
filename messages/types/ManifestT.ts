import { Translation } from "./Translation";
import { FullTranslation } from "./FullTranslation";

export class ManifestT implements Translation {
  // This takes the key value of the namespace in the translation sheet.
  namespace?: keyof FullTranslation = "Manifest";
  constructor() {}
  name = "";
}
