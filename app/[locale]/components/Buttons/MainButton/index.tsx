"use client";
import { ReactNode } from "react";
import styles from "./mainButton.module.scss";

interface IMainButtonProps {
  type?: "button" | "submit" | "reset";
  className?: string;
  children?: ReactNode;
  onClick?: () => void;
  color?: "black" | "white" | "yellow" | "blue" | "filled" | "";
}

const MainButton = ({
  type,
  className = "",
  children,
  color = "",
  onClick,
}: IMainButtonProps) => {
  return (
    <button
      type={type}
      className={`${styles.mainBtn} ${styles[className]} ${styles[color]}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default MainButton;
