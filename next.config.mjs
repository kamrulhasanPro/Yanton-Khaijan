/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,

  compiler: {
    removeConsole: true,
  },

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.themealdb.com",
        // port: "",
        pathname: "/images/media/**",
      },
      {
        protocol: "https",
        hostname: "randomuser.me",
        // port: "",
        pathname: "/api/portraits/**",
      },
    ],
  },

  // redirects page
  async redirects() {
    return [
      {
        source: "/foods-details/:id",
        destination: "/foods/:id",
        permanent: true,
      },
      {
        source: "/home",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
