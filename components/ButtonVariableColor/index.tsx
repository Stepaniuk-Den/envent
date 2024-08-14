"use client";

import styles from "./buttonVariableColor.module.scss";
import { IButtonVariableColor } from "@/helpers/interfaces";

const ButtonVariableColor: React.FC<IButtonVariableColor> = ({ className, children }) => {
 

  return (
    <div className={`${styles.button} ${styles[className]}`}>
    {children}
    </div>
  );
};
export default ButtonVariableColor;
