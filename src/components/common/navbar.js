"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import WelcomeModal from "@/components/common/welcome-modal";

export default function NavBar() {
  const [showModal, setShowModal] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [showAbout, setShowAbout] = useState(false);
  const [showMore, setShowMore] = useState(false);
  const [isBackgroundHeader, setIsBackgroundHeader] = useState(false);
  const lastScroll = useRef(0);

  useEffect(() => {
    if (localStorage.getItem("hasSeenModal")) return undefined;

    const timer = window.setTimeout(() => {
      if (!localStorage.getItem("hasSeenModal")) {
        setShowModal(true);
        localStorage.setItem("hasSeenModal", "true");
      }
    }, 8000);

    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scroll = window.scrollY;
      setIsBackgroundHeader(scroll > 0 && lastScroll.current > scroll);
      lastScroll.current = scroll;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleCloseModal = useCallback(() => setShowModal(false), []);
  const closeNavigation = () => {
    setShowMenu(false);
    setShowAbout(false);
    setShowMore(false);
  };

  return (
    <header
      className={`header-area header-sticky ${
        isBackgroundHeader ? "background-header" : ""
      }`}
    >
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <nav className="main-nav" aria-label="Primary navigation">
              <Link href="/" className="logo" onClick={closeNavigation}>
                <img
                  className="logo-base"
                  src="/images/logo.png"
                  alt="AeroBay"
                />
                <img
                  className="logo-hover"
                  src="/images/logo-hover.png"
                  alt=""
                  aria-hidden="true"
                />
              </Link>

              <ul
                className="nav"
                style={showMenu ? { display: "block" } : { display: "none" }}
              >
                <li className={`has-sub ${showAbout ? "is-open-sub" : ""}`}>
                  <a
                    href="#about-menu"
                    aria-expanded={showAbout}
                    onClick={(event) => {
                      event.preventDefault();
                      setShowAbout((current) => !current);
                    }}
                  >
                    About us
                  </a>
                  <ul
                    id="about-menu"
                    className="sub-menu"
                    style={showAbout ? { display: "block" } : { display: "none" }}
                  >
                    <li>
                      <Link
                        href="/about/the-aerobay-story"
                        onClick={closeNavigation}
                      >
                        The AeroBay story
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/about/meet-the-visionaries"
                        onClick={closeNavigation}
                      >
                        Meet the visionaries
                      </Link>
                    </li>
                  </ul>
                </li>

                <li>
                  <Link href="/aerobay-for-school" onClick={closeNavigation}>
                    AeroBay for schools
                  </Link>
                </li>
                <li className="scroll-to-section">
                  <Link href="/careers" onClick={closeNavigation}>
                    Careers
                  </Link>
                </li>
                <li className="scroll-to-section">
                  <Link href="/get-in-touch" onClick={closeNavigation}>
                    Get in touch
                  </Link>
                </li>

                <li className={`has-sub ${showMore ? "is-open-sub" : ""}`}>
                  <a
                    href="#more-menu"
                    aria-expanded={showMore}
                    onClick={(event) => {
                      event.preventDefault();
                      setShowMore((current) => !current);
                    }}
                  >
                    More
                  </a>
                  <ul
                    id="more-menu"
                    className="sub-menu"
                    style={showMore ? { display: "block" } : { display: "none" }}
                  >
                    <li>
                      <Link href="/more/our-clients" onClick={closeNavigation}>
                        Our clients
                      </Link>
                    </li>
                    <li>
                      <Link href="/more/education" onClick={closeNavigation}>
                        What’s new in education
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>

              <div className="right-link">
                <a
                  href="http://lms.aerobay.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ cursor: "pointer", color: "white" }}
                >
                  LMS{" "}
                  <span>
                    <svg
                      fill="#fff"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <polygon points="7 7 15.586 7 5.293 17.293 6.707 18.707 17 8.414 17 17 19 17 19 5 7 5 7 7" />
                    </svg>
                  </span>
                </a>
              </div>

              <button
                type="button"
                className={`menu-trigger ${showMenu ? "active" : ""}`}
                onClick={() => setShowMenu((current) => !current)}
                aria-expanded={showMenu}
                aria-label="Toggle navigation"
              >
                <span>Menu</span>
              </button>
            </nav>
          </div>
        </div>
      </div>

      {showModal && <WelcomeModal onClose={handleCloseModal} />}
    </header>
  );
}
