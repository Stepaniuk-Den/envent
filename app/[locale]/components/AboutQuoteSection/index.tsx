import styles from "./aboutQuoteSection.module.scss";

type Props = {
  name: string;
  quote: string;
};

const AboutQuoteSection: React.FC<{ t: Props }> = ({ t }) => {
  return (
    <section className={styles.quote_wrapper}>
      <p className={styles.quote}>{`"${t.quote}"`}</p>
      <p className={styles.name}>{t.name}</p>
    </section>
  );
};
export default AboutQuoteSection;
