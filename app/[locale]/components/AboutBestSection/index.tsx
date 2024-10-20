import styles from "./aboutBestSection.module.scss";
import AboutBestList from "../AboutBestList";
import MainButton from "../Buttons/MainButton";
import ImagesCarousel from "../ImagesCarousel";
import ButtonVariableColor from "../Buttons/ButtonVariableColor";
import { IAriaLabelProps, IImageList } from "@/helpers/interfaces";
import { Link } from "@/navigation";

interface IListItem extends IImageList {
  title: string;
  description: string;
}

interface Best {
  title: string;
  list: Record<number, IListItem>;
  buttons: {
    best: string;
    years: string;
    projects: string;
    workers: string;
    stuff: string;
  };
}

const AboutBestSection: React.FC<{ t: Best,ariaLabel:IAriaLabelProps }> = ({ t,ariaLabel }) => {
  const { title, list, buttons } = t;
  return (
    <section>
      <div className={`${styles.best_container} container`}>
        <div className={styles.best_wrapper}>
          <div className={styles.list_wrapper}>
            <h3 className={styles.title}>{title}</h3>
            <AboutBestList list={list} />
            <MainButton className="about_us" color="blue">
              <Link href={"/contacts"}>{buttons.best}</Link>
            </MainButton>
          </div>
          <div className={styles.image_wrapper}>
            <ImagesCarousel t={list} page="about" ariaLabel={ariaLabel} />
            <ButtonVariableColor
              className="blue_dark"
              firstChildren={
                <>
                  <p className={styles.count}>32</p>
                  <p className={`${styles.text} ${styles.fix_width}`}>
                    {buttons.years}
                  </p>
                </>
              }
              secondChildren={
                <>
                  <p className={styles.count}>250</p>
                  <p className={styles.text}>{buttons.projects}</p>
                </>
              }
            />
            <div className={styles.coworkers_wrapper}>
              <p>
                <span>100</span>
                {buttons.workers}
              </p>
              <p>
                <span>25</span>
                {buttons.stuff}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default AboutBestSection;
