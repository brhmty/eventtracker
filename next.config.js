/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  env: {
    FIREBASE_URL:
      "https://nextjs-37af1-default-rtdb.firebaseio.com/events.json",
    MONGODB_USERNAME: "brhmtydev",
    MONGODB_PASSWORD: "rOcEXcPHQD0Ctj4R",
  },
};

module.exports = nextConfig;
