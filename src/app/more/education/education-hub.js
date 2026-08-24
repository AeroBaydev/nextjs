"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { educationTopics, featuredInsight } from "./education-insights";
import styles from "./education.module.css";

const domains = [
  ["Aerospace", "Explore flight, structures and aviation systems through practical work.", "/images/gallery-big5.JPG"],
  ["Space Science", "Turn distant concepts into models, experiments and observable systems.", "/images/blog-fig2.png"],
  ["Robotics & AI", "Build mechanisms and explore how intelligent systems sense and respond.", "/images/gallery-big4.JPG"],
  ["Electronics", "Move from components and circuits toward functioning prototypes.", "/images/gallery-3.png"],
  ["Design", "Frame problems, develop ideas and improve them through iteration.", "/images/tilt-imgs/tilt-2.jpg"],
  ["3D Printing", "Translate a digital design into a physical form that can be evaluated.", "/images/gallery-big3.jpg"],
  ["Manufacturing", "Understand materials, tools, processes and how parts come together.", "/images/gallery-6.png"],
  ["Drones", "Explore flight control, systems thinking and responsible applications.", "/images/gallery-big1.jpg"],
  ["E-Vehicles", "Connect energy, electronics and mechanics through mobility concepts.", "/images/gallery-5.png"],
  ["Meteorology", "Use observation and measurement to investigate weather systems.", "/images/gallery-2.png"],
];

const practice = [
  ["Aerospace", "Flight becomes something students can model, test and discuss.", "/images/gallery-big5.JPG"],
  ["Robotics", "Mechanisms move from an idea to something students can build and improve.", "/images/gallery-big4.JPG"],
  ["Design", "Problems become prompts for sketching, making and iteration.", "/images/tilt-imgs/tilt-2.jpg"],
  ["Space", "Models and experiments make large scientific ideas more tangible.", "/images/blog-fig2.png"],
];

const ArrowLink = ({ href, children, secondary = false }) => (
  <Link href={href} className={secondary ? styles.secondaryAction : styles.primaryAction}>
    {children}<span><FontAwesomeIcon icon={faArrowRight} /></span>
  </Link>
);

const SectionHead = ({ eyebrow, title, copy, light = false }) => (
  <div className={`${styles.sectionHead} ${light ? styles.sectionHeadLight : ""}`} data-education-reveal>
    <p className={styles.eyebrow}>{eyebrow}</p><h2>{title}</h2>{copy && <p className={styles.sectionCopy}>{copy}</p>}
  </div>
);

export default function EducationHub() {
  const [activeDomain, setActiveDomain] = useState(0);
  const [activeTopic, setActiveTopic] = useState("All topics");

  useEffect(() => {
    const items = document.querySelectorAll("[data-education-reveal]");
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.setAttribute("data-visible", "true")),
      { threshold: 0.13 }
    );
    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  const articleHref = `/more/education/${featuredInsight.slug}`;

  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroGrid} aria-hidden="true" />
        <div className={styles.shell}>
          <div className={styles.heroLayout}>
            <div className={styles.heroContent}>
              <p className={styles.eyebrow}>AeroBay Education</p>
              <h1>Where Education Meets <span>What Comes Next.</span></h1>
              <p>Ideas, insights and perspectives on experiential learning, emerging technology, skill education and the changing world of education.</p>
              <div className={styles.actions}><a href="#insights" className={styles.primaryAction}>Explore Insights<span><FontAwesomeIcon icon={faArrowDown} /></span></a><ArrowLink href="/aerobay-for-school" secondary>Explore AeroBay for Schools</ArrowLink></div>
            </div>
            <div className={styles.heroEditorial} aria-hidden="true">
              <div className={styles.heroImage}><Image src="/images/blog-fig1.jpg" alt="" fill priority sizes="(max-width: 900px) 90vw, 46vw" /></div>
              <span className={styles.heroIndex}>ED / 01</span><span className={styles.heroNote}>Ideas become meaningful when students can experience them.</span>
              <div className={styles.orbitWord}><span>Explore</span><i>Build</i><strong>Discover</strong></div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.intro}>
        <div className={styles.shell}>
          <div className={styles.introLayout} data-education-reveal>
            <div><p className={styles.eyebrow}>A broader learning canvas</p><h2>Education Is Changing.</h2><blockquote>Learning can move beyond receiving information to experiencing what an idea can do.</blockquote></div>
            <div className={styles.introVisual}><Image src="/images/blog-fig4.jpg" alt="Students exploring a hands-on AeroBay technology activity" fill sizes="(max-width: 900px) 100vw, 46vw" /></div>
          </div>
          <div className={styles.learningVerbs} data-education-reveal>{["Explore", "Experiment", "Build", "Solve", "Collaborate", "Apply"].map((word, index) => <span key={word}><i>{String(index + 1).padStart(2, "0")}</i>{word}</span>)}</div>
        </div>
      </section>

      <section className={styles.featured} id="insights">
        <div className={styles.shell}>
          <article className={styles.featureStory} data-education-reveal>
            <div className={styles.featureImage}><Image src={featuredInsight.image} alt="AeroBay Composite Skill Lab with multidisciplinary learning equipment" fill sizes="(max-width: 900px) 100vw, 55vw" /></div>
            <div className={styles.featureCopy}><p className={styles.eyebrow}>Featured insight</p><span>{featuredInsight.category}</span><h2>{featuredInsight.title}</h2><p>{featuredInsight.excerpt}</p><Link href={articleHref}>Read the Insight <FontAwesomeIcon icon={faArrowRight} /></Link></div>
          </article>
        </div>
      </section>

      <section className={styles.shift}>
        <div className={styles.shell}>
          <SectionHead light eyebrow="The shift in education" title="From Knowing to Doing." copy="Hands-on learning gives students a way to connect an explanation with action, observation and reflection." />
          <ol className={styles.shiftTrack} data-education-reveal>{["Learn", "Experience", "Build", "Apply", "Discover"].map((item, index) => <li key={item}><span>{String(index + 1).padStart(2, "0")}</span><strong>{item}</strong><i aria-hidden="true">→</i></li>)}</ol>
          <p className={styles.shiftStatement} data-education-reveal>Knowledge becomes more tangible when students can use it.</p>
        </div>
      </section>

      <section className={styles.framework}>
        <div className={styles.shell}>
          <SectionHead eyebrow="Education context" title="The Framework Is Evolving Too." copy="Recent education frameworks have placed greater emphasis on skill education and practical learning. These ideas provide context for how schools think about implementation—not a substitute for current official guidance." />
          <div className={styles.frameworkLayout} data-education-reveal>
            <div className={styles.frameworkNote}><span>Context, not a compliance guide</span><p>Schools should refer to the latest official circulars and framework documents when making policy or compliance decisions.</p></div>
            <ol>{[["01", "NEP 2020", "Broad direction"], ["02", "NCF-SE", "Learning context"], ["03", "Skill education", "Practical emphasis"], ["04", "Composite Skill Labs", "School environment"], ["05", "Implementation", "Learning in practice"]].map(([number, title, label]) => <li key={title}><span>{number}</span><strong>{title}</strong><small>{label}</small></li>)}</ol>
          </div>
        </div>
      </section>

      <section className={styles.lab}>
        <div className={styles.shell}>
          <SectionHead light eyebrow="Composite Skill Labs" title="More Than a Room Full of Equipment." copy="A multidisciplinary environment where students can explore practical and technology domains through guided experiences." />
          <div className={styles.labExperience} data-education-reveal>
            <div className={styles.labVisual}><Image key={domains[activeDomain][2]} src={domains[activeDomain][2]} alt={`${domains[activeDomain][0]} learning in an AeroBay environment`} fill sizes="(max-width: 900px) 100vw, 64vw" /><div className={styles.labDetail}><span>{String(activeDomain + 1).padStart(2, "0")} / {domains.length}</span><h3>{domains[activeDomain][0]}</h3><p>{domains[activeDomain][1]}</p></div></div>
            <div className={styles.domainSelector} aria-label="Explore learning domains">{domains.map(([name], index) => <button type="button" aria-pressed={activeDomain === index} onClick={() => setActiveDomain(index)} key={name}>{name}</button>)}</div>
          </div>
        </div>
      </section>

      <section className={styles.perspective}>
        <Image src="/images/gallery-big4.JPG" alt="Student building a robotics mechanism in an AeroBay learning environment" fill sizes="100vw" className={styles.perspectiveImage} />
        <div className={styles.perspectiveShade} aria-hidden="true" />
        <div className={styles.shell}>
          <div className={styles.perspectiveCopy} data-education-reveal><p className={styles.eyebrow}>AeroBay’s perspective</p><h2>Students Can’t Discover What They’ve Never Experienced.</h2><p>Hearing about aerospace, robotics, AI, design or manufacturing is different from trying them. Real projects can give students exposure and help them understand what genuinely interests them.</p></div>
          <div className={styles.discoverySequence} data-education-reveal>{["See", "Try", "Build", "Experiment", "Discover"].map((item) => <span key={item}>{item}</span>)}</div>
        </div>
      </section>

      <section className={styles.practice}>
        <div className={styles.shell}>
          <SectionHead eyebrow="Education in practice" title="What Learning Looks Like When It Becomes Real." copy="Verified AeroBay environments show students moving from explanation toward making, testing and reflection." />
          <div className={styles.practiceGrid}>{practice.map(([title, copy, image], index) => <article key={title} className={index === 0 ? styles.practiceLarge : ""} data-education-reveal><div><Image src={image} alt={`AeroBay ${title.toLowerCase()} learning experience`} fill sizes="(max-width: 767px) 100vw, 50vw" /></div><span>{title}</span><p>{copy}</p></article>)}</div>
        </div>
      </section>

      <section className={styles.approach}>
        <div className={styles.shell}>
          <SectionHead light eyebrow="The environment around learning" title="Learning Needs More Than a Curriculum." copy="Ideas become experience when the right learning layers work together." />
          <div className={styles.approachComposition} data-education-reveal><div className={styles.approachCore}>Experience</div>{["Curriculum", "Space", "Equipment", "Trainers", "Projects", "Operations", "Measurement"].map((item) => <span key={item}>{item}</span>)}</div>
        </div>
      </section>

      <section className={styles.topics}>
        <div className={styles.shell}>
          <SectionHead eyebrow="Explore topics" title="Explore Education." copy="A scalable home for AeroBay perspectives as the education conversation continues to grow." />
          <nav className={styles.topicNav} aria-label="Education insight topics" data-education-reveal><button type="button" aria-pressed={activeTopic === "All topics"} onClick={() => setActiveTopic("All topics")}>All topics</button>{educationTopics.map((topic) => <button type="button" aria-pressed={activeTopic === topic} onClick={() => setActiveTopic(topic)} key={topic}>{topic}</button>)}</nav>
          <div className={styles.latestHead} data-education-reveal><div><p className={styles.eyebrow}>Latest insights</p><h2>Latest from AeroBay Education</h2></div><span>{activeTopic}</span></div>
          <article className={styles.insightCard} data-education-reveal><div><Image src={featuredInsight.image} alt="Inside an AeroBay Composite Skill Lab" fill sizes="(max-width: 767px) 100vw, 38vw" /></div><section><span>{featuredInsight.category}</span><h3>{featuredInsight.title}</h3><p>{featuredInsight.excerpt}</p><Link href={articleHref}>Read more <FontAwesomeIcon icon={faArrowRight} /></Link></section></article>
        </div>
      </section>

      <section className={styles.schoolBridge}>
        <div className={styles.shell}><div className={styles.bridgeLayout} data-education-reveal><div><p className={styles.eyebrow}>From ideas to implementation</p><h2>Thinking About Bringing These Ideas Into Your School?</h2><p>Explore how AeroBay turns these ideas into real learning environments for schools.</p></div><ArrowLink href="/aerobay-for-school">Explore AeroBay for Schools</ArrowLink></div></div>
      </section>

      <section className={styles.cta}>
        <div className={styles.ctaGlow} aria-hidden="true" /><div className={styles.shell}><div className={styles.ctaInner} data-education-reveal><p className={styles.eyebrow}>Continue the conversation</p><h2>Let’s Shape What Education Can Become.</h2><p>Whether you’re exploring new approaches to learning, emerging technologies or hands-on education, start a conversation with AeroBay.</p><div className={styles.actions}><ArrowLink href="/get-in-touch">Talk to AeroBay</ArrowLink><ArrowLink href="/aerobay-for-school" secondary>Explore AeroBay for Schools</ArrowLink></div></div></div>
      </section>
    </main>
  );
}
