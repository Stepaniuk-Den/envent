import { ServicesPageT } from "@/messages/types/ServicesPageT";
import { notFound } from "next/navigation";
import { localize } from "@/localize";
import { unstable_setRequestLocale } from "next-intl/server";
import { Metadata } from "next";
import Hero from "../../components/Hero";
import ServiceItemDescription from "../../components/ServiceItemDescription";
import ServiceAboutProcess from "../../components/ServiceAboutProcess";
import QuestionsSection from "../../components/QuestionsSection";
import ContactUsSection from "../../components/ContactUsSection";
import { MainPageT } from "@/messages/types/MainPageT";

type Props = {
  params: {
    slug: string;
    locale: string;
  };
};

export async function generateMetadata({
  params: { slug, locale },
}: Props): Promise<Metadata> {
  const servicesT = await localize(ServicesPageT);

  const service = Object.values(servicesT.services.service).find(
    (service) => service.slug === slug
  );

  if (!service) {
    return {
      title: "Сервіс не знайдено",
      description: "Цей сервіс недоступний.",
    };
  }

  return {
    title: service.hero.title,
    description: service.hero.description || "Опис сервісу",
    openGraph: {
      title: service.hero.title,
      description: service.hero.description,
      images: [
        {
          url: service.heroBG, // зображення для метаданих (OG-image)
          alt: service.hero.title,
        },
      ],
    },
  };
}

const ServiceItemPage = async ({ params: { slug, locale } }: Props) => {
  unstable_setRequestLocale(locale);
  const servicesT = await localize(ServicesPageT);
  const ariaLabelT = await localize(MainPageT);

  const service = Object.values(servicesT.services.service).find(
    (service) => service.slug === slug
  );

  const findIdBySlug = (slug: string) => {
    const service = Object.values(servicesT.services.service).find(
      (service) => service.slug === slug
    );
    return service ? service.id : null;
  };

  const id = findIdBySlug(slug);
  if (id === null) {
    return notFound();
  }

  if (!service) {
    return notFound();
  }

  return (
    <div>
      <Hero imageSrc={service.heroBG} className="about" t={service.hero}></Hero>

      <ServiceItemDescription t={service} about={servicesT.about} />
      <ServiceAboutProcess
        t={service}
        about={servicesT.about}
        service={servicesT.services}
        ariaLabel={ariaLabelT}
        id={Number(id)}
      />
      <QuestionsSection type="faq" params={{ locale }} />
      <ContactUsSection params={{ locale }} />
    </div>
  );
};

export default ServiceItemPage;
