"use client";
import { ReactNode } from "react";
import styles from "./mainButton.module.scss";

interface IMainButtonProps {
  type?: "button" | "submit" | "reset";
  className?: string;
  children?: ReactNode;
  isActive?: string;
  onClick?: () => void;
  color?: "black" | "white" | "yellow" | "blue" | "filled" | "";
}

const MainButton = ({
  type,
  className = "",
  children,
  color = "",
  isActive = "",
  onClick,
}: IMainButtonProps) => {
  return (
    <button
      type={type}
      className={`${styles.mainBtn} ${styles[className]} ${styles[color]}  ${styles[isActive]}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default MainButton;
