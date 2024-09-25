import styles from "./aboutDescriptionsSection.module.scss";
import Observer from "@/helpers/observer";

type Props = {
  [key: string]: string;
};

const AboutDescriptionsSection: React.FC<{ t: Props }> = ({ t }) => {
  const aboutList = Object.entries(t);

  return (
    <section>
      <div className="container">
        <div className={styles.descriptions_wrapper}>
          {aboutList.map(([key, value]) => {
            const className = styles[key] ? styles[key] : "";
            return (
              <Observer y={50} threshold={0.5} key={key}>
                <p className={className}>{value}</p>
              </Observer>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default AboutDescriptionsSection;
