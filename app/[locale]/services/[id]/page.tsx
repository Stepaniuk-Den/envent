import { ServicesPageT } from "@/messages/types/ServicesPageT";
import { notFound } from "next/navigation";
import { localize } from "@/localize";
import { unstable_setRequestLocale } from "next-intl/server";

type Props = {
  params: {
    id: string;
    locale: string;
  };
};

const ServiceItemPage = async ({ params: { id, locale } }: Props) => {
  unstable_setRequestLocale(locale);
  const servicesT = await localize(ServicesPageT);

  const service = Object.values(servicesT.services.service)


  const serviceArray = service.filter((service) => service.id === id)[0];
  console.log(serviceArray);

  if (!service) {
    return notFound();
  }

  return (
    <div>
      <h1>{serviceArray.title}</h1>
      {/* <p>{service.description}</p>
      <div>
      </div>
      <button>{service.firstBtn}</button>
      <button>{service.secondBtn}</button> */}
    </div>
  );
};

export default ServiceItemPage;


