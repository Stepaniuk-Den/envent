import React from "react";
import { Html } from "@react-email/components";
import { FormData } from "../ContactUsForm";

export const EmailMessage: React.FC<FormData> = ({ name, email, message }) => {
  return <Html lang="en">Email</Html>;
};
