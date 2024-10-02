import { IHeroRightSideList } from "@/helpers/interfaces";
import styles from "./heroRightSideList.module.scss";
import { heroRightSideItems } from "@/data/HeroItems";
import { parseHTMLString } from "@/helpers/parseHTMLString";
import { Link } from "@/navigation";
import AnimatedTitle from "../AnimatedTitle";
import Line from "../Line";
import Observer from "@/helpers/observer";

const HeroRightSideList = ({ className, t }: IHeroRightSideList) => {
  const tList = Object.entries(t.list);
  return (
    <div className={`${styles.hero_wrapper} ${styles[className]}`}>
      {className === "mobile" ? (
        <div className={styles.mobile_title}>
          <AnimatedTitle title={t.title} />
          <Line className="yellow-center" />
        </div>
      ) : (
        <h3 className={styles.list_title}>{t.title}</h3>
      )}
      <ul className={styles.list}>
        {tList.map(
          ([key, { href = "", svgName, title, descriptions, mail, tel }]) => {
            const svgCurrent = [
              ...heroRightSideItems.services,
              ...heroRightSideItems.todo,
            ].find((svg) => svg.name === svgName);
            return (
              <Observer key={key} y={40} threshold={0.8} duration={"300ms"}>
                <li className={styles.item}>
                  {svgCurrent && <svgCurrent.svg className={styles.svg} />}
                  {href !== "" ? (
                    <Link href={href} className={styles.item_text}>
                      <p>{title}</p>
                      <p>{descriptions}</p>
                    </Link>
                  ) : (
                    <div className={styles.item_text}>
                      <p>{title}</p>
                      <p>{parseHTMLString(descriptions)}</p>
                      {mail && <p>{mail}</p>}
                      {tel && <p>{tel}</p>}
                    </div>
                  )}
                </li>
              </Observer>
            );
          }
        )}
      </ul>
    </div>
  );
};
export default HeroRightSideList;
