import Image from "next/image";
import Link from "next/link";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://aerobay.in";

export const metadata = {
  title:
    "Composite Skill Lab for CBSE Schools | AeroBay — Industrial Grade Lab Partner",
  description:
    "AeroBay is a leading Composite Skill Lab provider in India: CBSE-circular-aligned setups, industrial grade equipment, robotics, AI, aerospace, drones, coding & NEP 2020 hands-on learning for classes VI–XII.",
  alternates: {
    canonical: "/composite-skill-lab",
  },
  openGraph: {
    title: "AeroBay Composite Skill Lab | Top School Lab Partner in India",
    description:
      "End-to-end Composite Skill Lab design, equipment, curriculum alignment, and faculty enablement for Indian schools.",
    url: "/composite-skill-lab",
  },
};

const faqItems = [
  {
    question: "What is a Composite Skill Lab (CSL)?",
    answer:
      "A Composite Skill Lab is a CBSE-mandated hands-on learning space for affiliated schools, with equipment and machinery to implement NEP 2020 and NCF-SE skill education—from STEM and coding to vocational and prototyping—typically serving middle and secondary students (classes VI–XII) per circular guidelines.",
  },
  {
    question: "Is a Composite Skill Lab mandatory for CBSE schools?",
    answer:
      "CBSE has mandated Composite Skill Labs for affiliated schools, with requirements and timelines described in official circulars (including lab area options and implementation timelines for new and existing schools). Schools should refer to the latest CBSE notifications for compliance.",
  },
  {
    question: "Why choose AeroBay as your Composite Skill Lab partner?",
    answer:
      "AeroBay (Aviotron Aerospace Pvt Ltd) delivers industrial grade Composite Skill Lab ecosystems—not just equipment—with domains such as aerospace, space education, drones, robotics & AI, design, meteorology, e-mobility, and more, aligned with multiple CBSE skill modules and supported by trained faculty and sustainment-focused prototyping capability.",
  },
  {
    question:
      "Does AeroBay cover top Composite Skill Lab search topics like AI, robotics, and 3D prototyping?",
    answer:
      "Yes. AeroBay labs integrate modern experiential tracks including AI & IoT, robotics, electronics and hardware, coding and data science, design thinking, and long-life prototyping machinery so schools meet mandate intent while keeping students industry-relevant.",
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
  name: "AeroBay",
  legalName: "Aviotron Aerospace Pvt Ltd",
  url: siteUrl,
  description:
    "AeroBay provides industrial grade Composite Skill Lab and STEAM education solutions for schools in India.",
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
  name: "Composite Skill Lab setup for schools",
  provider: {
    "@type": "Organization",
    name: "AeroBay",
    url: siteUrl,
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
    "Design, equipment, curriculum alignment, and enablement for CBSE Composite Skill Labs and NEP 2020 skill learning.",
  url: `${siteUrl.replace(/\/$/, "")}/composite-skill-lab`,
};

const benefitCardStyle = {
  background: "linear-gradient(180deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.04) 100%)",
  border: "1px solid rgba(255,255,255,0.16)",
  boxShadow: "0 10px 24px rgba(0,0,0,0.24)",
  minHeight: 200,
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
};

const benefitTitleStyle = {
  color: "#ffffff",
  fontSize: "clamp(1.15rem, 1.55vw, 1.55rem)",
  lineHeight: 1.15,
  marginBottom: 10,
  wordBreak: "normal",
  overflowWrap: "break-word",
};

const benefitBodyStyle = {
  color: "rgba(255,255,255,0.86)",
  lineHeight: 1.55,
  fontSize: "0.97rem",
  textAlign: "left",
  wordSpacing: "normal",
  letterSpacing: "normal",
};

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
      <section
        className="page_banner whatsnew-banner bg-blk position-relative overflow-hidden"
        style={{ paddingTop: "clamp(72px, 6vw, 110px)", paddingBottom: 64 }}
      >
        {/* Improves readability over dark hero background */}
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
              <div className="col-md-10 mx-auto heading-section text-center px-3 position-relative">

                {/* Background Watermark Text */}
                <div
                  className="light_heading"
                  style={{
                    position: "absolute",
                    top: "clamp(-10px, -6vw, -10px)",
                    left: 0,
                    right: 0,
                    zIndex: 0,
                    pointerEvents: "none",
                    fontSize: "clamp(45px, 10vw, 80px)",
                    fontWeight: "800",
                    letterSpacing: "3px",
                    opacity: 1,
                    lineHeight: 1,
                    textTransform: "uppercase",
                    transform: "translateY(0px)",
                  }}
                >
                  Composite Skill Lab
                </div>

                {/* Main Heading */}
                <h1
                  style={{
                    position: "relative",
                    zIndex: 2,
                    fontSize: "clamp(1.25rem, 2vw, 3.6rem)",
                    fontWeight: 500,
                    lineHeight: 1.1,
                    color: "#ffffff",
                    maxWidth: "950px",
                    margin: "clamp(105px, 10vw, 80px) auto 0 auto",
                    paddingTop: 0,
                    letterSpacing: "-0.02em",
                  }}
                >
                  AeroBay Composite Skill Lab for CBSE & NEP-Aligned Schools
                </h1>

                {/* Subheading */}
                <p
                  className="mx-auto"
                  style={{
                    position: "relative",
                    zIndex: 2,
                    maxWidth: "820px",
                    marginTop: 14,
                    fontSize: "clamp(1rem, 1.8vw, 1.35rem)",
                    lineHeight: "1.8",
                    color: "rgba(255,255,255,0.88)",
                    fontWeight: 400,
                    paddingBottom: 6,
                  }}
                >
                  India&apos;s industrial grade Composite Skill Lab partner—end-to-end lab design,
                  equipment, CBSE skill modules, robotics, AI, aerospace, drones, coding, and
                  hands-on learning your students remember.
                </p>

              </div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-md-12 btm_wncontent">
                <div style={{ maxWidth: 1080 }} className="mx-auto px-3">
                  <div className="mt-2">
                    <div className="row g-4">
                      <div className="col-12">
                        <div
                          className="rounded-4 overflow-hidden shadow-sm"
                          style={{
                            border: "1px solid rgba(255,255,255,0.14)",
                            boxShadow: "0 18px 40px rgba(0,0,0,0.35)",
                            background: "rgba(255,255,255,0.03)",
                          }}
                        >
                          <Image
                            src="/images/gallery/GDGSiliguri4.jpg"
                            alt="Composite Skill Lab setup by AeroBay"
                            width={1200}
                            height={675}
                            className="w-100 h-auto"
                            sizes="(max-width: 768px) 100vw, 800px"
                          />
                        </div>
                      </div>

                      <div className="col-12 col-lg-16">
                        <p>
                          When educators and administrators search for{" "}
                          <strong>top Composite Skill Lab</strong> options,{" "}
                          <strong>CBSE Composite Skill Lab providers</strong>, or{" "}
                          <strong>best composite skill lab in India</strong>, they need a
                          partner who combines regulatory alignment with real engineering and
                          maker culture.
                        </p>
                        <p className="mt-3">
                          AeroBay builds{" "}
                          <strong>Composite Skill Labs</strong> that satisfy mandate intent:
                          experiential learning, multi-domain equipment, and curriculum links
                          across aerospace, space-ed, drones, robotics &amp; AI, design,
                          meteorology, e-vehicles, electronics, coding, data science, and
                          more.
                        </p>
                        <p className="mt-3">
                          Our teams work with schools to deliver aesthetically designed,
                          durable lab layouts with prototyping machinery chosen for years of
                          sustained use—not one-off demos.
                        </p>
                        <p className="mt-3">
                          Whether your priority is meeting the latest{" "}
                          <strong>CBSE circular</strong> expectations for a{" "}
                          <strong>Composite Skill Lab</strong>, or exceeding them with a
                          flagship innovation space, AeroBay is structured to support you from
                          planning through faculty enablement.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="btm-bx-content col mt-5">
                    <div className="row g-4 align-items-stretch">

                      <section className="py-5">
                        <div className="container">
                          <div className="row g-5 align-items-start">

                            {/* LEFT CONTENT */}
                            <div className="col-lg-7">

                              <h2
                                className="fw-bold mb-3"
                                style={{
                                  color: "#ffffff",
                                  fontSize: "clamp(1.6rem, 2.8vw, 2.25rem)",
                                  lineHeight: 1.2,
                                }}
                              >
                                What Schools Get with an AeroBay Composite Skill Lab
                              </h2>

                              <p
                                className="mb-4"
                                style={{
                                  color: "rgba(255,255,255,0.84)",
                                  fontSize: "1.02rem",
                                  lineHeight: 1.7,
                                  maxWidth: "700px",
                                  textAlign: "left",
                                  wordSpacing: "normal",
                                  letterSpacing: "normal",
                                }}
                              >
                                AeroBay helps schools implement future-ready Composite Skill Labs aligned
                                with CBSE, NEP 2020, and practical skill-development goals.
                              </p>

                              <div className="row g-4">

                                <div className="col-md-6">
                                  <div
                                    className="p-4 h-100 rounded-4"
                                    style={benefitCardStyle}
                                  >
                                    <h3
                                      className="fw-bold"
                                      style={benefitTitleStyle}
                                    >
                                      NEP 2020 Aligned
                                    </h3>
                                    <p className="mb-0" style={benefitBodyStyle}>
                                      Industrial-grade lab concepts designed around NEP 2020 and NCF-SE outcomes.
                                    </p>
                                  </div>
                                </div>

                                <div className="col-md-6">
                                  <div
                                    className="p-4 h-100 rounded-4"
                                    style={benefitCardStyle}
                                  >
                                    <h3
                                      className="fw-bold"
                                      style={benefitTitleStyle}
                                    >
                                      Future Skills Coverage
                                    </h3>
                                    <p className="mb-0" style={benefitBodyStyle}>
                                      Robotics, AI, IoT, coding, design thinking, aerospace and innovation themes.
                                    </p>
                                  </div>
                                </div>

                                <div className="col-md-6">
                                  <div
                                    className="p-4 h-100 rounded-4"
                                    style={benefitCardStyle}
                                  >
                                    <h3
                                      className="fw-bold"
                                      style={benefitTitleStyle}
                                    >
                                      Long-Term Infrastructure
                                    </h3>
                                    <p className="mb-0" style={benefitBodyStyle}>
                                      Sustainable maker-space systems instead of disposable activity kits.
                                    </p>
                                  </div>
                                </div>

                                <div className="col-md-6">
                                  <div
                                    className="p-4 h-100 rounded-4"
                                    style={benefitCardStyle}
                                  >
                                    <h3
                                      className="fw-bold"
                                      style={benefitTitleStyle}
                                    >
                                      School Branding Value
                                    </h3>
                                    <p className="mb-0" style={benefitBodyStyle}>
                                      Strong visibility for parents, students, and leadership teams.
                                    </p>
                                  </div>
                                </div>

                              </div>
                            </div>

                            {/* RIGHT CTA */}
                            <div className="col-lg-5 d-flex">

                              <div
                                className="p-4 rounded-4 h-105 d-flex flex-column w-100"
                                style={{
                                  background:
                                    "linear-gradient(180deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.04) 100%)",
                                  border: "1px solid rgba(255,255,255,0.18)",
                                  boxShadow: "0 12px 26px rgba(0,0,0,0.26)",
                                }}
                              >

                                <h3 className="fw-bold mb-3" style={{ color: "#ffffff" }}>
                                  Build a Future-Ready Campus
                                </h3>

                                <p
                                  style={{
                                    color: "rgba(255,255,255,0.92)",
                                    lineHeight: 1.7,
                                    textAlign: "left",
                                    wordSpacing: "normal",
                                    letterSpacing: "normal",
                                  }}
                                >
                                  Discover how AeroBay Composite Skill Labs transform school learning environments.
                                </p>

                                <ul
                                  className="mb-0 ps-3"
                                  style={{
                                    color: "rgba(255,255,255,0.86)",
                                    lineHeight: 1.65,
                                    fontSize: "0.95rem",
                                  }}
                                >
                                  <li>• End-to-end lab planning and implementation support</li>
                                  <li>• Future skills integration with practical activity design</li>
                                  <li>• Faculty enablement and long-term infrastructure roadmap</li>
                                </ul>

                                <div className="d-grid gap-3 mt-4">
                                  <Link href="/get-in-touch" className="btn btn-primary rounded-pill">
                                    Request Proposal
                                  </Link>

                                  <Link
                                    href="/aerobay-for-school"
                                    className="btn rounded-pill"
                                    style={{
                                      border: "1px solid rgba(255,255,255,0.7)",
                                      color: "#ffffff",
                                      backgroundColor: "transparent",
                                    }}
                                  >
                                    Explore Solutions
                                  </Link>
                                </div>

                                <hr
                                  className="mt-auto"
                                  style={{ borderColor: "rgba(255,255,255,0.3)" }}
                                />

                                <small style={{ color: "rgba(255,255,255,0.78)" }}>
                                  Official reference: CBSE Composite Skill Lab Circular
                                </small>

                              </div>

                            </div>

                          </div>

                        </div>
                      </section>

                      <div className="col-md-12 full-content mt-5">
                        <h2>Frequently asked questions</h2>
                        <dl className="text-start mt-3">
                          {faqItems.map((item) => (
                            <div
                              key={item.question}
                              className="mb-4 rounded-3 p-4 shadow-sm"
                              style={{
                                background:
                                  "linear-gradient(180deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.03) 100%)",
                                border: "1px solid rgba(255,255,255,0.14)",
                                color: "rgba(255,255,255,0.92)",
                              }}
                            >
                              <dt
                                className="fw-bold mb-2"
                                style={{ fontSize: "1.02rem" }}
                              >
                                {item.question}
                              </dt>
                              <dd className="mt-0 lh-lg">{item.answer}</dd>
                            </div>
                          ))}
                        </dl>
                      </div>
                    </div>
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