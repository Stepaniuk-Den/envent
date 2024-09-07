"use client";

import { Link } from "@/navigation";
import MainButton from "../Buttons/MainButton";
import Line from "../Line";
import styles from "./contactUsForm.module.scss";
import { FormEvent } from "react";
import { motion } from "framer-motion";
import { FooterT } from "@/messages/types/FooterT";
import { useForm } from "react-hook-form";
import { sendEmail } from "@/utils/send-email";

interface Props {
  t: FooterT;
  className: "footer" | "touch";
}

export type FormData = {
  name: string;
  email: string;
  message: string;
};

const ContactUsForm: React.FC<Props> = ({ className, t }) => {
  const { register, handleSubmit } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    sendEmail(data);
  };

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
      x: "0%",
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

  // const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();

  //   const formData = new FormData(e.currentTarget);

  //   const name = formData.get("name") as string;
  //   const email = formData.get("email") as string;
  //   const message = formData.get("message") as string;

  //   alert(`Name: ${name}, Email: ${email}, Message: ${message}`);
  // };

  return (
    <motion.div
      className={`${styles.form_container} ${styles[className]}`}
      initial="hidden"
      animate="visible"
      variants={formVariants}
    >
      <h2 className={styles.title}>{t.formTitle}</h2>
      <Line className="yellow-left" />
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.input_container}>
          <input
            type="text"
            // name="name"
            id="name"
            placeholder={t.placeholderName}
            {...register("name", { required: true })}
          />
          <input
            type="email"
            // name="email"
            id="email"
            placeholder={t.placeholderEmail}
            {...register("email", { required: true })}
          />
        </div>
        <textarea
          // name="message"
          id="message"
          placeholder={t.placeholderMessage}
          {...register("message", { required: true })}
        />
        <MainButton
          type="submit"
          className={className === "footer" ? "contact_us" : "contacts"}
          color={className === "footer" ? "white" : "black"}
        >
          {/* <Link href={"#"}> */}
          {t.button}
          {/* </Link> */}
        </MainButton>
      </form>
    </motion.div>
  );
};

export default ContactUsForm;
