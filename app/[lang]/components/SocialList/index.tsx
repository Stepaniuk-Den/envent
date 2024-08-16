import Link from "next/link";
import styles from "./socialList.module.scss";
import { socialFooterItems, socialHeaderItems } from "@/data/SocialItems";
import { ISocialItem } from "@/helpers/interfaces";

type Props = {
  className: "header" | "footer";
};

const SocialList = ({ className }: Props) => {
  const items: ISocialItem[] =
    className === "header" ? socialHeaderItems : socialFooterItems;

  return (
    <ul className={`${styles.social_list} ${styles[className]}`}>
      {items.map((item) => {
        return (
          <li className={styles.item} key={item.id}>
            <Link
              href={item.href}
              className={styles.link}
              target="_blank"
              no-opener="true"
              no-referer="true"
            >
              <item.svg className={styles.svg} />
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default SocialList;
