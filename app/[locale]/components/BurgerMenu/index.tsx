"use client";

import { useState } from "react";
import styles from "./burgerMenu.module.scss";
import Modal from "../Modal";
import Navigation from "../Navigation";
import SocialList from "../SocialList";
import { BurgerMenuBtn, BurgerCloseBtn } from "@/helpers/imagesImport";
import { HeaderT } from "@/messages/types/HeaderT";
import { useModal } from "@/helpers/useModal";
import { Link } from "@/navigation";
import Image from "next/image";
import Logo from "@/public/images/logo-envent-no-bg.png";
import { useAfterLoad } from "@/helpers/useAfterLoad";
import SideBar from "../SideBar";
import SideBarLangSwitcher from "../SideBarLangSwitcher";
import SideBarThemeSwitcher from "../SideBarThemeSwitcher";
import SideBarCatalogReview from "../SideBarCatalogReview";
import { SideBarT } from "@/messages/types/SideBarT";
import { IAriaLabelProps } from "@/helpers/interfaces";

const BurgerMenu: React.FC<{
  navlink: HeaderT["navlink"];
  t: SideBarT;
  ariaLabel: IAriaLabelProps;
}> = ({ navlink, t, ariaLabel }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isPageLoaded = useAfterLoad();

  useModal(isMenuOpen, setIsMenuOpen);

  return (
    <div className={styles.wrapper}>
      <div className={`${styles.burger} container`}>
        {!isMenuOpen && isPageLoaded ? (
          <>
            <Link href={"/"} className={styles.logo}>
              <Image
                priority
                src={Logo}
                alt="Envent Logo"
                width={173}
                height={100}
              />
            </Link>
            <button
              onClick={() => setIsMenuOpen(true)}
              className={styles.burger_btn}
              aria-label={ariaLabel.ariaLabel.btnBurger}
            >
              <BurgerMenuBtn className={styles.svg} />
            </button>
          </>
        ) : (
          <Modal className="burger_menu">
            <button
              onClick={() => setIsMenuOpen(false)}
              className={`${styles.burger_btn} ${styles.close}`}
              aria-label={ariaLabel.ariaLabel.btnClose}
            >
              <BurgerCloseBtn className={styles.svg} />
            </button>
            <div className={styles.side_bar}>
              <SideBarLangSwitcher ariaLabel={ariaLabel} />
              <SideBarThemeSwitcher ariaLabel={ariaLabel} />
              <SideBarCatalogReview t={t} ariaLabel={ariaLabel} />
            </div>
            <Navigation
              translations={navlink}
              onClick={() => setIsMenuOpen(false)}
            />
            <SocialList
              className="header"
              onClick={() => setIsMenuOpen(false)}
              ariaLabel={ariaLabel}
            />
          </Modal>
        )}
      </div>
    </div>
  );
};

export default BurgerMenu;
