import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faCheck,
  faPlay,
} from "@fortawesome/free-solid-svg-icons";
import styles from "./page.module.css";

const milestones = [
  {
    year: "2019",
    chapter: "Chapter 01",
    title: "The pilot takes off",
    image: "/images/jrny/cal-2.png",
    summary:
      "AeroBay came into existence with one bold belief: students learn best when they can build, test, and experience ideas for themselves.",
    highlights: [
      "Signed our first partner school in Delhi",
      "Launched a 360° experiential learning solution",
      "Won Best Startup at the AIM Congress in Dubai",
    ],
  },
  {
    year: "2020",
    chapter: "Chapter 02",
    title: "Early impact, scaled",
    image: "/images/jrny/cal-3.png",
    summary:
      "The first school became a growing learning community as our hands-on programs reached more classrooms and more young innovators.",
    highlights: [
      "Expanded to 9 schools",
      "Reached 2,500 students",
      "Founder Neha Chauhan received the British Council Study UK Alumni Award",
    ],
  },
  {
    year: "2021",
    chapter: "Chapter 03",
    title: "A new EdTech era",
    image: "/images/jrny/cal-4.png",
    summary:
      "Aviotron Aerospace Pvt. Ltd. was incorporated, setting the foundation for a complete school innovation ecosystem.",
    highlights: [
      "Expanded the AeroBay lab product range",
      "Recognised by GESA and 500 Global’s Accelerator Aichi",
      "Received the TiE Women Global recognition",
    ],
  },
  {
    year: "2022",
    chapter: "Chapter 04",
    title: "Learning without limits",
    image: "/images/jrny/cal-5.png",
    summary:
      "When learning moved beyond classrooms, AeroBay adapted—building new ways to keep curiosity, making, and mentorship alive.",
    highlights: [
      "Launched AeroBay Online for direct-to-student learning",
      "Raised seed funding under the Startup India Seed Fund Scheme",
      "Featured on Shark Tank India and incubated at NSRCEL, IIM Bangalore",
    ],
  },
  {
    year: "2023",
    chapter: "Chapter 05",
    title: "Back to classrooms",
    image: "/images/jrny/cal-6.png",
    summary:
      "We returned to schools with a stronger model, deeper curriculum integration, and a renewed commitment to measurable student impact.",
    highlights: [
      "Partnered with 40+ schools and reached 15,000+ students",
      "Recognised by IDFC FIRST Bank’s Leap To Unicorn program",
      "Selected by UNICEF India and YuWaah for the Education 5.0 report",
    ],
  },
  {
    year: "2024",
    chapter: "Chapter 06",
    title: "The 10 to 100 journey",
    image: "/images/jrny/cal-7.png",
    summary:
      "A decade-sized ambition became national momentum, taking AeroBay across regions, school communities, and thousands of learning journeys.",
    highlights: [
      "Crossed 100+ schools across 17+ states",
      "Raised a pre-Series A round from Enrission Capital",
      "Founder honoured at the UK Parliament for business and entrepreneurship",
    ],
  },
];

const impact = [
  { value: "250+", label: "Partner schools" },
  { value: "22+", label: "States reached" },
  { value: "100K+", label: "Student journeys" },
];

export default function TheAerobayStory() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroGridPattern} aria-hidden="true" />
        <div className={styles.shell}>
          <div className={styles.heroGrid}>
            <div>
              <p className={styles.eyebrow}>The AeroBay story</p>
              <h1>
                One idea.
                <span>Thousands of possibilities.</span>
              </h1>
              <p className={styles.heroCopy}>
                AeroBay began with a simple question: what if every student
                could experience the joy of building the future—not just
                reading about it?
              </p>
            </div>

            <aside className={styles.manifesto}>
              <span className={styles.manifestoNumber}>01</span>
              <p>
                We are building a generation of curious thinkers, confident
                makers, and fearless problem-solvers.
              </p>
              <div className={styles.impactGrid} aria-label="AeroBay impact">
                {impact.map((item) => (
                  <div key={item.label}>
                    <strong>{item.value}</strong>
                    <span>{item.label}</span>
                  </div>
                ))}
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className={styles.origin}>
        <div className={styles.shell}>
          <div className={styles.sectionHeading}>
            <div>
              <p className={styles.eyebrow}>Where it began</p>
              <h2>Built for the moment curiosity becomes confidence.</h2>
            </div>
            <p>
              From aviation and aeromodelling to AI, robotics, design, and
              advanced making, our ecosystem turns abstract concepts into
              experiences students can see, touch, and shape.
            </p>
          </div>

          <div className={styles.filmGrid}>
            <div className={styles.videoFrame}>
              <iframe
                src="https://www.youtube.com/embed/oILxs3Q3MXM?si=WK0ubMesRvIsfKK1&rel=0"
                title="The AeroBay story"
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
              <div className={styles.videoLabel} aria-hidden="true">
                <span>
                  <FontAwesomeIcon icon={faPlay} />
                </span>
                Watch our story
              </div>
            </div>

            <blockquote className={styles.quote}>
              <span className={styles.quoteMark}>“</span>
              <p>
                Education changes when students stop being observers and start
                becoming creators.
              </p>
              <footer>
                <strong>Our founding belief</strong>
                <span>AeroBay</span>
              </footer>
            </blockquote>
          </div>
        </div>
      </section>

      <section className={styles.journey}>
        <div className={styles.shell}>
          <div className={styles.journeyIntro}>
            <div>
              <p className={styles.eyebrow}>Our journey</p>
              <h2>From one classroom to a national movement.</h2>
            </div>
            <p>
              Every chapter reflects the same purpose: helping schools make
              future-ready learning real, relevant, and accessible.
            </p>
          </div>

          <div className={styles.timeline}>
            {milestones.map((milestone, index) => (
              <article className={styles.milestone} key={milestone.year}>
                <div className={styles.timelineMarker} aria-hidden="true">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                </div>

                <div className={styles.milestoneVisual}>
                  <Image
                    src={milestone.image}
                    alt={`AeroBay milestone from ${milestone.year}`}
                    fill
                    sizes="(max-width: 767px) calc(100vw - 36px), (max-width: 1199px) 42vw, 520px"
                  />
                </div>

                <div className={styles.milestoneContent}>
                  <div className={styles.milestoneMeta}>
                    <span>{milestone.chapter}</span>
                    <strong>{milestone.year}</strong>
                  </div>
                  <h3>{milestone.title}</h3>
                  <p>{milestone.summary}</p>
                  <ul>
                    {milestone.highlights.map((highlight) => (
                      <li key={highlight}>
                        <FontAwesomeIcon icon={faCheck} />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.nextChapter}>
        <div className={styles.shell}>
          <div className={styles.nextChapterCard}>
            <div>
              <p className={styles.eyebrow}>The next chapter</p>
              <h2>The story is still being written.</h2>
              <p>
                The next milestone is not just ours—it belongs to every school,
                educator, and student ready to reimagine what learning can be.
              </p>
            </div>
            <div className={styles.actions}>
              <Link href="/get-in-touch" className={styles.primaryAction}>
                Build with us
                <span>
                  <FontAwesomeIcon icon={faArrowRight} />
                </span>
              </Link>
              <Link
                href="/about/meet-the-visionaries"
                className={styles.secondaryAction}
              >
                Meet our team
                <FontAwesomeIcon icon={faArrowRight} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
