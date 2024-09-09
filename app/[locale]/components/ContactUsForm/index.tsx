"use client";

import styles from "./contactUsForm.module.scss";
import MainButton from "../Buttons/MainButton";
import Line from "../Line";
import Modal from "../Modal";

import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { useState } from "react";

import { sendEmail } from "@/utils/send-email";
import { useModal } from "@/helpers/useModal";
import { ContactUsT } from "@/messages/types/ContactUsT";
import { parseHTMLString } from "@/helpers/parseHTMLString";

interface Props {
  t: ContactUsT;
  className: "footer" | "touch";
}

export type FormData = {
  name: string;
  email: string;
  message: string;
};

const ContactUsForm: React.FC<Props> = ({ className, t }) => {
  const { register, handleSubmit, reset } = useForm<FormData>();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isError, setIsError] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  useModal(isModalOpen, setIsModalOpen);

  const onSubmit = async (data: FormData) => {
    try {
      const response = await sendEmail(data);
      if (response.message === "Email sent") {
        setModalMessage(t.msg_success);
      } else {
        setModalMessage("Unexpected response from server");
      }
      setIsModalOpen(true);
      reset();
    } catch (err: any) {
      setModalMessage(`${t.msg_error} ${(<br />)} ${err.message}`);
      setIsModalOpen(true);
      setIsError(true);
    }
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

  return (
    <>
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
              id="name"
              placeholder={t.placeholderName}
              {...register("name", { required: true })}
            />
            <input
              type="email"
              id="email"
              placeholder={t.placeholderEmail}
              {...register("email", { required: true })}
            />
          </div>
          <textarea
            id="message"
            placeholder={t.placeholderMessage}
            {...register("message", { required: true })}
          />
          <MainButton
            type="submit"
            className={className === "footer" ? "contact_us" : "contacts"}
            color={className === "footer" ? "white" : "black"}
          >
            {t.button}
          </MainButton>
        </form>
      </motion.div>
      {isModalOpen && (
        <Modal className="message">
          <p className={styles.p1}>{parseHTMLString(modalMessage)[0]}</p>
          <p className={styles.p2}>{parseHTMLString(modalMessage)[2]}</p>
          {isError && (
            <p className={styles.p3}>{parseHTMLString(modalMessage)[4]}</p>
          )}
          <MainButton className="modal" onClick={() => setIsModalOpen(false)}>
            {t.msg_btn}
          </MainButton>
        </Modal>
      )}
    </>
  );
};

export default ContactUsForm;
