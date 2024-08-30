import { ServicesPageT } from "@/messages/types/ServicesPageT";
import { notFound } from "next/navigation";
import { localize } from "@/localize";
import { unstable_setRequestLocale } from "next-intl/server";
import Hero from "../../components/Hero";
import ServiceItemDescription from "../../components/ServiceItemDescription";
import AboutProcess from "../../components/AboutProcess";

type Props = {
  params: {
    slug: string;
    locale: string;
  };
};

const ServiceItemPage = async ({ params: { slug, locale } }: Props) => {
  unstable_setRequestLocale(locale);
  const servicesT = await localize(ServicesPageT);
 
  const service = Object.values(servicesT.services.service).find(
    (service) => service.slug === slug
  );

  if (!service) {
    return notFound();
  }

  return (
    <div>
      <Hero imageSrc={service.heroBG} className="about" t={service.hero}>
      </Hero>
      <ServiceItemDescription t={service}/>
      <AboutProcess t={service} about={servicesT.about}/>
    </div>
  );
};

export default ServiceItemPage;


