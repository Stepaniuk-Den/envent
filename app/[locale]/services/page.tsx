import { ServicesPageT } from "@/messages/types/ServicesPageT";
import { unstable_setRequestLocale } from "next-intl/server";
import { localize } from "@/localize";
import Services from "../components/Services";
import { HeroRightSideT } from "@/messages/types/HeroRightSideT";
import Hero from "../components/Hero";
import { HeroServicesBG } from "@/helpers/imagesImport";
import HeroRightSideList from "../components/HeroRightSideList";
import ProjectSection from "../components/ProjectsSection";
import { MainPageT } from "@/messages/types/MainPageT";
import ContactUsSection from "../components/ContactUsSection";
import { ProjectsPageT } from "@/messages/types/ProjectsPageT";

type Props = {
  params: { locale: string };
};

const ServicesPage: React.FC<Props> = async ({ params: { locale } }) => {
  unstable_setRequestLocale(locale);

  const servicesT = await localize(ServicesPageT);
  const mainT = await localize(MainPageT);
  const heroRightSideT = await localize(HeroRightSideT);
  const projectsT = await localize(ProjectsPageT);

  return (
    <div>
      <Hero imageSrc={HeroServicesBG} className="about" t={servicesT.hero}>
        <HeroRightSideList className="about" t={heroRightSideT.todo} />
      </Hero>
      <Services t={servicesT.services} language={locale} />
      <ProjectSection t={mainT.projects} t2={projectsT.projects} />
      <ContactUsSection params={{ locale }} />
    </div>
  );
};

export default ServicesPage;
