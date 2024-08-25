import { FooterT } from "./FooterT";
import { HeaderT } from "./HeaderT";
import { HeroRightSideT } from "./HeroRightSideT";
import { LocaleLayoutT } from "./LocaleLayoutT";
import { LocaleSwitcherT } from "./LocaleSwitcherT";
import { MainPageT } from "./MainPageT";
import { ManifestT } from "./ManifestT";
import { ServicesPageT } from "./ServicesPageT";

export type FullTranslation = {
  // Those key names must be identical to the ones in the translation-sheets
  Header: HeaderT;
  LocaleLayout: LocaleLayoutT;
  LocaleSwitcher: LocaleSwitcherT;
  Manifest: ManifestT;
  MainPage: MainPageT;
  Footer: FooterT;
  HeroRightSide: HeroRightSideT;
  ServicesPage: ServicesPageT;
};
