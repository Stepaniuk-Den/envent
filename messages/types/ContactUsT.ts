import { Translation } from "./Translation";
import { FullTranslation } from "./FullTranslation";

export class ContactUsT implements Translation {
  // This takes the key value of the namespace in the translation sheet.
  namespace?: keyof FullTranslation = "ContactUs";
  constructor() {}
  formTitle = "";
  placeholderName = "";
  placeholderEmail = "";
  placeholderMessage = "";
  button = "";
  msg_success = "";
  msg_error = "";
  msg_btn = "";
}
