import AnimatedText from "@/helpers/animatedText";
import styles from "./aboutDescriptionsSection.module.scss";

type Props = {
  [key: string]: string;
};

const AboutDescriptionsSection: React.FC<{ t: Props }> = ({ t }) => {
  const aboutList = Object.entries(t);

  return (
    <section className={styles.descriptions_wrapper}>
      {aboutList.map(([key, value]) => {
        const className = styles[key] || key;
        return (
          <AnimatedText>
            <p key={key} className={className}>
              {value}
            </p>
          </AnimatedText>
        );
      })}
    </section>
  );
};
export default AboutDescriptionsSection;
