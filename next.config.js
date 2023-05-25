/** @type {import('next').NextConfig} */
const withTM = require("next-transpile-modules")(["@amcharts/amcharts5"]);
const nextConfig = withTM({
  compiler: {
    styledComponents: true,
  },
  swcMinify: true,
});

module.exports = nextConfig;
