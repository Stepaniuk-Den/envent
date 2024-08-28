import { ServicesPageT } from "@/messages/types/ServicesPageT";
import { unstable_setRequestLocale } from "next-intl/server";
import { localize } from "@/localize";
import Services from "../components/Services";
import { HeroRightSideT } from "@/messages/types/HeroRightSideT";
import Hero from "../components/Hero";
import { HeroServicesBG } from "@/helpers/imagesImport";
import HeroRightSideList from "../components/HeroRightSideList";
import ProjectSection from "../components/ProjectsSection";
import { MainPageT } from "@/navigation";

type Props = {
  params: { locale: string };
};

const ServicesPage: React.FC<Props> = async ({ params: { locale } }) => {
  unstable_setRequestLocale(locale);

  const servicesT = await localize(ServicesPageT);
  const mainT = await localize(MainPageT);
  const heroRightSideT = await localize(HeroRightSideT);

  return (
    <div>
      <Hero imageSrc={HeroServicesBG} className="about" t={servicesT.hero}>
        <HeroRightSideList className="about" t={heroRightSideT.todo} />
      </Hero>
      <Services t={servicesT.services}/>
      <ProjectSection t={mainT.projects}/>
    </div>
  );
};

export default ServicesPage;
