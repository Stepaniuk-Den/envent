/** @type {import('next').NextConfig} */
import createNextIntlPlugin from "next-intl/plugin";
import { withNextVideo } from "next-video/process";

const withNextIntl = createNextIntlPlugin();

const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    // deviceSizes: [375, 768, 1024, 1440, 1920],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },

  // const { withNextVideo } = require('next-video/process')

  // /** @type {import('next').nextConfig} */
  // const nextConfig = {}

  // module.exports = withNextVideo(nextConfig)
  // ------------------------------------
  // webpack(config) {
  //   // Знайти існуюче правило, яке обробляє SVG
  //   const fileLoaderRule = config.module.rules.find((rule) =>
  //     rule.test?.test?.(".svg")
  //   );

  //   config.module.rules.push(
  //     // Повторно застосувати існуюче правило, але лише для SVG, що закінчуються на ?url
  //     {
  //       ...fileLoaderRule,
  //       test: /\.svg$/i,
  //       resourceQuery: /url/, // *.svg?url
  //     },
  //     // Перетворити всі інші *.svg в React компоненти
  //     {
  //       test: /\.svg$/i,
  //       issuer: fileLoaderRule.issuer,
  //       resourceQuery: { not: [...fileLoaderRule.resourceQuery.not, /url/] }, // виключити якщо *.svg?url
  //       use: ["@svgr/webpack"],
  //     }
  //   );

  //   // Модифікувати правило для обробки файлів, щоб ігнорувати *.svg
  //   fileLoaderRule.exclude = /\.svg$/i;

  //   return config;
  // },
};

// export default nextConfig;
export default withNextIntl(withNextVideo(nextConfig));
