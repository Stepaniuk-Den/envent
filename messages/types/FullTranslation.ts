import { HeaderT } from "./HeaderT";
import { LocaleLayoutT } from "./LocaleLayoutT";
import { LocaleSwitcherT } from "./LocaleSwitcherT";
import { MainPageT } from "./MainPageT";
import { ManifestT } from "./ManifestT";

export type FullTranslation = {
  // Those key names must be identical to the ones in the translation-sheets
  Header: HeaderT;
  LocaleLayout: LocaleLayoutT;
  LocaleSwitcher: LocaleSwitcherT;
  Manifest: ManifestT;
  MainPage: MainPageT;
};
