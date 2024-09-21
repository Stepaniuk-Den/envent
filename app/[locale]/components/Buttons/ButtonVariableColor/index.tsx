import styles from "./buttonVariableColor.module.scss";

interface IButtonVariableColor {
  className: "blue_dark" | "blue_white" | "dark_blue";
  firstChildren: React.ReactNode;
  secondChildren: React.ReactNode;
  fixedLeftButton?: boolean;
}

const ButtonVariableColor = ({ className, firstChildren, secondChildren,fixedLeftButton}: IButtonVariableColor) => {
 

  return (
    <div className={`${styles[className]} ${styles.button_container} `}>
       <div className={`${styles.left_btn} ${styles.btn} ${fixedLeftButton ? styles.fixed_width : ""}`}>
        {firstChildren}
      </div>
      <div className={`${styles.right_btn} ${styles.btn}`}>{secondChildren}</div>
    </div>
  );
};
export default ButtonVariableColor;
