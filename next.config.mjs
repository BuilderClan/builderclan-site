/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/careers",
        destination: "https://builderclan.org/careers",
        permanent: false,
      },
      {
        source: "/eduquest/register",
        destination: "https://app.formbricks.com/s/x7km1hi7s9gn39eyokv91qxk", // replace with actual form URL
        permanent: false,
      },
      {
        source: "/eduquest/guide",
        destination: "https://www.notion.so/builderclan/EduQuest-The-24-Hour-Game-Based-Learning-Hackathon-2427f33836f080029c2fc61e8cc091b1", // replace with actual Notion page
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

