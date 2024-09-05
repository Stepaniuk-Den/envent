import { Link } from "@/navigation";
import AnimatedTitle from "../AnimatedTitle";
import MainButton from "../Buttons/MainButton";
import Line from "../Line";
import styles from "./questionCard.module.scss";

interface IQuestionCard {
  title: string;
  description: string;
  textBtn: string;
}

const QuestionCard = ({ title, description, textBtn }: IQuestionCard) => {
  return (
    <div className={styles.question_card}>
      <AnimatedTitle title={title} className={styles.question} />
      <Line className="yellow-left" />
      <p>{description}</p>
      <MainButton color="blue" className="question">
        <Link href={"#"}>{textBtn}</Link>
      </MainButton>
    </div>
  );
};

export default QuestionCard;
