"use client";

import Error from "next/error";

import { montserrat, openSans, rubik } from "./[locale]/fonts";

import './[locale]/globals.scss';
import Error404 from "./[locale]/components/Error404";
// import "./globals.scss";

// Render the default Next.js 404 page when a route
// is requested that doesn't match the middleware and
// therefore doesn't have a locale associated with it.

export default function NotFound() {
  return (
    <html>
      {/* <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head> */}
      <body className={`${rubik.variable} ${openSans.variable} ${montserrat.variable}`}>
        {/* <Error statusCode={404} /> */}
        <Error404/>
      </body>
    </html>
  );
}
