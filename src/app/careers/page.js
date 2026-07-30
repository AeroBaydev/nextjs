import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faCheck,
  faPlay,
} from "@fortawesome/free-solid-svg-icons";
import styles from "./page.module.css";

const jobsUrl = "https://aerobay.zohorecruit.in/jobs/Careers";

const values = [
  {
    number: "01",
    title: "Build with purpose",
    copy: "Your work reaches real classrooms and helps young people discover what they are capable of.",
  },
  {
    number: "02",
    title: "Stay relentlessly curious",
    copy: "We ask better questions, explore unfamiliar territory, and keep learning across disciplines.",
  },
  {
    number: "03",
    title: "Own the outcome",
    copy: "Ideas matter here, but taking responsibility and turning them into measurable impact matters more.",
  },
  {
    number: "04",
    title: "Win as one team",
    copy: "Educators, engineers, designers, and operators succeed by sharing context and solving together.",
  },
];

const teams = [
  {
    title: "Learning & Development",
    copy: "Design curriculum, activities, and learning journeys that make complex ideas feel possible.",
    roles: "Curriculum • Training • Program Quality",
  },
  {
    title: "Product & Engineering",
    copy: "Create the kits, lab systems, software, and learning tools that power student innovation.",
    roles: "Product • Technology • Manufacturing",
  },
  {
    title: "School Partnerships",
    copy: "Help education leaders shape and implement the right future-ready ecosystem for their school.",
    roles: "Sales • Marketing • Partnerships",
  },
  {
    title: "Operations & Impact",
    copy: "Turn ambitious plans into consistent classroom experiences across schools and regions.",
    roles: "Operations • Quality • Customer Success",
  },
];

const benefits = [
  "Meaningful work with visible classroom impact",
  "Cross-functional exposure and real ownership",
  "Fast learning in a growing national EdTech company",
  "Opportunities to work across education and technology",
  "A team that values initiative over hierarchy",
  "Room to experiment, improve, and build your craft",
];

const process = [
  {
    step: "01",
    title: "Apply",
    copy: "Choose the role that matches your strengths and share your profile with us.",
  },
  {
    step: "02",
    title: "Talk",
    copy: "Meet our talent team for an open conversation about your experience and goals.",
  },
  {
    step: "03",
    title: "Show your craft",
    copy: "Depending on the role, work through a practical discussion or short skills exercise.",
  },
  {
    step: "04",
    title: "Meet the team",
    copy: "Connect with your future collaborators and align on the impact you can create together.",
  },
];

export default function Careers() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.gridPattern} aria-hidden="true" />
        <div className={styles.shell}>
          <div className={styles.heroGrid}>
            <div className={styles.heroCopy}>
              <p className={styles.eyebrow}>Careers at AeroBay</p>
              <h1>
                Do work that
                <span>changes how India learns.</span>
              </h1>
              <p>
                Join a team of educators, engineers, makers, and operators
                building future-ready learning experiences for schools across
                the country.
              </p>
              <div className={styles.heroActions}>
                <a
                  href={jobsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.primaryAction}
                >
                  View open positions
                  <span>
                    <FontAwesomeIcon icon={faArrowRight} />
                  </span>
                </a>
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
        </div>
      </section>

      <section className={styles.values}>
        <div className={styles.shell}>
          <div className={styles.sectionHeading}>
            <div>
              <p className={styles.eyebrow}>How we work</p>
              <h2>High ownership. Low ego. Real-world impact.</h2>
            </div>
            <p>
              We move quickly because the opportunity is urgent—but we stay
              thoughtful about the students, educators, and schools affected by
              every decision.
            </p>
          </div>

          <div className={styles.valueGrid}>
            {values.map((value) => (
              <article key={value.title}>
                <span>{value.number}</span>
                <div>
                  <h3>{value.title}</h3>
                  <p>{value.copy}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.life}>
        <div className={styles.shell}>
          <div className={styles.lifeHeading}>
            <div>
              <p className={styles.eyebrow}>Life at AeroBay</p>
              <h2>Serious about the mission. Human in how we get there.</h2>
            </div>
            <p>
              See the energy, collaboration, and sense of possibility behind
              the work we do every day.
            </p>
          </div>

          <div className={styles.videoFrame}>
            <iframe
              src="https://www.youtube.com/embed/bMSJqcYJtvQ?si=bbYaiakXQ4vUxnTr&rel=0"
              title="Life at AeroBay"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
            <div className={styles.videoLabel} aria-hidden="true">
              <span>
                <FontAwesomeIcon icon={faPlay} />
              </span>
              Watch the film
            </div>
          </div>
        </div>
      </section>

      <section className={styles.teams}>
        <div className={styles.shell}>
          <div className={styles.teamsIntro}>
            <div>
              <p className={styles.eyebrow}>Find your place</p>
              <h2>Different strengths. One shared direction.</h2>
            </div>
            <p>
              AeroBay’s impact depends on specialists across the entire
              education journey—from the first curriculum idea to consistent
              delivery in every classroom.
            </p>
          </div>

          <div className={styles.teamGrid}>
            {teams.map((team, index) => (
              <article key={team.title}>
                <div className={styles.teamNumber}>
                  {String(index + 1).padStart(2, "0")}
                </div>
                <h3>{team.title}</h3>
                <p>{team.copy}</p>
                <span>{team.roles}</span>
              </article>
            ))}
          </div>

          <div className={styles.careerSpotlight}>
            <div className={styles.spotlightVideo}>
              <iframe
                src="https://www.youtube.com/embed/xQKAV46kGRo?si=NfhMa8KBm-gjMGYE&rel=0"
                title="Career growth as a STEAM and Robotics Trainer at AeroBay"
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>

            <div className={styles.spotlightCopy}>
              <p className={styles.eyebrow}>Career spotlight</p>
              <h3>Where teaching meets technology.</h3>
              <p>
                A STEAM or Robotics Trainer does more than deliver lessons.
                You help students turn questions into prototypes, guide them
                through real engineering challenges, and build the confidence
                to solve problems independently.
              </p>
              <div className={styles.trainerPaths}>
                <div>
                  <span>What you’ll do</span>
                  <strong>
                    Facilitate projects, mentor students, and bring future-ready
                    concepts to life.
                  </strong>
                </div>
                <div>
                  <span>Where you can grow</span>
                  <strong>
                    Advance into program leadership, curriculum design,
                    technical training, or education operations.
                  </strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.growth}>
        <div className={styles.shell}>
          <div className={styles.growthGrid}>
            <div className={styles.growthVisual}>
              <Image
                src="/images/tilt-imgs/tilt-6.jpg"
                alt="The AeroBay team creating hands-on learning experiences"
                fill
                sizes="(max-width: 991px) calc(100vw - 64px), 50vw"
              />
              <div>
                <strong>Build your career</strong>
                <span>while building the future of learning</span>
              </div>
            </div>

            <div className={styles.growthCopy}>
              <p className={styles.eyebrow}>Why AeroBay</p>
              <h2>Grow where your work matters.</h2>
              <p>
                We offer the kind of environment where learning happens fast,
                responsibilities are real, and good ideas can travel from a
                conversation to classrooms across India.
              </p>
              <ul>
                {benefits.map((benefit) => (
                  <li key={benefit}>
                    <FontAwesomeIcon icon={faCheck} />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.process}>
        <div className={styles.shell}>
          <div className={styles.processHeading}>
            <div>
              <p className={styles.eyebrow}>What to expect</p>
              <h2>A clear, human hiring process.</h2>
            </div>
            <p>
              We use each conversation to understand your craft, working style,
              and the kind of impact you want to create.
            </p>
          </div>

          <div className={styles.processGrid}>
            {process.map((item) => (
              <article key={item.step}>
                <span>{item.step}</span>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.cta}>
        <div className={styles.shell}>
          <div className={styles.ctaCard}>
            <div>
              <p className={styles.eyebrow}>Your next move</p>
              <h2>Ready to build something that lasts?</h2>
              <p>
                Explore our open roles and find where your experience,
                curiosity, and ambition can make the greatest difference.
              </p>
            </div>
            <a
              href={jobsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.primaryAction}
            >
              Explore open roles
              <span>
                <FontAwesomeIcon icon={faArrowRight} />
              </span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
