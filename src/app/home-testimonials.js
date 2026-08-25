"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faArrowRight,
  faPlay,
} from "@fortawesome/free-solid-svg-icons";
import { fetchData } from "@/lib/api";
import styles from "./home-testimonials.module.css";

const categories = [
  { value: "student", label: "Students" },
  { value: "parents", label: "Parents" },
  { value: "educators", label: "Educators" },
];

function getYouTubeId(link) {
  if (!link) return null;

  try {
    const url = new URL(link);
    if (url.hostname.includes("youtu.be")) return url.pathname.split("/")[1];
    if (url.searchParams.get("v")) return url.searchParams.get("v");

    const parts = url.pathname.split("/").filter(Boolean);
    const marker = parts.findIndex((part) => ["embed", "shorts", "live"].includes(part));
    return marker >= 0 ? parts[marker + 1] : null;
  } catch {
    return null;
  }
}

function StoryCard({ item, podcast = false }) {
  const videoId = getYouTubeId(item.youTube_link);
  const thumbnail = item.image_url || (videoId ? `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg` : null);

  return (
    <article className={`${styles.card} ${podcast ? styles.podcastCard : ""}`}>
      <div className={`${styles.visual} ${thumbnail ? "" : styles.visualFallback}`}>
        {thumbnail && (
          // Admin thumbnails runtime par external URL bhi ho sakte hain.
          // eslint-disable-next-line @next/next/no-img-element
          <img src={thumbnail} alt="" loading="lazy" />
        )}
        {item.youTube_link && (
          <a
            href={item.youTube_link}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.playButton}
            aria-label={`Watch ${item.title} on YouTube`}
          >
            <FontAwesomeIcon icon={faPlay} aria-hidden="true" />
          </a>
        )}
      </div>

      <div className={styles.cardCopy}>
        <span>{podcast ? "AeroBay Podcast" : categories.find((category) => category.value === item.type)?.label}</span>
        <h3>{item.title}</h3>
        <p>{item.description}</p>
        {item.designation && <small>{item.designation}</small>}
        {item.youTube_link && (
          <a href={item.youTube_link} target="_blank" rel="noopener noreferrer" className={styles.watchLink}>
            Watch on YouTube <FontAwesomeIcon icon={faArrowRight} aria-hidden="true" />
          </a>
        )}
      </div>
    </article>
  );
}

function ScrollControls({ trackRef, label, hidden = false }) {
  if (hidden) return null;

  const move = (direction) => {
    trackRef.current?.scrollBy({
      left: direction * trackRef.current.clientWidth * 0.82,
      behavior: "smooth",
    });
  };

  return (
    <div className={styles.controls}>
      <button type="button" onClick={() => move(-1)} aria-label={`Previous ${label}`}>
        <FontAwesomeIcon icon={faArrowLeft} />
      </button>
      <button type="button" onClick={() => move(1)} aria-label={`Next ${label}`}>
        <FontAwesomeIcon icon={faArrowRight} />
      </button>
    </div>
  );
}

export default function HomeTestimonials() {
  const [items, setItems] = useState([]);
  const [loadState, setLoadState] = useState("loading");
  const [activeCategory, setActiveCategory] = useState("student");
  const testimonialTrack = useRef(null);
  const podcastTrack = useRef(null);

  useEffect(() => {
    let active = true;
    let retryTimer;

    const loadStories = () => {
      window.clearTimeout(retryTimer);
      fetchData("/testimonial/public")
        .then((data) => {
          if (!active) return;
          setItems(Array.isArray(data.testimonials) ? data.testimonials : []);
          setLoadState("ready");
        })
        .catch(() => {
          if (!active) return;
          setLoadState("error");
          retryTimer = window.setTimeout(loadStories, 8000);
        });
    };

    const refreshOnFocus = () => loadStories();

    loadStories();
    window.addEventListener("focus", refreshOnFocus);

    return () => {
      active = false;
      window.clearTimeout(retryTimer);
      window.removeEventListener("focus", refreshOnFocus);
    };
  }, []);

  const availableCategories = useMemo(
    () => categories.filter((category) => items.some((item) => item.type === category.value)),
    [items],
  );
  const podcasts = useMemo(() => items.filter((item) => item.type === "podcasts"), [items]);
  const testimonials = useMemo(
    () => items.filter((item) => item.type === activeCategory),
    [activeCategory, items],
  );

  useEffect(() => {
    if (availableCategories.length && !availableCategories.some((category) => category.value === activeCategory)) {
      setActiveCategory(availableCategories[0].value);
    }
  }, [activeCategory, availableCategories]);

  const chooseCategory = (category) => {
    setActiveCategory(category);
    testimonialTrack.current?.scrollTo({ left: 0, behavior: "smooth" });
  };

  if (!items.length) {
    return (
      <section className={styles.statusSection} aria-live="polite">
        <div className={styles.shell}>
          <p className={styles.eyebrow}>Voices and conversations</p>
          <h2>Testimonials &amp; Podcasts.</h2>
          <p>
            {loadState === "error"
              ? "Stories are temporarily unavailable. We’ll try again automatically."
              : loadState === "ready"
                ? "New stories will appear here when they are published."
                : "Loading stories from AeroBay…"}
          </p>
        </div>
      </section>
    );
  }

  return (
    <div className={styles.stories}>
      {availableCategories.length > 0 && (
        <section className={styles.storySection} aria-labelledby="testimonials-heading">
          <div className={styles.shell}>
            <div className={styles.headingRow}>
              <div>
                <p className={styles.eyebrow}>Voices of impact</p>
                <h2 id="testimonials-heading">Testimonials.</h2>
              </div>
              <div className={styles.headingActions}>
                <div className={styles.tabs} aria-label="Testimonial categories">
                  {availableCategories.map((category) => (
                    <button
                      type="button"
                      key={category.value}
                      className={activeCategory === category.value ? styles.activeTab : ""}
                      aria-pressed={activeCategory === category.value}
                      onClick={() => chooseCategory(category.value)}
                    >
                      {category.label}
                    </button>
                  ))}
                </div>
                <ScrollControls trackRef={testimonialTrack} label="testimonials" hidden={testimonials.length <= 3} />
              </div>
            </div>

            <div className={styles.track} ref={testimonialTrack}>
              {testimonials.map((item) => <StoryCard item={item} key={item.id} />)}
            </div>
          </div>
        </section>
      )}

      {podcasts.length > 0 && (
        <section className={`${styles.storySection} ${styles.podcastSection}`} aria-labelledby="podcasts-heading">
          <div className={styles.shell}>
            <div className={styles.headingRow}>
              <div>
                <p className={styles.eyebrow}>Ideas worth sharing</p>
                <h2 id="podcasts-heading">AeroBay Podcasts.</h2>
              </div>
              <ScrollControls trackRef={podcastTrack} label="podcasts" hidden={podcasts.length <= 3} />
            </div>

            <div className={styles.track} ref={podcastTrack}>
              {podcasts.map((item) => <StoryCard item={item} podcast key={item.id} />)}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
