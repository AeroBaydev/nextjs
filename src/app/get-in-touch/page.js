"use client";
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import { postData } from '@/lib/api';

const GetInTouch = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        contact_no: "",
        message: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Client-side validation
        const { name, email, contact_no, message } = formData;
        if (!name.trim() || !email.trim() || !contact_no.trim() || !message.trim()) {
            alert("Please fill out all fields before submitting.");
            return;
        }

        try {
            const response = await postData("/getInTouch", formData);
            console.log(response, "responseresponseresponse");
            if (response?.message == "Entry created successfully") {
                alert("Your message has been sent successfully!");
                setFormData({ name: "", email: "", contact_no: "", message: "" });
            } else {
                alert("Failed to send message. Please try again.");
            }
        } catch (error) {
            console.error("Error submitting form:", error);
            alert("An error occurred. Please try again.");
        }
    };

    return (<div class="page-main">
        <section class="page_banner career_banner contact_banr bg-blk">
            <div class="container">
                <div class="row">
                    <div class="col-md-12 mx-auto heading-section2 text-center">
                        <h1>Contact</h1>
                    </div>
                </div>
            </div>
            <div class="container-fluid contact-bx">
                <div class="row">
                    <div class="col-md-12">
                        <div class="row">
                            <div class="col-lg-4 col-md-6 offset-lg-1 contact-bx-left">
                                <div class="col-lg-12 p-0 text-center">
                                    <h2>Get in touch</h2>
                                    <p>Let us know how we can help</p>
                                </div>
                                <form id="contact" onSubmit={handleSubmit}>
                                    <div className="form-group mb-3">
                                        <label className="form-label">Name</label>
                                        <input
                                            className="form-control"
                                            name="name"
                                            type="text"
                                            value={formData.name}
                                            onChange={handleChange}
                                            placeholder="Your full name"
                                            required
                                        />
                                    </div>
                                    <div className="form-group mb-3">
                                        <label className="form-label">Email</label>
                                        <input
                                            className="form-control"
                                            name="email"
                                            type="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="me@company.com"
                                            required
                                        />
                                    </div>
                                    <div className="form-group mb-3">
                                        <label className="form-label">Contact No.</label>
                                        <input
                                            className="form-control"
                                            name="contact_no"
                                            type="text"
                                            value={formData.contact_no}
                                            onChange={handleChange}
                                            placeholder="+91 xxx xxx xxxx"
                                            required
                                        />
                                    </div>
                                    <div className="form-group mb-3">
                                        <label className="form-label">Message</label>
                                        <textarea
                                            className="form-control"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            placeholder="Your message..."
                                            required
                                        ></textarea>
                                    </div>
                                    <div className="form-group">
                                        <button type="submit" id="form-submit" className="btn btn-primary">
                                            <span className="outer-bx">Submit</span>
                                        </button>
                                    </div>
                                </form>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="page_bannerbtm schl-block contact__blk bg-blk">
            <div class="container">
                <div class="row">
                    <div class="col-md-12 heading-section text-center">
                        <h2 class="mb-3">Reach Us</h2>
                        <div class="col-md-10 mx-auto map_text">
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="mp-text">
                                        <FontAwesomeIcon icon={faMapMarkerAlt} />
                                        <p>D-64, D Block, Sector 63, Noida,<br />Hazratpur Wajidpur,<br />Uttar Pradesh 201301</p>
                                    </div>
                                </div>
                                <div class="col-md-6 map-rightblk text-right">
                                    <a href="https://maps.app.goo.gl/7EWLafBtxXvm1FwD7" class="btn btn-primary"><span>NAVIGATE <span>&#129109;</span></span></a>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-10 mx-auto map_block">
                            <div class="figure banner-fig">
                                <div class="embed-responsive embed-responsive-16by9">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.3417462243865!2d77.37977007550029!3d28.619517975671958!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ceff45c9c6497%3A0xc565588ba65c2518!2sd%2C%20D-064%2C%20D%20Block%2C%20Sector%2063%2C%20Noida%2C%20Hazratpur%20Wajidpur%2C%20Uttar%20Pradesh%20201301!5e0!3m2!1sen!2sin!4v1723962813281!5m2!1sen!2sin"
                                        width="100%"
                                        height="450"
                                        style={{ border: "0" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>

        </section>
    </div>)
}
export default GetInTouch;
