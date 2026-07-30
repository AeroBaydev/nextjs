import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowDown,
  faArrowRight,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";
import HomeHeroVideo from "./home-hero-video";
import styles from "./home.module.css";

const impact = [
  { value: "22+", label: "States across India" },
  { value: "250+", label: "Partner schools" },
  { value: "100K+", label: "Students empowered" },
];

const solutions = [
  {
    number: "01",
    title: "Composite Skill Lab",
    copy: "One multidisciplinary space for design, aviation, electronics, making, and future-ready skills.",
    image: "/images/gallery-big3.jpg",
    href: "/composite-skill-lab",
    tag: "Grades 1–12",
  },
  {
    number: "02",
    title: "AI & Robotics Lab",
    copy: "A hands-on environment where students learn to code, automate, prototype, and solve real problems.",
    image: "/images/tilt-imgs/tilt-2.jpg",
    href: "/ai-robotics-lab",
    tag: "Applied technology",
  },
  {
    number: "03",
    title: "AeroBay for Schools",
    copy: "An end-to-end STEAM ecosystem combining labs, curriculum, kits, trainers, analytics, and competitions.",
    image: "/images/gallery-big1.jpg",
    href: "/aerobay-for-school",
    tag: "Complete ecosystem",
  },
];

const ecosystem = [
  {
    number: "01",
    title: "Purpose-built labs",
    copy: "Industrial-grade spaces designed to make advanced concepts tangible and exciting.",
  },
  {
    number: "02",
    title: "Integrated curriculum",
    copy: "Age-appropriate, NEP-aligned pathways mapped to meaningful classroom outcomes.",
  },
  {
    number: "03",
    title: "Expert STEAM trainers",
    copy: "Engineers and educators who guide students from first idea to working prototype.",
  },
  {
    number: "04",
    title: "Kits & competitions",
    copy: "Project kits, certifications, and national opportunities that keep ambition moving forward.",
  },
];

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
              AeroBay builds hands-on learning ecosystems that help schools
              turn curiosity into capability—through aviation, AI, robotics,
              design, and advanced making.
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

      <section className={styles.solutions}>
        <div className={styles.shell}>
          <div className={styles.sectionHeading}>
            <div>
              <p className={styles.eyebrow}>Learning infrastructure</p>
              <h2>Built for schools that want more than a lab.</h2>
            </div>
            <p>
              Every AeroBay solution connects space, curriculum, technology,
              and mentorship into one outcome-driven learning experience.
            </p>
          </div>

          <div className={styles.solutionGrid}>
            {solutions.map((solution) => (
              <Link
                href={solution.href}
                className={styles.solutionCard}
                key={solution.title}
              >
                <Image
                  src={solution.image}
                  alt={`${solution.title} at an AeroBay partner school`}
                  fill
                  sizes="(max-width: 767px) calc(100vw - 36px), (max-width: 1199px) 33vw, 470px"
                />
                <div className={styles.solutionShade} />
                <div className={styles.solutionTop}>
                  <span>{solution.number}</span>
                  <span>{solution.tag}</span>
                </div>
                <div className={styles.solutionContent}>
                  <h3>{solution.title}</h3>
                  <p>{solution.copy}</p>
                  <span className={styles.cardArrow}>
                    <FontAwesomeIcon icon={faArrowRight} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.ecosystem}>
        <div className={styles.shell}>
          <div className={styles.ecosystemIntro}>
            <div>
              <p className={styles.eyebrow}>The AeroBay difference</p>
              <h2>A complete ecosystem. One accountable partner.</h2>
            </div>
            <p>
              Schools shouldn’t have to coordinate multiple vendors to create
              meaningful STEAM learning. We bring every essential layer
              together and support it end to end.
            </p>
          </div>

          <div className={styles.ecosystemGrid}>
            {ecosystem.map((item) => (
              <article key={item.title}>
                <span>{item.number}</span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.copy}</p>
                </div>
              </article>
            ))}
          </div>

          <div className={styles.ecosystemVisual}>
            <Image
              src="/images/feature-img.png"
              alt="The complete AeroBay learning ecosystem"
              fill
              sizes="(max-width: 1440px) calc(100vw - 96px), 1440px"
            />
          </div>
        </div>
      </section>

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
