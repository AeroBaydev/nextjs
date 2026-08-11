"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import styles from "./home.module.css";

const solutions = [
  {
    number: "01",
    title: "Composite Skill Lab",
    copy: "A multidisciplinary environment where students explore design, aviation, electronics, making and practical skills through hands-on projects.",
    image: "/images/gallery-big3.jpg",
    href: "/composite-skill-lab",
    tag: "Multidisciplinary",
  },
  {
    number: "02",
    title: "AI & Robotics Lab",
    copy: "A hands-on environment where students learn to code, automate, prototype, and solve real problems.",
    image: "/images/gallery-big4.JPG",
    href: "/ai-robotics-lab",
    tag: "Coding & automation",
  },
  {
    number: "03",
    title: "STEAM Lab",
    copy: "A multidisciplinary space where students connect science, technology, engineering, arts and mathematics through practical projects.",
    image: "/images/tilt-imgs/tilt-1.jpg",
    tag: "Integrated STEAM",
  },
  {
    number: "04",
    title: "Kaushal Bodh Lab",
    copy: "A practical learning environment for making, working with tools and applying classroom concepts through guided activities.",
    image: "/images/tilt-imgs/tilt-4.jpg",
    tag: "Applied skills",
  },
  {
    number: "05",
    title: "Aeromodelling Lab",
    copy: "An aviation-focused environment where students explore aircraft design, build models and learn through testing and flight.",
    image: "/images/gallery-big1.jpg",
    tag: "Flight & design",
  },
  {
    number: "06",
    title: "Idea Lab",
    copy: "A creative space where students develop ideas through design, prototyping, iteration and collaborative problem-solving.",
    image: "/images/gallery-big6.JPG",
    tag: "Innovation & making",
  },
];

function SolutionCard({ solution, index }) {
  const content = (
    <>
      <Image
        src={solution.image}
        alt={`${solution.title} hands-on learning experience at AeroBay`}
        fill
        sizes="(max-width: 767px) 82vw, (max-width: 991px) 44vw, (max-width: 1199px) 45vw, 440px"
      />
      <span className={styles.solutionShade} aria-hidden="true" />
      <span className={styles.solutionTop}>
        <span>{solution.number}</span>
        <span>{solution.tag}</span>
      </span>
      <span className={styles.solutionContent}>
        <span className={styles.solutionText}>
          <h3>{solution.title}</h3>
          <p>{solution.copy}</p>
        </span>
        <span className={styles.cardArrow} aria-hidden="true">
          <FontAwesomeIcon icon={faArrowRight} />
        </span>
      </span>
    </>
  );

  const cardProps = {
    className: `${styles.solutionCard} ${
      solution.href ? "" : styles.solutionCardStatic
    }`,
    style: { "--card-index": index },
  };

  if (solution.href) {
    return (
      <Link
        href={solution.href}
        aria-label={`Explore ${solution.title}`}
        {...cardProps}
      >
        {content}
      </Link>
    );
  }

  return <article {...cardProps}>{content}</article>;
}

export default function HomeSolutions() {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [current, setCurrent] = useState(0);
  const [canMoveBack, setCanMoveBack] = useState(false);
  const [canMoveForward, setCanMoveForward] = useState(true);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section || typeof IntersectionObserver === "undefined") {
      setIsVisible(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.14 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  const updateCurrent = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;

    const cards = Array.from(track.children);
    const nearestIndex = cards.reduce((nearest, card, index) => {
      const nearestDistance = Math.abs(
        cards[nearest].offsetLeft - track.scrollLeft
      );
      const distance = Math.abs(card.offsetLeft - track.scrollLeft);
      return distance < nearestDistance ? index : nearest;
    }, 0);

    setCurrent(nearestIndex);
    setCanMoveBack(track.scrollLeft > 2);
    setCanMoveForward(
      track.scrollLeft < track.scrollWidth - track.clientWidth - 2
    );
  }, []);

  useEffect(() => {
    updateCurrent();
    window.addEventListener("resize", updateCurrent);
    return () => window.removeEventListener("resize", updateCurrent);
  }, [updateCurrent]);

  const move = useCallback((direction) => {
    const track = trackRef.current;
    if (!track) return;

    const cards = Array.from(track.children);
    const step = cards[1]
      ? cards[1].offsetLeft - cards[0].offsetLeft
      : track.clientWidth;

    track.scrollBy({ left: direction * step, behavior: "smooth" });
  }, []);

  return (
    <section
      id="experiences"
      className={`${styles.solutions} ${
        isVisible ? styles.solutionsVisible : ""
      }`}
      ref={sectionRef}
      aria-labelledby="solutions-heading"
    >
      <div className={styles.shell}>
        <div className={styles.sectionHeading}>
          <div>
            <p className={styles.eyebrow}>Experiential learning</p>
            <h2 id="solutions-heading">Explore. Build. Discover.</h2>
          </div>
          <p>
            From AI and robotics to aerospace, practical skills and innovation,
            AeroBay creates hands-on environments where students learn by doing.
          </p>
        </div>

        <div className={styles.solutionCarousel}>
          <div
            className={styles.solutionTrack}
            ref={trackRef}
            onScroll={updateCurrent}
            aria-label="Learning experiences"
          >
            {solutions.map((solution, index) => (
              <SolutionCard
                solution={solution}
                index={index}
                key={solution.title}
              />
            ))}
          </div>

          <div className={styles.carouselFooter}>
            <div className={styles.carouselProgress} aria-live="polite">
              <span>{String(current + 1).padStart(2, "0")}</span>
              <span aria-hidden="true" />
              <span>/ {String(solutions.length).padStart(2, "0")}</span>
            </div>

            <p className={styles.swipeHint}>Swipe or use the arrows to explore</p>

            <div className={styles.carouselControls}>
              <button
                type="button"
                onClick={() => move(-1)}
                disabled={!canMoveBack}
                aria-label="Show previous learning experience"
              >
                <FontAwesomeIcon icon={faArrowLeft} />
              </button>
              <button
                type="button"
                onClick={() => move(1)}
                disabled={!canMoveForward}
                aria-label="Show next learning experience"
              >
                <FontAwesomeIcon icon={faArrowRight} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
