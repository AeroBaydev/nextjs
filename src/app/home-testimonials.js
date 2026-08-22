"use client";

import { useEffect, useState } from "react";
import { fetchData } from "@/lib/api";
import styles from "./home-testimonials.module.css";

const labels = { student: "Student", parents: "Parent", educators: "Educator", podcasts: "Podcast" };

export default function HomeTestimonials() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetchData('/testimonial/public').then((data) => setItems(data.testimonials || [])).catch(() => {});
  }, []);
  if (!items.length) return null;

  return <section className={styles.section} aria-labelledby="voices-heading">
    <div className={styles.shell}>
      <p className={styles.eyebrow}>Voices of impact</p>
      <h2 id="voices-heading">Stories from the AeroBay community.</h2>
      <div className={styles.grid}>
        {items.map((item) => <article className={styles.card} key={item.id}>
          {item.image_url && <img src={item.image_url} alt="" loading="lazy" />}
          <span>{labels[item.type] || item.type}</span>
          <blockquote>{item.description}</blockquote>
          <h3>{item.title}</h3>
          {item.designation && <p>{item.designation}</p>}
          {item.youTube_link && <a href={item.youTube_link} target="_blank" rel="noopener noreferrer">Watch on YouTube</a>}
        </article>)}
      </div>
    </div>
  </section>;
}
