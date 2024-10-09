"use client";

import { IServiceAboutProps, PropsServiceCard } from "@/helpers/interfaces";
import { Link, usePathname } from "@/navigation";
import { parseHTMLString } from "@/helpers/parseHTMLString";
import ArrowLeft from "@/public/icons/arrow-left.svg";
import styles from "./serviceItemDescription.module.scss";
import MainButton from "../Buttons/MainButton";
import Line from "../Line";
import Observer from "@/helpers/observer";
import AnimatedTitle from "../AnimatedTitle";

const ServiceItemDescription: React.FC<{
  t: PropsServiceCard;
  about: IServiceAboutProps;
}> = ({ t, about }) => {
  const { p1, p2 = "", p3, p4, list } = t;

  const pathname = usePathname();

  const equipmentList = list ? Object.entries(list) : [];
  const debuggingList = list ? Object.entries(list) : [];
  const serviceList = list ? Object.entries(list) : [];

  const isSpecialPathEquipment = pathname === "/services/supply-of-equipment";

  const isSpecialPathStartUp =
    pathname === "/services/start-up-and-debugging-works";

  const isSpecialPathService = pathname === "/services/service-maintenance";

  return (
    <section>
      <div className={`${styles.service_container} container`}>
        {about.description && <AnimatedTitle title={about.description} className={styles.title} />}
        <Line className="yellow-center" />
        <Observer y={50} duration="300ms" threshold={0.5}>
          <p className={styles.text}>{parseHTMLString(p1)}</p>
        </Observer>
        {isSpecialPathStartUp ? (
          <>
            <Observer y={50} duration="300ms" threshold={0.5}>
              <p className={`${styles.text} ${styles.bold_text}`}>
                {parseHTMLString(p2)}
              </p>
            </Observer>
            <ul className={styles.list}>
              {debuggingList.map(([key, value]) => (
                <Observer key={key} y={50} duration="300ms" threshold={0.5}>
                  <li key={key} className={styles.text}>{parseHTMLString(value)}</li>
                </Observer>
              ))}
            </ul>
          </>
        ) : isSpecialPathEquipment ? (
          <ul className={styles.list_companies}>
            {equipmentList.map(([key, value]) => (
               <Observer key={key} y={50} duration="300ms" threshold={0.5}>
              <li key={key} className={styles.text}>
                {parseHTMLString(value)}
              </li></Observer>
            ))}
          </ul>
        ) : isSpecialPathService ? (
          <>
           <Observer y={50} duration="300ms" threshold={0.5}>
            <p className={`${styles.text} ${styles.bold_text}`}>
              {parseHTMLString(p2)}
            </p></Observer>
            <ul className={styles.list}>
              {serviceList.map(([key, value]) => (
                 <Observer key={key} y={50} duration="300ms" threshold={0.5}>
                <li key={key} className={styles.text}>
                  {parseHTMLString(value)}
                </li></Observer>
              ))}
            </ul>
          </>
        ) : (
          <Observer  y={50} duration="300ms" threshold={0.5}>
          <p className={styles.text}>{parseHTMLString(p2)}</p></Observer>
        )}
        <Observer y={50} duration="300ms" threshold={0.5}>
          <p className={styles.text}>{parseHTMLString(p3)}</p>
        </Observer>

        <Observer y={50} duration="300ms" threshold={0.5}>
          <p className={styles.text}>{parseHTMLString(p4)}</p>
        </Observer>
        <MainButton type="button" color="filled" className="services">
          <ArrowLeft />
          <Link href="/services">{about.btnBack}</Link>
        </MainButton>
      </div>
    </section>
  );
};

export default ServiceItemDescription;
