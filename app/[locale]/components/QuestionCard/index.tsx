// "use client";

import { Link } from "@/navigation";
import AnimatedTitle from "../AnimatedTitle";
import MainButton from "../Buttons/MainButton";
import Line from "../Line";
import styles from "./questionCard.module.scss";

// import dynamic from "next/dynamic";

interface IQuestionCard {
  title: string;
  description: string;
  textBtn: string;
}

// const MediaQuery = dynamic(() => import("react-responsive"), {
//   ssr: false,
// });

const QuestionCard = ({ title, description, textBtn }: IQuestionCard) => {
  return (
    <div className={styles.question_card}>
      <AnimatedTitle title={title} className={styles.question} />
      {/* <MediaQuery maxWidth={1023.98}>
        <Line className="yellow-center" />
      </MediaQuery>
      <MediaQuery minWidth={1024}>
        <Line className="yellow-left" />
      </MediaQuery> */}
      <Line className="yellow-left" />
      <p className={styles.description}>{description}</p>
      <MainButton color="blue" className="question">
        <Link href={"/contacts/#form"}>{textBtn}</Link>
      </MainButton>
    </div>
  );
};

export default QuestionCard;
