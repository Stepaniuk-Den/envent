import Hero from "@/components/Hero";
import styles from "./page.module.scss";
import { HeroMainBG } from "@/helpers/imagesImport";
import HeroRightSideList from "@/components/HeroRightSideList";
import { HeroRightSideItems } from "@/data/HeroItems";

export default function Home() {
  return (
    <div className={styles.main}>
      <Hero imageSrc={HeroMainBG} className="main">
        <HeroRightSideList
          data={HeroRightSideItems.services}
          className="main"
        />
      </Hero>
    </div>
  );
}
