"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";
import { postData } from "@/lib/api";
import styles from "./welcome-modal.module.css";

const initialForm = { name: "", school: "", email: "", contact_no: "" };

export default function WelcomeModal({ onClose }) {
  const [formData, setFormData] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  const handleChange = ({ target: { name, value } }) => {
    setFormData((current) => ({ ...current, [name]: value }));
    if (errors[name]) {
      setErrors((current) => ({ ...current, [name]: undefined }));
    }
  };

  const validate = () => {
    const nextErrors = {};

    if (!formData.name.trim()) nextErrors.name = "Please enter your name.";
    if (!formData.school.trim()) {
      nextErrors.school = "Please enter your school or organisation.";
    }
    if (!formData.email.trim()) {
      nextErrors.email = "Please enter your work email.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      nextErrors.email = "Please enter a valid email address.";
    }
    if (formData.contact_no.replace(/\D/g, "").length < 10) {
      nextErrors.contact_no = "Please enter a valid contact number.";
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!validate()) return;
    setStatus("submitting");

    try {
      const response = await postData("/getInTouch", {
        name: formData.name.trim(),
        school_name: formData.school.trim(),
        email: formData.email.trim(),
        contact_no: formData.contact_no.trim(),
        message: `First-visit Composite Skill Lab consultation request from ${formData.school.trim()}.`,
        audience: "school",
        source: "cta",
      });

      setStatus(
        response?.message === "Entry created successfully" ? "success" : "error",
      );
    } catch (error) {
      console.error("Welcome enquiry submission failed:", error);
      setStatus("error");
    }
  };

  return (
    <div
      className={styles.backdrop}
      role="presentation"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <section
        className={styles.modal}
        role="dialog"
        aria-modal="true"
        aria-labelledby="welcome-title"
        aria-describedby="welcome-description"
      >
        <button
          type="button"
          className={styles.close}
          onClick={onClose}
          aria-label="Close welcome dialog"
        >
          <FontAwesomeIcon icon={faXmark} />
        </button>

        <div className={styles.story}>
          <div>
            <p className={styles.eyebrow}>For school leaders</p>
            <h2 id="welcome-title">
              Build a future-ready learning ecosystem.
              <span> Not just another lab.</span>
            </h2>
            <p id="welcome-description" className={styles.intro}>
              AeroBay helps schools plan and implement Composite Skill Labs
              that connect CBSE priorities with meaningful, hands-on learning
              across STEAM disciplines.
            </p>
          </div>

          <ul className={styles.benefits}>
            <li>
              <FontAwesomeIcon icon={faCheck} />
              <span>Industrial-grade lab planning and implementation</span>
            </li>
            <li>
              <FontAwesomeIcon icon={faCheck} />
              <span>NEP-aligned curriculum, kits, and trained educators</span>
            </li>
            <li>
              <FontAwesomeIcon icon={faCheck} />
              <span>One accountable partner from setup to classroom impact</span>
            </li>
          </ul>

          <Link
            href="/composite-skill-lab"
            className={styles.exploreLink}
            onClick={onClose}
          >
            Explore Composite Skill Labs
            <FontAwesomeIcon icon={faArrowRight} />
          </Link>
        </div>

        <div className={styles.formPanel}>
          {status === "success" ? (
            <div className={styles.success} aria-live="polite">
              <span className={styles.successMark}>
                <FontAwesomeIcon icon={faCheck} />
              </span>
              <p>Enquiry received</p>
              <h3>Let’s build what’s next.</h3>
              <span>
                Thank you for reaching out. An AeroBay education specialist
                will contact you within one business day.
              </span>
              <button type="button" onClick={onClose}>
                Continue to the website
              </button>
            </div>
          ) : (
            <>
              <div className={styles.formHeading}>
                <p>Start a conversation</p>
                <h3>Plan the right lab for your school.</h3>
                <span>
                  Share a few details and our education team will guide you
                  through the next steps.
                </span>
              </div>

              <form onSubmit={handleSubmit} noValidate>
                <div className={styles.fieldRow}>
                  <div className={styles.field}>
                    <label htmlFor="welcome-name">Your name</label>
                    <input
                      id="welcome-name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Full name"
                      autoComplete="name"
                      aria-invalid={Boolean(errors.name)}
                    />
                    {errors.name && <small>{errors.name}</small>}
                  </div>
                  <div className={styles.field}>
                    <label htmlFor="welcome-school">School / organisation</label>
                    <input
                      id="welcome-school"
                      name="school"
                      value={formData.school}
                      onChange={handleChange}
                      placeholder="Institution name"
                      autoComplete="organization"
                      aria-invalid={Boolean(errors.school)}
                    />
                    {errors.school && <small>{errors.school}</small>}
                  </div>
                </div>

                <div className={styles.field}>
                  <label htmlFor="welcome-email">Work email</label>
                  <input
                    id="welcome-email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@school.edu"
                    autoComplete="email"
                    aria-invalid={Boolean(errors.email)}
                  />
                  {errors.email && <small>{errors.email}</small>}
                </div>

                <div className={styles.field}>
                  <label htmlFor="welcome-phone">Contact number</label>
                  <input
                    id="welcome-phone"
                    name="contact_no"
                    type="tel"
                    value={formData.contact_no}
                    onChange={handleChange}
                    placeholder="+91 98765 43210"
                    autoComplete="tel"
                    aria-invalid={Boolean(errors.contact_no)}
                  />
                  {errors.contact_no && <small>{errors.contact_no}</small>}
                </div>

                {status === "error" && (
                  <p className={styles.submitError} role="alert">
                    We couldn’t submit your request. Please try again or email
                    info@aviotron.com.
                  </p>
                )}

                <button
                  className={styles.submit}
                  type="submit"
                  disabled={status === "submitting"}
                >
                  <span>
                    {status === "submitting"
                      ? "Sending your request…"
                      : "Request a consultation"}
                  </span>
                  <span>
                    <FontAwesomeIcon icon={faArrowRight} />
                  </span>
                </button>

                <p className={styles.privacy}>
                  We’ll only use your details to respond to this enquiry.
                </p>
              </form>

              <button type="button" className={styles.skip} onClick={onClose}>
                Continue without enquiring
              </button>
            </>
          )}
        </div>
      </section>
    </div>
  );
}
