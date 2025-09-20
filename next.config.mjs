/** @type {import('next').NextConfig} */
const nextConfig = {
  compress: true,
  images: {
    domains: ["github.com"],
  },
  async redirects() {
    return [
      {
        source: "/careers",
        destination: "https://builderclan.org/careers",
        permanent: false,
      },
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

