import { unstable_setRequestLocale } from "next-intl/server";
import styles from "./contacts.module.scss";

type Props = {
  params: { locale: string };
};

const Contacts: React.FC<Props> = async ({ params: { locale } }) => {
  unstable_setRequestLocale(locale);
  return <div></div>;
};

export default Contacts;
