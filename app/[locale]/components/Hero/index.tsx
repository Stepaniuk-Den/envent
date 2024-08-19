import MainButton from "../Buttons/MainButton";
import styles from "./hero.module.scss";
import { IHeroProps } from "@/helpers/interfaces";

const Hero = ({ className, imageSrc, children, t }: IHeroProps) => {
  return (
    <section
      className={`${styles.hero} ${styles[className]}`}
      style={{ backgroundImage: `url(${imageSrc.src})` }}
    >
      <div className={`${styles.wrapper} container`}>
        <div className={styles.text_сontainer}>
          <h1>{t.title}</h1>
          <p className={styles.descriptions}>{t.description}</p>
          <MainButton className="filled">{t.button}</MainButton>
        </div>
        {children}
      </div>
    </section>
  );
};
export default Hero;
