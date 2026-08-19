import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowDown,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import HomeHeroVideo from "./home-hero-video";
import HomeSolutions from "./home-solutions";
import HomeEcosystem from "./home-ecosystem";
import HomeStandout from "./home-standout";
import HomeClients from "./home-clients";
import styles from "./home.module.css";

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

      <HomeSolutions />

      <HomeStandout />

      <HomeClients />

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
