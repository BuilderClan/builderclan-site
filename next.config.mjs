/** @type {import('next').NextConfig} */
const nextConfig = {
  allowedDevOrigins: ["localhost:3000", "192.168.1.37:3000", "192.168.1.37"],
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "www.builderclan.org",
          },
        ],
        destination: "https://builderclan.org/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
