import Hero from "@/app/[locale]/components/Hero";
import styles from "./page.module.scss";
import { AboutUsCountedBG, HeroMainBG } from "@/helpers/imagesImport";
import HeroRightSideList from "@/app/[locale]/components/HeroRightSideList";
import Description from "@/app/[locale]/components/Description";
import ProjectSection from "@/app/[locale]/components/ProjectsSection";

import AboutUsCounted from "./components/AboutUsCounted";

import { unstable_setRequestLocale } from "next-intl/server";

import { localize } from "@/localize";
import VideoSection from "./components/VideoSection";
import { HeroRightSideT } from "@/messages/types/HeroRightSideT";
import Testimonials from "./components/Testimonials";
import { MainPageT } from "@/messages/types/MainPageT";
import { ProjectsPageT } from "@/messages/types/ProjectsPageT";
import QuestionsSection from "./components/QuestionsSection";
import ContactUsSection from "./components/ContactUsSection";
import PartnersCarousel from "./components/PartnersCarousel";
import getBase64FromImage from "@/helpers/getBase64";

type Props = {
  params: { locale: string };
};

// ---------------------------------------------
const getProjectsWithBase64 = async (projects: ProjectsPageT["projects"]) => {
  return await Promise.all(
    Object.entries(projects).map(async ([key, project]) => {
      const mainImgPath = `${process.cwd()}/public${project.mainImg}`;
      const base64 = await getBase64FromImage(mainImgPath);
      return { ...project, base64 };
    })
  );
};
// -----------------------------------------------

const Home: React.FC<Props> = async ({ params: { locale } }) => {
  unstable_setRequestLocale(locale);

  const mainT = await localize(MainPageT);
  const heroRightSideT = await localize(HeroRightSideT);
  const projectsT = await localize(ProjectsPageT);

  // ---------------------------------------------
  const projectsWithBase64 = await getProjectsWithBase64(projectsT.projects);
  // ---------------------------------------------

  return (
    <div className={styles.main}>
      <Hero imageSrc={HeroMainBG} className="main" t={mainT.hero}>
        <HeroRightSideList className="main" t={heroRightSideT.services} />
      </Hero>
      <Description t={mainT.descriptions} />
      <ProjectSection
        t={mainT.projects}
        // t2={projectsT.projects}
        t2={projectsWithBase64}
      />
      <AboutUsCounted imageSrc={AboutUsCountedBG} t={mainT.aboutUsCounted} />
      <Testimonials t={mainT.testimonials} />
      <QuestionsSection params={{ locale }} type="slogan" />
      <VideoSection t={mainT.videoSection} />
      <PartnersCarousel t={mainT.partners} />
      <ContactUsSection params={{ locale }} />
    </div>
  );
};
export default Home;
