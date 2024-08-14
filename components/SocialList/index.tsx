import Link from "next/link";
import styles from "./socialList.module.scss";
import { Facebook, Instagram, Twitter, Youtube } from "@/helpers/imagesImport";

type Props = {
  className: "header" | "footer";
};

const SocialList = ({ className }: Props) => {
  return (
    <>
      <ul className={`${styles.social_list} ${styles[className]}`}>
        <li className={styles.item}>
          <Link href={"https://twitter.com/"} className={styles.link}>
            <Twitter className={styles.svg} />
          </Link>
        </li>
        <li className={styles.item}>
          <Link href={"https://www.facebook.com/"} className={styles.link}>
            <Facebook className={styles.svg} />
          </Link>
        </li>
        <li className={styles.item}>
          <Link href={"https://www.instagram.com/"} className={styles.link}>
            <Instagram className={styles.svg} />
          </Link>
        </li>
        <li className={styles.item}>
          <Link href={"https://youtube.com/"} className={styles.link}>
            <Youtube className={styles.svg} />
          </Link>
        </li>
      </ul>
    </>
  );
};

export default SocialList;
