"use client";

import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faCheck,
  faClock,
  faEnvelope,
  faLocationDot,
  faPaperPlane,
  faPhone,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { postData } from "@/lib/api";
import styles from "./page.module.css";

const initialForm = {
  name: "",
  school_name: "",
  email: "",
  contact_no: "",
  message: "",
  audience: "school",
};

const contactCards = [
  {
    icon: faPhone,
    label: "Speak with our team",
    value: "+91 99423 29092",
    detail: "For school partnerships and general enquiries",
    href: "tel:+919942329092",
  },
  {
    icon: faEnvelope,
    label: "Write to us",
    value: "info@aviotron.com",
    detail: "We typically reply within one business day",
    href: "mailto:info@aviotron.com",
  },
  {
    icon: faClock,
    label: "Business hours",
    value: "Mon – Sat, 9:30 AM – 6:30 PM",
    detail: "Indian Standard Time (IST)",
  },
];

export default function GetInTouch() {
  const [formData, setFormData] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");
  const [dialog, setDialog] = useState(null);

  useEffect(() => {
    if (!dialog) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") setDialog(null);
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [dialog]);

  const validate = () => {
    const nextErrors = {};

    if (!formData.name.trim()) nextErrors.name = "Please enter your name.";
    if (!formData.school_name.trim()) {
      nextErrors.school_name = "Please enter your school or organisation.";
    }
    if (!formData.email.trim()) {
      nextErrors.email = "Please enter your email address.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      nextErrors.email = "Please enter a valid email address.";
    }
    if (!formData.contact_no.trim()) {
      nextErrors.contact_no = "Please enter your contact number.";
    } else if (formData.contact_no.replace(/\D/g, "").length < 10) {
      nextErrors.contact_no = "Please enter a valid contact number.";
    }
    if (!formData.message.trim()) {
      nextErrors.message = "Tell us a little about what you need.";
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleChange = ({ target: { name, value } }) => {
    setFormData((current) => ({ ...current, [name]: value }));
    if (errors[name]) {
      setErrors((current) => ({ ...current, [name]: undefined }));
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!validate()) return;

    setStatus("submitting");

    try {
      const response = await postData("/getInTouch", { ...formData, source: "contact_page" });

      if (response?.message === "Entry created successfully") {
        setFormData(initialForm);
        setErrors({});
        setDialog("success");
      } else {
        setDialog("error");
      }
    } catch (error) {
      console.error("Error submitting contact form:", error);
      setDialog("error");
    } finally {
      setStatus("idle");
    }
  };

  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.gridPattern} aria-hidden="true" />

        <div className={styles.shell}>
          <div className={styles.heroGrid}>
            <div className={styles.intro}>
              <p className={styles.eyebrow}>Let’s build what’s next</p>
              <h1>
                Bring future-ready
                <span> learning to your school.</span>
              </h1>
              <p className={styles.heroCopy}>
                From AI and robotics to aviation and composite skill labs, our
                team helps schools turn ambitious ideas into engaging,
                real-world learning experiences.
              </p>

              <div className={styles.promise}>
                <div className={styles.promiseIcon}>
                  <FontAwesomeIcon icon={faCheck} />
                </div>
                <div>
                  <strong>A conversation, not a sales pitch.</strong>
                  <span>
                    Tell us your goals and we’ll connect you with the right
                    education specialist.
                  </span>
                </div>
              </div>
            </div>

            <div className={styles.formCard}>
              <div className={styles.formHeading}>
                <div>
                  <p>Start a conversation</p>
                  <h2>How can we help?</h2>
                </div>
                <span className={styles.formStep}>01</span>
              </div>

              <form onSubmit={handleSubmit} noValidate>
                <div className={styles.field}>
                  <label htmlFor="contact-audience">I am contacting AeroBay as a</label>
                  <select
                    id="contact-audience"
                    name="audience"
                    value={formData.audience}
                    onChange={handleChange}
                  >
                    <option value="school">School / institution</option>
                    <option value="parent">Parent</option>
                    <option value="student">Student</option>
                  </select>
                </div>
                <div className={styles.field}>
                  <label htmlFor="contact-school">School / organisation</label>
                  <input
                    id="contact-school"
                    name="school_name"
                    type="text"
                    value={formData.school_name}
                    onChange={handleChange}
                    placeholder="Institution name"
                    autoComplete="organization"
                    aria-invalid={Boolean(errors.school_name)}
                    aria-describedby={errors.school_name ? "school-error" : undefined}
                  />
                  {errors.school_name && (
                    <span id="school-error" className={styles.errorText}>
                      {errors.school_name}
                    </span>
                  )}
                </div>
                <div className={styles.fieldRow}>
                  <div className={styles.field}>
                    <label htmlFor="contact-name">Full name</label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      autoComplete="name"
                      aria-invalid={Boolean(errors.name)}
                      aria-describedby={errors.name ? "name-error" : undefined}
                    />
                    {errors.name && (
                      <span id="name-error" className={styles.errorText}>
                        {errors.name}
                      </span>
                    )}
                  </div>

                  <div className={styles.field}>
                    <label htmlFor="contact-phone">Phone number</label>
                    <input
                      id="contact-phone"
                      name="contact_no"
                      type="tel"
                      value={formData.contact_no}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                      autoComplete="tel"
                      aria-invalid={Boolean(errors.contact_no)}
                      aria-describedby={
                        errors.contact_no ? "phone-error" : undefined
                      }
                    />
                    {errors.contact_no && (
                      <span id="phone-error" className={styles.errorText}>
                        {errors.contact_no}
                      </span>
                    )}
                  </div>
                </div>

                <div className={styles.field}>
                  <label htmlFor="contact-email">Work email</label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@school.edu"
                    autoComplete="email"
                    aria-invalid={Boolean(errors.email)}
                    aria-describedby={errors.email ? "email-error" : undefined}
                  />
                  {errors.email && (
                    <span id="email-error" className={styles.errorText}>
                      {errors.email}
                    </span>
                  )}
                </div>

                <div className={styles.field}>
                  <div className={styles.labelRow}>
                    <label htmlFor="contact-message">Tell us about your goals</label>
                    <span>{formData.message.length}/600</span>
                  </div>
                  <textarea
                    id="contact-message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Share your school’s requirements, student count, preferred lab, or anything else that will help us understand your vision."
                    maxLength={600}
                    rows={5}
                    aria-invalid={Boolean(errors.message)}
                    aria-describedby={
                      errors.message ? "message-error" : undefined
                    }
                  />
                  {errors.message && (
                    <span id="message-error" className={styles.errorText}>
                      {errors.message}
                    </span>
                  )}
                </div>

                <button
                  className={styles.submitButton}
                  type="submit"
                  disabled={status === "submitting"}
                >
                  <span>
                    {status === "submitting"
                      ? "Sending your enquiry…"
                      : "Send enquiry"}
                  </span>
                  <span className={styles.buttonIcon} aria-hidden="true">
                    <FontAwesomeIcon
                      icon={status === "submitting" ? faPaperPlane : faArrowRight}
                    />
                  </span>
                </button>

                <p className={styles.privacyNote}>
                  By submitting this form, you agree to be contacted about your
                  enquiry. We respect your privacy.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.connect}>
        <div className={styles.shell}>
          <div className={styles.sectionHeading}>
            <div>
              <p className={styles.eyebrow}>Connect directly</p>
              <h2>We’re easy to reach.</h2>
            </div>
            <p>
              Whether you’re exploring a new lab, planning a school
              transformation, or looking for support, our team is ready to
              listen.
            </p>
          </div>

          <div className={styles.contactGrid}>
            {contactCards.map((card) => {
              const content = (
                <>
                  <span className={styles.contactIcon}>
                    <FontAwesomeIcon icon={card.icon} />
                  </span>
                  <div>
                    <p>{card.label}</p>
                    <strong>{card.value}</strong>
                    <span>{card.detail}</span>
                  </div>
                  {card.href && (
                    <FontAwesomeIcon
                      className={styles.contactArrow}
                      icon={faArrowRight}
                    />
                  )}
                </>
              );

              return card.href ? (
                <a className={styles.contactCard} href={card.href} key={card.label}>
                  {content}
                </a>
              ) : (
                <div className={styles.contactCard} key={card.label}>
                  {content}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className={styles.visit}>
        <div className={styles.shell}>
          <div className={styles.visitGrid}>
            <div className={styles.visitCopy}>
              <p className={styles.eyebrow}>Visit AeroBay</p>
              <h2>Come see where ideas take flight.</h2>
              <div className={styles.address}>
                <FontAwesomeIcon icon={faLocationDot} />
                <p>
                  D-64, D Block, Sector 63, Noida,
                  <br />
                  Uttar Pradesh 201301, India
                </p>
              </div>
              <a
                href="https://maps.app.goo.gl/oZFFwN1zJcmRBJrp9"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.directions}
              >
                Get directions
                <FontAwesomeIcon icon={faArrowRight} />
              </a>
            </div>

            <div className={styles.map}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.3417462243865!2d77.37977007550029!3d28.619517975671958!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ceff45c9c6497%3A0xc565588ba65c2518!2sd%2C%20D-064%2C%20D%20Block%2C%20Sector%2063%2C%20Noida%2C%20Hazratpur%20Wajidpur%2C%20Uttar%20Pradesh%20201301!5e0!3m2!1sen!2sin!4v1723962813281!5m2!1sen!2sin"
                title="AeroBay office location"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>

      {dialog && (
        <div
          className={styles.modalBackdrop}
          role="presentation"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setDialog(null);
          }}
        >
          <div
            className={styles.modal}
            role="dialog"
            aria-modal="true"
            aria-labelledby="submission-title"
            aria-describedby="submission-description"
          >
            <button
              type="button"
              className={styles.closeButton}
              onClick={() => setDialog(null)}
              aria-label="Close dialog"
            >
              <FontAwesomeIcon icon={faXmark} />
            </button>

            <div
              className={`${styles.modalMark} ${
                dialog === "error" ? styles.modalMarkError : ""
              }`}
            >
              <FontAwesomeIcon icon={dialog === "success" ? faCheck : faXmark} />
            </div>

            <p className={styles.modalEyebrow}>
              {dialog === "success" ? "Enquiry received" : "Message not sent"}
            </p>
            <h2 id="submission-title">
              {dialog === "success"
                ? "Thank you for reaching out."
                : "Something didn’t go as planned."}
            </h2>
            <p id="submission-description">
              {dialog === "success"
                ? "Your message is with our education team. We’ll review your requirements and get back to you within one business day."
                : "We couldn’t submit your enquiry right now. Please try again, or email us directly at info@aviotron.com."}
            </p>

            <button
              type="button"
              className={styles.modalButton}
              onClick={() => setDialog(null)}
              autoFocus
            >
              {dialog === "success" ? "Done" : "Try again"}
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
