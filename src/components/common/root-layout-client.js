"use client";

import { useEffect } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Footer from "@/components/common/footer";
import NavBar from "@/components/common/navbar";

export default function RootLayoutClient({ children }) {
  const path = usePathname();
  const showMovingBackground =
    path !== "/" &&
    path !== "/about/meet-the-visionaries" &&
    path !== "/about/the-aerobay-story" &&
    path !== "/careers" &&
    path !== "/get-in-touch" &&
    path !== "/aerobay-for-school" &&
    path !== "/more/our-clients" &&
    path !== "/privacy-policy" &&
    path !== "/terms-and-conditions" &&
    !path.startsWith("/more/education");

  useEffect(() => {
    if (path === "/") {
      document.body.classList.add("home-page");
    } else {
      document.body.classList.remove("home-page");
    }

    return () => {
      document.body.classList.remove("home-page");
    };
  }, [path]);

  return (
    <>
      {showMovingBackground && (
        <div className="moving-box">
          <Image
            className="bg-gred animate-four"
            alt=""
            aria-hidden="true"
            src="/images/bg-banner.png"
            width={1920}
            height={1080}
            priority
          />
        </div>
      )}
      <NavBar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
