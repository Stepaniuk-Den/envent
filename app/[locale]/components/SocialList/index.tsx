import Link from "next/link";
import styles from "./socialList.module.scss";
import { socialFooterItems, socialHeaderItems } from "@/data/SocialItems";
import { IAriaLabelProps, ISocialItem } from "@/helpers/interfaces";

type Props = {
  className: "header" | "footer";
  onClick?: () => void;
  ariaLabel: IAriaLabelProps;
};

const SocialList: React.FC<Props> = ({ className, onClick, ariaLabel }) => {
  const items: ISocialItem[] =
    className === "header" ? socialHeaderItems : socialFooterItems;

  return (
    <ul className={`${styles.social_list} ${styles[className]}`}>
      {items.map((item) => {
        return (
          <li className={styles.item} key={item.id} onClick={onClick}>
            <Link
              href={item.href}
              className={styles.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${ariaLabel.ariaLabel.text} ${item.title}`}
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
