const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || "https://aerobay.in").replace(
  /\/$/,
  ""
);  

const routes = [
  { path: "", priority: 1, changeFrequency: "weekly" },
  { path: "/composite-skill-lab", priority: 0.95, changeFrequency: "weekly" },
  { path: "/ai-robotics-lab", priority: 0.95, changeFrequency: "weekly" },
  { path: "/aerobay-for-school", priority: 0.9, changeFrequency: "monthly" },
  { path: "/more/education", priority: 0.9, changeFrequency: "monthly" },
  { path: "/about/the-aerobay-story", priority: 0.7, changeFrequency: "monthly" },
  { path: "/about/meet-the-visionaries", priority: 0.6, changeFrequency: "monthly" },
  { path: "/more/our-clients", priority: 0.6, changeFrequency: "monthly" },
  { path: "/careers", priority: 0.6, changeFrequency: "monthly" },
  { path: "/get-in-touch", priority: 0.8, changeFrequency: "monthly" },
];

export default function sitemap() {
  const lastModified = new Date();
  return routes.map(({ path, priority, changeFrequency }) => ({
    url: `${siteUrl}${path}`,
    lastModified,
    changeFrequency,
    priority,
  }));
}
