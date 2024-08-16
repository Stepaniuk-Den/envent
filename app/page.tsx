import Hero from "@/components/Hero";
import styles from "./page.module.scss";
import { AboutUsCountedBG, HeroMainBG } from "@/helpers/imagesImport";
import HeroRightSideList from "@/components/HeroRightSideList";
import { HeroRightSideItems } from "@/data/HeroItems";
import Description from "@/components/Description";
import ProjectSection from "@/components/ProjectsSection";
import AboutUsCounted from "@/components/AboutUsCounted";
import SideBar from "@/components/SideBar";

export default function Home() {
  return (
    <div className={styles.main}>
      <Hero imageSrc={HeroMainBG} className="main">
        <HeroRightSideList
          data={HeroRightSideItems.services}
          className="main"
        />
      </Hero>
      <Description />
      <ProjectSection />
      <AboutUsCounted imageSrc={AboutUsCountedBG} />
      <SideBar />
    </div>
  );
}
