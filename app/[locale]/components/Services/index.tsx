import { ServicesPageT } from "@/messages/types/ServicesPageT";
import ServiceCard from "../ServiceCard";
import styles from "./services.module.scss"


const Services: React.FC<{t:ServicesPageT["services"],language:string}> = ({t,language}) => {
const servicesList = Object.entries(t.service);

    return(
        <section className={`${styles.services} container`}>
      <ul>
        {servicesList.map(([key, service], idx) => (
          <ServiceCard
          serviceId={Number(key)}
          key={key}
          language={language}
            t={{
              ...service,
              alignRight: idx % 2 === 0,
            }}
          />
        ))}
      </ul>
    </section>
    )

}

export default Services;