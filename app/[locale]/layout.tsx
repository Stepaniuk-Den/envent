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
import dynamic from "next/dynamic";
import { cookies } from "next/headers";
import { MainPageT } from "@/messages/types/MainPageT";

type Props = {
  children: React.ReactNode;
  params: { locale: string };
};

const AppThemeProvider = dynamic(() => import("@/utils/theme-provider"), {
  ssr: false,
});

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

  const theme = cookies().get("__theme__")?.value || "system";

  const headerT = await localize(HeaderT);
  const ariaLabelT = await localize(MainPageT)

  return (
    <html
      lang={locale}
      className={theme}
      style={theme !== "system" ? { colorScheme: theme } : {}}
    >
      <body
        className={`${rubik.variable} ${openSans.variable} ${montserrat.variable}`}
      >
        <AppThemeProvider enableSystem attribute="class" defaultTheme={theme}>
          <Header t={headerT} ariaLabel={ariaLabelT}  />
          <main>{children}</main>
          <Footer />
          <SideBar ariaLabel={ariaLabelT} />
          <TotopButton ariaLabel={ariaLabelT} />
          <div id="modal"></div>
        </AppThemeProvider>
      </body>
    </html>
  );
}
