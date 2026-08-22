"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import schools from "../../data/schools";
import styles from "./home.module.css";
import { fetchData } from "@/lib/api";

function ClientCard({ school, duplicate = false }) {
  const image = /^https?:\/\//.test(school.logo) ? (
    <img src={school.logo} alt={duplicate ? "" : `${school.name} logo`} loading="lazy" />
  ) : (
    <Image src={school.logo} alt={duplicate ? "" : `${school.name} logo`} width={160} height={72} sizes="160px" />
  );
  return (
    <div className={styles.clientLogoCard} aria-hidden={duplicate || undefined}>
      {image}
      <span>{school.name}</span>
      {school.location ? <small>{school.location}</small> : null}
    </div>
  );
}

export default function HomeClients() {
  const [clients, setClients] = useState(schools);
  useEffect(() => {
    fetchData('/clients/public').then(({ clients: managedClients }) => {
      const featured = managedClients?.filter((client) => Number(client.featured) === 1);
      if (Array.isArray(featured)) setClients(featured.map((client) => ({ ...client, logo: client.logo_url })));
    }).catch(() => {});
  }, []);
  const clientLanes = useMemo(() => [clients.filter((_, index) => index % 2 === 0), clients.filter((_, index) => index % 2 !== 0)], [clients]);
  return (
    <section className={styles.clientsShowcase} aria-labelledby="clients-heading">
      <div className={styles.shell}>
        <div className={styles.clientsHeading}>
          <div>
            <p className={styles.eyebrow}>Trusted across India</p>
            <h2 id="clients-heading">Chosen by schools shaping what comes next.</h2>
          </div>
          <div className={styles.clientsHeadingCopy}>
            <p>
              Education leaders across regions trust AeroBay to build meaningful,
              future-ready learning experiences for their students.
            </p>
            <Link href="/more/our-clients">
              Explore all partners
              <FontAwesomeIcon icon={faArrowRight} />
            </Link>
          </div>
        </div>
      </div>

      <div className={styles.clientMarquees} aria-label="AeroBay school partners">
        {clientLanes.map((lane, laneIndex) => (
          <div className={styles.clientMarquee} key={laneIndex}>
            <div
              className={`${styles.clientMarqueeTrack} ${
                laneIndex === 1 ? styles.clientMarqueeReverse : ""
              }`}
            >
              <div className={styles.clientMarqueeGroup}>
                {lane.map((school) => (
                  <ClientCard school={school} key={school.logo} />
                ))}
              </div>
              <div className={styles.clientMarqueeGroup} aria-hidden="true">
                {lane.map((school) => (
                  <ClientCard school={school} duplicate key={`copy-${school.logo}`} />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className={`${styles.shell} ${styles.clientsFootnote}`}>
        <span>Schools</span>
        <span>Educators</span>
        <span>Innovation leaders</span>
        <span>Long-term partners</span>
      </div>
    </section>
  );
}
