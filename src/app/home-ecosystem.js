"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
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
    asset: 3,
    figureAsset: 3,
    size: 58,
    orbitWidth: "31%",
    orbitHeight: "35%",
    orbitHeightPortrait: "28%",
    orbitDuration: "29s",
    orbitDelay: "-18s",
    orbitInclination: "-2deg",
    orbitDepth: "24px",
    staticPosition: "63%",
    rotationDuration: "9s",
    glowColor: "rgba(255, 72, 33, 0.62)",
    cameraX: "-1.5%",
    cameraY: "1%",
    cameraRotateX: "0.6deg",
    cameraRotateY: "-1deg",
    panelPosition: "rightTop",
  },
  {
    label: "Learning Spaces",
    title: "Purpose-Built Learning Spaces",
    copy: "Purpose-designed environments where students explore, experiment, build and apply concepts through hands-on learning.",
    asset: 6,
    figureAsset: 6,
    size: 54,
    orbitWidth: "40%",
    orbitHeight: "43%",
    orbitHeightPortrait: "35%",
    orbitDuration: "37s",
    orbitDelay: "-3s",
    orbitInclination: "2.5deg",
    orbitDepth: "-32px",
    staticPosition: "8%",
    rotationDuration: "12s",
    glowColor: "rgba(221, 166, 104, 0.46)",
    cameraX: "1%",
    cameraY: "-1%",
    cameraRotateX: "-0.8deg",
    cameraRotateY: "1.2deg",
    panelPosition: "leftBottom",
  },
  {
    label: "STEM Educators",
    title: "Expert STEM Educators",
    copy: "Trained educators who bring concepts to life through demonstrations, experimentation and hands-on implementation.",
    asset: 1,
    figureAsset: 1,
    size: 78,
    orbitWidth: "49%",
    orbitHeight: "51%",
    orbitHeightPortrait: "42%",
    orbitDuration: "43s",
    orbitDelay: "-12s",
    orbitInclination: "-1deg",
    orbitDepth: "46px",
    staticPosition: "29%",
    rotationDuration: "15s",
    glowColor: "rgba(255, 184, 74, 0.48)",
    cameraX: "-1%",
    cameraY: "1.5%",
    cameraRotateX: "0.7deg",
    cameraRotateY: "-1.4deg",
    panelPosition: "rightBottom",
  },
  {
    label: "AeroBay Kits",
    title: "Materials Made for Exploration",
    copy: "Purposeful kits and components help students move from explanation to practical exploration and making.",
    asset: 7,
    figureAsset: 7,
    size: 88,
    orbitWidth: "58%",
    orbitHeight: "59%",
    orbitHeightPortrait: "49%",
    orbitDuration: "51s",
    orbitDelay: "-9s",
    orbitInclination: "3deg",
    orbitDepth: "-54px",
    staticPosition: "18%",
    rotationDuration: "17s",
    glowColor: "rgba(52, 224, 255, 0.58)",
    cameraX: "1.5%",
    cameraY: "-1%",
    cameraRotateX: "-0.6deg",
    cameraRotateY: "1deg",
    panelPosition: "leftTop",
  },
  {
    label: "Projects",
    title: "Learning Through Projects",
    copy: "Practical projects encourage students to apply their skills, test ideas and build confidence through experience.",
    asset: 4,
    figureAsset: 5,
    size: 82,
    orbitWidth: "67%",
    orbitHeight: "67%",
    orbitHeightPortrait: "56%",
    orbitDuration: "59s",
    orbitDelay: "-42s",
    orbitInclination: "-3.5deg",
    orbitDepth: "62px",
    staticPosition: "72%",
    rotationDuration: "19s",
    glowColor: "rgba(84, 139, 255, 0.54)",
    cameraX: "-1.25%",
    cameraY: "-1%",
    cameraRotateX: "-0.5deg",
    cameraRotateY: "-1.2deg",
    panelPosition: "rightTop",
  },
  {
    label: "Certifications",
    title: "Recognising the Learning Journey",
    copy: "Certifications provide students with a tangible record of participation in their AeroBay learning journey.",
    asset: 2,
    figureAsset: 2,
    size: 104,
    orbitWidth: "77%",
    orbitHeight: "75%",
    orbitHeightPortrait: "63%",
    orbitDuration: "67s",
    orbitDelay: "-30s",
    orbitInclination: "1.5deg",
    orbitDepth: "-76px",
    staticPosition: "45%",
    rotationDuration: "22s",
    glowColor: "rgba(232, 199, 153, 0.48)",
    cameraX: "1%",
    cameraY: "1.25%",
    cameraRotateX: "0.8deg",
    cameraRotateY: "1.1deg",
    panelPosition: "leftBottom",
  },
  {
    label: "Competitions",
    title: "Challenges & Competitions",
    copy: "Structured challenges and competitions give students a setting to apply their skills and learn through participation.",
    asset: 5,
    figureAsset: 5,
    size: 110,
    orbitWidth: "87%",
    orbitHeight: "83%",
    orbitHeightPortrait: "70%",
    orbitDuration: "76s",
    orbitDelay: "-65s",
    orbitInclination: "-1.5deg",
    orbitDepth: "82px",
    staticPosition: "86%",
    rotationDuration: "25s",
    glowColor: "rgba(255, 177, 30, 0.58)",
    cameraX: "-1%",
    cameraY: "0",
    cameraRotateX: "0deg",
    cameraRotateY: "-1deg",
    panelPosition: "rightBottom",
  },
  {
    label: "Analytics",
    title: "Analytics & LMS",
    copy: "AeroBay's learning management system supports program records, digital student portfolios and school-level learning insights.",
    asset: 4,
    figureAsset: 4,
    size: 64,
    orbitWidth: "97%",
    orbitHeight: "91%",
    orbitHeightPortrait: "77%",
    orbitDuration: "88s",
    orbitDelay: "-24s",
    orbitInclination: "2deg",
    orbitDepth: "-96px",
    staticPosition: "94%",
    rotationDuration: "28s",
    glowColor: "rgba(126, 175, 255, 0.48)",
    cameraX: "0.75%",
    cameraY: "-0.5%",
    cameraRotateX: "-0.4deg",
    cameraRotateY: "0.8deg",
    panelPosition: "leftTop",
  },
];

function Planet({ item, index, activeIndex, onActivate }) {
  const isActive = index === activeIndex;

  return (
    <div
      className={`${styles.livingOrbit} ${
        isActive ? styles.livingOrbitActive : ""
      }`}
      style={{
        "--orbit-width": item.orbitWidth,
        "--orbit-height": item.orbitHeight,
        "--orbit-height-portrait": item.orbitHeightPortrait,
        "--orbit-duration": item.orbitDuration,
        "--orbit-delay": item.orbitDelay,
        "--orbit-inclination": item.orbitInclination,
        "--orbit-depth": item.orbitDepth,
        "--static-position": item.staticPosition,
        "--planet-size": `${item.size}px`,
        "--rotation-duration": item.rotationDuration,
        "--planet-glow": item.glowColor,
      }}
    >
      <span className={styles.livingOrbitLine} aria-hidden="true" />
      <span className={styles.livingPlanetMotion}>
        <button
          type="button"
          className={`${styles.legacyPlanet} ${
            isActive ? styles.legacyPlanetActive : ""
          }`}
          onMouseEnter={() => onActivate(index)}
          onFocus={() => onActivate(index)}
          onClick={() => onActivate(index)}
          aria-label={`Explore ${item.label}`}
          aria-pressed={isActive}
        >
          <span className={styles.legacyPlanetFigure} aria-hidden="true">
            <Image
              src={`/images/hmsect-global/${item.asset}.png`}
              alt=""
              fill
              sizes={`${item.size}px`}
            />
          </span>
          <span className={styles.livingPlanetLabel} aria-hidden="true">
            {item.label}
          </span>
        </button>
      </span>
    </div>
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
  const atmosphereRef = useRef(null);
  const stageRef = useRef(null);
  const pointerFrameRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [storyVisible, setStoryVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [hasActiveStory, setHasActiveStory] = useState(false);

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

  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return undefined;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const moveCamera = (event) => {
      if (reducedMotion.matches || window.innerWidth < 768) return;
      if (pointerFrameRef.current) cancelAnimationFrame(pointerFrameRef.current);
      pointerFrameRef.current = requestAnimationFrame(() => {
        const bounds = stage.getBoundingClientRect();
        const x = (event.clientX - bounds.left) / bounds.width - 0.5;
        const y = (event.clientY - bounds.top) / bounds.height - 0.5;
        stage.style.setProperty("--pointer-x", `${x * 10}px`);
        stage.style.setProperty("--pointer-y", `${y * 7}px`);
        stage.style.setProperty("--pointer-ry", `${x * 0.8}deg`);
        stage.style.setProperty("--pointer-rx", `${y * -0.55}deg`);
      });
    };
    const resetCamera = () => {
      stage.style.setProperty("--pointer-x", "0px");
      stage.style.setProperty("--pointer-y", "0px");
      stage.style.setProperty("--pointer-rx", "0deg");
      stage.style.setProperty("--pointer-ry", "0deg");
    };

    stage.addEventListener("pointermove", moveCamera, { passive: true });
    stage.addEventListener("pointerleave", resetCamera);
    return () => {
      stage.removeEventListener("pointermove", moveCamera);
      stage.removeEventListener("pointerleave", resetCamera);
      if (pointerFrameRef.current) cancelAnimationFrame(pointerFrameRef.current);
    };
  }, []);

  useEffect(() => {
    const story = storyRef.current;
    if (!story || typeof IntersectionObserver === "undefined") {
      setStoryVisible(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStoryVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.02 }
    );

    observer.observe(story);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const motionPreference = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );
    const desktopVideo = atmosphereRef.current;
    const syncAtmosphere = () => {
      const reduce = motionPreference.matches;
      desktopVideo?.pause();
      if (!reduce) {
        desktopVideo?.play().catch(() => {});
      }
    };

    syncAtmosphere();
    desktopVideo?.addEventListener("canplay", syncAtmosphere);
    motionPreference.addEventListener("change", syncAtmosphere);
    return () => {
      desktopVideo?.removeEventListener("canplay", syncAtmosphere);
      motionPreference.removeEventListener("change", syncAtmosphere);
    };
  }, []);

  const activateStep = useCallback((index) => {
    setActiveIndex(index);
    setHasActiveStory(true);
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

      <div
        className={`${styles.ecosystemStory} ${
          storyVisible ? styles.ecosystemStoryVisible : ""
        }`}
        id="ecosystem-story"
        ref={storyRef}
      >
        <div className={styles.ecosystemSticky}>
          <div className={styles.storyShell}>
            <div
              className={`${styles.solarStage} ${
                hasActiveStory ? styles.solarStageStoryActive : ""
              }`}
              role="group"
              aria-label="Interactive AeroBay learning ecosystem"
              ref={stageRef}
            >
              <video
                ref={atmosphereRef}
                className={styles.galaxyAtmosphere}
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                aria-hidden="true"
                tabIndex={-1}
              >
                <source src="/videos/bg-cloud.mp4" type="video/mp4" />
              </video>
              <span className={styles.galaxyAtmosphereShade} aria-hidden="true" />
              <div className={styles.legacySpaceGlow} aria-hidden="true" />

              <div
                className={styles.galaxyScene}
                style={{
                  "--camera-x": storyItems[activeIndex].cameraX,
                  "--camera-y": storyItems[activeIndex].cameraY,
                  "--camera-rx": storyItems[activeIndex].cameraRotateX,
                  "--camera-ry": storyItems[activeIndex].cameraRotateY,
                }}
              >
                {storyItems.map((item, index) => (
                  <Planet
                    item={item}
                    index={index}
                    activeIndex={activeIndex}
                    onActivate={activateStep}
                    key={item.label}
                  />
                ))}

                <div className={styles.legacySun} aria-label="AeroBay at the centre of the learning ecosystem">
                  <span className={styles.legacySunGlow} aria-hidden="true" />
                  <Image className={styles.legacySunStatic} src="/images/hmsect-global/sun-static.webp" alt="" fill sizes="190px" />
                  <Image className={styles.legacySunMotion} src="/images/hmsect-global/sun.gif" alt="" fill sizes="190px" unoptimized />
                  <Image className={styles.legacyOrbitLogo} src="/images/hmsect-global/logo-orbit.gif" alt="" fill sizes="110px" unoptimized />
                  <span className={styles.legacySunName}>AeroBay</span>
                </div>
              </div>
            </div>

            {hasActiveStory ? <aside
              className={`${styles.storyPanel} ${
                styles[`storyPanel${storyItems[activeIndex].panelPosition}`]
              }`}
              aria-live="polite"
              key={storyItems[activeIndex].label}
            >
              {storyItems[activeIndex].asset ? (
                <div className={styles.storyFigure} key={`figure-${activeIndex}`} aria-hidden="true">
                  <Image
                    src={`/images/hmsect-global/card-fig${storyItems[activeIndex].figureAsset}.png`}
                    alt=""
                    fill
                    sizes="320px"
                  />
                </div>
              ) : null}
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
              <p className={styles.storyScrollHint}>Hover or focus a planet to explore</p>
              <Link className={styles.storyCta} href="/aerobay-for-school">
                Explore the AeroBay ecosystem <span aria-hidden="true">→</span>
              </Link>
            </aside> : null}
          </div>
        </div>
      </div>

    </section>
  );
}
