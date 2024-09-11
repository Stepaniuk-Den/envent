import AnimatedText from "@/helpers/animatedText";
import styles from "./aboutDescriptionsSection.module.scss";

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
            const className = styles[key] || key;
            return (
              <AnimatedText key={key}>
                <p className={className}>{value}</p>
              </AnimatedText>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default AboutDescriptionsSection;
