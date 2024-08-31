import { localize } from "@/localize";
import { unstable_setRequestLocale } from "next-intl/server";
import { HeroRightSideT } from "@/messages/types/HeroRightSideT";
import { HeroAboutBG } from "@/helpers/imagesImport";
import { AboutPageT } from "@/messages/types/AboutPageT";
import styles from "./about.module.scss";
import Hero from "../components/Hero";
import HeroRightSideList from "../components/HeroRightSideList";
import AnimatedTitle from "../components/AnimatedTitle";
import Line from "../components/Line";
import AboutBestSection from "../components/AboutBestSection";
import AboutDescriptionsSection from "../components/AboutDescriptionsSection";
import AboutQuoteSection from "../components/AboutQuoteSection";

type Props = {
  params: { locale: string };
};

const About: React.FC<Props> = async ({ params: { locale } }) => {
  unstable_setRequestLocale(locale);

  const aboutT = await localize(AboutPageT);
  const heroRightSideT = await localize(HeroRightSideT);

  return (
    <div>
      <Hero imageSrc={HeroAboutBG} className="about" t={aboutT.hero}>
        <HeroRightSideList className="about" t={heroRightSideT.todo} />
      </Hero>
      <div className={`${styles.about_us} container`}>
        <AnimatedTitle title={aboutT.about.title} />
        <Line className="yellow-center" />
        <AboutDescriptionsSection t={aboutT.about.description} />
        <AboutBestSection t={aboutT.best} />
        <AboutQuoteSection t={aboutT.ceo} />
      </div>
    </div>
  );
};
export default About;
