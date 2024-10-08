import React from "react";
import styles from "./checkbox.module.scss";
import { UseFormRegister } from "react-hook-form";

interface CheckboxProps {
  label: string;
  name: string;
  register: UseFormRegister<any>;
  required?: boolean;
}

const Checkbox: React.FC<CheckboxProps> = ({
  label,
  name,
  register,
  required,
}) => {
  return (
    <div className={styles.checkbox_container}>
      <input
        type="checkbox"
        id={name}
        {...register(name, { required })}
        aria-required={required ? "true" : "false"}
      />
      <label htmlFor={name} className={styles.label}>
        {label}
        <a href="/terms-and-conditions">
          Terms & Conditions and Privacy policy
        </a>
      </label>
    </div>
  );
};
export default Checkbox;
