import styles from "./footer.module.scss";
import { Link } from "@/navigation";

const Footer = () => {
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.copyright}>
          <Link href={"#"}>Created by IT Company</Link>
        </div>
      </footer>
    </>
  );
};
export default Footer;
