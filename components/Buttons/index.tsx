import { ReactNode } from "react";
import styles from "./mainButton.module.scss";

interface IMainButtonProps {
  type?: "button" | "submit" | "reset";
  className?: string;
  children?: ReactNode;
  onClick?: () => void;
}

const MainButton = ({ type, children, onClick }: IMainButtonProps) => {
  return (
    <button type={type} className={styles.mainBtn} onClick={onClick}>
      {children}
    </button>
  );
};

export default MainButton;
