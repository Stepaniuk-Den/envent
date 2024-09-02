import { IHeroRightSideList } from "@/helpers/interfaces";
import styles from "./heroRightSideList.module.scss";
import { heroRightSideItems } from "@/data/HeroItems";

const HeroRightSideList = ({ className, t }: IHeroRightSideList) => {
  const tList = Object.entries(t.list);
  return (
    <div className={`${styles.hero_wrapper} ${styles[className]}`}>
      <h3 className={styles.list_title}>{t.title}</h3>
      <ul className={styles.list}>
        {tList.map(([key, { svgName, title, descriptions, mail, tel }]) => {
          const svgCurrent = [
            ...heroRightSideItems.services,
            ...heroRightSideItems.todo,
          ].find((svg) => svg.name === svgName);
          return (
            <li className={styles.item} key={key}>
              {svgCurrent && <svgCurrent.svg className={styles.svg} />}
              <div className={styles.item_text}>
                <p>{title}</p>
                {svgCurrent ? (
                  <p>{descriptions}</p>
                ) : (
                  <>
                    <p>{descriptions}</p>
                    <p>{mail}</p>
                    <p>{tel}</p>
                  </>
                )}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default HeroRightSideList;
