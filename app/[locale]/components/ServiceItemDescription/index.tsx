import { PropsServiceCard } from "@/helpers/interfaces";
import styles from "./serviceItemDescription.module.scss";
import AnimatedText from "@/helpers/animatedText";

const ServiceItemDescription = ({ t }: { t: PropsServiceCard }) => {
  const { p1, p2, p3, p4 } = t;

  return (
    <section className={`${styles.service_item} container`}>
      <div className={styles.service_container}>
        <AnimatedText>
        <p className={styles.text}>{p1}</p></AnimatedText>
        <AnimatedText>
        <p
          className={styles.text}
          dangerouslySetInnerHTML={{ __html: p4 || "" }}
        ></p></AnimatedText>
        {/* <p className={styles.text}>{p4}</p></AnimatedText> */}
        <AnimatedText>
        <p
          className={styles.text}
          dangerouslySetInnerHTML={{ __html: p2 || "" }}
        ></p>
        {/* <p className={styles.text}>{p2}</p> */}
        </AnimatedText>
        <AnimatedText>
        <p
          className={styles.text}
          dangerouslySetInnerHTML={{ __html: p3 || "" }}
        ></p>
        {/* <p className={styles.text}>{p3}</p> */}
        </AnimatedText>
      </div>
    </section>
  );
};

export default ServiceItemDescription;
