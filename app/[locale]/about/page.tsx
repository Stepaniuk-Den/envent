import { localize } from "@/localize";
import { unstable_setRequestLocale } from "next-intl/server";
import styles from "./about.module.scss";
import { HeroRightSideT } from "@/messages/types/HeroRightSideT";
import Hero from "../components/Hero";
import HeroRightSideList from "../components/HeroRightSideList";
import { ArrowRightAboutIcon, HeroAboutBG } from "@/helpers/imagesImport";
import { AboutPageT } from "@/messages/types/AboutPageT";
import AnimatedTitle from "../components/AnimatedTitle";
import Line from "../components/Line";
import MainButton from "../components/Buttons/MainButton";
import ButtonVariableColor from "../components/Buttons/ButtonVariableColor";
import ImagesCarousel from "../components/ImagesCarousel";
import { MainPageT } from "@/messages/types/MainPageT";

type Props = {
  params: { locale: string };
};

const About: React.FC<Props> = async ({ params: { locale } }) => {
  unstable_setRequestLocale(locale);

  const aboutT = await localize(AboutPageT);
  const heroRightSideT = await localize(HeroRightSideT);
  const carouselT = await localize(MainPageT);

  const aboutList = Object.entries(aboutT.about.description);
  const aboutBest = Object.entries(aboutT.best.list);
  return (
    <div>
      <Hero imageSrc={HeroAboutBG} className="about" t={aboutT.hero}>
        <HeroRightSideList className="about" t={heroRightSideT.todo} />
      </Hero>
      <div className={`${styles.about_us} container`}>
        <AnimatedTitle title={aboutT.about.title} />
        <Line className="yellow-center" />
        <section className={styles.descriptions_wrapper}>
          {aboutList.map(([key, value]) => {
            return (
              <p key={key} className={styles[key]}>
                {value}
              </p>
            );
          })}
        </section>
        <section className={styles.best_wrapper}>
          <div style={{ display: "flex" }}>
            <div className={styles.list_wrapper}>
              <h3 className={styles.title}>{aboutT.best.title}</h3>
              <ul className={styles.list}>
                {aboutBest.map(([key, value]) => {
                  return (
                    <li key={key} className={styles.item}>
                      <div className={styles.svg_container}>
                        <ArrowRightAboutIcon className={styles.svg} />
                      </div>
                      <p className={styles.content_container}>
                        <span className={styles.title}>{value.title}</span>
                        <span className={styles.content}>
                          {value.description}
                        </span>
                      </p>
                    </li>
                  );
                })}
              </ul>
              <MainButton className="about_us" color="blue">
                {aboutT.best.buttons.best}
              </MainButton>
            </div>
            <div className={styles.image_wrapper}>
              <ImagesCarousel t={carouselT.projects.list} />
              <ButtonVariableColor
                className="blue_dark"
                firstChildren={
                  <>
                    <p className={styles.count}>32</p>
                    <p className={`${styles.text} ${styles.fix_width}`}>
                      {aboutT.best.buttons.years}
                    </p>
                  </>
                }
                secondChildren={
                  <>
                    <p className={styles.count}>250</p>
                    <p className={styles.text}>
                      {aboutT.best.buttons.projects}
                    </p>
                  </>
                }
              />
            </div>
          </div>
          <div className={styles.coworkers_wrapper}>
            <p>
              <span>100</span>
              {aboutT.best.buttons.workers}
            </p>
            <p>
              <span>25</span>
              {aboutT.best.buttons.stuff}
            </p>
          </div>
        </section>
        <section className={styles.quote_wrapper}>
          <p className={styles.quote}>{`"${aboutT.ceo.quote}"`}</p>
          <p className={styles.name}>{aboutT.ceo.name}</p>
        </section>
      </div>
    </div>
  );
};
export default About;
