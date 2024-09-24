/** @type {import('next').NextConfig} */
import createNextIntlPlugin from "next-intl/plugin";
// import withPlaiceholder from "@plaiceholder/next";
// import withPlugins from "next-compose-plugins";
// import { withNextVideo } from "next-video/process";

const withNextIntl = createNextIntlPlugin();

const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    // deviceSizes: [768, 1024, 1280],
    // deviceSizes: [375, 768, 1024, 1440, 1920],
    // loader: "custom",
    // loaderFile: "",
    // remotePatterns: [
    //   {
    //     protocol:
    //   }
    // ]
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
export default withNextIntl(nextConfig);
// export default withPlaiceholder(nextConfig);
// export default withPlugins([withNextIntl, withPlaiceholder], nextConfig);

// const combinedConfig = withPlaiceholder(withNextIntl(nextConfig));
// export default combinedConfig;

// config.module.rules.push({
//   test: /\.(mp4|webm|ogg)$/,
//   use: {
//     loader: "file-loader",
//     options: {
//       publicPath: "/_next/static/videos/",
//       outputPath: "static/videos/",
//       name: "[name].[hash].[ext]",
//     },
//   },
// });
