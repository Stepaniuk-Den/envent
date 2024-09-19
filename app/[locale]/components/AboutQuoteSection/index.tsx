import Observer from "@/helpers/observer";
import styles from "./aboutQuoteSection.module.scss";

type Props = {
  name: string;
  quote: string;
};

const AboutQuoteSection: React.FC<{ t: Props }> = ({ t }) => {
  return (
    <section>
      <Observer y={50} threshold={0.5} duration="300ms">
        <div className={`${styles.quote_wrapper} container`}>
          <p className={styles.quote}>{`"${t.quote}"`}</p>
          <p className={styles.name}>{t.name}</p>
        </div>
      </Observer>
    </section>
  );
};
export default AboutQuoteSection;
