/* eslint-disable @next/next/no-img-element */
"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowDown,
  faArrowRight,
  faLocationDot,
  faMagnifyingGlass,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import schools from "../../../../data/schools";
import { fetchData } from "@/lib/api";
import styles from "./school-network.module.css";

const PAGE_SIZE = 24;

const cleanSchool = (school) => ({
  name: String(school?.name || "").trim(),
  location: String(school?.location || "").trim(),
  logo: school?.logo_url || school?.logo || "",
});

const ArrowLink = ({ href, children, secondary = false }) => (
  <Link href={href} className={secondary ? styles.secondaryAction : styles.primaryAction}>
    {children}
    <span><FontAwesomeIcon icon={faArrowRight} /></span>
  </Link>
);

const LogoImage = ({ school, eager = false }) => (
  // CMS logos external bhi ho sakte hain, isliye native image dynamic sources ko safely support karta hai.
  <img
    src={school.logo}
    alt={`AeroBay client school logo — ${school.name}`}
    loading={eager ? "eager" : "lazy"}
    decoding="async"
  />
);

export default function SchoolNetworkPage() {
  const [clients, setClients] = useState(() => schools.map(cleanSchool));
  const [query, setQuery] = useState("");
  const [location, setLocation] = useState("");
  const [reachLocation, setReachLocation] = useState("");
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  useEffect(() => {
    fetchData("/clients/public")
      .then(({ clients: managedClients }) => {
        if (!Array.isArray(managedClients) || managedClients.length === 0) return;
        const validClients = managedClients.map(cleanSchool).filter((school) => school.name && school.logo);
        if (validClients.length) setClients(validClients);
      })
      .catch(() => {});
  }, []);

  useEffect(() => {
    const revealItems = document.querySelectorAll("[data-network-reveal]");
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.setAttribute("data-visible", "true")),
      { threshold: 0.12 }
    );
    revealItems.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, [clients.length, location, query, visibleCount]);

  const locations = useMemo(
    () => [...new Set(clients.map((school) => school.location).filter(Boolean))].sort((a, b) => a.localeCompare(b)),
    [clients]
  );

  useEffect(() => {
    if (locations.length && !locations.includes(reachLocation)) setReachLocation(locations[0]);
  }, [locations, reachLocation]);

  const filteredClients = useMemo(() => {
    const normalizedQuery = query.trim().toLocaleLowerCase();
    return clients.filter((school) => {
      const matchesLocation = !location || school.location === location;
      const searchable = `${school.name} ${school.location}`.toLocaleLowerCase();
      return matchesLocation && (!normalizedQuery || searchable.includes(normalizedQuery));
    });
  }, [clients, location, query]);

  const visibleClients = filteredClients.slice(0, visibleCount);
  const reachSchools = clients.filter((school) => school.location === reachLocation).slice(0, 6);
  const heroLogos = clients.slice(0, 12);
  const ribbonLogos = clients.slice(12, 32);

  // Saari verified locations ko manageable constellation mein evenly sample kar rahe hain.
  const locationCloud = useMemo(() => {
    if (locations.length <= 18) return locations;
    const step = (locations.length - 1) / 17;
    return Array.from({ length: 18 }, (_, index) => locations[Math.round(index * step)]);
  }, [locations]);

  const resetDirectory = () => {
    setQuery("");
    setLocation("");
    setVisibleCount(PAGE_SIZE);
  };

  const exploreLocation = () => {
    setLocation(reachLocation);
    setQuery("");
    setVisibleCount(PAGE_SIZE);
    document.getElementById("network-directory")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroGrid} aria-hidden="true" />
        <div className={styles.shell}>
          <div className={styles.heroLayout}>
            <div className={styles.heroContent}>
              <p className={styles.eyebrow}>Our school network</p>
              <h1>Schools Choosing to <span>Build What&apos;s Next.</span></h1>
              <p className={styles.heroCopy}>A growing network of schools bringing hands-on learning, technology and making experiences closer to students.</p>
              <div className={styles.actions}>
                <ArrowLink href="/get-in-touch">Talk to Our School Team</ArrowLink>
                <a href="#network-introduction" className={styles.textAction}>Explore the Network <FontAwesomeIcon icon={faArrowDown} /></a>
              </div>
            </div>

            <div className={styles.networkCanvas} aria-label="A selection of schools in the AeroBay network">
              <div className={styles.networkLines} aria-hidden="true" />
              {heroLogos.map((school, index) => (
                <div className={styles.heroLogo} style={{ "--logo-delay": `${index * 60}ms` }} key={`${school.name}-${index}`}>
                  <LogoImage school={school} eager={index < 6} />
                </div>
              ))}
              <div className={styles.networkCore}><span>A</span><small>One network</small></div>
            </div>
          </div>
          <p className={styles.heroStatement}>Many schools. <span>One AeroBay network.</span></p>
        </div>
      </section>

      <section className={styles.introduction} id="network-introduction">
        <div className={styles.shell}>
          <div className={styles.introGrid} data-network-reveal>
            <p className={styles.eyebrow}>Connected by learning</p>
            <div>
              <h2>A Growing Network of Schools.</h2>
              <p>Every school has its own students, context and learning environment. The AeroBay network brings together institutions that are creating more opportunities for students to learn by doing.</p>
            </div>
          </div>
        </div>

        <div className={styles.logoRibbon} aria-label="Schools in the AeroBay network" data-network-reveal>
          <div className={styles.ribbonTrack}>
            <div className={styles.ribbonGroup}>
              {ribbonLogos.map((school, index) => <div className={styles.ribbonLogo} key={`${school.name}-${index}`}><LogoImage school={school} /><span>{school.name}</span></div>)}
            </div>
            <div className={styles.ribbonGroup} aria-hidden="true">
              {ribbonLogos.map((school, index) => <div className={styles.ribbonLogo} key={`duplicate-${school.name}-${index}`}><LogoImage school={{ ...school, name: "" }} /><span>{school.name}</span></div>)}
            </div>
          </div>
        </div>
      </section>

      <section className={styles.reach}>
        <div className={styles.reachGlow} aria-hidden="true" />
        <div className={styles.shell}>
          <div className={styles.reachHeading} data-network-reveal>
            <p className={styles.eyebrow}>Where the network reaches</p>
            <h2>AeroBay Across India.</h2>
            <p>The available school data is grouped by its verified location, keeping every city and state label exactly as provided.</p>
          </div>

          <div className={styles.reachInterface} data-network-reveal>
            <div className={styles.locationCloud} aria-label="Select a school network location">
              {locationCloud.map((item) => (
                <button type="button" aria-pressed={reachLocation === item} onClick={() => setReachLocation(item)} key={item}>
                  <i aria-hidden="true" /><span>{item}</span>
                </button>
              ))}
            </div>

            <div className={styles.locationPanel}>
              <div className={styles.locationPanelHead}><span><FontAwesomeIcon icon={faLocationDot} /> Selected location</span><strong>{reachLocation}</strong></div>
              <div className={styles.locationSchools}>
                {reachSchools.map((school, index) => <div key={`${school.name}-${index}`}><span>{String(index + 1).padStart(2, "0")}</span><p>{school.name}</p></div>)}
              </div>
              <button type="button" onClick={exploreLocation} className={styles.exploreLocation}>Explore this location <FontAwesomeIcon icon={faArrowRight} /></button>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.directory} id="network-directory">
        <div className={styles.shell}>
          <div className={styles.directoryHeading} data-network-reveal>
            <div><p className={styles.eyebrow}>Explore the network</p><h2>Find a School in the Network.</h2></div>
            <p>Search by school name or location, or browse the complete verified school community.</p>
          </div>

          <div className={styles.filterBar} data-network-reveal>
            <label className={styles.searchField}>
              <span className={styles.srOnly}>Search school name or location</span>
              <FontAwesomeIcon icon={faMagnifyingGlass} aria-hidden="true" />
              <input type="search" value={query} onChange={(event) => { setQuery(event.target.value); setVisibleCount(PAGE_SIZE); }} placeholder="Search school name or location..." />
              {query && <button type="button" onClick={() => setQuery("")} aria-label="Clear search"><FontAwesomeIcon icon={faXmark} /></button>}
            </label>

            <label className={styles.locationSelect}>
              <span>Location</span>
              <select value={location} onChange={(event) => { setLocation(event.target.value); setVisibleCount(PAGE_SIZE); }}>
                <option value="">All locations</option>
                {locations.map((item) => <option value={item} key={item}>{item}</option>)}
              </select>
            </label>

            {(query || location) && <button type="button" className={styles.clearFilters} onClick={resetDirectory}><FontAwesomeIcon icon={faXmark} /> Clear filters</button>}
          </div>

          <div className={styles.communityHead} data-network-reveal>
            <h2>Our School Community</h2>
            <p aria-live="polite">{filteredClients.length ? `Showing ${visibleClients.length} of ${filteredClients.length} matching schools` : "No matching schools"}</p>
          </div>

          {visibleClients.length > 0 ? (
            <div className={styles.schoolGrid}>
              {visibleClients.map((school, index) => (
                <article className={styles.schoolCard} data-network-reveal key={`${school.name}-${school.location}-${index}`}>
                  <div className={styles.schoolLogo}><LogoImage school={school} /></div>
                  <div className={styles.schoolDetails}><h3>{school.name}</h3>{school.location && <p><FontAwesomeIcon icon={faLocationDot} />{school.location}</p>}</div>
                </article>
              ))}
            </div>
          ) : (
            <div className={styles.emptyState} role="status">
              <div><FontAwesomeIcon icon={faMagnifyingGlass} /></div><h3>No schools found.</h3><p>Try another school name, city or location.</p><button type="button" onClick={resetDirectory}>Clear Filters</button>
            </div>
          )}

          {visibleCount < filteredClients.length && (
            <div className={styles.loadMore}><button type="button" onClick={() => setVisibleCount((count) => count + PAGE_SIZE)}>Load More Schools <FontAwesomeIcon icon={faArrowDown} /></button></div>
          )}
        </div>
      </section>

      <section className={styles.cta}>
        <div className={styles.ctaNetwork} aria-hidden="true"><i /><i /><i /><i /></div>
        <div className={styles.shell}>
          <div className={styles.ctaInner} data-network-reveal>
            <p className={styles.eyebrow}>Join the network</p>
            <h2>Your School Could Be Next.</h2>
            <p>Explore how AeroBay can bring hands-on learning experiences into your school.</p>
            <div className={styles.actions}><ArrowLink href="/get-in-touch">Talk to Our School Team</ArrowLink><ArrowLink href="/get-in-touch" secondary>Get in Touch</ArrowLink></div>
          </div>
        </div>
      </section>
    </main>
  );
}
