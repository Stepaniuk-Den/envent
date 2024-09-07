import React from "react";
import QuestionsList from "../QuestionsList";
import styles from "./questionsSection.module.scss";
import ContactUsForm from "../ContactUsForm";
import { FooterT } from "@/messages/types/FooterT";
import { unstable_setRequestLocale } from "next-intl/server";
import { localize } from "@/localize";
import { QuestionsT } from "@/messages/types/QuestionsT";
import { QuestionCardT } from "@/messages/types/QuestionCardT";
import QuestionCard from "../QuestionCard";

type Props = {
  params: { locale: string };
  type: "faq" | "form" | "slogan";
};

const QuestionsSection: React.FC<Props> = async ({
  params: { locale },
  type,
}) => {
  unstable_setRequestLocale(locale);

  const footerT = await localize(FooterT);
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
        {type === "form" && <ContactUsForm className="touch" t={footerT} />}
        {type !== "form" && (
          <QuestionCard
            title={title}
            textBtn={textBtn}
            description={description}
          />
        )}
        <QuestionsList t={questionsT.list} />
      </div>
    </section>
  );
};

export default QuestionsSection;
