import { Translation } from "./Translation";
import { FullTranslation } from "./FullTranslation";
export class QuestionCardT implements Translation {
  // This takes the key value of the namespace in the translation sheet.
  namespace?: keyof FullTranslation = "QuestionCard";
  constructor() {}
  slogan = {
    title: "",
    description: "",
    textBtn: "",
  };
  faq = {
    title: "",
    description: "",
    textBtn: "",
  };
}
