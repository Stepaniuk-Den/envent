"use client";

import { motion, useTransform, useScroll } from "framer-motion";
import styles from "./header.module.scss";
import Logo from "@/public/images/logo-envent-no-bg.png";
import Image from "next/image";
import { Link } from "@/navigation";
import { Clock, Email, Phone } from "@/helpers/imagesImport";
import Navigation from "../Navigation";
import SocialList from "../SocialList";
import { HeaderT } from "@/messages/types/HeaderT";
// import dynamic from "next/dynamic";

const Header: React.FC<{ t: HeaderT }> = ({ t }) => {
  const { scrollY } = useScroll();
  const offsetY = [0, 192];
  const heightHeaderSizes = [192, 72];
  const heightTopSizes = [120, 0];

  const heightHeader = useTransform(scrollY, offsetY, heightHeaderSizes);
  const opacityTop = useTransform(scrollY, [0, 30], [1, 0]);
  const heightTop = useTransform(scrollY, [0, 120], heightTopSizes);

  return (
    <motion.header
      style={{
        height: heightHeader,
      }}
      className={`${styles.header} container`}
    >
      <motion.div
        style={{
          opacity: opacityTop,
          height: heightTop,
          padding: opacityTop,
        }}
        className={styles.top}
      >
        <Link href={"/"} className={styles.logo}>
          <Image
            priority
            src={Logo}
            alt="Envent Logo"
            width={173}
            height={100}
          />
        </Link>
        <ul className={styles.contacts}>
          <li className={styles.item}>
            <Link href={"tel:+380445038377"} className={styles.link}>
              <Phone className={styles.svg} />
              {t.topList.call_us}
              <span>+38 (044) 503 83 77</span>
            </Link>
          </li>
          <li className={styles.item}>
            <Link href={"mailto:info@envent.kiev.ua"} className={styles.link}>
              <Email className={styles.svg} />
              {t.topList.mail}
              <span>info@envent.kiev.ua</span>
            </Link>
          </li>
          <li className={styles.item}>
            <div className={styles.link}>
              <Clock className={styles.svg} />
              <p>{t.topList.working_hours}</p>
              <span>{t.topList.hours}</span>
            </div>
          </li>
        </ul>
      </motion.div>
      <div className={styles.bottom}>
        <Navigation translations={t.navlink} />
        <SocialList className="header" />
      </div>
    </motion.header>
  );
};
// export default dynamic(() => Promise.resolve(Header), { ssr: false });
export default Header;
