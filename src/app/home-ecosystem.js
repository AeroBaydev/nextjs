"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import styles from "./home.module.css";

const pillars = [
  {
    number: "01",
    title: "Purpose-Built Learning Spaces",
    copy: "Purpose-designed environments where students explore, experiment, build and apply concepts through hands-on learning.",
    image: "/images/gallery-big3.jpg",
    alt: "AeroBay purpose-built aerospace and STEM learning space",
  },
  {
    number: "02",
    title: "Experiential Curriculum",
    copy: "Learning designed around practical application, real-world examples and projects—not theory alone.",
    image: "/images/tilt-imgs/tilt-1.jpg",
    alt: "Students taking part in a practical AeroBay STEM activity",
  },
  {
    number: "03",
    title: "Expert STEM Educators",
    copy: "Trained educators who bring concepts to life through demonstrations, experimentation and hands-on implementation.",
    image: "/images/tilt-imgs/tilt-4.jpg",
    alt: "An AeroBay STEM educator guiding students through an aircraft activity",
  },
  {
    number: "04",
    title: "Projects, Challenges & Opportunities",
    copy: "Practical projects and challenges that encourage students to apply their skills, build confidence and explore their interests.",
    image: "/images/gallery-big1.jpg",
    alt: "Students testing an AeroBay aerospace project outdoors",
  },
];

const storyItems = [
  {
    label: "Curriculum",
    title: "Experiential Curriculum",
    copy: "Learning designed around practical application, real-world examples and projects—not theory alone.",
    x: "28%",
    y: "24%",
    image: "/images/hmsect-global/4.png",
    size: 68,
  },
  {
    label: "Learning Spaces",
    title: "Purpose-Built Learning Spaces",
    copy: "Purpose-designed environments give students room to explore, experiment, build and apply concepts through hands-on learning.",
    x: "73%",
    y: "29%",
    image: "/images/hmsect-global/1.png",
    size: 78,
  },
  {
    label: "Educators",
    title: "Expert STEM Educators",
    copy: "Trained educators connect explanation with demonstration, experimentation and hands-on implementation.",
    x: "19%",
    y: "57%",
    image: "/images/hmsect-global/3.png",
    size: 54,
  },
  {
    label: "AeroBay Kits",
    title: "Materials Made for Exploration",
    copy: "Purposeful kits and components help students move from explanation to practical exploration and making.",
    x: "78%",
    y: "61%",
    image: "/images/hmsect-global/7.png",
    size: 72,
  },
  {
    label: "Projects",
    title: "Learning Through Projects",
    copy: "Practical projects encourage students to apply skills, test ideas and build confidence through experience.",
    x: "39%",
    y: "78%",
    image: "/images/hmsect-global/5.png",
    size: 76,
  },
  {
    label: "Challenges",
    title: "Challenges & Competitions",
    copy: "Structured challenges and competitions give students a setting to apply their skills and learn through participation.",
    x: "88%",
    y: "43%",
    image: "/images/hmsect-global/2.png",
    size: 96,
  },
  {
    label: "Certifications",
    title: "Recognising the Learning Journey",
    copy: "Certifications provide students with a tangible record of participation in their AeroBay learning journey.",
    x: "9%",
    y: "36%",
    image: "/images/hmsect-global/6.png",
    size: 52,
  },
  {
    label: "Program Support",
    title: "A Connected Program",
    copy: "Ongoing program support keeps learning spaces, educators, curriculum and activities connected under one accountable partner.",
    x: "65%",
    y: "84%",
    image: "/images/hmsect-global/6.png",
    size: 40,
    moon: true,
  },
];

function Planet({ item, index, activeIndex, onActivate }) {
  const isActive = index === activeIndex;

  return (
    <button
      type="button"
      className={`${styles.planet} ${item.moon ? styles.planetMoon : ""} ${
        isActive ? styles.planetActive : ""
      }`}
      style={{
        "--planet-x": item.x,
        "--planet-y": item.y,
        "--planet-size": `${item.size}px`,
      }}
      onClick={() => onActivate(index)}
      aria-label={`Explore ${item.label}`}
      aria-pressed={isActive}
    >
      <span className={styles.planetVisual} aria-hidden="true">
        <Image src={item.image} alt="" fill sizes={`${item.size}px`} />
      </span>
      <span className={styles.planetLabel}>{item.label}</span>
    </button>
  );
}

function StoryContent({ item, index }) {
  return (
    <div className={styles.storyContent} key={item.label}>
      <p className={styles.storyIndex}>
        {String(index + 1).padStart(2, "0")}
        <span>/ {String(storyItems.length).padStart(2, "0")}</span>
      </p>
      <p className={styles.storyLabel}>{item.label}</p>
      <h3>{item.title}</h3>
      <p className={styles.storyCopy}>{item.copy}</p>
    </div>
  );
}

export default function HomeEcosystem() {
  const sectionRef = useRef(null);
  const storyRef = useRef(null);
  const frameRef = useRef(null);
  const tickingRef = useRef(false);
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [storyPhase, setStoryPhase] = useState("before");

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
      { threshold: 0.08 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  const updateStory = useCallback(() => {
    const story = storyRef.current;
    const frame = frameRef.current;
    tickingRef.current = false;

    if (!story || !frame || window.innerWidth < 768) return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reducedMotion) return;

    const rect = story.getBoundingClientRect();
    const nextPhase =
      rect.top > 0
        ? "before"
        : rect.bottom <= frame.offsetHeight
          ? "after"
          : "active";
    const travel = Math.max(story.offsetHeight - frame.offsetHeight, 1);
    const progress = Math.min(Math.max(-rect.top / travel, 0), 1);
    const nextIndex = Math.min(
      Math.round(progress * (storyItems.length - 1)),
      storyItems.length - 1
    );

    setActiveIndex((current) =>
      current === nextIndex ? current : nextIndex
    );
    setStoryPhase((current) =>
      current === nextPhase ? current : nextPhase
    );
  }, []);

  useEffect(() => {
    const requestUpdate = () => {
      if (tickingRef.current) return;
      tickingRef.current = true;
      window.requestAnimationFrame(updateStory);
    };

    updateStory();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);

    return () => {
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
    };
  }, [updateStory]);

  const activateStep = useCallback((index) => {
    const story = storyRef.current;
    const frame = frameRef.current;
    if (!story || !frame) return;

    setActiveIndex(index);
    const travel = Math.max(story.offsetHeight - frame.offsetHeight, 0);
    const storyTop = window.scrollY + story.getBoundingClientRect().top;
    const target = storyTop + (travel * index) / (storyItems.length - 1);
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    window.scrollTo({
      top: target,
      behavior: reducedMotion ? "auto" : "smooth",
    });
  }, []);

  return (
    <section
      className={`${styles.ecosystem} ${
        isVisible ? styles.ecosystemVisible : ""
      }`}
      ref={sectionRef}
      aria-labelledby="ecosystem-heading"
    >
      <div className={styles.shell}>
        <div className={styles.ecosystemIntro}>
          <div>
            <p className={styles.eyebrow}>The AeroBay difference</p>
            <h2 id="ecosystem-heading">
              A complete ecosystem. One accountable partner.
            </h2>
          </div>
          <p>
            From learning spaces and curriculum to Expert STEM Educators,
            projects and ongoing program support, AeroBay brings the essential
            pieces together under one partner.
          </p>
        </div>

        <div className={styles.ecosystemGrid}>
          {pillars.map((item, index) => (
            <article key={item.title} style={{ "--pillar-index": index }}>
              <Image
                src={item.image}
                alt={item.alt}
                fill
                sizes="(max-width: 767px) calc(100vw - 36px), (max-width: 991px) 50vw, 25vw"
              />
              <span className={styles.ecosystemCardShade} aria-hidden="true" />
              <span className={styles.ecosystemCardNumber}>{item.number}</span>
              <div>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className={styles.ecosystemStory} id="ecosystem-story" ref={storyRef}>
        <div
          className={`${styles.ecosystemSticky} ${
            storyPhase === "active"
              ? styles.ecosystemStickyActive
              : storyPhase === "after"
                ? styles.ecosystemStickyAfter
                : ""
          }`}
          ref={frameRef}
        >
          <div className={styles.storyShell}>
            <div
              className={styles.solarStage}
              style={{
                "--system-rotation": `${activeIndex * -1.15}deg`,
                "--system-shift": `${(activeIndex - 3.5) * 0.22}%`,
              }}
              role="group"
              aria-label="Interactive AeroBay learning ecosystem"
            >
              <div className={styles.solarVignette} aria-hidden="true" />
              <div className={styles.orbitSystem}>
                <div className={`${styles.orbit} ${styles.orbitOne}`} aria-hidden="true" />
                <div className={`${styles.orbit} ${styles.orbitTwo}`} aria-hidden="true" />
                <div className={`${styles.orbit} ${styles.orbitThree}`} aria-hidden="true" />
                <div className={`${styles.orbit} ${styles.orbitFour}`} aria-hidden="true" />
                <div
                  className={styles.solarSun}
                  role="img"
                  aria-label="AeroBay at the centre of the ecosystem"
                >
                  <Image
                    src="/images/hmsect-global/sun-static.webp"
                    alt=""
                    fill
                    sizes="150px"
                  />
                  <span>AeroBay</span>
                </div>

                {storyItems.map((item, index) => (
                  <Planet
                    item={item}
                    index={index}
                    activeIndex={activeIndex}
                    onActivate={activateStep}
                    key={item.label}
                  />
                ))}
              </div>
            </div>

            <aside className={styles.storyPanel} aria-live="polite">
              <StoryContent
                item={storyItems[activeIndex]}
                index={activeIndex}
              />
              <div className={styles.storyProgress} aria-hidden="true">
                {storyItems.map((item, index) => (
                  <span
                    className={index === activeIndex ? styles.storyProgressActive : ""}
                    key={item.label}
                  />
                ))}
              </div>
              <p className={styles.storyScrollHint}>Scroll to explore the ecosystem</p>
            </aside>
          </div>
        </div>
      </div>

      <div className={`${styles.shell} ${styles.ecosystemMobileStory}`}>
        <div
          className={styles.mobileSolarOverview}
          aria-label="AeroBay at the centre of the learning ecosystem"
        >
          <Image
            src="/images/hmsect-global/sun-static.webp"
            alt=""
            fill
            sizes="240px"
          />
          <span>AeroBay</span>
        </div>
        {storyItems.map((item, index) => (
          <article className={styles.mobileStoryItem} key={item.label}>
            <span className={styles.mobilePlanet} aria-hidden="true">
              <Image src={item.image} alt="" fill sizes="44px" />
            </span>
            <StoryContent item={item} index={index} />
          </article>
        ))}
      </div>
    </section>
  );
}
