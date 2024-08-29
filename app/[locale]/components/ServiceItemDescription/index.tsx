import styles from "./serviceItemDescription.module.scss";
import { PropsServiceCard } from "@/helpers/interfaces";


const ServiceItemDescription = ({ t }: { t: PropsServiceCard }) => {
  const {
    p1,
    p2,
    p3,
    p4,
  } = t;

  return (
    <section className={`${styles.service_item} container`}>
        <div className={styles.service_container}>
            <div className={styles.left_wrapper}><p className={styles.text}>{p1}</p><p className={styles.text}>{p2}</p></div>
            <div className={styles.right_wrapper}><p className={styles.text}>{p3}</p><p className={styles.text}>{p4}</p></div>
        </div>
    </section>
  );
};

export default ServiceItemDescription;
