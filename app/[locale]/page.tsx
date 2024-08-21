import Hero from "@/app/[locale]/components/Hero";
import styles from "./page.module.scss";
import { AboutUsCountedBG, HeroMainBG } from "@/helpers/imagesImport";
import HeroRightSideList from "@/app/[locale]/components/HeroRightSideList";
import { HeroRightSideItems } from "@/data/HeroItems";
import Description from "@/app/[locale]/components/Description";
import ProjectSection from "@/app/[locale]/components/ProjectsSection";

import AboutUsCounted from "./components/AboutUsCounted";

import { unstable_setRequestLocale } from "next-intl/server";
import { MainPageT } from "@/messages/types/MainPageT";
import { localize } from "@/localize";
import VideoSection from "./components/VideoSection";

type Props = {
  params: { locale: string };
};
const Home: React.FC<Props> = async ({ params: { locale } }) => {
  unstable_setRequestLocale(locale);

  const t = await localize(MainPageT);

  return (
    <div className={styles.main}>
      <Hero imageSrc={HeroMainBG} className="main" t={t.hero}>
        <HeroRightSideList
          data={HeroRightSideItems.services}
          className="main"
        />
      </Hero>
      <Description />
      <ProjectSection t={t.projects} />
      <AboutUsCounted imageSrc={AboutUsCountedBG} />
      <VideoSection />
    </div>
  );
};
export default Home;
