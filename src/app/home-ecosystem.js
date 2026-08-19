"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import styles from "./home.module.css";

const pillars = [
  {
    title: "Purpose-Built Learning Spaces",
    copy: "Purpose-designed environments where students explore, experiment, build and apply concepts through hands-on learning.",
    image: "/images/gallery-big3.jpg",
    alt: "AeroBay purpose-built aerospace and STEM learning space",
  },
  {
    title: "Experiential Curriculum",
    copy: "Learning designed around practical application, real-world examples and projects—not theory alone.",
    image: "/images/tilt-imgs/tilt-1.jpg",
    alt: "Students taking part in a practical AeroBay STEM activity",
  },
  {
    title: "Expert STEM Educators",
    copy: "Trained educators who bring concepts to life through demonstrations, experimentation and hands-on implementation.",
    image: "/images/tilt-imgs/tilt-4.jpg",
    alt: "An AeroBay STEM educator guiding students through an aircraft activity",
  },
  {
    title: "Projects, Challenges & Opportunities",
    copy: "Practical projects and challenges that encourage students to apply their skills, build confidence and explore their interests.",
    image: "/images/gallery-big1.jpg",
    alt: "Students testing an AeroBay aerospace project outdoors",
  },
];

const impact = [
  { value: "22+", label: "States across India" },
  { value: "250+", label: "Partner schools" },
  { value: "100K+", label: "Students empowered" },
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

function Planet({ item, index, activeIndex, onActivate, onDeactivate }) {
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
          data-ecosystem-trigger
          onMouseEnter={() => onActivate(index)}
          onMouseLeave={onDeactivate}
          onFocus={() => onActivate(index)}
          onBlur={onDeactivate}
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
  const impactVideoRef = useRef(null);
  const stageRef = useRef(null);
  const leaveTimerRef = useRef(null);
  const cardTimerRef = useRef(null);
  const galaxyPausedRef = useRef(false);
  const [isVisible, setIsVisible] = useState(false);
  const [storyVisible, setStoryVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);
  const [isGalaxyPaused, setIsGalaxyPaused] = useState(false);
  const [isCardMounted, setIsCardMounted] = useState(false);
  const [isCardVisible, setIsCardVisible] = useState(false);
  const [isSunHovered, setIsSunHovered] = useState(false);
  const [isSunSelected, setIsSunSelected] = useState(false);

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
    window.clearTimeout(leaveTimerRef.current);
    window.clearTimeout(cardTimerRef.current);
    galaxyPausedRef.current = true;
    setActiveIndex(index);
    setIsSunHovered(false);
    setIsSunSelected(false);
    setIsGalaxyPaused(true);
    setIsCardMounted(true);
    requestAnimationFrame(() => setIsCardVisible(true));
  }, []);

  const activateSun = useCallback(() => {
    window.clearTimeout(leaveTimerRef.current);
    window.clearTimeout(cardTimerRef.current);
    galaxyPausedRef.current = true;
    setIsCardVisible(false);
    setIsCardMounted(false);
    setIsSunHovered(true);
    setIsGalaxyPaused(true);
  }, []);

  const selectSun = useCallback(() => {
    activateSun();
    setIsSunSelected(true);
  }, [activateSun]);

  const deactivateGalaxy = useCallback(() => {
    window.clearTimeout(leaveTimerRef.current);
    leaveTimerRef.current = window.setTimeout(() => {
      galaxyPausedRef.current = false;
      setIsCardVisible(false);
      setIsSunHovered(false);
      setIsSunSelected(false);
      setIsGalaxyPaused(false);
      cardTimerRef.current = window.setTimeout(() => setIsCardMounted(false), 280);
    }, 90);
  }, []);

  useEffect(() => () => {
    window.clearTimeout(leaveTimerRef.current);
    window.clearTimeout(cardTimerRef.current);
  }, []);

  return (
    <section
      className={`${styles.ecosystem} ${
        isVisible ? styles.ecosystemVisible : ""
      }`}
      ref={sectionRef}
      aria-labelledby="ecosystem-heading"
    >
      <div className={styles.aerobayDefinition}>
        <div className={styles.shell}>
          <h2>What Is AeroBay?</h2>
          <p>Revolutionizing K–12 education through experiential STEM and STEAM solutions.</p>
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
                isCardVisible ? styles.solarStageStoryActive : ""
              } ${
                isGalaxyPaused ? styles.solarStagePaused : ""
              }`}
              role="group"
              aria-label="Interactive AeroBay learning ecosystem"
              ref={stageRef}
              onPointerDown={(event) => {
                if (!event.target.closest("[data-ecosystem-trigger]")) deactivateGalaxy();
              }}
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
                <source src="/videos/solarloop.mp4" type="video/mp4" />
              </video>
              <span className={styles.galaxyAtmosphereShade} aria-hidden="true" />
              <div className={styles.legacySpaceGlow} aria-hidden="true" />

              <div
                className={styles.galaxyScene}
              >
                {storyItems.map((item, index) => (
                  <Planet
                    item={item}
                    index={index}
                    activeIndex={activeIndex}
                    onActivate={activateStep}
                    onDeactivate={deactivateGalaxy}
                    key={item.label}
                  />
                ))}

                <button
                  type="button"
                  className={`${styles.legacySun} ${
                    isSunHovered ? styles.legacySunActive : ""
                  } ${isSunSelected ? styles.legacySunSelected : ""}`}
                  data-ecosystem-trigger
                  onMouseEnter={activateSun}
                  onMouseLeave={deactivateGalaxy}
                  onFocus={activateSun}
                  onBlur={deactivateGalaxy}
                  onClick={selectSun}
                  aria-label="Explore AeroBay at the centre of the learning ecosystem"
                  aria-pressed={isSunHovered}
                >
                  <span className={styles.legacySunGlow} aria-hidden="true" />
                  <Image className={styles.legacySunStatic} src="/images/hmsect-global/sun-static.webp" alt="" fill sizes="190px" />
                  <Image className={styles.legacySunMotion} src="/images/hmsect-global/sun.gif" alt="" fill sizes="190px" unoptimized />
                  <Image className={styles.legacyOrbitLogo} src="/images/hmsect-global/logo-orbit.gif" alt="" fill sizes="110px" unoptimized />
                  <span className={styles.legacySunName}>AeroBay</span>
                </button>
              </div>
            </div>

            {isCardMounted ? <aside
              className={`${styles.storyPanel} ${isCardVisible ? styles.storyPanelVisible : ""}`}
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
            </aside> : null}
          </div>
        </div>
      </div>

      <div className={styles.ecosystemImpact} id="impact">
        <div className={styles.shell}>
          <p className={styles.impactIntro}>
            Building India’s next generation of thinkers, makers, and
            problem-solvers.
          </p>
          <div className={styles.impactGrid}>
            {impact.map((item) => (
              <div key={item.label}>
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className={styles.impactFilm}>
        <video
          ref={impactVideoRef}
          autoPlay
          muted
          playsInline
          preload="auto"
          aria-label="AeroBay students and learning experiences"
          onLoadedMetadata={(event) => {
            event.currentTarget.currentTime = 4;
            event.currentTarget.play().catch(() => undefined);
          }}
          onEnded={(event) => {
            event.currentTarget.currentTime = 4;
            event.currentTarget.play().catch(() => undefined);
          }}
        >
          <source src="/videos/ab.mp4" type="video/mp4" />
          Your browser does not support the video element.
        </video>
      </div>

      <div className={`${styles.shell} ${styles.ecosystemDetails}`}>
        <div className={styles.ecosystemIntro}>
          <div>
            <p className={styles.eyebrow}>The AeroBay</p>
            <h2 id="ecosystem-heading">
              A complete ecosystem. <br/>One accountable partner.
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
              <div className={styles.ecosystemPillarImage}>
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 767px) calc(100vw - 36px), (max-width: 991px) 50vw, 25vw"
                />
                <span className={styles.ecosystemCardShade} aria-hidden="true" />
              </div>
              <div className={styles.ecosystemPillarContent}>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
              </div>
            </article>
          ))}
        </div>
      </div>

    </section>
  );
}
