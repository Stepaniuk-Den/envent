import React from "react";
// import { Html } from "@react-email/components";
import { FormData } from "../ContactUsForm";
import styles from "./emailMessage.module.scss";

export const EmailMessage: React.FC<FormData> = ({
  // export const EmailMessage: React.FC<Readonly<FormData>> = ({
  name,
  email,
  message,
}) => {
  return (
    <div lang="en">
      <p className={styles.name}>{name}</p>
      <p>{email}</p>
      <p>{message}</p>
    </div>
  );
};
