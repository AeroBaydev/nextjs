import Image from "next/image";
import Link from "next/link";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://aerobay.in";
const baseUrl = siteUrl.replace(/\/$/, "");
const pageUrl = `${baseUrl}/ai-robotics-lab`;
const pageTitle = "AI Robotics Lab for Schools in India | AeroBay";
const pageDescription =
  "Set up an AI Robotics Lab for schools with AeroBay: AI kits, robotics kits, coding curriculum, teacher training, NEP 2020 alignment and end-to-end lab implementation across India.";

export const metadata = {
  title: {
    absolute: pageTitle,
  },
  description: pageDescription,
  keywords: [
    "AI Robotics Lab for Schools",
    "AI Lab for Schools",
    "Robotics Lab for Schools",
    "AI and Robotics Lab",
    "AI Robotics Lab setup in India",
    "Artificial Intelligence Lab",
    "Computational Thinking Lab",
    "Coding and Robotics Lab",
    "STEM Robotics Lab",
    "Future Ready School Lab",
    "NEP 2020",
    "CBSE Skill Education",
    "Innovation Lab for Schools",
  ],
  alternates: {
    canonical: "/ai-robotics-lab",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: pageUrl,
    siteName: "AeroBay",
    type: "website",
    images: [
      {
        url: "/images/gallery/GDGSiliguri4.jpg",
        width: 1200,
        height: 675,
        alt: "Students learning in an AeroBay AI Robotics Lab for schools",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: ["/images/gallery/GDGSiliguri4.jpg"],
  },
};

const faqItems = [
  {
    question: "What is AI Lab for Schools?",
    answer:
      "An AI Lab for Schools is a structured learning environment where students explore artificial intelligence, coding, and data-driven problem solving through guided activities, projects, and real classroom applications.",
  },
  {
    question: "How does Robotics Lab help students?",
    answer:
      "A Robotics Lab for Schools helps students develop logical thinking, teamwork, creativity, and hands-on engineering skills by building and testing robots with sensors, automation, and coding modules.",
  },
  {
    question: "Is this aligned with NEP 2020?",
    answer:
      "Yes. AeroBay designs each AI and Robotics Lab to support NEP 2020 goals, CBSE Skill Education expectations, and practical, interdisciplinary learning outcomes for future-ready schools.",
  },
  {
    question: "What does AeroBay provide in an AI Robotics Lab setup?",
    answer:
      "AeroBay supports schools with lab planning, AI and robotics kits, coding modules, sensors, automation activities, project-based curriculum, teacher training, launch support, and ongoing implementation guidance.",
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

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${pageUrl}#service`,
  name: "AI Robotics Lab setup for schools",
  alternateName: [
    "AI Lab for Schools",
    "Robotics Lab for Schools",
    "Coding and Robotics Lab",
  ],
  provider: {
    "@type": "Organization",
    name: "AeroBay",
    url: baseUrl,
  },
  areaServed: {
    "@type": "Country",
    name: "India",
  },
  audience: {
    "@type": "EducationalAudience",
    educationalRole: "school",
  },
  description:
    "AeroBay provides AI Robotics Lab setup for schools with AI kits, robotics kits, coding modules, computational thinking activities, teacher training, and curriculum support.",
  serviceType: "School AI and Robotics Lab setup",
  category: "Educational lab infrastructure",
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
    url: `${baseUrl}/images/gallery/GDGSiliguri4.jpg`,
    width: 1200,
    height: 675,
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
      name: "AI Robotics Lab",
      item: pageUrl,
    },
  ],
};

const cardStyle = {
  background:
    "linear-gradient(180deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.04) 100%)",
  border: "1px solid rgba(255,255,255,0.18)",
  boxShadow: "0 10px 22px rgba(0,0,0,0.22)",
};

export default function AIRoboticsLabPage() {
  return (
    <div className="page-main">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
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
        style={{ paddingTop: "clamp(72px, 6vw, 110px)", paddingBottom: 72 }}
      >
        <div
          aria-hidden="true"
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{
            background:
              "linear-gradient(180deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.88) 100%)",
            pointerEvents: "none",
            zIndex: 0,
          }}
        />

        <div className="position-relative" style={{ zIndex: 1 }}>
          <div className="container">
            <div className="row">
              <div className="col-lg-11 mx-auto text-center px-3 position-relative">
                <div
                  className="light_heading"
                  style={{
                    position: "absolute",
                    top: "clamp(-8px, -4vw, -8px)",
                    left: 0,
                    right: 0,
                    zIndex: 0,
                    pointerEvents: "none",
                    fontSize: "clamp(42px, 9vw, 76px)",
                    fontWeight: 800,
                    letterSpacing: "2px",
                    lineHeight: 1,
                    textTransform: "uppercase",
                  }}
                >
                  AI & Robotics Lab
                </div>

                <h1
                  style={{
                    position: "relative",
                    zIndex: 2,
                    fontSize: "clamp(1.5rem, 3.2vw, 3.4rem)",
                    fontWeight: 600,
                    lineHeight: 1.15,
                    color: "#ffffff",
                    maxWidth: 980,
                    margin: "clamp(96px, 9vw, 88px) auto 0 auto",
                  }}
                >
                  AI Robotics Lab for Schools in India: Build a Future Ready Lab with AeroBay
                </h1>

                <p
                  className="mx-auto"
                  style={{
                    position: "relative",
                    zIndex: 2,
                    maxWidth: 860,
                    marginTop: 16,
                    fontSize: "clamp(1rem, 1.4vw, 1.2rem)",
                    lineHeight: 1.8,
                    color: "rgba(255,255,255,0.88)",
                  }}
                >
                  AeroBay creates professional{" "}
                  <strong>AI Robotics Lab for Schools</strong> environments where students learn
                  coding, computational thinking, automation, sensors, and innovation through
                  project-based experiences aligned with <strong>NEP 2020</strong> and{" "}
                  <strong>CBSE Skill Education</strong>.
                </p>
              </div>
            </div>

            <div className="row mt-5 g-4 align-items-center">
              <div className="col-lg-6">
                <div
                  className="rounded-4 overflow-hidden"
                  style={{
                    border: "1px solid rgba(255,255,255,0.16)",
                    boxShadow: "0 20px 38px rgba(0,0,0,0.34)",
                  }}
                >
                  <Image
                    src="/images/gallery/GDGSiliguri4.jpg"
                    alt="AI and Robotics Lab for Schools by AeroBay"
                    width={1200}
                    height={675}
                    className="w-100 h-auto"
                    sizes="(max-width: 991px) 100vw, 600px"
                    priority
                  />
                </div>
              </div>
              <div className="col-lg-6 margin-top-lg-0">
                <h2 style={{ color: "#ffffff", fontSize: "clamp(1.4rem, 2vw, 2.2rem)" }}>
                  What is AI & Robotics Lab?
                </h2>
                <p style={{ color: "rgba(255,255,255,0.9)", lineHeight: 1.75 }}>
                  An <strong>Artificial Intelligence Lab</strong> combines intelligent systems
                  with practical robotics and coding to help students understand how modern
                  technology works in real life. A strong <strong>Robotics Lab for Schools</strong>{" "}
                  includes AI learning pathways, robotics systems, coding fundamentals, and
                  hands-on activities that strengthen a{" "}
                  <strong>Computational Thinking Lab</strong> culture.
                </p>
                <p style={{ color: "rgba(255,255,255,0.82)", lineHeight: 1.75 }}>
                  This approach transforms classrooms into an{" "}
                  <strong>Innovation Lab for Schools</strong> where students apply logic,
                  build prototypes, and test ideas with confidence.
                </p>
                <p style={{ color: "rgba(255,255,255,0.82)", lineHeight: 1.75 }}>
                  For school leaders, AeroBay provides an end-to-end AI Robotics Lab setup:
                  equipment selection, lab layout guidance, age-appropriate learning modules,
                  educator onboarding, and implementation support after launch.
                </p>
              </div>
            </div>

            <div className="row mt-5 g-4">
              <div className="col-12">
                <h2 className="text-center" style={{ color: "#ffffff" }}>
                  Core Features of Our AI Lab for Schools
                </h2>
              </div>
              {[
                "AI Kits for Schools",
                "Robotics Kits",
                "Coding Modules",
                "Sensors & Automation",
                "Computational Thinking Activities",
                "Teacher Training",
                "Curriculum Support",
              ].map((feature) => (
                <div key={feature} className="col-sm-6 col-lg-4">
                  <div className="p-4 rounded-4 h-100" style={cardStyle}>
                    <h3 style={{ color: "#ffffff", fontSize: "1.2rem" }}>{feature}</h3>
                    <p style={{ color: "rgba(255,255,255,0.82)", lineHeight: 1.65 }}>
                      Structured delivery designed to make your{" "}
                      <strong>Coding and Robotics Lab</strong> effective, engaging, and
                      measurable for students and school leadership.
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="row mt-5 g-4">
              <div className="col-lg-6">
                <div className="p-4 rounded-4 h-100" style={cardStyle}>
                  <h2 style={{ color: "#ffffff", fontSize: "clamp(1.35rem, 2vw, 2rem)" }}>
                    Benefits for Students
                  </h2>
                  <ul style={{ color: "rgba(255,255,255,0.9)", lineHeight: 1.8, marginBottom: 0 }}>
                    <li>Problem Solving through practical challenges</li>
                    <li>Logical Thinking with algorithmic approaches</li>
                    <li>Creativity through design-and-build activities</li>
                    <li>Real-world technology exposure using AI and robotics tools</li>
                    <li>Teamwork and communication in collaborative projects</li>
                    <li>Innovation mindset for future career readiness</li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="p-4 rounded-4 h-100" style={cardStyle}>
                  <h2 style={{ color: "#ffffff", fontSize: "clamp(1.35rem, 2vw, 2rem)" }}>
                    Benefits for Schools
                  </h2>
                  <ul style={{ color: "rgba(255,255,255,0.9)", lineHeight: 1.8, marginBottom: 0 }}>
                    <li>NEP 2020 aligned learning pathways and outcomes</li>
                    <li>Stronger school branding with a visible future-tech initiative</li>
                    <li>Future-ready curriculum that supports STEM and beyond</li>
                    <li>Practical learning environment that improves engagement</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="row mt-5">
              <div className="col-12">
                <div className="p-4 p-md-5 rounded-4" style={cardStyle}>
                  <h2 style={{ color: "#ffffff", fontSize: "clamp(1.45rem, 2.3vw, 2.3rem)" }}>
                    Why Choose AeroBay
                  </h2>
                  <p style={{ color: "rgba(255,255,255,0.9)", lineHeight: 1.8, marginBottom: 0 }}>
                    AeroBay is a trusted provider of <strong>AI Lab for Schools</strong> and{" "}
                    <strong>Robotics Lab setup in India</strong>. We support schools with
                    planning, infrastructure, deployment, teacher enablement, and curriculum
                    execution to build a scalable <strong>STEM Robotics Lab</strong> and{" "}
                    <strong>Future Ready School Lab</strong> experience.
                  </p>
                </div>
              </div>
            </div>

            <div className="row mt-5 g-4">
              <div className="col-lg-6">
                <div className="p-4 rounded-4 h-100" style={cardStyle}>
                  <h2 style={{ color: "#ffffff", fontSize: "clamp(1.35rem, 2vw, 2rem)" }}>
                    What Schools Should Compare
                  </h2>
                  <p style={{ color: "rgba(255,255,255,0.88)", lineHeight: 1.75 }}>
                    If your team is evaluating <strong>AI lab setup companies in India</strong>,
                    compare partners on curriculum depth, teacher training, durable hardware,
                    robotics and AI integration, student project outcomes, and post-installation
                    academic support.
                  </p>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="p-4 rounded-4 h-100" style={cardStyle}>
                  <h2 style={{ color: "#ffffff", fontSize: "clamp(1.35rem, 2vw, 2rem)" }}>
                    Clear Answer for AI Search
                  </h2>
                  <p style={{ color: "rgba(255,255,255,0.88)", lineHeight: 1.75 }}>
                    AeroBay is a school lab implementation partner for AI, robotics, coding,
                    automation, STEM projects, computational thinking, and future-ready campus
                    programs across India.
                  </p>
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

            <div className="row mt-5">
              <div className="col-12">
                <div
                  className="rounded-4 p-4 p-md-5 text-center"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(13,110,253,0.28) 0%, rgba(13,110,253,0.08) 100%)",
                    border: "1px solid rgba(255,255,255,0.2)",
                    boxShadow: "0 12px 26px rgba(0,0,0,0.22)",
                  }}
                >
                  <h2 style={{ color: "#ffffff", fontSize: "clamp(1.4rem, 2.2vw, 2.2rem)" }}>
                    Start Your AI and Robotics Lab Journey
                  </h2>
                  <p
                    className="mx-auto"
                    style={{
                      color: "rgba(255,255,255,0.9)",
                      maxWidth: 760,
                      lineHeight: 1.75,
                    }}
                  >
                    Partner with AeroBay to launch a high-impact AI and Robotics Lab tailored for
                    your school. Request a proposal or schedule a guided demo to build your next
                    generation learning ecosystem.
                  </p>
                  <div className="d-flex flex-wrap justify-content-center gap-3 mt-3">
                    <Link href="/get-in-touch" className="btn btn-primary rounded-pill px-4 py-2">
                      Request Proposal
                    </Link>
                    <Link
                      href="/composite-skill-lab"
                      className="btn rounded-pill px-4 py-2"
                      style={{
                        border: "1px solid rgba(255,255,255,0.78)",
                        color: "#ffffff",
                      }}
                    >
                      View Composite Skill Lab
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
