import { Translation } from "./Translation";
import { FullTranslation } from "./FullTranslation";

export class SideBarT implements Translation {
  namespace?: keyof FullTranslation = "SideBar";
  constructor() {}

  catalog = {
    catalogTitle: "",
  };
}
