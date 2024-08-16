import MainButton from "../Buttons";
import styles from "./hero.module.scss";
import { IHeroProps } from "@/helpers/interfaces";

const Hero = ({ className, imageSrc, children }: IHeroProps) => {
  return (
    <section
      className={`${styles.hero} ${styles[className]}`}
      style={{ backgroundImage: `url(${imageSrc.src})` }}
    >
      <div className={`${styles.wrapper} container`}>
        <div className={styles.text_сontainer}>
          <h1>Envent</h1>
          <p className={styles.descriptions}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis
            egestas pellentesque libero dolor in diam consequat ut. Mi nibh amet
            viverra id aliquet neque odio.
          </p>
          <MainButton className="filled">view our work</MainButton>
        </div>
        {children}
      </div>
    </section>
  );
};
export default Hero;
