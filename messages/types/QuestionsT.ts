import { Translation } from "./Translation";
import { FullTranslation } from "./FullTranslation";
export class QuestionsT implements Translation {
  // This takes the key value of the namespace in the translation sheet.
  namespace?: keyof FullTranslation = "Questions";
  constructor() {}
  list = {
    1: {
      title: "",
      description: "",
    },
    2: {
      title: "",
      description: "",
    },
    3: {
      title: "",
      description: "",
    },
    4: {
      title: "",
      description: "",
    },
    5: {
      title: "",
      description: "",
    },
  };
}
