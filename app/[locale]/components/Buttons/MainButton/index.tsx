"use client";
import { ReactNode } from "react";
import styles from "./mainButton.module.scss";
import { useRouter } from "next/navigation";
import { handleGoBack } from "@/helpers/handleGoBack";

interface IMainButtonProps {
  type?: "button" | "submit" | "reset";
  className?: string;
  children?: ReactNode;
  isActive?: string;
  onClick?: () => void;
  color?:
    | "black"
    | "white"
    | "white_allways"
    | "yellow"
    | "blue"
    | "filled"
    | "";
  isGoBack?: boolean;
  disabled?: boolean;
}

const MainButton = ({
  type,
  className = "",
  children,
  color = "",
  isActive = "",
  onClick,
  isGoBack = false,
  disabled = false,
}: IMainButtonProps) => {
  const router = useRouter();

  const handleClick = () => {
    if (onClick) {
      onClick();
    } else if (isGoBack) {
      handleGoBack(router);
    }
  };

  return (
    <button
      type={type}
      className={`${styles.mainBtn} ${styles[className]} ${styles[color]} ${
        styles[isActive]
      } ${disabled ? styles.disabled : ""}`}
      onClick={handleClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default MainButton;
