"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown, faArrowRight, faCheck, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import styles from "./schools.module.css";

const schoolModel = ["Understand", "Demonstrate", "Requirement mapping", "Plan", "Design", "Build", "Train", "Deploy", "Operate", "Measure", "Improve"];

const domains = [
  { name: "Aerospace", text: "Explore flight, structures and the systems that make aviation possible.", image: "/images/gallery-big5.JPG" },
  { name: "Space Science", text: "Turn distant ideas into models, experiments and observable systems.", image: "/images/solar-system.jpg" },
  { name: "Aeromodelling", text: "Design, make and test aircraft models through iterative hands-on work.", image: "/images/gallery-big1.jpg" },
  { name: "Drones", text: "Understand flight systems, controls and responsible applications.", image: "/images/tilt-imgs/tilt-3.jpg" },
  { name: "Robotics & AI", text: "Build mechanisms, add intelligence and learn by making systems respond.", image: "/images/gallery-big4.JPG" },
  { name: "Electronics", text: "Move from circuits and sensors to connected working prototypes.", image: "/images/gallery-3.png" },
  { name: "Design", text: "Frame a problem, develop ideas and improve them through testing.", image: "/images/tilt-imgs/tilt-2.jpg" },
  { name: "3D Printing", text: "Translate a digital design into a physical form students can evaluate.", image: "/images/gallery-big3.jpg" },
  { name: "Manufacturing", text: "Understand materials, tools, processes and how parts come together.", image: "/images/gallery-6.png" },
  { name: "Prototyping", text: "Make early ideas tangible, testable and ready to improve.", image: "/images/gallery-4.png" },
  { name: "E-Vehicles", text: "Explore mobility through energy, electronics and mechanical systems.", image: "/images/gallery-5.png" },
  { name: "Meteorology", text: "Observe weather and connect measurement with scientific inquiry.", image: "/images/gallery-2.png" },
];

const discoveryWords = ["Fly", "Code", "Design", "Build", "Print", "Program", "Experiment", "Create"];

const faqs = [
  ["What does AeroBay provide to a school?", "AeroBay brings together space and requirement planning, lab design and setup, learning equipment, curriculum, trained educators, hands-on student experiences and ongoing operational support."],
  ["Can AeroBay work with an existing lab?", "Yes. AeroBay can help a school activate existing infrastructure with educators, kits, curriculum, operating practices, monitoring and continuous program support."],
  ["What happens before the lab is set up?", "The process starts with school engagement, understanding the requirement and available space, demonstrations where appropriate, and detailed planning before implementation begins."],
  ["How is the lab designed for a school?", "The design is shaped around the school’s requirements and available space. Room photographs or floor plans can support visualization and planning before setup."],
  ["Does AeroBay provide trainers?", "AeroBay can deploy a dedicated trainer to operate the school program and guide student sessions."],
  ["How are trainers prepared?", "Trainer preparation covers classroom management, teaching methodology, relevant technologies, AeroBay activities and the equipment used in the learning environment."],
  ["How does AeroBay support the program after installation?", "Support continues through coordination, reporting, audits, inventory and kit support, trainer upskilling, monitoring and program improvement."],
  ["How is the curriculum implemented?", "Curriculum becomes a sequence of guided, hands-on sessions delivered in the lab, with projects and activities selected around the program structure agreed with the school."],
  ["Which student age groups can participate?", "Participation and activity selection are planned with the school so that learning experiences suit the relevant student groups. The exact structure is discussed during requirement mapping."],
  ["What happens during the implementation process?", "AeroBay moves from requirement understanding and design through setup, orientation, trainer preparation, deployment, program launch, ongoing operations and impact monitoring."],
  ["How does AeroBay monitor the program?", "The monitoring approach considers areas such as participation, session delivery, project completion, lab utilization, trainer performance, student engagement and school feedback."],
  ["Can the program be customized for a school’s requirements?", "Yes. The environment and program can be planned around the school’s space, student groups, timetable, academic priorities and existing infrastructure."],
];

const ArrowLink = ({ href, children, secondary = false }) => (
  <Link href={href} className={secondary ? styles.secondaryAction : styles.primaryAction}>
    {children}<span><FontAwesomeIcon icon={faArrowRight} /></span>
  </Link>
);

const SectionHead = ({ eyebrow, title, copy, light = false }) => (
  <div className={`${styles.sectionHead} ${light ? styles.sectionHeadLight : ""}`} data-reveal>
    {eyebrow && <p className={styles.eyebrow}>{eyebrow}</p>}
    <h2>{title}</h2>
    {copy && <p className={styles.sectionCopy}>{copy}</p>}
  </div>
);

export default function SchoolsPage() {
  const [activeDomain, setActiveDomain] = useState(0);
  const [activePath, setActivePath] = useState("build");

  useEffect(() => {
    localStorage.setItem("hasSeenModal", "true");
    // Ye lightweight observer reveal ko progressive rakhta hai, bina scroll-jacking ke.
    const elements = document.querySelectorAll("[data-reveal]");
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.setAttribute("data-visible", "true")),
      { threshold: 0.14 }
    );
    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(([question, answer]) => ({ "@type": "Question", name: question, acceptedAnswer: { "@type": "Answer", text: answer } })),
  };

  return (
    <main className={styles.page}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className={styles.hero}>
        <Image src="/images/gallery-big3.jpg" alt="AeroBay composite skill lab inside a school" fill priority sizes="100vw" className={styles.heroImage} />
        <div className={styles.heroShade} aria-hidden="true" />
        <div className={styles.techGrid} aria-hidden="true" />
        <div className={styles.shell}>
          <div className={styles.heroContent}>
            <p className={styles.eyebrow}>AeroBay for schools</p>
            <h1>A Lab Is Only <span>the Beginning.</span></h1>
            <p>AeroBay helps schools turn physical spaces into active learning environments — bringing together infrastructure, trained educators, curriculum, hands-on experiences and ongoing program support.</p>
            <div className={styles.actions}>
              <ArrowLink href="/get-in-touch">Talk to Our School Team</ArrowLink>
              <a href="#how-it-works" className={styles.heroTextAction}>See How It Works <FontAwesomeIcon icon={faArrowDown} /></a>
            </div>
          </div>
          <div className={styles.heroSignal} aria-hidden="true"><span>Infrastructure</span><span>People</span><span>Program</span><span>Support</span></div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.problem}`} id="how-it-works">
        <div className={styles.shell}>
          <SectionHead eyebrow="The real challenge" title={<>Building a Lab Is Easy.<br />Making It Work Is Different.</>} copy="Infrastructure creates potential. A working program turns that potential into consistent student experience." />
          <div className={styles.activationFlow} data-reveal>
            {[["01", "Equipment", "A room filled with machines, tools and possibility."], ["02", "Operation", "People, curriculum, sessions, maintenance and coordination."], ["03", "Impact", "Students building projects, developing skills and discovering interests."]].map(([number, title, text], index) => (
              <article key={title} className={styles.activationStage} style={{ "--delay": `${index * 120}ms` }}><span>{number}</span><h3>{title}</h3><p>{text}</p>{index < 2 && <FontAwesomeIcon icon={faArrowRight} aria-hidden="true" />}</article>
            ))}
          </div>
          <p className={styles.bridgeStatement} data-reveal>AeroBay manages the journey in between.</p>
        </div>
      </section>

      <section className={`${styles.section} ${styles.model}`}>
        <div className={styles.shell}>
          <SectionHead light eyebrow="The AeroBay school model" title="Everything Behind the Student’s First Session." copy="Before a student walks into a meaningful session, an entire operational system is already moving." />
          <ol className={styles.modelTrack} data-reveal>{schoolModel.map((item, index) => <li key={item}><span>{String(index + 1).padStart(2, "0")}</span><strong>{item}</strong></li>)}</ol>
          <div className={styles.studentMoment} data-reveal><span>Then the student walks in.</span><div className={styles.studentImage}><Image src="/images/gallery-big2.jpg" alt="Students working together with AeroBay learning kits" fill sizes="(max-width: 767px) 100vw, 48vw" /></div></div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.pathways}`}>
        <div className={styles.shell}>
          <SectionHead eyebrow="Two ways to begin" title="Start From Where Your School Is." copy="Whether you are creating a new environment or activating one you already have, the goal is the same: make hands-on learning work." />
          <div className={styles.pathGrid} data-active={activePath} data-reveal>
            <button type="button" onClick={() => setActivePath("build")} onMouseEnter={() => setActivePath("build")} className={styles.pathCard} aria-pressed={activePath === "build"}>
              <span className={styles.pathIndex}>Path A</span><h3>Build</h3><p>Create a new AeroBay learning environment from the ground up.</p>
              <ul>{["Requirement understanding", "Space planning & lab design", "Infrastructure & equipment", "Curriculum & trainer", "Program launch & support"].map((item) => <li key={item}><FontAwesomeIcon icon={faCheck} />{item}</li>)}</ul>
            </button>
            <button type="button" onClick={() => setActivePath("activate")} onMouseEnter={() => setActivePath("activate")} className={styles.pathCard} aria-pressed={activePath === "activate"}>
              <span className={styles.pathIndex}>Path B</span><h3>Activate</h3><p>Already have a lab? Give the space the operating layer it needs.</p>
              <ul>{["Existing infrastructure review", "AeroBay trainer & kits", "Curriculum & operating practices", "Monitoring & support", "Continuous improvement"].map((item) => <li key={item}><FontAwesomeIcon icon={faCheck} />{item}</li>)}</ul>
            </button>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.lab}`}>
        <div className={styles.shell}>
          <SectionHead light eyebrow="Composite skill lab" title="Designed Around What Students Need to Do." copy="Not a showroom of machines. An environment where students can explore, build, test, prototype and create." />
          <div className={styles.labExperience} data-reveal>
            <div className={styles.labVisual}><Image key={domains[activeDomain].image} src={domains[activeDomain].image} alt={`${domains[activeDomain].name} learning at AeroBay`} fill sizes="(max-width: 900px) 100vw, 64vw" /><div className={styles.domainDetail}><span>{String(activeDomain + 1).padStart(2, "0")} / {domains.length}</span><h3>{domains[activeDomain].name}</h3><p>{domains[activeDomain].text}</p></div></div>
            <div className={styles.domainSelector} aria-label="Learning domains">{domains.map((domain, index) => <button key={domain.name} type="button" aria-pressed={activeDomain === index} onClick={() => setActiveDomain(index)}>{domain.name}</button>)}</div>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.workshop}`}>
        <div className={styles.shell}>
          <SectionHead eyebrow="Built for learning" title="From Our Workshop to Their Classroom." copy="AeroBay develops learning products, equipment and activities around the experience students need — connecting the workshop directly to the classroom." />
          <div className={styles.workshopStory} data-reveal>
            <div className={styles.workshopImage}><Image src="/images/collage-1.png" alt="AeroBay design, electronics and student project work" fill sizes="(max-width: 900px) 100vw, 45vw" /></div>
            <ol>{["Idea", "Design", "Build", "Test", "Classroom", "Student project"].map((item, index) => <li key={item}><span>{String(index + 1).padStart(2, "0")}</span>{item}</li>)}</ol>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.human}`}>
        <div className={styles.shell}>
          <SectionHead light eyebrow="The human layer" title="Technology Needs a Teacher." copy="Your lab has a person behind it — prepared for the classroom, deployed for the program and supported by AeroBay." />
          <div className={styles.humanGrid} data-reveal>
            <div className={styles.humanImage}><Image src="/images/tilt-imgs/tilt-4.jpg" alt="AeroBay educator guiding students through a hands-on activity" fill sizes="(max-width: 900px) 100vw, 46vw" /></div>
            <div className={styles.humanStages}>
              <article><span>01</span><h3>Trained by AeroBay</h3><p>Classroom management, teaching methodology, technology, coding, robotics, design, manufacturing and lab equipment.</p></article>
              <article><span>02</span><h3>Deployed by AeroBay</h3><p>A dedicated trainer presence to guide the school program and its student sessions.</p></article>
              <article><span>03</span><h3>Supported by AeroBay</h3><p>Ongoing coordination, upskilling, reporting, monitoring, audits and improvement.</p></article>
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.operations}`}>
        <div className={styles.shell}>
          <SectionHead eyebrow="Program operations" title="The Work Continues After Installation." copy="A managed learning environment needs attention at more than one level. AeroBay stays involved in execution, review and improvement." />
          <div className={styles.opsInterface} data-reveal>
            <div className={styles.opsHeader}><span>Program operations</span><span className={styles.liveDot}>Active support</span></div>
            <div className={styles.opsGrid}>{[["Daily", "Session execution", "Learning objectives", "Trainer coordination", "Immediate support"], ["Periodic", "Reports", "Audits", "Inventory checks", "Trainer upskilling", "Kit support"], ["Continuous", "Utilization monitoring", "Program monitoring", "Impact analysis", "Improvement"]].map(([heading, ...items]) => <article key={heading}><span>{heading}</span>{items.map((item) => <p key={item}>{item}<FontAwesomeIcon icon={faCheck} /></p>)}</article>)}</div>
          </div>
        </div>
      </section>

      <section className={styles.discovery}>
        <div className={styles.discoveryImage}><Image src="/images/gallery-big4.JPG" alt="Student building a robotics project in an AeroBay program" fill sizes="100vw" /></div><div className={styles.discoveryShade} aria-hidden="true" />
        <div className={styles.shell}>
          <SectionHead light eyebrow="Student discovery" title="You Can’t Discover What You’ve Never Experienced." copy="Students can hear about robotics, aerospace, AI, design, electronics, space or manufacturing. Experiencing them is different." />
          <div className={styles.wordField} data-reveal>{discoveryWords.map((word) => <span key={word}>{word}</span>)}</div>
          <p className={styles.discoveryCopy} data-reveal>AeroBay gives students real, hands-on ways to explore different domains and discover what genuinely interests them.</p>
          <div className={styles.discoveryPath} data-reveal><span>Explore</span><i>→</i><span>Try</span><i>→</i><span>Build</span><i>→</i><span>Discover</span></div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.possibility}`}>
        <div className={styles.shell}>
          <SectionHead eyebrow="From interest to possibility" title="Curiosity Can Become a Direction." copy="Early exposure can help students understand their interests, develop skills through experimentation and make more informed future choices." />
          <div className={styles.possibilityTrack} data-reveal>{["Exposure", "Interest", "Experimentation", "Skill", "Project", "Portfolio / competition", "Future possibility"].map((item, index) => <div key={item}><span>{String(index + 1).padStart(2, "0")}</span><strong>{item}</strong></div>)}</div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.control}`}>
        <div className={styles.shell}>
          <div className={styles.controlLayout}>
            <SectionHead light eyebrow="A working partnership" title={<>You Stay in Control.<br />AeroBay Runs the Engine.</>} copy="The school remains an active partner. Together, we align the program with school requirements while AeroBay handles the operating layer that keeps it moving." />
            <div className={styles.controlPanel} data-reveal><div className={styles.controlTop}><span>School program alignment</span><i /></div>{["Curriculum alignment", "Student groups", "Timetable", "Program structure", "School requirements", "Competitions", "Project selection", "Academic-year planning", "School feedback"].map((item, index) => <div key={item} className={styles.controlRow}><span>{item}</span><span>{index % 3 === 0 ? "Plan together" : "Aligned"}</span></div>)}</div>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.implementation}`}>
        <div className={styles.shell}>
          <SectionHead eyebrow="Implementation journey" title="From Idea to Innovation Ecosystem." copy="A clear path from the first school conversation to an environment that is launched, operated and monitored." />
          <ol className={styles.implementationTrack} data-reveal>{["School engagement", "Requirement understanding", "Planning & design", "Lab setup", "School orientation", "Trainer training", "Trainer deployment", "Program launch", "Ongoing operations", "Impact monitoring"].map((item, index) => <li key={item}><span>{String(index + 1).padStart(2, "0")}</span><strong>{item}</strong></li>)}</ol>
        </div>
      </section>

      <section className={styles.launch}>
        <div className={styles.launchCollage} aria-hidden="true"><div><Image src="/images/gallery-big1.jpg" alt="" fill sizes="34vw" /></div><div><Image src="/images/gallery-big5.JPG" alt="" fill sizes="34vw" /></div><div><Image src="/images/tilt-imgs/tilt-1.jpg" alt="" fill sizes="34vw" /></div></div><div className={styles.launchShade} aria-hidden="true" />
        <div className={styles.shell} data-reveal><p className={styles.eyebrow}>The first shared moment</p><h2>Don’t Just Open the Lab.<br /><span>Launch It.</span></h2><p>A launch can bring students, educators and school leadership into the experience — with real projects and demonstrations making the new environment tangible from day one.</p></div>
      </section>

      <section className={`${styles.section} ${styles.impact}`}>
        <div className={styles.shell}>
          <SectionHead eyebrow="Program impact" title="Is the Program Actually Working?" copy="AeroBay’s monitoring approach looks beyond installation to understand the health and use of the school program — without reducing the experience to a single number." />
          <div className={styles.impactDashboard} data-reveal><div className={styles.impactCore}><span>Program health</span><strong>Observe.<br />Understand.<br />Improve.</strong><div className={styles.pulse} aria-hidden="true" /></div><div className={styles.impactSignals}>{["Student participation", "Session delivery", "Project completion", "Lab utilization", "Trainer performance", "Student engagement", "Skill development", "School feedback"].map((item) => <span key={item}>{item}</span>)}</div></div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.schoolExperience}`}>
        <div className={styles.shell}>
          <SectionHead light eyebrow="Inside the school" title="What Happens Inside a School?" copy="Every school context is different. The recurring experience is a connected journey from a school requirement to student participation and ongoing support." />
          <div className={styles.experienceStrip} data-reveal>{[["School context", "AeroBay listens to the school’s goals, available space and current infrastructure.", "/images/gallery-big3.jpg"], ["Active implementation", "The environment, people and program are brought together around the agreed requirement.", "/images/tilt-imgs/tilt-4.jpg"], ["Student experience", "Students move from explanation to making, testing, presenting and reflecting.", "/images/gallery-big5.JPG"]].map(([title, text, image]) => <article key={title}><div><Image src={image} alt={`AeroBay ${title.toLowerCase()}`} fill sizes="(max-width: 767px) 100vw, 33vw" /></div><span>{title}</span><p>{text}</p></article>)}</div>
          <p className={styles.verificationNote}>Detailed named case studies and outcomes are published only when verified school material is available.</p>
        </div>
      </section>

      <section className={`${styles.section} ${styles.trust}`}>
        <div className={styles.shell}>
          <SectionHead eyebrow="Built for schools" title="Designed for Long-Term Partnership." copy="A credible school program is built on clarity, collaboration and support that continues after the environment is installed." />
          <div className={styles.trustPrinciples} data-reveal>{[["Listen", "Plan around the school’s real requirement."], ["Operate", "Connect the space, educator and learning program."], ["Support", "Stay involved as the program is delivered."], ["Improve", "Use monitoring and feedback to strengthen the experience."]].map(([title, text], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.faq}`}>
        <div className={styles.shell}>
          <SectionHead eyebrow="Questions schools ask" title="A Clearer View Before You Begin." />
          <div className={styles.faqList}>{faqs.map(([question, answer], index) => <details key={question} data-reveal><summary><span>{String(index + 1).padStart(2, "0")}</span>{question}<FontAwesomeIcon icon={faChevronDown} /></summary><p>{answer}</p></details>)}</div>
        </div>
      </section>

      <section className={styles.cta}>
        <div className={styles.ctaGlow} aria-hidden="true" /><div className={styles.shell}><div className={styles.ctaInner} data-reveal><p className={styles.eyebrow}>Start a conversation</p><h2>Let’s Build What’s Next.</h2><p>Tell us about your school, your students and what you want to build. We’ll help you explore the right AeroBay learning environment and program.</p><div className={styles.actions}><ArrowLink href="/get-in-touch">Talk to Our School Team</ArrowLink><ArrowLink href="/get-in-touch" secondary>Get in Touch</ArrowLink></div></div></div>
      </section>
    </main>
  );
}
