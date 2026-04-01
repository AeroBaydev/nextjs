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
      <section className="page_banner whatsnew-banner bg-blk">
        <div className="container">
          <div className="row">
            <div className="col-md-10 mx-auto heading-section text-center">
              <div className="light_heading">Composite Skill Lab</div>
              <h1>AeroBay Composite Skill Lab for CBSE & NEP-Aligned Schools</h1>
              <p className="text-center col-md-10 mx-auto">
                India&apos;s industrial grade Composite Skill Lab partner—end-to-end
                lab design, equipment, CBSE skill modules, robotics, AI, aerospace,
                drones, coding, and hands-on learning your students remember.
              </p>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-12 btm_wncontent">
              <p>
                When educators and administrators search for{" "}
                <strong>top Composite Skill Lab</strong> options,{" "}
                <strong>CBSE Composite Skill Lab providers</strong>, or{" "}
                <strong>best composite skill lab in India</strong>, they need a
                partner who combines regulatory alignment with real engineering and
                maker culture. AeroBay builds{" "}
                <strong>Composite Skill Labs</strong> that satisfy mandate intent:
                experiential learning, multi-domain equipment, and curriculum links
                across aerospace, space-ed, drones, robotics &amp; AI, design,
                meteorology, e-vehicles, electronics, coding, data science, and
                more.
              </p>
              <p>
                Our teams work with schools to deliver aesthetically designed,
                durable lab layouts with prototyping machinery chosen for years of
                sustained use—not one-off demos. Whether your priority is meeting
                the latest <strong>CBSE circular</strong> expectations for a{" "}
                <strong>Composite Skill Lab</strong>, or exceeding them with a
                flagship innovation space, AeroBay is structured to support you from
                planning through faculty enablement.
              </p>

              <div className="btm-bx-content col">
                <div className="row">
                  <div className="col-md-7">
                    <h2>What schools get with an AeroBay Composite Skill Lab</h2>
                    <ul className="text-start">
                      <li>
                        Industrial grade lab concepts aligned with{" "}
                        <strong>NEP 2020</strong> and{" "}
                        <strong>NCF-SE</strong> skill goals
                      </li>
                      <li>
                        Coverage of high-demand tracks: robotics, AI &amp; IoT,
                        electronics, coding, design thinking, space and aerospace
                        themes
                      </li>
                      <li>
                        Prototyping and maker infrastructure designed for long-term
                        programs, not disposable kits
                      </li>
                      <li>
                        Support narrative for parents and leadership: clear STEAM
                        outcomes and visibility for your institution
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-5">
                    <h2>Explore more from AeroBay</h2>
                    <p>
                      Read our deep dive on{" "}
                      <Link href="/more/education">
                        revolutionising education with Composite Skill Labs
                      </Link>
                      , see{" "}
                      <Link href="/aerobay-for-school">AeroBay for Schools</Link> for
                      lab storytelling and video, or{" "}
                      <Link href="/get-in-touch">get in touch</Link> for a tailored
                      proposal.
                    </p>
                    <p>
                      Official reference:{" "}
                      <a
                        href="https://www.cbse.gov.in/cbsenew/documents/75_Circular_2024_Composite_Skill_Labs_27082024.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        CBSE circular on Composite Skill Labs (PDF)
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-md-12 full-content">
                <h2>Frequently asked questions</h2>
                <dl className="text-start">
                  {faqItems.map((item) => (
                    <div key={item.question} className="mb-4">
                      <dt className="fw-bold">{item.question}</dt>
                      <dd className="mt-2">{item.answer}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
