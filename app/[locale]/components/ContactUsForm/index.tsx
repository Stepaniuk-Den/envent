"use client";

import styles from "./contactUsForm.module.scss";
import MainButton from "../Buttons/MainButton";
import Line from "../Line";
import Modal from "../Modal";

import { useForm } from "react-hook-form";
import { useState } from "react";

import { sendEmail } from "@/utils/send-email";
import { useModal } from "@/helpers/useModal";
import { ContactUsT } from "@/messages/types/ContactUsT";
import { parseHTMLString } from "@/helpers/parseHTMLString";
import AnimatedTitle from "../AnimatedTitle";
import Observer from "@/helpers/observer";
import Checkbox from "../Checkbox";
// import dynamic from "next/dynamic";

interface Props {
  t: ContactUsT;
  className: "footer" | "touch";
}

export type FormData = {
  name: string;
  email: string;
  message: string;
  acceptTerms: boolean;
};

const ContactUsForm: React.FC<Props> = ({ className, t }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<FormData>({ mode: "onChange" });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isError, setIsError] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  const isTouchClassName: boolean = className === "touch";

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
      setModalMessage(`${t.msg_error} ${err.message}`);
      setIsModalOpen(true);
      setIsError(true);
    }
  };

  const Form = () => {
    return (
      <div className={`${styles.form_container} ${styles[className]}`}>
        <AnimatedTitle title={t.formTitle} />
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
          <Checkbox
            label="Accept Terms & Conditions"
            name="acceptTerms"
            register={register}
            required={true}
          />
          <MainButton
            type="submit"
            className={className === "footer" ? "contact_us" : "contacts"}
            color={className === "footer" ? "white_allways" : "black"}
            disabled={!isValid}
          >
            {t.button}
          </MainButton>
        </form>
      </div>
    );
  };

  return (
    <>
      {isTouchClassName ? (
        <Observer y={50} threshold={0.2} className={styles.touch_obs}>
          <Form />
        </Observer>
      ) : (
        <Form />
      )}
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
