"use client";

import { motion, useTransform, useScroll, color } from "framer-motion";
import Navigation from "../Navigation";
import styles from "./header.module.scss";
import Logo from "../../public/images/logo-envent-no-bg.png";
import Image from "next/image";
import { Clock, Email, Phone } from "@/helpers/imagesImport";
import Link from "next/link";
import dynamic from "next/dynamic";
import SocialList from "../SocialList";

const Header = () => {
  const { scrollY } = useScroll();
  const offsetY = [0, 200];
  const heightHeaderSizes = [200, 80];
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
        <span className={styles.logo}>
          <Image
            priority
            src={Logo}
            alt="Envent Logo"
            width={173}
            height={100}
          />
        </span>
        <ul className={styles.contacts}>
          <li className={styles.item}>
            <div className={styles.div}>
              <Phone className={styles.svg} />
            </div>
            <div>
              <Link href={"tel:+380445038377"} className={styles.link}>
                call us<span>+38 (044) 503 83 77</span>
              </Link>
            </div>
          </li>
          <li className={styles.item}>
            <Email className={styles.svg} />
            <Link href={"mailto:info@envent.kiev.ua"} className={styles.link}>
              e-mail<span>info@envent.kiev.ua</span>
            </Link>
          </li>
          <li className={styles.item}>
            <Clock className={styles.svg} />
            <div className={styles.link}>
              <p>working hours</p>
              <span>Mon. - Fri. 9AM - 18PM</span>
            </div>
          </li>
        </ul>
      </motion.div>
      <div className={styles.bottom}>
        <Navigation />
        <SocialList className="header" />
      </div>
    </motion.header>
  );
};
export default dynamic(() => Promise.resolve(Header), { ssr: false });
// export default Header;
