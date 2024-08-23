import HeroTitle from "../HeroTitle";
import styles from "./hero.module.scss";
import { IHeroProps } from "@/helpers/interfaces";

const Hero = ({ className, imageSrc, children, t }: IHeroProps) => {
  return (
    <section
      className={`${styles.hero} ${styles[className]}`}
      style={{ backgroundImage: `url(${imageSrc.src})` }}
    >
      <div className={`${styles.wrapper} container`}>
        <HeroTitle t={t} />
        {children}
      </div>
    </section>
  );
};
export default Hero;
