import Link from "next/link";
import styles from "../legal.module.css";

export const metadata = {
  title: "Privacy Policy",
  description:
    "Learn how AeroBay and Aviotron Aerospace Pvt Ltd handle information submitted through the AeroBay website.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className={styles.page}>
      <header className={styles.hero}>
        <div className={styles.shell}>
          <p className={styles.eyebrow}>AeroBay legal</p>
          <h1>Privacy Policy</h1>
          <p className={styles.updated}>Last updated: 25 August 2026</p>
        </div>
      </header>

      <div className={`${styles.shell} ${styles.content}`}>
        <aside className={styles.sideNote}>
          <p>
            Questions about this policy or your personal information can be sent
            to our team.
          </p>
          <a href="mailto:info@aviotron.com">info@aviotron.com</a>
        </aside>

        <article className={styles.article}>
          <p className={styles.intro}>
            This policy explains how AeroBay, a brand owned and operated by
            Aviotron Aerospace Pvt Ltd, handles information when you visit this
            website or contact us through it.
          </p>

          <section>
            <h2>Information you provide</h2>
            <p>When you submit an enquiry or consultation request, we may receive:</p>
            <ul>
              <li>Your name and contact details, including email and phone number.</li>
              <li>Your school or organisation name and the audience you represent.</li>
              <li>Your message, requirements and any information you choose to share.</li>
            </ul>
          </section>

          <section>
            <h2>How we use information</h2>
            <p>
              We use submitted information to respond to enquiries, understand
              school requirements, arrange requested discussions, provide relevant
              information about AeroBay and maintain necessary business records.
              We do not use the website footer to collect email subscriptions.
            </p>
          </section>

          <section>
            <h2>Website preferences and technical information</h2>
            <p>
              The website may store a small preference in your browser&apos;s local
              storage to remember whether the welcome message has already been
              displayed. Our hosting and technical systems may also process basic
              request information needed to operate, secure and troubleshoot the
              website.
            </p>
          </section>

          <section>
            <h2>Sharing and service providers</h2>
            <p>
              We may share information with authorised employees and service
              providers who help us operate the website or respond to enquiries.
              We may also disclose information when required by law or to protect
              our legal rights. We do not sell personal information submitted
              through our enquiry forms.
            </p>
          </section>

          <section>
            <h2>Retention and security</h2>
            <p>
              We retain information only for as long as reasonably necessary for
              the purposes described above, business recordkeeping or legal
              obligations. We use reasonable administrative and technical measures
              to protect information, but no internet transmission or storage
              system can be guaranteed completely secure.
            </p>
          </section>

          <section>
            <h2>Children&apos;s information</h2>
            <p>
              Website enquiry forms are intended for school representatives,
              parents, educators and other users able to provide lawful consent.
              A child should not submit personal information without the involvement
              of a parent, guardian or authorised school representative.
            </p>
          </section>

          <section>
            <h2>Your choices</h2>
            <p>
              You may contact us to ask about, correct or request deletion of
              personal information you submitted, subject to applicable legal and
              recordkeeping requirements. Email{" "}
              <a href="mailto:info@aviotron.com">info@aviotron.com</a> with your
              request.
            </p>
          </section>

          <section>
            <h2>External links and policy updates</h2>
            <p>
              Our website links to third-party platforms whose privacy practices
              are governed by their own policies. We may update this policy when
              our website or practices change. The latest version will remain on
              this page with its revision date.
            </p>
          </section>

          <section>
            <h2>Related terms</h2>
            <p>
              Please also review our{" "}
              <Link href="/terms-and-conditions">Terms &amp; Conditions</Link>.
            </p>
          </section>
        </article>
      </div>
    </div>
  );
}
