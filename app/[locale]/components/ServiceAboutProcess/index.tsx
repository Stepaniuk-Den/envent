"use client";
import {
  IAriaLabelProps,
  IImageList,
  IServiceAboutProps,
  PropsServiceCard,
} from "@/helpers/interfaces";
import { Link } from "@/navigation";
import { useAfterLoad } from "@/helpers/useAfterLoad";
import { useMediaQuery } from "react-responsive";
import AnimatedTitle from "../AnimatedTitle";
import ButtonVariableColor from "../Buttons/ButtonVariableColor";
import MainButton from "../Buttons/MainButton";
import ImagesCarousel from "../ImagesCarousel";
import Line from "../Line";
import styles from "./serviceAboutProcess.module.scss";
import Observer from "@/helpers/observer";

interface Service {
  service: Record<number, IImageList>;
}

const ServiceAboutProcess: React.FC<{
  t: PropsServiceCard;
  about: IServiceAboutProps;
  service: Service;
  id:number;
  ariaLabel:IAriaLabelProps;
}> = ({ t, about, service,id,ariaLabel }) => {

  const { process } = t;
  const { title, phone, btnForm } = about;
  const isTablet = useMediaQuery({ maxWidth: 1023.98 });
  const isPageLoaded = useAfterLoad();

  const processList = process ? Object.entries(process.list) : [];

  return (
    <section className={`${styles.about_process} container`}>
  {isTablet && isPageLoaded && (
    <div className={styles.tablet_wrapper}>
      <div className={styles.about_container}>
      <div className={styles.left_container}>
        <div className={styles.wrapper_title}>
          <AnimatedTitle title={title} />
          <Line className="yellow-left" />
        </div>
        <Observer y={50} duration="300ms" threshold={0.5}> 
        <p className={styles.process_text} style={{ marginBottom: "20px" }}>
          {process?.text}
        </p> </Observer>
        <ul className={styles.process_list}>
          {processList.map(([key, item], idx) => (
             <Observer y={50} key={idx} duration="300ms" threshold={0.5} type={true}>
              <p className={styles.process_text}>{item}</p>
            </Observer>
          ))}
        </ul>
      </div>

      <div className={styles.right_container}>
        <div className={styles.carousel}>
          <ImagesCarousel t={service.service} page="services" id={id} ariaLabel={ariaLabel} />
        </div>
      </div>
      </div>
     <ButtonVariableColor
          className="blue_white"
          fixedLeftButton={true} 
          firstChildren={
            <a
              href="tel:+380445038379"
              rel="noreferrer noopener nofollow"
            >
              {phone}
              <span>+38 (044) 503 83 79</span>
            </a>
          }
          secondChildren={
            <MainButton className="btnPaddingsLR" color="black">
              <Link href={"#"}>{btnForm}</Link>
            </MainButton>
          }
        />

    </div>
  )}

  {!isTablet && isPageLoaded &&  (
    <div className={styles.about_container}>
      <div className={styles.left_container}>
        <div className={styles.wrapper_title}>
          <AnimatedTitle title={title} />
          <Line className="yellow-left" />
        </div>
        <Observer y={50} duration="300ms" threshold={0.5}> 
        <p className={styles.process_text} style={{ marginBottom: "20px" }}>
          {process?.text}
        </p></Observer>
        <ul className={styles.process_list}>
          {processList.map(([key, item], idx) => (
            <Observer y={50} key={idx} duration="300ms" threshold={0.5} type={true}>
              <p className={styles.process_text}>{item}</p>
              </Observer>
          ))}
        </ul>
      </div>

      <div className={styles.right_container}>
        <div className={styles.carousel}>
          <ImagesCarousel t={service.service} page="services" id={id} ariaLabel={ariaLabel} />
        </div>
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
            <MainButton className="btnPaddingsLR" color="black">
              <Link href={"#"}>{btnForm}</Link>
            </MainButton>
          }
        />
      </div>
    </div>
  )}
</section>

  );
};

export default ServiceAboutProcess;
