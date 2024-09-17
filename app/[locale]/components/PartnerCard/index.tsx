"use client";

import styles from "./partnersCart.module.scss";
import { IPartnersItem } from "@/helpers/interfaces";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Link } from "@/navigation";
import { ArrowRightLinkIcon } from "@/helpers/imagesImport";
import { useMediaQuery } from "react-responsive";

interface IPartnerCardProps {
  partner: IPartnersItem;
  linkTitle: string;
}

const PartnerCard: React.FC<IPartnerCardProps> = ({ partner, linkTitle }) => {
  const [showCard, setShowCard] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const isTabletOrMobile = useMediaQuery({ maxWidth: 1023.98 });

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <>
      {isClient && !isTabletOrMobile && (
        <motion.li
          className={styles.item}
          onHoverStart={() => setShowCard(true)}
          onHoverEnd={() => setShowCard(false)}
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
          <AnimatePresence>
            {showCard && (
              <motion.div
                key="linkWrapper"
                className={styles.link_wrapper}
                initial={{ x: 100 }}
                animate={{ x: 0 }}
                transition={{ type: "spring" }}
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
            )}
          </AnimatePresence>
        </motion.li>
      )}
    </>
  );
};

export default PartnerCard;
