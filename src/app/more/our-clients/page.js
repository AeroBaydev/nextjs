import SchoolNetworkPage from "./school-network-page";

export const metadata = {
  title: { absolute: "AeroBay School Network | Schools Across India" },
  description:
    "Explore the AeroBay school network and discover schools across India creating hands-on learning opportunities for students.",
  alternates: { canonical: "/more/our-clients" },
  openGraph: {
    title: "AeroBay School Network",
    description:
      "Schools choosing to bring hands-on learning, technology and making experiences closer to students.",
    type: "website",
    url: "/more/our-clients",
  },
};

export default function OurClientsPage() {
  return <SchoolNetworkPage />;
}
