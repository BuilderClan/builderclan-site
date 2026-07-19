/** @type {import('next').NextConfig} */
const nextConfig = {
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

