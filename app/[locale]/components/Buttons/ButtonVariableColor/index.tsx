"use client";

import { IButtonVariableColor } from "@/helpers/interfaces";
import styles from "./buttonVariableColor.module.scss";

const ButtonVariableColor = ({ className, firstChildren, secondChildren }: IButtonVariableColor) => {
 

  return (

    <div className={`${styles[className]} ${styles.button_container} `}>
       <div className={`${styles.left_btn} ${styles.btn}`}>{firstChildren}</div>
      <div className={`${styles.right_btn} ${styles.btn}`}>{secondChildren}</div>
    </div>
  );
};
export default ButtonVariableColor;
