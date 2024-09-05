"use client";

import SocialList from "../SocialList";
import styles from "./footer.module.scss";
import { useRef } from "react";
import { contactsItems } from "@/data/ContactsItem";
import { FooterT } from "@/messages/types/FooterT";
import { HeroRightSideT } from "@/messages/types/HeroRightSideT";
import { motion, useInView } from "framer-motion";
import { Link, usePathname } from "@/navigation";
import ContactUsForm from "../ContactUsForm";
import { parseHTMLString } from "@/helpers/parseHTMLString";

const Footer: React.FC<{ t: FooterT; t2: HeroRightSideT }> = ({ t, t2 }) => {
  const ref = useRef(null);

  const isInView = useInView(ref, { once: false, amount: 0.1 });

  const pathName = usePathname();

  const contactsVariants = {
    hidden: {
      x: "100%",
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
  };

  const currentPath = pathName !== "/contacts";

  return (
    <>
      <footer
        ref={ref}
        className={`${styles.footer} ${currentPath! ? "" : "hidden"}`}
        style={{ backgroundImage: `url("/images/footer-bg.webp")` }}
      >
        <div className={`${styles.wrapper} container`}>
          {isInView && <ContactUsForm t={t} className="footer" />}
          {isInView && (
            <motion.div
              className={styles.contacts_container}
              initial="hidden"
              animate="visible"
              variants={contactsVariants}
            >
              <div className={styles.social_container}>
                <SocialList className="footer" />
              </div>
              <ul className={styles.list}>
                {contactsItems.map((contact) => {
                  return (
                    <li className={styles.item} key={contact.id}>
                      <Link
                        href={contact.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.link}
                      >
                        <contact.svg className={styles.svg} />
                        {contact.id === 1 ? (
                          <span>
                            {parseHTMLString(
                              t2.contact.list.office.descriptions
                            )}
                          </span>
                        ) : (
                          <span>{contact.descriptions}</span>
                        )}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </motion.div>
          )}
        </div>
        <div className={styles.copyright}>
          <Link href={"#"}>Created by IT Company</Link>
        </div>
      </footer>
    </>
  );
};
export default Footer;
