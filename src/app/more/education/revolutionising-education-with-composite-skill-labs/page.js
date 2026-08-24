import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { articleSections, featuredInsight } from "../education-insights";
import styles from "./article.module.css";

export const metadata = {
  title: { absolute: "Revolutionising Education with Composite Skill Labs | AeroBay Education" },
  description: featuredInsight.excerpt,
  alternates: { canonical: `/more/education/${featuredInsight.slug}` },
  openGraph: {
    title: featuredInsight.title,
    description: featuredInsight.excerpt,
    type: "article",
    url: `/more/education/${featuredInsight.slug}`,
    images: [{ url: featuredInsight.image, alt: "AeroBay Composite Skill Lab learning environment" }],
  },
};

export default function CompositeSkillLabInsight() {
  return (
    <main className={styles.page}>
      <article>
        <header className={styles.hero}>
          <div className={styles.grid} aria-hidden="true" />
          <div className={styles.shell}>
            <Link href="/more/education" className={styles.backLink}><FontAwesomeIcon icon={faArrowLeft} /> AeroBay Education</Link>
            <p className={styles.eyebrow}>Featured insight · {featuredInsight.category}</p>
            <h1>{featuredInsight.title}</h1>
            <p className={styles.dek}>{featuredInsight.excerpt}</p>
          </div>
        </header>

        <div className={styles.leadImage}><Image src={featuredInsight.image} alt="Inside an AeroBay Composite Skill Lab" fill priority sizes="100vw" /></div>

        <div className={styles.articleShell}>
          <aside className={styles.articleAside}><span>In this insight</span>{articleSections.map((section, index) => <a href={`#section-${index + 1}`} key={section.heading}><i>{String(index + 1).padStart(2, "0")}</i>{section.heading}</a>)}</aside>
          <div className={styles.articleBody}>
            <p className={styles.lead}>What happens when practical learning becomes part of the school environment—not as an occasional activity, but as a structured opportunity to explore, make and apply?</p>
            {articleSections.map((section, index) => (
              <section id={`section-${index + 1}`} key={section.heading} className={styles.articleSection}>
                <span>{String(index + 1).padStart(2, "0")}</span><h2>{section.heading}</h2>
                {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                {section.image && <figure><div><Image src={section.image} alt={section.alt} fill sizes="(max-width: 900px) 100vw, 760px" /></div><figcaption>AeroBay learning environment</figcaption></figure>}
              </section>
            ))}
            <blockquote>Students can hear about technology. A practical learning environment gives them a chance to experience it.</blockquote>
          </div>
        </div>
      </article>

      <section className={styles.bridge}>
        <div className={styles.shell}><div><p className={styles.eyebrow}>From perspective to practice</p><h2>Explore the AeroBay school experience.</h2><p>See how infrastructure, educators, curriculum and operational support come together inside a school.</p></div><Link href="/aerobay-for-school">Explore AeroBay for Schools <span><FontAwesomeIcon icon={faArrowRight} /></span></Link></div>
      </section>
    </main>
  );
}
