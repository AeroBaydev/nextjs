"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight, faAward, faChartLine, faFlask, faGraduationCap,
  faHandshake, faLayerGroup, faLightbulb, faPeopleGroup,
  faPersonChalkboard, faRocket, faSchool, faSeedling, faScrewdriverWrench,
} from "@fortawesome/free-solid-svg-icons";
import styles from "./home.module.css";

const ecosystemSteps = ["Design", "Build", "Teach", "Engage", "Measure", "Improve"];

const growthStages = [
  { grade: "Grade 1–3", label: "Curiosity & Exploration", icon: faSeedling },
  { grade: "Grade 4–6", label: "Making & Experimentation", icon: faFlask },
  { grade: "Grade 7–9", label: "Engineering & Problem Solving", icon: faScrewdriverWrench },
  { grade: "Grade 10–12", label: "Innovation, Projects & Career Exposure", icon: faRocket },
];

const realWorldSteps = [
  { label: "Learn", icon: faLightbulb }, { label: "Build", icon: faScrewdriverWrench },
  { label: "Test", icon: faFlask }, { label: "Solve", icon: faLayerGroup },
  { label: "Compete", icon: faAward }, { label: "Create", icon: faRocket },
];

const metrics = [
  { label: "Students Engaged", value: "12,568" },
  { label: "Projects Completed", value: "3,245" },
  { label: "Competitions", value: "128" },
  { label: "Certifications", value: "2,045" },
];

const partnerItems = [
  { title: "Built for Schools", copy: "Aligned with school goals, policies and priorities.", icon: faSchool },
  { title: "Trained & Trusted Educators", copy: "Experts who inspire, guide and empower.", icon: faPersonChalkboard },
  { title: "Future-Ready Skills", copy: "Preparing students for tomorrow's world.", icon: faGraduationCap },
  { title: "Long-Term Partnership", copy: "Continuous support, growth and improvement.", icon: faHandshake },
];

function CardHeading({ icon, title, copy }) {
  return (
    <div className={styles.standoutCardHeading}>
      <div className={styles.standoutCardIcon}><FontAwesomeIcon icon={icon} /></div>
      <div className={styles.standoutCardTitle}>
        <h3>{title}</h3>
        <p>{copy}</p>
      </div>
    </div>
  );
}

export default function HomeStandout() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section || typeof IntersectionObserver === "undefined") {
      setIsVisible(true);
      return undefined;
    }
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    }, { threshold: 0.08 });
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section className={`${styles.standout} ${isVisible ? styles.standoutVisible : ""}`} ref={sectionRef} aria-labelledby="standout-heading">
      <div className={styles.shell}>
        <div className={styles.standoutHero}>
          <div className={styles.standoutIntro}>
            <p className={styles.standoutLabel}>Why AeroBay Stands Out</p>
            <h2 id="standout-heading">Built differently.<br />Designed for <span>lasting impact.</span></h2>
            <p className={styles.standoutCopy}>From the learning environment to the learning journey, AeroBay connects the people, spaces, experiences and technology that help schools build a stronger culture of innovation.</p>
          </div>
          <div className={styles.standoutHeroVisual}>
            <span className={styles.standoutOrb} aria-hidden="true" />
            <Image src="/images/gallery-big4.JPG" alt="A student building a robotics mechanism in an AeroBay learning environment" fill sizes="(max-width: 767px) calc(100vw - 36px), 48vw" />
            <div className={styles.heroVisualTag}><span>Learning made real</span><FontAwesomeIcon icon={faArrowRight} /></div>
          </div>
        </div>

        <div className={styles.standoutGrid}>
          <article className={styles.standoutCard} style={{ "--standout-index": 0 }}>
            <CardHeading icon={faLayerGroup} title="End-to-End Ecosystem" copy="Everything schools need, brought together under one partner." />
            <div className={styles.ecosystemVisual}>
              <Image src="/images/tilt-imgs/tilt-2.jpg" alt="Students exploring an AeroBay learning kit" fill sizes="(max-width: 767px) calc(100vw - 72px), 24vw" />
              <div className={styles.ecosystemPath}>{ecosystemSteps.map((step, index) => <span key={step}><i>{step}</i>{index < ecosystemSteps.length - 1 && <FontAwesomeIcon icon={faArrowRight} aria-hidden="true" />}</span>)}</div>
            </div>
          </article>

          <article className={styles.standoutCard} style={{ "--standout-index": 1 }}>
            <CardHeading icon={faChartLine} title="Built to Grow with Students" copy="A structured learning journey that evolves with every stage of a child's development." />
            <div className={styles.growthJourney}>
              <span className={styles.growthCurve} aria-hidden="true" />
              {growthStages.map((stage) => <div className={styles.growthStage} key={stage.grade}><span><FontAwesomeIcon icon={stage.icon} /></span><div><strong>{stage.grade}</strong><small>{stage.label}</small></div></div>)}
            </div>
          </article>

          <article className={styles.standoutCard} style={{ "--standout-index": 2 }}>
            <CardHeading icon={faRocket} title="From Classroom to Real World" copy="Students apply, test, improve and create — going beyond concepts to real impact." />
            <div className={styles.realWorldVisual}>
              <div className={styles.realWorldPath}>{realWorldSteps.map((step) => <div key={step.label}><span><FontAwesomeIcon icon={step.icon} /></span><small>{step.label}</small></div>)}</div>
              <div className={styles.realWorldImage}><Image src="/images/gallery-big5.JPG" alt="AeroBay students presenting real-world aerospace projects" fill sizes="(max-width: 767px) calc(100vw - 72px), 24vw" /></div>
            </div>
          </article>

          <article className={styles.standoutCard} style={{ "--standout-index": 3 }}>
            <CardHeading icon={faChartLine} title="Measurable Impact" copy="Data-driven insights that help schools track progress and drive outcomes." />
            <div className={styles.analyticsVisual}>
              <div className={styles.metricGrid}>{metrics.map((metric) => <div key={metric.label}><span>{metric.label}</span><strong>{metric.value}</strong></div>)}</div>
              <div className={styles.analyticsChart}>
                <div><span>Engagement over time</span><strong>+38%</strong></div>
                <svg viewBox="0 0 260 94" role="img" aria-label="Upward student engagement trend">
                  <path className={styles.chartGridLine} d="M0 72H260M0 45H260M0 18H260" />
                  <path className={styles.chartArea} d="M0 78 L35 67 L65 71 L98 49 L128 57 L162 34 L194 39 L225 14 L260 21 L260 94 L0 94 Z" />
                  <path className={styles.chartLine} d="M0 78 L35 67 L65 71 L98 49 L128 57 L162 34 L194 39 L225 14 L260 21" />
                </svg>
              </div>
            </div>
          </article>
        </div>

        <div className={styles.partnerStrip}>
          <div className={styles.partnerStatement}><div><FontAwesomeIcon icon={faPeopleGroup} /></div><h3>One Partner.<br /><span>Endless Possibilities.</span></h3></div>
          <div className={styles.partnerReasons}>{partnerItems.map((item) => <div key={item.title}><FontAwesomeIcon icon={item.icon} /><strong>{item.title}</strong><p>{item.copy}</p></div>)}</div>
        </div>
      </div>
    </section>
  );
}
