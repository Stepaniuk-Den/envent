import {
  IImageList,
  IServiceAboutProps,
  PropsServiceCard,
} from "@/helpers/interfaces";
import { Link } from "@/navigation";
import AnimatedTitle from "../AnimatedTitle";
import ButtonVariableColor from "../Buttons/ButtonVariableColor";
import MainButton from "../Buttons/MainButton";
import ImagesCarousel from "../ImagesCarousel";
import Line from "../Line";
import styles from "./serviceAboutProcess.module.scss";

interface Service {
  service: Record<number, IImageList>;
}

const ServiceAboutProcess: React.FC<{
  t: PropsServiceCard;
  about: IServiceAboutProps;
  service: Service;
}> = ({ t, about, service }) => {

  const { process } = t;
  const { title, phone, btnForm } = about;

  const processList = process ? Object.entries(process.list) : [];

  const filteredServices = Object.entries(service.service).reduce(
    (acc, [key, serviceData]) => {
      const imagesArray = Object.values(serviceData.images);
      const filteredImagesArray = imagesArray.slice(3);

      const filteredImagesObject = Object.fromEntries(
        filteredImagesArray.map((image, index) => [index, image])
      );

      acc[Number(key)] = {
        ...serviceData,
        images: filteredImagesObject,
      };
      return acc;
    },
    {} as Record<number, IImageList>
  );

  return (
    <section className={`${styles.about_process} container`}>
      <div className={styles.about_container}>
        <div className={styles.left_container}>
          <div className={styles.wrapper_title}>
            <AnimatedTitle title={title} />
            <Line className="yellow-left" />
          </div>
          <p className={styles.process_text} style={{ marginBottom: "20px" }}>
            {process?.text}
          </p>
          <ul className={styles.process_list}>
            {processList.map(([key, item], idx) => (
              <li key={idx}>
                <p className={styles.process_text}>{item}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.right_container}>
          <div className={styles.carousel}>
            <ImagesCarousel t={filteredServices} page="services" />
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
          ></ButtonVariableColor>
        </div>
      </div>
    </section>
  );
};

export default ServiceAboutProcess;
