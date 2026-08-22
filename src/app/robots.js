const isProduction = process.env.NEXT_PUBLIC_ENVIRONMENT === "production";

export default function robots() {
  if (!isProduction) {
    return { rules: [{ userAgent: "*", disallow: "/" }] };
  }

  const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || "https://aerobay.in").replace(/\/$/, "");
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
