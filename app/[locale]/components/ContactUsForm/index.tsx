"use client";

import styles from "./contactUsForm.module.scss";
import MainButton from "../Buttons/MainButton";
import Line from "../Line";
import Modal from "../Modal";

import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";

import { sendEmail } from "@/utils/send-email";
import { useModal } from "@/helpers/useModal";
import { ContactUsT } from "@/messages/types/ContactUsT";
import { parseHTMLString } from "@/helpers/parseHTMLString";
import { setCookie, getCookie, deleteCookie } from "cookies-next";
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
};

const ContactUsForm: React.FC<Props> = ({ className, t }) => {
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors, isValid },
  } = useForm<FormData>({ mode: "onChange" });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isError, setIsError] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  const isTouchClassName: boolean = className === "touch";

  useModal(isModalOpen, setIsModalOpen);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setValue(name as keyof FormData, value);

    const cookieData = getCookie("contactUsForm");
  
    const parsedCookieData = cookieData ? JSON.parse(cookieData as string) : {};
  
    setCookie("contactUsForm", JSON.stringify({ ...parsedCookieData, [name]: value }));
  };

  useEffect(() => {
    const savedData = getCookie("contactUsForm");
    if (savedData) {
      const parsedData = JSON.parse(savedData as string);
      for (const key in parsedData) {
        setValue(key as keyof FormData, parsedData[key]);
      }
    }
  }, [setValue]);


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
      deleteCookie("contactUsForm");
    } catch (err: any) {
      setModalMessage(`${t.msg_error} ${err.message}`);
      setIsModalOpen(true);
      setIsError(true);
    }
  };

  return (
    <>
      {isTouchClassName ? (
        <Observer y={50} threshold={0.2} className={styles.touch_obs}>
          <div className={`${styles.form_container} ${styles[className]}`}>
            <AnimatedTitle title={t.formTitle} />
            <Line className="yellow-left" />
            <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
              <div className={styles.input_container}>
                <div className={styles.wrapper}>
                  <input
                    className={styles.input}
                    type="text"
                    id="name"
                    placeholder={t.placeholderName}
                    {...register("name", {
                      required: `${t.required}`,
                      minLength: {
                        value: 2,
                        message: `${t.requiredName}`,
                      },
                      validate: {
                        isNotEmpty: (value) => {
                          if (value.trim() === "") {
                            return `${t.requiredName}`;
                          }
                          return true;
                        },
                      },
                    })}
                    onChange={handleChange}
                  />
                  {errors?.name && (
                    <div className={styles.error_name}>
                      <p>{errors?.name?.message || "Error!"}</p>
                    </div>
                  )}
                </div>
                <div className={styles.wrapper}>
                  <input
                    className={styles.input}
                    type="email"
                    id="email"
                    placeholder={t.placeholderEmail}
                    {...register("email", {
                      required: `${t.required}`,
                      pattern: {
                        value:
                          /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                        message: `${t.requiredEmail}`,
                      },
                    })}
                    onChange={handleChange}
                  />          
                  {errors?.email && (
                    <div className={styles.error_name}>
                      <p>{errors?.email?.message || "Error!"}</p>
                    </div>
                  )}
                </div>
              </div>
              <div className={styles.wrapper}>
                <textarea
                  id="message"
                  placeholder={t.placeholderMessage}
                  {...register("message", {
                    required: `${t.required}`,
                    minLength: {
                      value: 15,
                      message: `${t.requiredMessage}`,
                    },
                  })}
                  onChange={handleChange}
                />
                {errors?.message && (
                  <div className={styles.error_name}>
                    <p>{errors?.message?.message || "Error!"}</p>
                  </div>
                )}
              </div>
              <Checkbox
                label={t.acceptTerms}
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
        </Observer>
      ) : (
        <div className={`${styles.form_container} ${styles[className]}`}>
          <AnimatedTitle title={t.formTitle} />
          <Line className="yellow-left" />
          <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.input_container}>
              <div className={styles.wrapper}>
                <input
                  className={styles.input}
                  type="text"
                  id="name"
                  placeholder={t.placeholderName}
                  {...register("name", {
                    required: `${t.required}`,
                    minLength: {
                      value: 2,
                      message: `${t.requiredName}`,
                    },
                    validate: {
                      isNotEmpty: (value) => {
                        if (value.trim() === "") {
                          return `${t.requiredName}`;
                        }
                        return true;
                      },
                    },
                  })}
                />
                {errors?.name && (
                  <div className={styles.error_name}>
                    <p>{errors?.name?.message || "Error!"}</p>
                  </div>
                )}
              </div>
              <div className={styles.wrapper}>
                <input
                  className={styles.input}
                  type="email"
                  id="email"
                  placeholder={t.placeholderEmail}
                  {...register("email", {
                    required: `${t.required}`,
                    pattern: {
                      value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                      message: `${t.requiredEmail}`,
                    },
                  })}
                />
                {errors?.email && (
                  <div className={styles.error_name}>
                    <p>{errors?.email?.message || "Error!"}</p>
                  </div>
                )}
              </div>
            </div>
            <div className={styles.wrapper}>
              <textarea
                id="message"
                placeholder={t.placeholderMessage}
                {...register("message", {
                  required: `${t.required}`,
                  minLength: {
                    value: 15,
                    message: `${t.requiredMessage}`,
                  },
                })}
              />
              {errors?.message && (
                <div className={styles.error_name}>
                  <p>{errors?.message?.message || "Error!"}</p>
                </div>
              )}
            </div>
            <Checkbox
              label={t.acceptTerms}
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
