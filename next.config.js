/** @type {import('next').NextConfig} */
const withTM = require("next-transpile-modules")(["@amcharts/amcharts5"]);
const nextConfig = withTM({
  compiler: {
    styledComponents: true,
  },
  swcMinify: true,
  images: {
    domains: [
      "media-1.api-sports.io",
      "media-2.api-sports.io",
      "media-3.api-sports.io",
      "media-4.api-sports.io",
      "media-5.api-sports.io",
      "media-6.api-sports.io",
      "media-7.api-sports.io",
      "media-8.api-sports.io",
      "media-9.api-sports.io",
      "media-10.api-sports.io",
    ],
  },
});

module.exports = nextConfig;
