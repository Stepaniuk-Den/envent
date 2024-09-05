"use client";

import { PropsServiceCard } from "@/helpers/interfaces";
import { Link, usePathname } from "@/navigation";
import { parseHTMLString } from "@/helpers/parseHTMLString";
import ArrowLeft from "@/public/icons/arrow-left.svg";
import styles from "./serviceItemDescription.module.scss";
import AnimatedText from "@/helpers/animatedText";
import MainButton from "../Buttons/MainButton";

const ServiceItemDescription = ({ t }: { t: PropsServiceCard }) => {
  const { p1, p2 ="", p3, p4, list } = t;

  const pathname = usePathname();

  const equipmentList = list ? Object.entries(list) : [];
  const debuggingList = list ? Object.entries(list) : [];
  const serviceList = list ? Object.entries(list) : [];


  const isSpecialPathEquipment = pathname === "/services/supply-of-equipment";

  const isSpecialPathStartUp =
    pathname === "/services/start-up-and-debugging-works";

  const isSpecialPathService = pathname === "/services/service-maintenance";

  return (
    <section className={`${styles.service_item} container`}>
      <div className={styles.service_container}>
        <AnimatedText>
          <p className={styles.text}>{parseHTMLString(p1)}</p>
        </AnimatedText>
        <AnimatedText>
          {isSpecialPathStartUp ? (
            <>
              <p className={`${styles.text} ${styles.bold_text}`}>
                {parseHTMLString(p2)}
              </p>
              <ul className={styles.list}>
                {debuggingList.map(([key, value]) => (
                  <li key={key} className={styles.text}>
                    {parseHTMLString(value)}
                  </li>
                ))}
              </ul>
            </>
          ) : isSpecialPathEquipment ? (
            <ul className={styles.list_companies}>
              {equipmentList.map(([key, value]) => (
                <li key={key} className={styles.text}>
                  {parseHTMLString(value)}
                </li>
              ))}
            </ul>
          ) : isSpecialPathService ? (
            <>
              <p className={`${styles.text} ${styles.bold_text}`}>
                {parseHTMLString(p2)}
              </p>
              <ul className={styles.list}>
                {serviceList.map(([key, value]) => (
                  <li key={key} className={styles.text}>
                    {parseHTMLString(value)}
                  </li>
                ))}
              </ul>
            </>
          ) : (
            <p className={styles.text}>{parseHTMLString(p2)}</p>
          )}
        </AnimatedText>
        <AnimatedText>
          <p className={styles.text}>{parseHTMLString(p3)}</p>
        </AnimatedText>
        <AnimatedText>
          <p className={styles.text}>{parseHTMLString(p4)}</p>
        </AnimatedText>
        <MainButton className="filled">
          <ArrowLeft />
          <Link href="/services">Повернутись назад</Link>
        </MainButton>
      </div>
    </section>
  );
};

export default ServiceItemDescription;
