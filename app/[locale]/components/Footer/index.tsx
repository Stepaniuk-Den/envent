"use client";

import SocialList from "../SocialList";
import styles from "./footer.module.scss";
import { useEffect, useRef } from "react";
import { contactsItems } from "@/data/ContactsItem";
import { HeroRightSideT } from "@/messages/types/HeroRightSideT";
import { motion, useInView } from "framer-motion";
import { Link, usePathname } from "@/navigation";
import ContactUsForm from "../ContactUsForm";
import { parseHTMLString } from "@/helpers/parseHTMLString";
import { ContactUsT } from "@/messages/types/ContactUsT";
import Observer from "@/helpers/observer";

const Footer: React.FC<{ t: ContactUsT; t2: HeroRightSideT }> = ({ t, t2 }) => {
  // const footerRef = useRef<HTMLDivElement | null>(null);

  // const isInView = useInView(ref, { once: false, amount: 0.1 });

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

  // useEffect(() => {
  //   if (!footerRef.current) return;
  //   const observer = new IntersectionObserver((entries) => {
  //     if (entries[0].isIntersecting && footerRef.current !== null) {
  //       footerRef.current.classList.add("scrolled");
  //       observer.unobserve(footerRef.current);
  //     }
  //   });
  //   observer.observe(footerRef.current);
  // }, []);

  return (
    <>
      <footer
        // ref={footerRef}
        className={`${styles.footer} ${currentPath! ? "" : "hidden"}`}
        style={{ backgroundImage: `url("/images/footer-bg.webp")` }}
      >
        <Observer y={50} duration="300ms" threshold={0.5}>
          <div
            // ref={footerRef}
            className={`${styles.wrapper} container`}
          >
            <ContactUsForm t={t} className="footer" />
            {/* {isInView && <ContactUsForm t={t} className="footer" />} */}

            <div className={styles.contacts_container}>
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
            </div>
            {/* {isInView && (
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
          )} */}
          </div>
        </Observer>
        <div className={styles.copyright}>
          <Link href={"#"}>Created by IT Company</Link>
        </div>
      </footer>
    </>
  );
};
export default Footer;
