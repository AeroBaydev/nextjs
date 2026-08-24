import EducationHub from "./education-hub";

export const metadata = {
  title: { absolute: "AeroBay Education | Insights on Experiential Learning & Future Skills" },
  description:
    "Explore AeroBay perspectives on experiential learning, skill education, emerging technology, school innovation and Composite Skill Labs.",
  alternates: { canonical: "/more/education" },
  openGraph: {
    title: "AeroBay Education",
    description:
      "Ideas and perspectives on experiential learning, emerging technology, skill education and the changing world of education.",
    url: "/more/education",
    type: "website",
    images: [{ url: "/images/blog-fig1.jpg", alt: "An AeroBay Composite Skill Lab learning environment" }],
  },
};

export default function EducationPage() {
  return <EducationHub />;
}
