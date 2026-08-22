"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import styles from "./page.module.css";
import { fetchData } from "@/lib/api";

const fallbackFounders = [
  {
    name: "Neha Chauhan",
    role: "Founder & CEO",
    image: "/images/team/neha.jpg",
    linkedin: "https://www.linkedin.com/in/neha-chauhan-04b401125/",
  },
  {
    name: "CH Vaishnav",
    role: "Founder & CBO",
    image: "/images/team/vaishnav-26.jpg",
    linkedin: "https://www.linkedin.com/in/vaishnav-c-78532257/",
  },
  {
    name: "Nitin Choyal",
    role: "Founder & CTO",
    image: "/images/team/nitin.jpg",
    linkedin: "https://www.linkedin.com/in/nitin-choyal-48668837/",
  },
];

const fallbackTeam = [
  {
    name: "Shrey Dixit",
    role: "National Sales Head",
    department: "Sales & Marketing",
  },
  {
    name: "Saumya Patel",
    role: "Marketing Head",
    department: "Sales & Marketing",
    image: "/images/team/saumya.png",
  },
  {
    name: "Rahul Raghav",
    role: "Zonal Sales Head",
    department: "Sales & Marketing",
  },
  {
    name: "Vaishnavi Gupta",
    role: "Business Development Associate",
    department: "Sales & Marketing",
  },
  {
    name: "Ravi Raushan",
    role: "Director — Partnerships & Operations",
    department: "Operations",
    image: "/images/team/S7402352-20.jpg",
  },
  {
    name: "Manglesh Pandey",
    role: "Program Quality Manager",
    department: "Operations",
    image: "/images/team/S7401885-14.jpg",
  },
  {
    name: "Gaurav Pratap Singh",
    role: "Software Developer",
    department: "Operations",
    image: "/images/team/gaurav.png",
  },
  {
    name: "Angad Sharma",
    role: "LMS Associate",
    department: "Operations",
  },
  {
    name: "Piyush Kumar",
    role: "Lab Asset & Quality Lead",
    department: "Operations",
    image: "/images/team/S7401787-7.jpg",
  },
  {
    name: "Sarvesh Kumar",
    role: "Classroom Quality Auditor",
    department: "Operations",
  },
  {
    name: "Nirmal Jha",
    role: "Operational Excellence Lead",
    department: "Operations",
  },
  {
    name: "Shivashish Pandey",
    role: "Zonal Manager",
    department: "Operations",
    image: "/images/team/S7402363-21.jpg",
  },
  {
    name: "Ashwani Shukla",
    role: "Zonal Manager",
    department: "Operations",
    image: "/images/team/ashwani.png",
  },
  {
    name: "Md. Adnan Ghazi",
    role: "Associate Regional Manager",
    department: "Operations",
  },
  {
    name: "Vaibhav Joshi",
    role: "Assistant Regional Manager",
    department: "Operations",
  },
  {
    name: "Sandeep Kumar Maurya",
    role: "Assistant Regional Manager",
    department: "Operations",
  },
  {
    name: "Tarun Singh",
    role: "Assistant Regional Manager",
    department: "Operations",
  },
  {
    name: "Punith M",
    role: "Assistant Regional Manager",
    department: "Operations",
  },
  {
    name: "Nitish Sarita Rana",
    role: "Impact Head",
    department: "Operations",
    image: "/images/team/nitish.png",
  },
  {
    name: "Abhishek Shankar",
    role: "Learning & Development Head",
    department: "Learning & Development",
    image: "/images/team/abhishek-ahanker-1.jpg",
  },
  {
    name: "Kushal Das",
    role: "Curriculum Development Lead",
    department: "Learning & Development",
  },
  {
    name: "Ritu Kadam",
    role: "Subject Matter Expert",
    department: "Learning & Development",
    image: "/images/team/ritu.png",
  },
  {
    name: "Prathit Kalra",
    role: "Senior Design Engineer",
    department: "Learning & Development",
    image: "/images/team/S7401876-13.jpg",
  },
  {
    name: "Faizan Shaukat",
    role: "Junior Design Engineer",
    department: "Learning & Development",
    image: "/images/team/faizan.png",
  },
  {
    name: "Md. Qumar Mokhtar",
    role: "Concept Designer",
    department: "Learning & Development",
    image: "/images/team/Qumar.png",
  },
  {
    name: "Sanket Kishor Ambadkar",
    role: "Product Designer",
    department: "Learning & Development",
  },
  {
    name: "Tanush Debnath",
    role: "Toy Designer",
    department: "Learning & Development",
  },
  {
    name: "Swapnil Mishra",
    role: "Head — Procurement",
    department: "Product & Inventory",
    image: "/images/team/Swapnil.png",
  },
  {
    name: "Barath Shiv Kumar",
    role: "Head — Lab Operations",
    department: "Product & Inventory",
    image: "/images/team/barath.png",
  },
  {
    name: "Mahendra Kumar Saini",
    role: "Quality Check Manager",
    department: "Product & Inventory",
    image: "/images/team/mahendra.png",
  },
  {
    name: "Vishal Kumar Paswan",
    role: "Logistics Manager",
    department: "Product & Inventory",
    image: "/images/team/vishal.png",
  },
  {
    name: "Rajesh Sharma",
    role: "Product Supervisor — Aeromodelling",
    department: "Product & Inventory",
    image: "/images/team/S7401789-8.jpg",
  },
  {
    name: "Phoolchand Saini",
    role: "Product Supervisor — Manufacturing",
    department: "Product & Inventory",
  },
  {
    name: "Aman Pandey",
    role: "Product Supervisor — Assembly",
    department: "Product & Inventory",
  },
  {
    name: "Manvendra Singh",
    role: "Lead Robotics Engineer",
    department: "Product & Inventory",
    image: "/images/team/manvendra.png",
  },
  {
    name: "Aman Yadav",
    role: "Product Associate — Additive Manufacturing",
    department: "Product & Inventory",
  },
  {
    name: "Ashish Mishra",
    role: "Product Associate — Electronics",
    department: "Product & Inventory",
    image: "/images/team/ashish.jpg",
  },
  {
    name: "Inder Pal Singh",
    role: "Inventory Management Executive",
    department: "Product & Inventory",
  },
  {
    name: "Anirudh Vishwakarma",
    role: "Interior Designer",
    department: "Product & Inventory",
  },
  {
    name: "Sarthak Gange",
    role: "Interior Designer",
    department: "Product & Inventory",
    image: "/images/team/sarthak.png",
  },
  {
    name: "Milind Bhatnagar",
    role: "Visual Content Specialist",
    department: "Creative & Design",
  },
  {
    name: "Manish Kumar Chaudhary",
    role: "Graphic Designer",
    department: "Creative & Design",
  },
  {
    name: "Bhawana Smriti",
    role: "Graphic Designer",
    department: "Creative & Design",
  },
  {
    name: "Sonal Srivastava",
    role: "HR Business Partner",
    department: "HR & Administration",
    image: "/images/team/sonal.png",
  },
  {
    name: "Samridhi Kapoor",
    role: "Talent Acquisition Lead",
    department: "HR & Administration",
    image: "/images/team/samriddhi.png",
  },
  {
    name: "Raj Kumar Jha",
    role: "Lead Accountant",
    department: "HR & Administration",
    image: "/images/team/S7401933-16.jpg",
  },
  {
    name: "Rajesh Kumar Mishra",
    role: "Associate Accountant",
    department: "HR & Administration",
  },
];

const initials = (name) =>
  name
    .replace(/\([^)]*\)/g, "")
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();

function Portrait({ member, priority = false }) {
  if (!member.image) {
    return (
      <div className={styles.initials} aria-hidden="true">
        <span>{initials(member.name)}</span>
      </div>
    );
  }

  if (/^https?:\/\//.test(member.image)) {
    return <img className={styles.portrait} src={member.image} alt={`${member.name}, ${member.role}`} loading={priority ? "eager" : "lazy"} />;
  }

  return (
    <Image
      className={styles.portrait}
      src={member.image}
      alt={`${member.name}, ${member.role}`}
      fill
      priority={priority}
      sizes="(max-width: 560px) calc(100vw - 36px), (max-width: 767px) 50vw, (max-width: 1199px) 33vw, 25vw"
    />
  );
}

export default function MeetTheVisionaries() {
  const [activeDepartment, setActiveDepartment] = useState("All");
  const [founders, setFounders] = useState(fallbackFounders);
  const [team, setTeam] = useState(fallbackTeam);
  const departments = useMemo(() => [...new Set(team.map((member) => member.department))], [team]);

  useEffect(() => {
    fetchData('/visionaries/public').then(({ visionaries }) => {
      if (!Array.isArray(visionaries)) return;
      const normalized = visionaries.map((member) => ({
        ...member,
        role: member.designation,
        image: member.image_url,
        linkedin: member.linkedin_url,
      }));
      setFounders(normalized.filter((member) => member.member_type === 'founder'));
      setTeam(normalized.filter((member) => member.member_type === 'team'));
    }).catch(() => {});
  }, []);

  const visibleTeam = useMemo(
    () =>
      activeDepartment === "All"
        ? team
        : team.filter((member) => member.department === activeDepartment),
    [activeDepartment, team],
  );

  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroGlow} aria-hidden="true" />
        <div className={styles.shell}>
          <div className={styles.heroGrid}>
            <div>
              <p className={styles.eyebrow}>People of AeroBay</p>
              <h1>
                Meet the visionaries
                <span> shaping what’s next.</span>
              </h1>
              <p className={styles.heroCopy}>
                We are educators, engineers, creators, and operators united by
                one belief: learning becomes limitless when imagination meets
                the right tools.
              </p>
            </div>

            <div className={styles.snapshot} aria-label="Team snapshot">
              <p className={styles.snapshotLabel}>Team snapshot</p>
              <div className={styles.snapshotGrid}>
                <div>
                  <strong>{founders.length}</strong>
                  <span>Founders</span>
                </div>
                <div>
                  <strong>{departments.length}</strong>
                  <span>Core teams</span>
                </div>
                <div>
                  <strong>{team.length}</strong>
                  <span>Team members</span>
                </div>
              </div>
              <p className={styles.snapshotNote}>
                One team, working from strategy to classroom impact.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.leadership}>
        <div className={styles.shell}>
          <div className={styles.sectionHeading}>
            <div>
              <p className={styles.eyebrow}>Executive leadership</p>
              <h2>Built with purpose. Led with conviction.</h2>
            </div>
            <p>
              The founding team brings together education, business, and
              technology to make future-ready learning accessible to every
              school.
            </p>
          </div>

          <div className={styles.founderGrid}>
            {founders.map((founder, index) => (
              <article className={styles.founderCard} key={founder.name}>
                <Portrait member={founder} priority={index < 3} />
                <div className={styles.founderOverlay}>
                  <div>
                    <p>{founder.role}</p>
                    <h3>{founder.name}</h3>
                  </div>
                  <a
                    href={founder.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${founder.name} on LinkedIn`}
                  >
                    <FontAwesomeIcon icon={faLinkedinIn} />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.directory}>
        <div className={styles.shell}>
          <div className={styles.sectionHeading}>
            <div>
              <p className={styles.eyebrow}>Our team</p>
              <h2>Many disciplines. One shared mission.</h2>
            </div>
            <p>
              Explore the people who turn ideas into learning experiences,
              products, partnerships, and measurable outcomes.
            </p>
          </div>

          <div
            className={styles.filters}
            role="group"
            aria-label="Filter team members by department"
          >
            {["All", ...departments].map((department) => {
              const count =
                department === "All"
                  ? team.length
                  : team.filter((member) => member.department === department)
                      .length;

              return (
                <button
                  key={department}
                  type="button"
                  aria-pressed={activeDepartment === department}
                  className={
                    activeDepartment === department ? styles.activeFilter : ""
                  }
                  onClick={() => setActiveDepartment(department)}
                >
                  <span>{department}</span>
                  <small>{count}</small>
                </button>
              );
            })}
          </div>

          <p className={styles.results} aria-live="polite">
            Showing {visibleTeam.length}{" "}
            {visibleTeam.length === 1 ? "team member" : "team members"}
          </p>

          <div className={styles.teamGrid}>
            {visibleTeam.map((member) => (
              <article className={styles.memberCard} key={member.name}>
                <div className={styles.memberVisual}>
                  <Portrait member={member} />
                  <span>{member.department}</span>
                </div>
                <div className={styles.memberInfo}>
                  <h3>{member.name}</h3>
                  <p>{member.role}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
