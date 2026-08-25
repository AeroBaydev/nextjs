import Image from "next/image";
import styles from "./home-brand-network.module.css";

const mediaLogos = Array.from({ length: 31 }, (_, index) => ({
  src: `/images/media/${index + 1}.jpg`,
  alt: `Media presence organisation ${index + 1}`,
}));

const ecosystemPartners = [
  { src: "/images/ecosystempartners/AMAILOGO.png", name: "Aircraft Maintenance Engineers Association of India" },
  { src: "/images/ecosystempartners/corporatemembers.png", name: "India Didactics Association corporate member" },
  { src: "/images/ecosystempartners/google cloud.png", name: "Google Cloud" },
  { src: "/images/ecosystempartners/LEMON.png", name: "Lemon Ideas" },
  { src: "/images/ecosystempartners/MY MENTOR CIRCLE.png", name: "My Mentor Circle" },
  { src: "/images/ecosystempartners/NSDC.png", name: "National Skill Development Corporation" },
  { src: "/images/ecosystempartners/skill india.png", name: "Skill India" },
  { src: "/images/ecosystempartners/stanford.png", name: "Stanford Seed" },
  { src: "/images/ecosystempartners/stem.png", name: "STEM.org Educational Research" },
  { src: "/images/ecosystempartners/wsc.png", name: "World Skill Challenge" },
];

function MediaLane({ items, reverse = false }) {
  return (
    <div className={styles.mediaLane}>
      <div className={`${styles.mediaTrack} ${reverse ? styles.reverse : ""}`}>
        {[false, true].map((duplicate) => (
          <div
            className={styles.mediaGroup}
            aria-hidden={duplicate || undefined}
            key={duplicate ? "duplicate" : "original"}
          >
            {items.map((logo) => (
              <div className={styles.mediaCard} key={`${duplicate}-${logo.src}`}>
                <Image
                  src={logo.src}
                  alt={duplicate ? "" : logo.alt}
                  width={500}
                  height={500}
                  sizes="150px"
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function HomeBrandNetwork() {
  const firstLane = mediaLogos.filter((_, index) => index % 2 === 0);
  const secondLane = mediaLogos.filter((_, index) => index % 2 !== 0);

  return (
    <div className={styles.brandNetwork}>
      <section className={styles.mediaPresence} aria-labelledby="media-presence-heading">
        <div className={styles.shell}>
          <div className={styles.heading}>
            <div>
              <p className={styles.eyebrow}>Our brand visibility</p>
              <h2 id="media-presence-heading">Media Presence.</h2>
            </div>
            <p>
              AeroBay&apos;s work has been seen across education, business,
              innovation and community platforms.
            </p>
          </div>
        </div>

        <div className={styles.mediaLanes} aria-label="Media presence organisations">
          <MediaLane items={firstLane} />
          <MediaLane items={secondLane} reverse />
        </div>
      </section>

      <section className={styles.partners} aria-labelledby="ecosystem-partners-heading">
        <div className={styles.shell}>
          <div className={styles.heading}>
            <div>
              <p className={styles.eyebrow}>Stronger through collaboration</p>
              <h2 id="ecosystem-partners-heading">Ecosystem Partners.</h2>
            </div>
            <p>
              Organisations connected to the AeroBay ecosystem through
              certification, capability building, knowledge and programme support.
            </p>
          </div>

          <div className={styles.partnerGrid}>
            {ecosystemPartners.map((partner) => (
              <div className={styles.partnerCard} key={partner.src}>
                <Image
                  src={partner.src}
                  alt={`${partner.name} logo`}
                  width={240}
                  height={240}
                  sizes="(max-width: 600px) 40vw, 180px"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
