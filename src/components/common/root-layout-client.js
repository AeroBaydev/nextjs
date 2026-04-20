"use client";

import { useEffect } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Footer from "@/components/common/footer";
import NavBar from "@/components/common/navbar";

export default function RootLayoutClient({ children }) {
  const path = usePathname();

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
      <div className="moving-box">
        <Image
          className="bg-gred animate-four"
          alt="Background banner"
          src="/images/bg-banner.png"
          width={1920}
          height={1080}
          priority
        />
      </div>
      <NavBar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
