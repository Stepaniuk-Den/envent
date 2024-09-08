import React from "react";
import styles from "./modal.module.scss";

interface IModal {
  children: React.ReactNode;
  className?: string;
}

const Modal: React.FC<IModal> = ({ children, className = "" }) => {
  return (
    <div className={`${styles.modal} ${styles[className]} overlay`}>
      <div className={styles.modal_content}>{children}</div>
    </div>
  );
};

export default Modal;
