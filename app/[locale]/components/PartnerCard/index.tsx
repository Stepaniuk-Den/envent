"use client";

import styles from "./partnerCard.module.scss";
import { IPartnersItem } from "@/helpers/interfaces";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Link } from "@/navigation";
import { ArrowRightLinkIcon } from "@/helpers/imagesImport";

interface IPartnerCardProps {
  partner: IPartnersItem;
  linkTitle: string;
  isMobile?: boolean;
  isActive: boolean;
  onClick: () => void;
  index: number;
}

const PartnerCard: React.FC<IPartnerCardProps> = ({
  partner,
  linkTitle,
  isMobile,
  isActive,
  onClick,
  index,
}) => {
  const [showCard, setShowCard] = useState(false);

  useEffect(() => {
    if (!isMobile) return;
    setShowCard(isActive);
  }, [isActive, isMobile]);

  return (
    <>
      <motion.li
        className={`${styles.item}  ${showCard ? styles.active : ""}`}
        onHoverStart={!isMobile ? () => setShowCard(true) : undefined}
        onHoverEnd={!isMobile ? () => setShowCard(false) : undefined}
        onClick={isMobile ? () => onClick() : undefined}
      >
        <AnimatePresence>
          {!showCard && (
            <motion.div
              key="overlay"
              className={styles.overlay}
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.7 }}
              exit={{ opacity: 0 }}
            ></motion.div>
          )}
        </AnimatePresence>
        <div className={styles.logo_wrapper}>
          {typeof partner.logo === "object" ? (
            <Image
              src={partner.logo}
              alt={partner.title}
              className={styles.png}
            />
          ) : (
            partner.logo && <partner.logo className={styles.svg} />
          )}
        </div>
        {isMobile && showCard && (
          <div
            className={styles.link_wrapper}
            // className={`${styles.link_wrapper}  ${
            //   showCard ? styles.active : ""
            // }`}
            // onClick={(event) => event.stopPropagation()}
          >
            <Link
              // className={styles.overlay_link}
              className={`${styles.overlay_link}  ${
                showCard ? styles.active : ""
              }`}
              href={partner.href}
              target="_blank"
              rel="noopener noreferrer"
              // onClick={(event) => event.stopPropagation()}
            >
              <span className={styles.text} onClick={() => console.log("span")}>
                {linkTitle}
              </span>
              <ArrowRightLinkIcon className={styles.icon} />
            </Link>
          </div>
        )}
        {!isMobile && showCard && (
          <AnimatePresence>
            <motion.div
              key={index}
              className={styles.link_wrapper}
              initial={{ x: 100 }}
              animate={{ x: 0 }}
              transition={{ type: "spring" }}
              exit={{ x: 0 }}
            >
              <Link
                className={styles.overlay_link}
                href={partner.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className={styles.text}>{linkTitle}</span>
                <ArrowRightLinkIcon className={styles.icon} />
              </Link>
            </motion.div>
          </AnimatePresence>
        )}
      </motion.li>
    </>
  );
};

export default PartnerCard;
