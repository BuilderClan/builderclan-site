/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // Domain redirects
      {
        source: "/",
        has: [
          {
            type: "host",
            value: "www.builderclan.org",
          },
        ],
        destination: "https://builderclan.org",
        permanent: true,
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
      // Registration redirects
      {
        source: "/careers",
        destination: "https://builderclan.org/careers", // Replace with your actual registration form URL
        permanent: false,
      },
      {
        source: "/eduquest/register",
        destination: "https://builderclan.org/eduquest/register", // Replace with your actual registration form URL
        permanent: false,
      },
      // Guide redirect to Notion
      {
        source: "/eduquest/guide",
        destination: "https://builderclan.org/eduquest/guide", // Replace with your actual Notion page URL
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
