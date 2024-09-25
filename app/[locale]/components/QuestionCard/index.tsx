import { Link } from "@/navigation";
import AnimatedTitle from "../AnimatedTitle";
import MainButton from "../Buttons/MainButton";
import Line from "../Line";
import styles from "./questionCard.module.scss";
import Observer from "@/helpers/observer";

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
      <Observer y={50} threshold={1}>
        <p className={styles.description}>{description}</p>
      </Observer>
      <MainButton color="blue" className="question">
        <Link href={"/contacts/#form"}>{textBtn}</Link>
      </MainButton>
    </div>
  );
};

export default QuestionCard;
