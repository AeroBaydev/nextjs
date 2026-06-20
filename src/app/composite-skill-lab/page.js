import Image from "next/image";
import Link from "next/link";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://aerobay.in";
const baseUrl = siteUrl.replace(/\/$/, "");
const pageUrl = `${baseUrl}/composite-skill-lab`;
const pageTitle = "Composite Skill Lab for CBSE Schools in India | AeroBay";
const pageDescription =
  "AeroBay sets up CBSE Composite Skill Labs for schools across India with industrial grade equipment, robotics, AI, aerospace, drones, coding, trained educators and NEP 2020 aligned implementation.";
const pageImage = "/images/clients/csl.png";
const pageImageWidth = 1448;
const pageImageHeight = 1086;

export const metadata = {
  title: {
    absolute: pageTitle,
  },
  description: pageDescription,
  keywords: [
    "Composite Skill Lab",
    "Composite Skill Lab for CBSE schools",
    "CBSE Composite Skill Lab",
    "Composite Skill Lab setup in India",
    "Skill Lab for Schools",
    "NEP 2020 Skill Lab",
    "AI Robotics Composite Skill Lab",
    "AeroBay Composite Skill Lab",
  ],
  alternates: {
    canonical: "/composite-skill-lab",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: pageUrl,
    siteName: "AeroBay",
    type: "website",
    images: [
      {
        url: pageImage,
        width: pageImageWidth,
        height: pageImageHeight,
        alt: "Composite Skill Lab setup by AeroBay for schools",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: [pageImage],
  },
};

const faqItems = [
  {
    question: "What is a Composite Skill Lab?",
    answer:
      "A Composite Skill Lab is a hands-on learning space for CBSE schools that brings skill education, STEM, coding, robotics, AI, design, prototyping and vocational learning into one practical lab environment.",
  },
  {
    question: "Is a Composite Skill Lab mandatory for CBSE schools?",
    answer:
      "CBSE has directed affiliated schools to establish Composite Skill Labs as part of skill education implementation. Schools should refer to the latest CBSE circulars and affiliation requirements for exact timelines, area norms and compliance details.",
  },
  {
    question: "What does AeroBay provide for Composite Skill Lab setup?",
    answer:
      "AeroBay supports schools with lab planning, layout guidance, industrial grade equipment, AI and robotics modules, aerospace and drone learning, coding activities, curriculum mapping, trained educators and implementation support.",
  },
  {
    question: "Why choose AeroBay as a Composite Skill Lab partner?",
    answer:
      "AeroBay by Aviotron Aerospace combines education delivery with engineering-led lab infrastructure, helping schools build durable, future-ready Composite Skill Labs instead of one-time kit-based activity rooms.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${baseUrl}#organization`,
  name: "AeroBay",
  legalName: "Aviotron Aerospace Pvt Ltd",
  url: baseUrl,
  logo: `${baseUrl}/images/logo.png`,
  description:
    "AeroBay provides Composite Skill Lab, AI Robotics Lab and STEAM education solutions for schools in India.",
  sameAs: [
    "https://www.linkedin.com/company/aviotron-aerospace/",
    "https://www.instagram.com/aero_bay",
    "https://www.facebook.com/aviotronaerospace",
    "https://youtube.com/@aerobaypodcast",
  ],
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${pageUrl}#service`,
  name: "Composite Skill Lab setup for CBSE schools",
  alternateName: [
    "CBSE Composite Skill Lab",
    "Skill Lab for Schools",
    "NEP 2020 Skill Lab",
  ],
  provider: {
    "@id": `${baseUrl}#organization`,
  },
  areaServed: {
    "@type": "Country",
    name: "India",
  },
  audience: {
    "@type": "EducationalAudience",
    educationalRole: "school",
  },
  serviceType: "School Composite Skill Lab setup",
  category: "Educational lab infrastructure",
  description: pageDescription,
  url: pageUrl,
};

const webPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${pageUrl}#webpage`,
  url: pageUrl,
  name: pageTitle,
  description: pageDescription,
  inLanguage: "en-IN",
  isPartOf: {
    "@type": "WebSite",
    name: "AeroBay",
    url: baseUrl,
  },
  about: {
    "@id": `${pageUrl}#service`,
  },
  primaryImageOfPage: {
    "@type": "ImageObject",
    url: `${baseUrl}${pageImage}`,
    width: pageImageWidth,
    height: pageImageHeight,
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: baseUrl,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Composite Skill Lab",
      item: pageUrl,
    },
  ],
};

const cardStyle = {
  background:
    "linear-gradient(180deg, rgba(255,255,255,0.11) 0%, rgba(255,255,255,0.045) 100%)",
  border: "1px solid rgba(255,255,255,0.14)",
  boxShadow: "0 12px 28px rgba(0,0,0,0.22)",
};

const focusAreas = [
  {
    title: "AI and robotics",
    text: "Build intelligent systems, automation logic and robotics confidence.",
  },
  {
    title: "Aerospace and drones",
    text: "Explore flight, aircraft systems, payloads and drone applications.",
  },
  {
    title: "Coding and data science",
    text: "Connect programming, data handling and problem-solving projects.",
  },
  {
    title: "Electronics and IoT",
    text: "Work with sensors, circuits, connected devices and control systems.",
  },
  {
    title: "Design thinking",
    text: "Turn classroom ideas into testable prototypes and presentations.",
  },
  {
    title: "3D prototyping",
    text: "Create models, components and maker-space outputs students can refine.",
  },
  {
    title: "Meteorology and space education",
    text: "Link weather, space science and observation-based learning.",
  },
  {
    title: "E-mobility and future skills",
    text: "Introduce mobility, energy, engineering and future career pathways.",
  },
];

const benefits = [
  {
    title: "CBSE and NEP Aligned",
    text: "Designed around skill education, experiential learning and future-ready school outcomes.",
  },
  {
    title: "Industrial Grade Setup",
    text: "Durable lab infrastructure, equipment selection and layouts built for sustained classroom use.",
  },
  {
    title: "Teacher Enablement",
    text: "Training and implementation support so the lab becomes active learning, not idle equipment.",
  },
  {
    title: "Student Project Outcomes",
    text: "Hands-on modules that help students build, test, present and improve real prototypes.",
  },
];

export default function CompositeSkillLabPage() {
  return (
    <div className="page-main">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <section
        className="page_banner whatsnew-banner bg-blk position-relative overflow-hidden"
        style={{ paddingTop: "clamp(78px, 6vw, 104px)", paddingBottom: 72 }}
      >
        <div
          aria-hidden="true"
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{
            background:
              "linear-gradient(180deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.88) 100%)",
            pointerEvents: "none",
            zIndex: 0,
          }}
        />

        <div className="position-relative" style={{ zIndex: 1 }}>
          <div className="container">
            <div className="row">
              <div className="col-lg-11 mx-auto heading-section text-center px-3 position-relative">
                <div
                  className="light_heading"
                  style={{
                    position: "absolute",
                    top: "clamp(-2px, -2vw, 0px)",
                    left: 0,
                    right: 0,
                    zIndex: 0,
                    pointerEvents: "none",
                    fontSize: "clamp(36px, 7.4vw, 68px)",
                    fontWeight: 800,
                    letterSpacing: "3px",
                    lineHeight: 1,
                    textTransform: "uppercase",
                  }}
                >
                  Composite Skill Lab
                </div>

                <h1
                  style={{
                    position: "relative",
                    zIndex: 2,
                    fontSize: "clamp(1.7rem, 3.1vw, 3.4rem)",
                    fontWeight: 600,
                    lineHeight: 1.12,
                    color: "#ffffff",
                    maxWidth: 980,
                    margin: "clamp(82px, 7vw, 96px) auto 0 auto",
                  }}
                >
                  Composite Skill Lab for CBSE Schools in India
                </h1>

                <p
                  className="mx-auto"
                  style={{
                    position: "relative",
                    zIndex: 2,
                    maxWidth: 820,
                    marginTop: 18,
                    fontSize: "clamp(1rem, 1.5vw, 1.25rem)",
                    lineHeight: 1.8,
                    color: "rgba(255,255,255,0.88)",
                  }}
                >
                  AeroBay builds <strong>CBSE Composite Skill Labs</strong> with
                  industrial grade equipment, AI, robotics, aerospace, drones, coding,
                  design thinking, trained educators and <strong>NEP 2020</strong> aligned
                  implementation for future-ready schools.
                </p>
              </div>
            </div>

            <div className="row g-4 align-items-center" style={{ marginTop: "clamp(42px, 5vw, 70px)" }}>
              <div className="col-lg-6">
                <div
                  className="overflow-hidden"
                  style={{
                    borderRadius: 8,
                    border: "1px solid rgba(255,255,255,0.18)",
                    boxShadow: "0 22px 48px rgba(0,0,0,0.38)",
                    aspectRatio: "1.24 / 1",
                    background: "rgba(255,255,255,0.04)",
                  }}
                >
                  <Image
                    src={pageImage}
                    alt="Composite Skill Lab setup for CBSE schools by AeroBay"
                    width={pageImageWidth}
                    height={pageImageHeight}
                    className="w-100 h-100"
                    sizes="(max-width: 991px) 100vw, 600px"
                    priority
                    style={{ objectFit: "cover", objectPosition: "center" }}
                  />
                </div>
              </div>

              <div className="col-lg-6">
                <div
                  style={{
                    maxWidth: 610,
                    marginLeft: "auto",
                    padding: "clamp(10px, 1.5vw, 18px) 0",
                  }}
                >
                  <p
                    style={{
                      color: "#8ed6ff",
                      fontSize: "0.84rem",
                      fontWeight: 700,
                      letterSpacing: "0.08em",
                      marginBottom: 12,
                      textTransform: "uppercase",
                    }}
                  >
                    CBSE skill education infrastructure
                  </p>
                  <h2
                    style={{
                      color: "#ffffff",
                      fontSize: "clamp(1.8rem, 2.4vw, 2.7rem)",
                      lineHeight: 1.14,
                      marginBottom: 16,
                    }}
                  >
                    What is a Composite Skill Lab?
                  </h2>
                  <p style={{ color: "rgba(255,255,255,0.9)", fontSize: "1.02rem", lineHeight: 1.75 }}>
                    A <strong>Composite Skill Lab</strong> is a multidisciplinary school lab
                    where students learn by doing: building models, programming devices,
                    exploring robotics, prototyping ideas, and connecting classroom knowledge
                    with practical skills.
                  </p>
                  <p style={{ color: "rgba(255,255,255,0.82)", fontSize: "1.02rem", lineHeight: 1.75 }}>
                    AeroBay helps schools plan, install and run a lab that supports CBSE skill
                    education goals, NEP 2020 learning outcomes, faculty enablement and long-term
                    campus differentiation.
                  </p>
                  <div className="row g-3 mt-2">
                    {[
                      "Lab planning",
                      "Trained Educators",
                      "Industrial grade equipment",
                      "Curriculum mapping",
                    ].map((item) => (
                      <div key={item} className="col-6">
                        <div
                          style={{
                            border: "1px solid rgba(255,255,255,0.16)",
                            borderRadius: 8,
                            color: "rgba(255,255,255,0.9)",
                            fontSize: "0.94rem",
                            fontWeight: 600,
                            padding: "12px 14px",
                            background: "rgba(255,255,255,0.06)",
                          }}
                        >
                          {item}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="row g-4" style={{ marginTop: "clamp(56px, 6vw, 86px)" }}>
              <div className="col-12">
                <h2
                  className="text-center mx-auto"
                  style={{
                    color: "#ffffff",
                    fontSize: "clamp(1.55rem, 2.6vw, 2.6rem)",
                    lineHeight: 1.18,
                    maxWidth: 900,
                    marginBottom: 8,
                  }}
                >
                  Domains Covered in an AeroBay Composite Skill Lab
                </h2>
              </div>
              {focusAreas.map((area) => (
                <div key={area.title} className="col-sm-6 col-lg-3">
                  <div className="p-4 h-100" style={{ ...cardStyle, borderRadius: 8, minHeight: 158 }}>
                    <h3 style={{ color: "#ffffff", fontSize: "1.04rem", lineHeight: 1.25, marginBottom: 10 }}>
                      {area.title}
                    </h3>
                    <p style={{ color: "rgba(255,255,255,0.78)", lineHeight: 1.55, marginBottom: 0, fontSize: "0.94rem" }}>
                      {area.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="row mt-5 g-4">
              <div>
                <h2
                  className="text-center mx-auto"
                  style={{
                    color: "#ffffff",
                    fontSize: "clamp(1.55rem, 2.6vw, 2.6rem)",
                    lineHeight: 1.18,
                    maxWidth: 900,
                    marginBottom: 8,
                  }}
                >
                  Our Services and Benefits for Schools
                </h2>
              </div>
              {benefits.map((benefit) => (
                <div key={benefit.title} className="col-md-6 col-lg-3">
                  <div className="p-4 rounded-4 h-100" style={cardStyle}>
                    <h2 style={{ color: "#ffffff", fontSize: "1.18rem" }}>{benefit.title}</h2>
                    <p style={{ color: "rgba(255,255,255,0.84)", lineHeight: 1.65, marginBottom: 0 }}>
                      {benefit.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="row mt-3 g-3">
              <div className="col-lg-7">
                <div className="p-4 p-md-5 rounded-4 h-100" style={cardStyle}>
                  <h2 style={{ color: "#ffffff", fontSize: "clamp(1.45rem, 2.3vw, 2.3rem)" }}>
                    Why Schools Choose AeroBay
                  </h2>
                  <p style={{ color: "rgba(255,255,255,0.9)", lineHeight: 1.8 }}>
                    When school leaders search for the best <strong>Composite Skill Lab
                    provider in India</strong>, they need a partner who provides end-to-end support—from 
                    planning and setup to training and implementation. AeroBay supports the full journey: requirement mapping, lab
                    planning, implementation, trained educators, project pathways and long-term
                    academic activation.
                  </p>
                  <p style={{ color: "rgba(255,255,255,0.84)", lineHeight: 1.8, marginBottom: 0 }}>
                    The result is a visible, high-utility skill lab that strengthens parent
                    confidence, student engagement, school branding and compliance readiness.
                  </p>
                </div>
              </div>

              <div className="col-lg-5">
                <div className="p-4 p-md-5 rounded-4 h-100" style={cardStyle}>
                  <h2 style={{ color: "#ffffff", fontSize: "clamp(1.35rem, 2vw, 2rem)" }}>
                    Partner with AeroBay
                  </h2>
                  <p style={{ color: "rgba(255,255,255,0.9)", lineHeight: 1.75 }}>
                    AeroBay is a Composite Skill Lab setup partner for CBSE schools in India,
                    covering AI, robotics, aerospace, drones, coding, prototyping, skill
                    education and NEP 2020 aligned hands-on learning.
                  </p>
                  <div className="d-grid gap-3 mt-4">
                    <Link href="/get-in-touch" className="btn btn-primary rounded-pill">
                      Request Proposal
                    </Link>
                    <Link
                      href="/ai-robotics-lab"
                      className="btn rounded-pill"
                      style={{
                        border: "1px solid rgba(255,255,255,0.7)",
                        color: "#ffffff",
                        backgroundColor: "transparent",
                      }}
                    >
                      Explore AI Robotics Lab
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="row mt-5">
              <div className="col-12">
                <h2 style={{ color: "#ffffff" }}>Frequently Asked Questions</h2>
                <div className="mt-3">
                  {faqItems.map((item) => (
                    <article
                      key={item.question}
                      className="rounded-4 p-4 mb-3"
                      style={{
                        background:
                          "linear-gradient(180deg, rgba(255,255,255,0.09) 0%, rgba(255,255,255,0.03) 100%)",
                        border: "1px solid rgba(255,255,255,0.14)",
                      }}
                    >
                      <h3 style={{ color: "#ffffff", fontSize: "1.1rem" }}>{item.question}</h3>
                      <p style={{ color: "rgba(255,255,255,0.84)", marginBottom: 0 }}>
                        {item.answer}
                      </p>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
