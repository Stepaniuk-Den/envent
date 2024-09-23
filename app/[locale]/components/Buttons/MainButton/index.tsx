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
  color?: "black" | "white" | "yellow" | "blue" | "filled" | "";
  isGoBack?: boolean;
}

const MainButton = ({
  type,
  className = "",
  children,
  color = "",
  isActive = "",
  onClick,
  isGoBack = false,
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
      className={`${styles.mainBtn} ${styles[className]} ${styles[color]}  ${styles[isActive]}`}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};

export default MainButton;
