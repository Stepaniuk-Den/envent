"use client";

import { useQuestionsContactsStore } from "@/stores/questions-contacts-store";
import QuestionsItem from "../QuestionsItem";
import styles from "./questionsList.module.scss";

interface IProps {
  [key: number]: { title: string; description: string };
}
const QuestionsList: React.FC<{ t: IProps }> = ({ t }) => {
  const questionList = Object.values(t);
  const { keyQuestionsContacts } = useQuestionsContactsStore();

  return (
    <div>
      <ul className={styles.list}>
        {questionList.map((value, index) => {
          const { title, description } = value;
          const isActive = index === keyQuestionsContacts.id;
          return (
            <QuestionsItem
              isActive={isActive}
              key={index}
              index={index}
              title={title}
              description={description}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default QuestionsList;
