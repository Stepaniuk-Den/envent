// // "use client";

// // import Error from "next/error";

// // import { montserrat, openSans, rubik } from "./[locale]/fonts";

// // import './[locale]/globals.scss';
// import Error404 from "./[locale]/components/Error404";
// import { localize } from "@/localize";
// import { MainPageT } from "@/messages/types/MainPageT";
// // import "./globals.scss";

// // Render the default Next.js 404 page when a route
// // is requested that doesn't match the middleware and
// // therefore doesn't have a locale associated with it.



// export default async function NotFound() {
//   const mainT = await localize(MainPageT);
//   return (
//     // <html>
//     //   <body className={`${rubik.variable} ${openSans.variable} ${montserrat.variable}`}>
//         <Error404 t={mainT.error}/>
//     //   </body>
//     // </html>
//   );
// }

// "use client";

// import { montserrat, openSans, rubik } from "./[locale]/fonts";

// import './globals.scss';
// import Error404 from "./[locale]/components/Error404";
// import { ReactNode } from "react";
// import { unstable_setRequestLocale } from "next-intl/server";
// import { localize } from "@/localize";
// import { MainPageT } from "@/messages/types/MainPageT";
// // import "./globals.scss";

// // Render the default Next.js 404 page when a route
// // is requested that doesn't match the middleware and
// // therefore doesn't have a locale associated with it.

// type Props = {
//   children: ReactNode;
//   params: { locale?: string };
// };


// export default async function NotFound({ params: { locale } }: Props) {
//   // unstable_setRequestLocale(locale);
//     const mainT = await localize(MainPageT);
//   return (
//     <html lang={locale}>
//       <body className={`${rubik.variable} ${openSans.variable} ${montserrat.variable}`}>
//         {/* <Error statusCode={404} /> */}
//         <Error404 t={mainT.error}/>
//       </body>
//     </html>
//   );
// }

// 'use client';

import { useTranslations } from 'next-intl';
import Error from 'next/error';
import Error404 from './[locale]/components/Error404';
import './globals.scss';

// Render the default Next.js 404 page when a route
// is requested that doesn't match the middleware and
// therefore doesn't have a locale associated with it.

export default function NotFound() {
  const t = useTranslations('MainPage');
  return (
    <html lang="en">
      <body>
        {/* <Error statusCode={404} /> */}
        <Error404/>
      </body>
    </html>
  );
}