// import type { Metadata } from "next";
import "./globals.scss";
import { montserrat, openSans, rubik } from "./fonts";
import { unstable_setRequestLocale } from "next-intl/server";
import { locales } from "@/config";

import Header from "@/app/[locale]/components/Header";
import Footer from "@/app/[locale]/components/Footer";
import TotopButton from "./components/Buttons/TotopButton";
import { localize } from "@/localize";
import { HeaderT } from "@/messages/types/HeaderT";
import { LocaleLayoutT } from "@/messages/types/LocaleLayoutT";
import SideBar from "./components/SideBar";
import { HeroRightSideT } from "@/messages/types/HeroRightSideT";
import { ContactUsT } from "@/messages/types/ContactUsT";

type Props = {
  children: React.ReactNode;
  params: { locale: string };
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata() {
  const t = await localize(LocaleLayoutT);

  return {
    title: t.title,
    description: t.description,
  };
}

export default async function LocaleLayout({
  children,
  params: { locale },
}: Props) {
  unstable_setRequestLocale(locale);
  const headerT = await localize(HeaderT);
  const footerT = await localize(ContactUsT);
  const contactT = await localize(HeroRightSideT);
  return (
    <html lang={locale}>
      <body
        className={`${rubik.variable} ${openSans.variable} ${montserrat.variable}`}
      >
        <Header t={headerT} />
        <main>{children}</main>
        <Footer t={footerT} t2={contactT} />
        <SideBar />
        <TotopButton />
        <div id="modal"></div>
      </body>
    </html>
  );
}
