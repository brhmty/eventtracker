/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    firebase_url:
      "https://nextjs-37af1-default-rtdb.firebaseio.com/events.json",
    mongodb_username: "brhmtydev",
    mongodb_password: "44PvRqsk91EydhIb@cluster0",
  },
};

module.exports = nextConfig;
