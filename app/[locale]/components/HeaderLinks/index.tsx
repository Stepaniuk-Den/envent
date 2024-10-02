import { Link } from "@/navigation";
import styles from "./headerLinks.module.scss";
import { Clock, Email, Phone } from "@/helpers/imagesImport";
import React from "react";

interface IHeaderLinks {
  t: { call_us: string; mail: string; working_hours: string; hours: string };
}

const HeaderLinks: React.FC<IHeaderLinks> = ({ t }) => {
  return (
    <ul className={styles.contacts}>
      <li className={styles.item}>
        <Link href={"tel:+380445038377"} className={styles.link}>
          <Phone className={styles.svg} />
          {t.call_us}
          <span>+38 (044) 503 83 77</span>
        </Link>
      </li>
      <li className={styles.item}>
        <Link href={"mailto:info@envent.kiev.ua"} className={styles.link}>
          <Email className={styles.svg} />
          {t.mail}
          <span>info@envent.kiev.ua</span>
        </Link>
      </li>
      <li className={styles.item}>
        <div className={styles.link}>
          <Clock className={styles.svg} />
          <p>{t.working_hours}</p>
          <span>{t.hours}</span>
        </div>
      </li>
    </ul>
  );
};

export default HeaderLinks;
