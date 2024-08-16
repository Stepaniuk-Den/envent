import Hero from "@/app/[lang]/components/Hero";
import styles from "./page.module.scss";
import { HeroMainBG } from "@/helpers/imagesImport";
import HeroRightSideList from "@/app/[lang]/components/HeroRightSideList";
import { HeroRightSideItems } from "@/data/HeroItems";
import Description from "@/app/[lang]/components/Description";
import ProjectSection from "@/app/[lang]/components/ProjectsSection";
import { Locale } from "@/i18n-config";
import { getDictionary } from "@/get-dictionary";

export default async function Home({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dictionary = await getDictionary(lang);
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
    </div>
  );
}
