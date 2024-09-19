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
import Partners from "./components/Partners";
import { HeroRightSideT } from "@/messages/types/HeroRightSideT";
import Testimonials from "./components/Testimonials";
import { MainPageT } from "@/messages/types/MainPageT";
import { ProjectsPageT } from "@/messages/types/ProjectsPageT";
import QuestionsSection from "./components/QuestionsSection";
import ContactUsSection from "./components/ContactUsSection";

type Props = {
  params: { locale: string };
};
const Home: React.FC<Props> = async ({ params: { locale } }) => {
  unstable_setRequestLocale(locale);

  const mainT = await localize(MainPageT);
  const heroRightSideT = await localize(HeroRightSideT);
  const projectsT = await localize(ProjectsPageT);

  return (
    <div className={styles.main}>
      <Hero imageSrc={HeroMainBG} className="main" t={mainT.hero}>
        <HeroRightSideList className="main" t={heroRightSideT.services} />
      </Hero>
      <Description t={mainT.descriptions} language={locale} />
      <ProjectSection t={mainT.projects} t2={projectsT.projects} />
      <AboutUsCounted imageSrc={AboutUsCountedBG} t={mainT.aboutUsCounted} />
      <Testimonials t={mainT.testimonials} />
      <QuestionsSection params={{ locale }} type="slogan" />
      <VideoSection t={mainT.videoSection} />
      <Partners t={mainT.partners} />
      <ContactUsSection params={{ locale }} />
    </div>
  );
};
export default Home;
