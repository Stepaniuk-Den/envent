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
// import { getBase64FromImage } from "@/helpers/getBase64FromImage";

type Props = {
  params: { locale: string };
};

// ---------------------------------------------
// const getProjectsWithBase64 = async (projects: ProjectsPageT["projects"]) => {
//   return await Promise.all(
//     Object.entries(projects).map(async ([key, project]) => {
//       const mainImgPath = `${process.cwd()}/public${project.mainImg}`;
//       const base64 = await getBase64FromImage(mainImgPath);
//       return { ...project, base64 };
//     })
//   );
// };
// ---------------------------------------------

const ServicesPage: React.FC<Props> = async ({ params: { locale } }) => {
  unstable_setRequestLocale(locale);

  const servicesT = await localize(ServicesPageT);
  const mainT = await localize(MainPageT);
  const heroRightSideT = await localize(HeroRightSideT);
  const projectsT = await localize(ProjectsPageT);

  // ---------------------------------------------
  // const projectsWithBase64 = await getProjectsWithBase64(projectsT.projects);
  // ---------------------------------------------

  return (
    <div>
      <Hero imageSrc={HeroServicesBG} className="about" t={servicesT.hero}>
        <HeroRightSideList className="about" t={heroRightSideT.todo} />
      </Hero>
      <Services t={servicesT.services} language={locale} />
      <ProjectSection
        t={mainT.projects}
        t2={projectsT.projects}
        // t2={projectsWithBase64}
      />
      <ContactUsSection params={{ locale }} />
    </div>
  );
};

export default ServicesPage;
