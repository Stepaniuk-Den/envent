"use client";

import { Link } from "@/navigation";
import MainButton from "../Buttons/MainButton";
import Line from "../Line";
import styles from "./contactUsForm.module.scss";
import { FormEvent, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FooterT } from "@/messages/types/FooterT";

interface Props {
  t: FooterT;
  className: "footer" | "touch";
}

const ContactUsForm: React.FC<Props> = ({ className, t }) => {
  // const ref = useRef(null);
  // const isInView = useInView(ref, { once: false, amount: 0.3 });

  const formFooterVariants = {
    hidden: {
      x: "-100%",
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

  const formTouchVariants = {
    hidden: {
      x: "-100%",
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

  const formVariants =
    className === "footer" ? formFooterVariants : formTouchVariants;

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;

    alert(`Name: ${name}, Email: ${email}, Message: ${message}`);
  };
  return (
    <motion.div
      className={`${styles.form_container} ${styles[className]}`}
      initial="hidden"
      animate="visible"
      variants={formVariants}
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
          <Link href={"#"}>{t.button}</Link>
        </MainButton>
      </form>
    </motion.div>
  );
};

export default ContactUsForm;
