import { ServicesPageT } from "@/messages/types/ServicesPageT";
import { notFound } from "next/navigation";
import { localize } from "@/localize";
import { unstable_setRequestLocale } from "next-intl/server";
import { generateSlug } from "@/helpers/generateSlug";
import { HeroRightSideT } from "@/messages/types/HeroRightSideT";
import Hero from "../../components/Hero";
import HeroRightSideList from "../../components/HeroRightSideList";
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
  const heroRightSideT = await localize(HeroRightSideT);

  const service = Object.values(servicesT.services.service).find(
    (service) => generateSlug(service.hero.title) === slug
  );

  if (!service) {
    return notFound();
  }

  return (
    <div>
      <Hero imageSrc={service.heroBG} className="about" t={service.hero}>
        {/* <HeroRightSideList className="about" t={heroRightSideT.todo} /> */}
      </Hero>
      <ServiceItemDescription t={service}/>
      <AboutProcess t={service} about={servicesT.about}/>
      {/* <h1>{service.hero.title}</h1>
      <p>{service.hero.description}</p>
      <div>
      </div>
      <button>{service.hero.button}</button>
      <button>{service.secondBtn}</button> */}
    </div>
  );
};

export default ServiceItemPage;


