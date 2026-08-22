import { Manrope } from "next/font/google";
import "./globals.css";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../public/css/theme.css";
import "../../public/css/lightbox.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import RootLayoutClient from "@/components/common/root-layout-client";

config.autoAddCss = false;

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://aerobay.in"),
  title: {
    default: "AeroBay | Composite Skill Lab, AI Lab and Robotics Lab for Schools",
    template: "%s | AeroBay",
  },
  description:
    "AeroBay by Aviotron Aerospace builds Composite Skill Labs, AI Labs, Robotics Labs and STEAM learning ecosystems for schools across India.",
  applicationName: "AeroBay",
  authors: [{ name: "AeroBay" }],
  creator: "AeroBay",
  publisher: "Aviotron Aerospace Pvt Ltd",
  robots: {
    index: process.env.NEXT_PUBLIC_ENVIRONMENT === "production",
    follow: process.env.NEXT_PUBLIC_ENVIRONMENT === "production",
    googleBot: {
      index: process.env.NEXT_PUBLIC_ENVIRONMENT === "production",
      follow: process.env.NEXT_PUBLIC_ENVIRONMENT === "production",
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/images/Plane.png",
    shortcut: "/images/Plane.png",
    apple: "/images/Plane.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={manrope.className}>
      <body>
        <RootLayoutClient>{children}</RootLayoutClient>
      </body>
    </html>
  );
}
