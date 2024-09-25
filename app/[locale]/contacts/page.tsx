import { unstable_setRequestLocale } from "next-intl/server";
import styles from "./contacts.module.scss";
import Hero from "../components/Hero";
import { ContactsPageT } from "@/messages/types/ContactPageT";
import { localize } from "@/localize";
import { HeroAboutBG } from "@/helpers/imagesImport";
import { HeroRightSideT } from "@/messages/types/HeroRightSideT";
import HeroRightSideList from "../components/HeroRightSideList";
import QuestionsSection from "../components/QuestionsSection";

import MapSection from "../components/MapSection";

type Props = {
  params: { locale: string };
};

const Contacts: React.FC<Props> = async ({ params: { locale } }) => {
  unstable_setRequestLocale(locale);

  const contactsT = await localize(ContactsPageT);
  const heroRightSideT = await localize(HeroRightSideT);

  return (
    <div>
      <Hero imageSrc={HeroAboutBG} t={contactsT.hero} className="contacts">
        <HeroRightSideList className="contacts" t={heroRightSideT.contact} />
      </Hero>
      <div className="container">
        <HeroRightSideList className="mobile" t={heroRightSideT.contact} />
      </div>
      <div className={styles.contacts}>
        <QuestionsSection params={{ locale }} type="form" />
        <MapSection locationBtn={contactsT.locationBtn.description} />
      </div>
    </div>
  );
};

export default Contacts;
