import styles from "./aboutQuoteSection.module.scss";

type Props = {
  name: string;
  quote: string;
};

const AboutQuoteSection: React.FC<{ t: Props }> = ({ t }) => {
  return (
    <section>
      <div className={`${styles.quote_wrapper} container`}>
        <p className={styles.quote}>{`"${t.quote}"`}</p>
        <p className={styles.name}>{t.name}</p>
      </div>
    </section>
  );
};
export default AboutQuoteSection;
