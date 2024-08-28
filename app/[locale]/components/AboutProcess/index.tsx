import AnimatedTitle from "../AnimatedTitle";
import ButtonVariableColor from "../Buttons/ButtonVariableColor";
import MainButton from "../Buttons/MainButton";
import Line from "../Line";
import styles from "./aboutProcess.module.scss";
import { IServiceAboutProps, PropsServiceCard } from "@/helpers/interfaces";


const AboutProcess = ({ t,about }: { t: PropsServiceCard,about: IServiceAboutProps }) => {
  const {
    p1,
    p2,
    p3,
    p4,
  } = t;

  const {title,phone,btnForm} = about

  return (
    <section className={`${styles.about_process} container`}>
       <div className={styles.about_container}>
        <div className={styles.left_container}>
            <AnimatedTitle title={title} />
            <Line className="yellow-left" />
            <p></p>
            <p></p>
            <p></p>
            <p></p>
        </div>
        <div>
        <ButtonVariableColor
            className="blue_white"
            firstChildren={
              <a
                className={styles.phoneLink}
                href="tel:+380445038379"
                rel="noreferrer noopener nofollow"
              >
                {phone}
                <span className={styles.phoneNumber}>+38 (044) 503 83 79</span>
              </a>
            }
            secondChildren={
              <MainButton className="btnPaddingsLR" color="black" type="button">
                {btnForm}
              </MainButton>
            }
          ></ButtonVariableColor>
        </div>
       </div>
    </section>
  );
};

export default AboutProcess;
