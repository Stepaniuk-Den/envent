"use client";

import React, { useEffect, useState } from "react";
import styles from "./modal.module.scss";
import { createPortal } from "react-dom";

interface IModal {
  children: React.ReactNode;
  className?: string;
}

const Modal: React.FC<IModal> = ({ children, className = "" }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  if (!mounted) return null;

  return createPortal(
    <div className={`${styles[className]} overlay`}>
      <div className={styles.modal_content}>{children}</div>
      {/* <div className={`${styles.modal_content} container`}>{children}</div> */}
    </div>,
    document.getElementById("modal")!
  );
};

export default Modal;
