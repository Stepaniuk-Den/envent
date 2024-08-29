import HeroTitle from "../HeroTitle";
import styles from "./hero.module.scss";
import { IHeroProps } from "@/helpers/interfaces";

const Hero = ({ className, imageSrc, children, t }: IHeroProps) =>
   {

    const backgroundImage = typeof imageSrc === 'string' ? imageSrc : imageSrc.src;

  return (
    <section
      className={`${styles.hero} ${styles[className]}`}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className={`${styles.wrapper} container`}>
        <HeroTitle t={t} />
        {children}
      </div>
    </section>
  );
};
export default Hero;
