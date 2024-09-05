"use client";

import styles from "./questionsItem.module.scss";
import { AnimatePresence, motion } from "framer-motion";
import { useQuestionsContactsStore } from "@/stores/questions-contacts-store";

interface IQuestionsItem {
  isActive: boolean;
  index: number;
  title: string;
  description: string;
}

const QuestionsItem = ({
  isActive,
  index,
  title,
  description,
}: IQuestionsItem) => {
  const { update } = useQuestionsContactsStore();

  const handleClick = (key: number) => {
    const currentKey = {
      id: key,
    };
    update(currentKey);
  };
  return (
    <li
      key={index}
      className={`${styles.item} ${isActive ? styles.active : ""}`}
      onClick={() => handleClick(Number(index))}
    >
      <p className={styles.content_container}>
        <span className={styles.title}>{title}</span>
        <AnimatePresence initial={false}>
          {isActive && (
            <motion.span
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "inherit", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.5 }}
              className={styles.content}
            >
              {description}
            </motion.span>
          )}
        </AnimatePresence>
      </p>
      <span className={`${styles.icon} ${isActive ? styles.active : ""}`}>
        {isActive ? String.fromCharCode(8722) : String.fromCharCode(43)}
      </span>
    </li>
  );
};

export default QuestionsItem;
