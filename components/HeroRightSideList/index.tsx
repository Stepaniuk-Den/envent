import { IHeroRightSideListProps } from "@/helpers/interfaces";
import styles from "./heroRightSideList.module.scss";
import Image from "next/image";

const HeroRightSideList = ({ data, className }: IHeroRightSideListProps) => {
  return (
    <div className={`${styles.hero_wrapper} ${styles[className]}`}>
      <h3 className={styles.list_title}>{data.title.en}</h3>
      <ul className={styles.list}>
        {data.item.map((item, index) => (
          <li className={styles.item} key={index}>
            {item.svg && <item.svg className={styles.svg} />}
            <div className={styles.item_text}>
              <p>{item.title.en}</p>
              <p>{item.descriptions.en}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default HeroRightSideList;
