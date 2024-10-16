import { rubik } from "@/app/fonts";
import { useTranslations } from "next-intl";
import Link from "next/link";
import MainButton from "../Buttons/MainButton";
import styles from "./error404.module.scss";
import ArrowLeft from "@/public/icons/arrow-left.svg";
import Animation404 from "../Animation404/page";


const Error404 = () => {

  const t = useTranslations('MainPage');

  return (
    <section
      className={`${styles.not_found_container} ${rubik.variable}`}
    >
      <div className="container">
        <Animation404/>      
        <div className={styles.not_found_wrapper}>
          <p className={styles.not_found_text}>{t('error.message')}</p>
          <MainButton type="button" color="filled" className="services">
            <ArrowLeft />
            <Link href="/">{t('error.btnBack')}</Link>
          </MainButton>
        </div>
      </div>
    </section>
  );
};

export default Error404;

