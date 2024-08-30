import { PropsServiceCard } from "@/helpers/interfaces";
import styles from "./serviceItemDescription.module.scss";

const ServiceItemDescription = ({ t }: { t: PropsServiceCard }) => {
  const { p1, p2, p3, p4 } = t;

  return (
    <section className={`${styles.service_item} container`}>
      <div className={styles.service_container}>
        <p className={styles.text}>{p1}</p>
        <p
          className={styles.text}
          dangerouslySetInnerHTML={{ __html: p4 || "" }}
        ></p>
        <p
          className={styles.text}
          dangerouslySetInnerHTML={{ __html: p2 || "" }}
        ></p>
        <p
          className={styles.text}
          dangerouslySetInnerHTML={{ __html: p3 || "" }}
        ></p>
      </div>
    </section>
  );
};

export default ServiceItemDescription;
