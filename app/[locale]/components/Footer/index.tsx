"use client";
import Link from "next/link";
import Line from "../Line";
import SocialList from "../SocialList";
import styles from "./footer.module.scss";
import MainButton from "../Buttons/MainButton";
import { FormEvent, useRef } from "react";
import { contactsItems } from "@/data/ContactsItem";
import { FooterT } from "@/messages/types/FooterT";
import { HeroRightSideT } from "@/messages/types/HeroRightSideT";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

const Footer: React.FC<{ t: FooterT; t2: HeroRightSideT }> = ({ t, t2 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  // const { scrollYProgress } = useScroll({
  //   target: ref,
  //   offset: ["start end", "end end"],
  // });

  // const formX = useTransform(scrollYProgress, [0.2, 0.8], [-500, 0]);
  // const contactsX = useTransform(scrollYProgress, [0.2, 0.8], [500, 0]);
  // const opacity = useTransform(scrollYProgress, [0.2, 0.8], [0, 1]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;

    alert(`Name: ${name}, Email: ${email}, Message: ${message}`);
  };
  return (
    <footer
      ref={ref}
      className={styles.footer}
      style={{ backgroundImage: `url("/images/footer-bg.jpg")` }}
    >
      <div className={`${styles.wrapper} container`}>
        <motion.div
          className={styles.form_container}
          // style={{ x: formX, opacity }}
          initial={{ x: "-100%", opacity: 0 }}
          animate={
            isInView && { x: 0, opacity: 1, transition: { duration: 1 } }
          }
        >
          <h2 className={styles.title}>{t.formTitle}</h2>
          <Line className="yellow-left" />
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.input_container}>
              <input
                type="text"
                name="name"
                id="name"
                placeholder={t.placeholderName}
              />
              <input
                type="email"
                name="email"
                id="email"
                placeholder={t.placeholderEmail}
              />
            </div>
            <textarea
              name="message"
              id="message"
              placeholder={t.placeholderMessage}
            />
            <MainButton type="submit" className="contact_us" color="white">
              {t.button}
            </MainButton>
          </form>
        </motion.div>
        <motion.div
          className={styles.contacts_container}
          // style={{ x: contactsX, opacity }}
          initial={{ x: "100%", opacity: 0 }}
          animate={
            isInView && { x: 0, opacity: 1, transition: { duration: 1 } }
          }
          transition={{ type: "spring" }}
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
                    no-referrer="true"
                    no-opener="true"
                    className={styles.link}
                  >
                    <contact.svg className={styles.svg} />
                    {contact.id === 1 ? (
                      <span>{t2.contact.list.office.descriptions}</span>
                    ) : (
                      <span>{contact.descriptions}</span>
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
        </motion.div>
      </div>
      <div className={styles.copyright}>
        <Link href={"#"}>Created by IT Company</Link>
      </div>
    </footer>
  );
};
export default Footer;
