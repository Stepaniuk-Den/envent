'use client';

import Error404 from './[locale]/components/Error404';
import './globals.scss';

// Render the default Next.js 404 page when a route
// is requested that doesn't match the middleware and
// therefore doesn't have a locale associated with it.

export default function NotFound() {

  return (
    <html>
      <body>
        {/* <Error statusCode={404} /> */}
        <Error404/>
      </body>
    </html>
  );
}