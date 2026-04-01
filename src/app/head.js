const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || "https://aerobay.in").replace(
  /\/$/,
  ""
);

export default function Head() {
  const title =
    "AeroBay | Industrial Grade Composite Skill Lab & STEAM Education for Schools";
  const description =
    "AeroBay by Aviotron Aerospace delivers CBSE-aligned industrial grade Composite Skill Lab setups for schools across India—robotics, AI, aerospace, drones, coding, and NEP 2020 experiential learning.";
  const canonical = `${siteUrl}/`;

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="AeroBay" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
    </>
  );
}

