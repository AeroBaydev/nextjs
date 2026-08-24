import SchoolsPage from "./schools-page";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://aerobay.in";

export const metadata = {
  title: { absolute: "AeroBay for Schools | STEM & STEAM Learning Environments" },
  description:
    "AeroBay helps schools design, build, operate and continuously improve hands-on STEM and STEAM learning environments with trained educators, curriculum and ongoing support.",
  alternates: { canonical: "/aerobay-for-school" },
  openGraph: {
    title: "AeroBay for Schools — A Lab Is Only the Beginning",
    description:
      "Infrastructure, trained educators, curriculum, hands-on experiences and ongoing program support for schools.",
    url: `${siteUrl}/aerobay-for-school`,
    type: "website",
    images: [{ url: "/images/gallery-big3.jpg", width: 1200, height: 630, alt: "AeroBay composite skill lab learning environment" }],
  },
};

export default function AeroBayForSchool() {
  return <SchoolsPage />;
}
