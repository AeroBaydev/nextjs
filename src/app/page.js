import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowDown,
  faArrowRight,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";
import HomeHeroVideo from "./home-hero-video";
import HomeSolutions from "./home-solutions";
import HomeEcosystem from "./home-ecosystem";
import styles from "./home.module.css";

const outcomes = [
  "Designed for Grades 1–12",
  "Mapped to NEP 2020 priorities",
  "Curriculum, kits, trainers, and analytics",
  "Career exposure through real-world projects",
];

const partners = Array.from({ length: 7 }, (_, index) => ({
  src: `/images/partners/brand-${index + 1}.png`,
  alt: `AeroBay education partner ${index + 1}`,
}));

export default function Home() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <HomeHeroVideo />
        <div className={styles.heroShade} aria-hidden="true" />

        <div className={styles.shell}>
          <div className={styles.heroContent}>
            <p className={styles.eyebrow}>Future-ready learning, made real</p>
            <h1>
              Where classrooms
              <span>become launchpads.</span>
            </h1>
            <p className={styles.heroCopy}>
              AeroBay builds and operates experiential STEM & STEAM learning ecosystems that turn curiosity into real-world skills, confidence and possibilities.
            </p>
            <div className={styles.heroActions}>
              <Link href="/get-in-touch" className={styles.primaryAction}>
                Bring AeroBay to your school
                <span>
                  <FontAwesomeIcon icon={faArrowRight} />
                </span>
              </Link>
              <Link href="/aerobay-for-school" className={styles.textAction}>
                Explore the ecosystem
                <FontAwesomeIcon icon={faArrowRight} />
              </Link>
            </div>
          </div>

          <a className={styles.scrollCue} href="#impact">
            <span>
              <FontAwesomeIcon icon={faArrowDown} />
            </span>
            Discover AeroBay
          </a>
        </div>
      </section>

      <HomeEcosystem />

      {/* Impact statistics now belong to the merged HomeEcosystem section.
      <section className={styles.impact} id="impact">
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
      </section>
      */}

      <HomeSolutions />

      <section className={styles.outcomes}>
        <div className={styles.shell}>
          <div className={styles.outcomesGrid}>
            <div className={styles.outcomesVisual}>
              <Image
                src="/images/tilt-imgs/tilt-2.jpg"
                alt="Students exploring AeroBay learning kits"
                fill
                sizes="(max-width: 991px) calc(100vw - 64px), 50vw"
              />
              <div className={styles.visualNote}>
                <strong>Learning by doing</strong>
                <span>From concept to creation</span>
              </div>
            </div>

            <div className={styles.outcomesCopy}>
              <p className={styles.eyebrow}>Designed for outcomes</p>
              <h2>Skills students remember because they built them.</h2>
              <p>
                Our programs move beyond demonstrations. Students investigate,
                collaborate, build, test, fail safely, improve, and present
                their own solutions.
              </p>
              <ul>
                {outcomes.map((outcome) => (
                  <li key={outcome}>
                    <FontAwesomeIcon icon={faCheck} />
                    <span>{outcome}</span>
                  </li>
                ))}
              </ul>
              <Link href="/about/the-aerobay-story">
                Discover our story
                <FontAwesomeIcon icon={faArrowRight} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.gallery}>
        <div className={styles.shell}>
          <div className={styles.galleryHeading}>
            <div>
              <p className={styles.eyebrow}>Inside AeroBay</p>
              <h2>Real spaces. Real projects. Real confidence.</h2>
            </div>
            <p>
              Learning becomes memorable when students are trusted with real
              tools, meaningful challenges, and room to explore.
            </p>
          </div>

          <div className={styles.photoGrid}>
            {[
              "/images/gallery-big1.jpg",
              "/images/gallery-big4.JPG",
              "/images/gallery-big5.JPG",
            ].map((src, index) => (
              <div className={styles.photo} key={src}>
                <Image
                  src={src}
                  alt={`Students learning through an AeroBay experience ${
                    index + 1
                  }`}
                  fill
                  sizes="(max-width: 767px) calc(100vw - 36px), 33vw"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.trust}>
        <div className={styles.shell}>
          <div className={styles.trustHeading}>
            <p>Trusted by education leaders and innovation partners</p>
            <Link href="/more/our-clients">
              View our partners
              <FontAwesomeIcon icon={faArrowRight} />
            </Link>
          </div>
          <div className={styles.partnerGrid}>
            {partners.map((partner) => (
              <div key={partner.src}>
                <Image
                  src={partner.src}
                  alt={partner.alt}
                  width={180}
                  height={100}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.cta}>
        <div className={styles.shell}>
          <div className={styles.ctaCard}>
            <div>
              <p className={styles.eyebrow}>Start a conversation</p>
              <h2>Your school’s next chapter can start here.</h2>
              <p>
                Tell us your goals. Our education team will help you identify
                the right lab, learning pathway, and implementation plan.
              </p>
            </div>
            <Link href="/get-in-touch" className={styles.primaryAction}>
              Talk to an education specialist
              <span>
                <FontAwesomeIcon icon={faArrowRight} />
              </span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
