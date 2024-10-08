import React from "react";
import QuestionsList from "../QuestionsList";
import styles from "./questionsSection.module.scss";
import ContactUsForm from "../ContactUsForm";

import { unstable_setRequestLocale } from "next-intl/server";
import { localize } from "@/localize";
import { QuestionsT } from "@/messages/types/QuestionsT";
import { QuestionCardT } from "@/messages/types/QuestionCardT";
import QuestionCard from "../QuestionCard";
import { ContactUsT } from "@/messages/types/ContactUsT";
import Observer from "@/helpers/observer";

type Props = {
  params: { locale: string };
  type: "faq" | "form" | "slogan";
};

const QuestionsSection: React.FC<Props> = async ({
  params: { locale },
  type,
}) => {
  unstable_setRequestLocale(locale);

  const contactUsT = await localize(ContactUsT);
  const questionsT = await localize(QuestionsT);
  const questionCardT = await localize(QuestionCardT);
  const questionType =
    type === "faq" ? questionCardT.faq : questionCardT.slogan;
  const { title, description, textBtn } = questionType;
  return (
    <section
      id={type === "form" ? "form" : ""}
      className={`${styles.questions_section} ${
        type === "faq" ? styles.faq : ""
      }`}
    >
      <div className={`${styles.wrapper} container`}>
        {type === "form" && <ContactUsForm className="touch" t={contactUsT} />}
        {type !== "form" && (
          <QuestionCard
            title={title}
            textBtn={textBtn}
            description={description}
          />
        )}
        <Observer y={50} threshold={0.2}>
          <QuestionsList t={questionsT.list} />
        </Observer>
      </div>
    </section>
  );
};

export default QuestionsSection;
