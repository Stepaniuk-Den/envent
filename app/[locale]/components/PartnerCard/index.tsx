"use client";

import styles from "./partnersCart.module.scss";
import { IPartnersItem } from "@/helpers/interfaces";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

interface IPartnerCardProps {
  partner: IPartnersItem;
}

const PartnerCard: React.FC<IPartnerCardProps> = ({ partner }) => {
  const [showOverlay, setShowOverlay] = useState(false);

  return (
    <motion.li
      className={styles.item}
      onHoverStart={() => setShowOverlay(true)}
      onHoverEnd={() => setShowOverlay(false)}
    >
      <AnimatePresence>
        {!showOverlay && (
          <motion.div
            className={styles.overlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.7 }}
            exit={{ opacity: 0 }}
          ></motion.div>
        )}
      </AnimatePresence>
      <Link
        className={styles.link}
        href={partner.href}
        target="_blank"
        rel="noopener noreferrer"
      >
        {typeof partner.logo === "object" ? (
          <Image
            src={partner.logo}
            alt={partner.title}
            className={styles.png}
          />
        ) : (
          partner.logo && <partner.logo className={styles.svg} />
        )}
      </Link>
    </motion.li>
  );
};

export default PartnerCard;
