import { ServicesPageT } from "@/messages/types/ServicesPageT";
import { unstable_setRequestLocale } from "next-intl/server";
import { localize } from "@/localize";
import { HeroRightSideT } from "@/messages/types/HeroRightSideT";
import { HeroServicesBG } from "@/helpers/imagesImport";
import { MainPageT } from "@/messages/types/MainPageT";
import { ProjectsPageT } from "@/messages/types/ProjectsPageT";
import Services from "../components/Services";
import Hero from "../components/Hero";
import HeroRightSideList from "../components/HeroRightSideList";
import ProjectSection from "../components/ProjectsSection";
import ContactUsSection from "../components/ContactUsSection";
// import { getBase64FromImage } from "@/helpers/getBase64FromImage";

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
      <ProjectSection
        className="withPaddingBottom"
        t={mainT.projects}
        t2={projectsT.projects}
      />
      <ContactUsSection params={{ locale }} />
    </div>
  );
};

export default ServicesPage;
