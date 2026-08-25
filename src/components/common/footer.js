"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import {
  faArrowRight,
  faChevronUp,
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import styles from "./footer.module.css";

const exploreLinks = [
  { label: "Our Story", href: "/about/the-aerobay-story" },
  { label: "AeroBay for Schools", href: "/aerobay-for-school" },
  { label: "Our School Network", href: "/more/our-clients" },
  { label: "Education", href: "/more/education" },
  { label: "Careers", href: "/careers" },
];

const socialLinks = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/aero_bay?igsh=MW05OHVzOW9naGx0OQ%3D%3D&utm_source=qr",
    icon: faInstagram,
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/aviotronaerospace?mibextid=LQQJ4d",
    icon: faFacebookF,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/aviotron-aerospace/",
    icon: faLinkedinIn,
  },
  {
    label: "YouTube",
    href: "https://youtube.com/@aerobaypodcast?si=vobd5gUxB0NJX_bD",
    icon: faYoutube,
  },
];

const contactLinks = [
  { label: "+91 9942329092", href: "tel:9942329092", icon: faPhone },
  { label: "+91 9871213152", href: "tel:9871213152", icon: faPhone },
  {
    label: "info@aviotron.com",
    href: "mailto:info@aviotron.com",
    icon: faEnvelope,
  },
];

export default function Footer() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const updateBackToTop = () => setShowBackToTop(window.scrollY > 700);

    updateBackToTop();
    window.addEventListener("scroll", updateBackToTop, { passive: true });

    return () => window.removeEventListener("scroll", updateBackToTop);
  }, []);

  const scrollToTop = () => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.shell}>
        <section className={styles.cta} aria-labelledby="footer-cta-title">
          <div className={styles.ctaCopy}>
            <p className={styles.eyebrow}>Start a conversation</p>
            <h2 id="footer-cta-title">
              Let&apos;s build <span>what&apos;s next.</span>
            </h2>
          </div>
          <p className={styles.ctaText}>
            Bring hands-on learning and technology experiences closer to your
            students.
          </p>
          <Link href="/get-in-touch" className={styles.primaryAction}>
            Talk to AeroBay
            <span aria-hidden="true">
              <FontAwesomeIcon icon={faArrowRight} />
            </span>
          </Link>
        </section>

        <div className={styles.divider} aria-hidden="true">
          <span />
        </div>

        <div className={styles.navigation}>
          <div className={styles.brandColumn}>
            <Link href="/" className={styles.logoLink} aria-label="AeroBay home">
              <Image
                src="/images/logo.png"
                alt="AeroBay"
                width={166}
                height={78}
                className={styles.logo}
              />
            </Link>
            <p className={styles.brandStatement}>
              An experiential learning ecosystem helping the next generation
              explore technology, design, science and real-world problem solving.
            </p>
            <p className={styles.ownership}>
              AeroBay is a brand owned and operated by Aviotron Aerospace Pvt Ltd.
            </p>
          </div>

          <nav className={styles.linkColumn} aria-label="Footer navigation">
            <p className={styles.columnTitle}>Explore</p>
            <ul>
              {exploreLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className={styles.linkColumn}>
            <p className={styles.columnTitle}>Connect</p>
            <Link href="/get-in-touch" className={styles.contactPageLink}>
              Get in Touch
            </Link>
            <ul className={styles.socialList}>
              {socialLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${link.label} — opens in a new tab`}
                    title={link.label}
                  >
                    <span aria-hidden="true">
                      <FontAwesomeIcon icon={link.icon} />
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <address className={styles.contactColumn}>
            <p className={styles.columnTitle}>Contact</p>
            <ul>
              {contactLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href}>
                    <span aria-hidden="true">
                      <FontAwesomeIcon icon={link.icon} />
                    </span>
                    {link.label}
                  </a>
                </li>
              ))}
              <li className={styles.location}>
                <span aria-hidden="true">
                  <FontAwesomeIcon icon={faLocationDot} />
                </span>
                <span>
                  D-64, D Block, Sector 63, Noida,
                  <br />
                  Hazratpur Wajidpur, Uttar Pradesh 201301, India
                </span>
              </li>
            </ul>
          </address>
        </div>

        <div className={styles.bottomBar}>
          <p>
            &copy; {new Date().getFullYear()} AeroBay / Aviotron Aerospace Pvt. Ltd.
          </p>
          <nav className={styles.legalLinks} aria-label="Legal">
            <Link href="/privacy-policy">Privacy Policy</Link>
            <Link href="/terms-and-conditions">Terms &amp; Conditions</Link>
          </nav>
        </div>
      </div>

      <button
        type="button"
        className={`${styles.backToTop} ${showBackToTop ? styles.visible : ""}`}
        onClick={scrollToTop}
        aria-label="Back to top"
        tabIndex={showBackToTop ? 0 : -1}
      >
        <FontAwesomeIcon icon={faChevronUp} aria-hidden="true" />
      </button>
    </footer>
  );
}
