import { ServicesPageT } from "@/messages/types/ServicesPageT";
import ServiceCard from "../ServiceCard";


const Services: React.FC<{
  t: ServicesPageT["services"];
  language: string;
}> = ({ t, language }) => {
  const servicesList = Object.entries(t.service);

  return (
    <section>
      <ul className="container">
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
  );
};

export default Services;
