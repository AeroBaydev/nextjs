"use client";
import { useEffect } from 'react';
import { Manrope } from 'next/font/google';
import Head from 'next/head';
import './globals.css';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '@/components/common/footer';
import '../../public/css/theme.css';
import '../../public/css/lightbox.css';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css'; // Import FontAwesome styles
import NavBar from '@/components/common/navbar';
import { usePathname } from 'next/navigation';

config.autoAddCss = false; // Prevents FontAwesome from adding its CSS automatically

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700', '800'],
  display: 'swap',
});

export default function RootLayout({ children }) {
  const path = usePathname()

  useEffect(() => {
    if (path === '/') {
      document.body.classList.add('home-page');
    } else {
      document.body.classList.remove('home-page');
    }

    // Cleanup function to remove the class on unmount
    return () => {
      document.body.classList.remove('home-page');
    };
  }, [path]);

  return (
    <html lang="en" className={manrope.className}>
      <Head>
        <title>Arobay</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css"
          integrity="sha512-PcAa7CN6dPpp2Cu+P+U7WOMCH2MYfj5qEim0b7/pIAXp2p56G+3m/ZwHVhdKgUyqybpFQ7Ey1eoM8rLQAMU1Hg=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Manrope:wght@200..800&display=swap" />
        <link rel="icon" href="favicon.png" type="image/png" sizes="32x32" />
      </Head>
      <body>
        <div className="moving-box">
          <img className="bg-gred animate-four" alt="Background banner" src="/images/bg-banner.png" />
        </div>
        <NavBar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
