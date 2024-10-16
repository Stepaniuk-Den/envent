import { AboutPageT } from "./AboutPageT";
import { ContactsPageT } from "./ContactPageT";
import { ContactUsT } from "./ContactUsT";
import { HeaderT } from "./HeaderT";
import { HeroRightSideT } from "./HeroRightSideT";
import { LocaleLayoutT } from "./LocaleLayoutT";
import { LocaleSwitcherT } from "./LocaleSwitcherT";
import { MainPageT } from "./MainPageT";
import { ManifestT } from "./ManifestT";
import { SideBarT } from "./SideBarT";
import { ProjectsPageT } from "./ProjectsPageT";
import { QuestionCardT } from "./QuestionCardT";
import { QuestionsT } from "./QuestionsT";
import { ServicesPageT } from "./ServicesPageT";

export type FullTranslation = {
  // Those key names must be identical to the ones in the translation-sheets
  Header: HeaderT;
  LocaleLayout: LocaleLayoutT;
  LocaleSwitcher: LocaleSwitcherT;
  Manifest: ManifestT;
  MainPage: MainPageT;
  SideBar: SideBarT;
  ContactUs: ContactUsT;
  HeroRightSide: HeroRightSideT;
  ProjectsPage: ProjectsPageT;
  AboutPage: AboutPageT;
  ServicesPage: ServicesPageT;
  ContactsPage: ContactsPageT;
  Questions: QuestionsT;
  QuestionCard: QuestionCardT;
};
