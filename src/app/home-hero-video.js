"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./home.module.css";

export default function HomeHeroVideo() {
  const videoRef = useRef(null);
  const isVisibleRef = useRef(true);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return undefined;

    const playVideo = async () => {
      if (!isVisibleRef.current || document.hidden) return;

      try {
        await video.play();
      } catch {
        video.muted = true;
        setIsMuted(true);
        await video.play().catch(() => undefined);
      }
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisibleRef.current = entry.isIntersecting;

        if (entry.isIntersecting) {
          playVideo();
        } else {
          video.pause();
        }
      },
      { threshold: 0.18 },
    );

    const handleVisibilityChange = () => {
      if (document.hidden) {
        video.pause();
      } else {
        playVideo();
      }
    };

    observer.observe(video);
    document.addEventListener("visibilitychange", handleVisibilityChange);
    playVideo();

    return () => {
      observer.disconnect();
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  const toggleSound = async () => {
    const video = videoRef.current;
    if (!video) return;

    const nextMuted = !video.muted;
    video.muted = nextMuted;
    setIsMuted(nextMuted);

    if (video.paused && isVisibleRef.current) {
      try {
        await video.play();
      } catch {
        video.muted = true;
        setIsMuted(true);
      }
    }
  };

  return (
    <>
      <video
        ref={videoRef}
        className={styles.heroVideo}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden="true"
      >
        <source src="/videos/home.mp4" type="video/mp4" />
      </video>

      <button
        type="button"
        className={`${styles.soundControl} ${
          !isMuted ? styles.soundControlActive : ""
        }`}
        onClick={toggleSound}
        aria-label={isMuted ? "Turn hero video sound on" : "Mute hero video"}
        aria-pressed={!isMuted}
      >
        <span className={styles.soundOrb} aria-hidden="true">
          <i />
          <i />
          <i />
          <i />
        </span>
      </button>
    </>
  );
}
