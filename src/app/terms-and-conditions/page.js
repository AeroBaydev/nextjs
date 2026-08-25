import Link from "next/link";
import styles from "../legal.module.css";

export const metadata = {
  title: "Terms & Conditions",
  description:
    "Terms and conditions governing use of the AeroBay website operated by Aviotron Aerospace Pvt Ltd.",
};

export default function TermsAndConditionsPage() {
  return (
    <div className={styles.page}>
      <header className={styles.hero}>
        <div className={styles.shell}>
          <p className={styles.eyebrow}>AeroBay legal</p>
          <h1>Terms &amp; Conditions</h1>
          <p className={styles.updated}>Last updated: 25 August 2026</p>
        </div>
      </header>

      <div className={`${styles.shell} ${styles.content}`}>
        <aside className={styles.sideNote}>
          <p>Questions about these terms can be sent to our team.</p>
          <a href="mailto:info@aviotron.com">info@aviotron.com</a>
        </aside>

        <article className={styles.article}>
          <p className={styles.intro}>
            These terms govern your use of the AeroBay website. AeroBay is a brand
            owned and operated by Aviotron Aerospace Pvt Ltd. By using this website,
            you agree to these terms.
          </p>

          <section>
            <h2>Website purpose</h2>
            <p>
              This website provides information about AeroBay, its learning
              experiences, school solutions, network, educational content and
              career opportunities. Website content is general information and
              does not by itself create a commercial, employment or partnership
              agreement.
            </p>
          </section>

          <section>
            <h2>Enquiries and proposals</h2>
            <p>
              Submitting a contact or consultation form is a request for discussion.
              Any scope, pricing, timeline, deliverable or commitment becomes binding
              only when documented in a separate agreement accepted by the relevant
              parties.
            </p>
          </section>

          <section>
            <h2>Acceptable use</h2>
            <p>You agree not to:</p>
            <ul>
              <li>Use the website for unlawful, fraudulent or harmful activity.</li>
              <li>Attempt to disrupt, bypass or gain unauthorised access to the website.</li>
              <li>Submit malicious code, misleading information or unsolicited messages.</li>
              <li>Copy or reuse protected website content in a way that infringes rights.</li>
            </ul>
          </section>

          <section>
            <h2>Intellectual property</h2>
            <p>
              AeroBay branding, website design, text, graphics, media and original
              materials are owned by or licensed to Aviotron Aerospace Pvt Ltd,
              unless stated otherwise. School names and logos shown on the website
              remain the property of their respective owners. No rights are granted
              except the limited right to view and use this website for lawful,
              personal or business-information purposes.
            </p>
          </section>

          <section>
            <h2>Accuracy and availability</h2>
            <p>
              We aim to keep website information useful and current, but content
              may change and may occasionally contain errors. We may update,
              suspend or remove website features without notice. For current
              programme or commercial information, please contact AeroBay directly.
            </p>
          </section>

          <section>
            <h2>External websites</h2>
            <p>
              Links to social networks, maps and other third-party websites are
              provided for convenience. AeroBay does not control those services and
              is not responsible for their content, availability or practices.
            </p>
          </section>

          <section>
            <h2>Responsibility</h2>
            <p>
              To the extent permitted by applicable law, Aviotron Aerospace Pvt Ltd
              is not liable for indirect or consequential loss resulting solely from
              use of, inability to use or reliance on this website. Nothing in these
              terms excludes responsibility that cannot legally be excluded.
            </p>
          </section>

          <section>
            <h2>Privacy</h2>
            <p>
              Information submitted through the website is handled as described in
              our <Link href="/privacy-policy">Privacy Policy</Link>.
            </p>
          </section>

          <section>
            <h2>Changes and contact</h2>
            <p>
              We may revise these terms as the website or our services evolve. The
              latest version will be published here with its revision date. For
              questions, email{" "}
              <a href="mailto:info@aviotron.com">info@aviotron.com</a>.
            </p>
          </section>
        </article>
      </div>
    </div>
  );
}
