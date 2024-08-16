import { IMainButtonProps } from "@/helpers/interfaces";
import styles from "./backdropButton.module.scss";

const BackdropButton = ({
  type,
  children,
  onClick,
  ariaLabel,
  className,
}: IMainButtonProps) => {
  return (
    <button
      type={type}
      className={`${styles.backdropBtn} ${className}`}
      onClick={onClick}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
};

export default BackdropButton;
