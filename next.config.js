/** @type {import('next').NextConfig} */
const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

const nextConfig = {
  reactStrictMode: true,
  env: {
    firebase_url:
      "https://nextjs-37af1-default-rtdb.firebaseio.com/events.json",
    mongodb_username: "brhmtydev",
    mongodb_password: "44PvRqsk91EydhIb",
  },
};

module.exports = (phase) => {
  if (phase == PHASE_DEVELOPMENT_SERVER) {
    return nextConfig;
  }
};
