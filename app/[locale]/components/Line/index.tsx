import styles from "./line.module.scss";

interface ILineProps {
  className: "yellow-left" | "yellow-center";
}

const Line: React.FC<ILineProps> = ({ className }) => {
  return <span className={`${styles.line} ${styles[className]}`}></span>;
};
export default Line;
