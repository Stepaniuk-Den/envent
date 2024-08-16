"use client";
import Link from "next/link";
import Line from "../Line";
import SocialList from "../SocialList";
import styles from "./footer.module.scss";
import MainButton from "../Buttons/MainButton";
import { FormEvent } from "react";
import { contactsItems } from "@/data/ContactsItem";

const Footer = () => {
  // const handleClick = (e: any) => {
  //   e.preventDefault();
  //   alert(e);
  // };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;

    alert(`Name: ${name}, Email: ${email}, Message: ${message}`);
  };
  return (
    <footer className={`${styles.footer} container`}>
      <div className={styles.form_container}>
        <h2 className={styles.title}>Contact Us</h2>
        <Line className="dark" />
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.input_container}>
            <input type="text" name="name" id="name" placeholder="Name" />
            <input type="email" name="email" id="email" placeholder="Email" />
          </div>
          <textarea name="message" id="message" placeholder="Message" />
          <MainButton type="submit" className="contact_us" color="white">
            send message
          </MainButton>
        </form>
      </div>
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
                  no-referrer="true"
                  no-opener="true"
                  className={styles.link}
                >
                  <contact.svg className={styles.svg} />
                  <span>{contact.descriptions}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </footer>
  );
};
export default Footer;
