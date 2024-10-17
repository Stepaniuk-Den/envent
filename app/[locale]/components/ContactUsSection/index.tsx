import React from "react";
import styles from "./contactUsSection.module.scss";
import ContactUsForm from "../ContactUsForm";
import Observer from "@/helpers/observer";
import { unstable_setRequestLocale } from "next-intl/server";
import { localize } from "@/localize";
import { ContactUsT } from "@/messages/types/ContactUsT";
import { HeroRightSideT } from "@/messages/types/HeroRightSideT";
import SocialList from "../SocialList";
import { contactsItems } from "@/data/ContactsItem";
import { Link } from "@/navigation";
import { parseHTMLString } from "@/helpers/parseHTMLString";
import { MainPageT } from "@/messages/types/MainPageT";

type Props = {
  params: { locale: string };
};

const ContactUsSection: React.FC<Props> = async ({ params: { locale } }) => {
  unstable_setRequestLocale(locale);

  const footerT = await localize(ContactUsT);
  const contactT = await localize(HeroRightSideT);
  const ariaLabelT = await localize(MainPageT);

  return (
    <section
      className={styles.section}
      style={{ backgroundImage: `url("/images/footer-bg.webp")` }}
    >
      <Observer y={50} threshold={0}>
        <div className={`${styles.wrapper} container`}>
          <ContactUsForm t={footerT} className="footer" />
          <div className={styles.contacts_container}>
            <div className={styles.social_container}>
              <SocialList className="footer" ariaLabel={ariaLabelT} />
            </div>
            <ul className={styles.list}>
              {contactsItems.map((contact) => {
                return (
                  <li className={styles.item} key={contact.id}>
                    <Link
                      href={contact.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.link}
                    >
                      <contact.svg className={styles.svg} />
                      {contact.id === 1 ? (
                        <span>
                          {parseHTMLString(
                            contactT.contact.list.office.descriptions
                          )}
                        </span>
                      ) : (
                        <span>{contact.descriptions}</span>
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </Observer>
    </section>
  );
};

export default ContactUsSection;
