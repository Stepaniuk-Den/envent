import LogoList from "../LogoList";
import styles from "./hero.module.scss";

const Hero = () => {
  return (
    <section className={`${styles.hero} container`}>
      <LogoList />
    </section>
  );
};
export default Hero;
