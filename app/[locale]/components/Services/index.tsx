"use client";

import { ServicesPageT } from "@/messages/types/ServicesPageT";
import ServiceCard from "../ServiceCard";
import styles from "./services.module.scss"

const Services: React.FC<{t:ServicesPageT["services"];}> = ({t}) => {
const servicesList = Object.entries(t.service);

    return(
        <section className={`${styles.services} container`}>
      <ul>
        {servicesList.map(([key, service], idx) => (
          <ServiceCard
            key={service.id}
            id={service.id}
            title={service.title}
            description={service.description}
            firstImg={service.firstImg}
            secondImg={service.secondImg}
            thirdImg={service.thirdImg}
            alt={service.alt}
            firstBtn={service.firstBtn}
            secondBtn={service.secondBtn}
            address={service.address}
            link={service.link}
            alignRight={idx % 2 === 0}
          />
        ))}
      </ul>
    </section>
    )

}

export default Services;