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
  title: "AeroBay",
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
