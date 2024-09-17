"use client";

import SocialList from "../SocialList";
import styles from "./footer.module.scss";
import { contactsItems } from "@/data/ContactsItem";
import { HeroRightSideT } from "@/messages/types/HeroRightSideT";
import { Link, usePathname } from "@/navigation";
import ContactUsForm from "../ContactUsForm";
import { parseHTMLString } from "@/helpers/parseHTMLString";
import { ContactUsT } from "@/messages/types/ContactUsT";
import Observer from "@/helpers/observer";

const Footer: React.FC<{ t: ContactUsT; t2: HeroRightSideT }> = ({ t, t2 }) => {
  const pathName = usePathname();

  const currentPath = pathName !== "/contacts";

  return (
    <>
      <footer
        className={`${styles.footer} ${currentPath! ? "" : "hidden"}`}
        style={{ backgroundImage: `url("/images/footer-bg.webp")` }}
      >
        <Observer y={50} duration="500ms" threshold={0.5} once={true}>
          <div className={`${styles.wrapper} container`}>
            <ContactUsForm t={t} className="footer" />
            <div className={styles.contacts_container}>
              <div className={styles.social_container}>
                <SocialList className="footer" />
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
                              t2.contact.list.office.descriptions
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
        <div className={styles.copyright}>
          <Link href={"#"}>Created by IT Company</Link>
        </div>
      </footer>
    </>
  );
};
export default Footer;
