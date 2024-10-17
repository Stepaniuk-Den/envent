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
import BurgerMenu from "../BurgerMenu";
import { useMediaQuery } from "react-responsive";
import { useAfterLoad } from "@/helpers/useAfterLoad";
import HeaderLinks from "../HeaderLinks";
import { SideBarT } from "@/messages/types/SideBarT";
import { IAriaLabelProps } from "@/helpers/interfaces";
// import dynamic from "next/dynamic";

const Header: React.FC<{
  t: HeaderT;
  t2: SideBarT;
  ariaLabel: IAriaLabelProps;
}> = ({ t, t2, ariaLabel }) => {
  const { scrollY } = useScroll();
  const offsetY = [0, 192];
  const heightHeaderSizes = [192, 72];
  const heightTopSizes = [120, 0];

  const heightHeader = useTransform(scrollY, offsetY, heightHeaderSizes);
  const opacityTop = useTransform(scrollY, [0, 30], [1, 0]);
  const heightTop = useTransform(scrollY, [0, 120], heightTopSizes);

  const isTabletOrMobile = useMediaQuery({ maxWidth: 1023.98 });
  const isPageLoaded = useAfterLoad();

  return (
    <>
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
          <HeaderLinks t={t.topList} />
        </motion.div>
        <div className={styles.bottom}>
          <Navigation translations={t.navlink} />
          <SocialList className="header" ariaLabel={ariaLabel} />
        </div>
      </motion.header>

      {isTabletOrMobile && isPageLoaded && (
        <BurgerMenu navlink={t.navlink} t={t2} ariaLabel={ariaLabel} />
      )}
    </>
  );
};
// export default dynamic(() => Promise.resolve(Header), { ssr: false });
export default Header;
