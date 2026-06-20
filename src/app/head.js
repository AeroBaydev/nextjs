const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || "https://aerobay.in").replace(
  /\/$/,
  ""
);

export default function Head() {
  const title =
    "AeroBay | Industrial Grade Composite Skill Lab & STEAM Education for Schools";
  const description =
    "AeroBay by Aviotron Aerospace delivers CBSE-aligned industrial grade Composite Skill Lab setups for schools across India: robotics, AI, aerospace, drones, coding, and NEP 2020 experiential learning.";
  const canonical = `${siteUrl}/`;

  return (
    <>
      <title>{title}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      <link rel="icon" href="/images/Plane.png" type="image/png" sizes="32x32" />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css"
        integrity="sha512-PcAa7CN6dPpp2Cu+P+U7WOMCH2MYfj5qEim0b7/pIAXp2p56G+3m/ZwHVhdKgUyqybpFQ7Ey1eoM8rLQAMU1Hg=="
        crossOrigin="anonymous"
        referrerPolicy="no-referrer"
      />
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
