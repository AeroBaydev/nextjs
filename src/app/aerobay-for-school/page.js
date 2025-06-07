"use client";

import Image from "next/image";
import { useEffect } from "react";

export default function AerobayForSchool() {
    useEffect(() => {
        localStorage.setItem('hasSeenModal', 'true');
    }, []);
    return (<div class="page-main">
        <section class="page_banner schl-block bg-blk">
            <div class="container">
                <div class="row">
                    <div class="col-md-11 mx-auto heading-section text-center">
                        <div class="light_heading">
                        Schools
                        </div>
                        <h1>AeroBay For Schools</h1>
                        <div class="col-md-10 mx-auto video_block">
                            <div class="figure banner-fig">
                                <div class="embed-responsive embed-responsive-16by9">
                                    <iframe height="450" class="embed-responsive-item" src="https://www.youtube.com/embed/G0xJwi-xJfE?si=oTpEboSU8oQjBJoJ"></iframe>
                                </div>
                            </div>
                            <h4 style={{ fontSize: "5vh" }}><b>Industrial Grade <span style={{ color: "#FFE500" }}>Composite Skill Lab</span> Set-ups</b></h4>
                            <p class="text-left">Our uniquely curated, aesthetically designed lab set-ups caters to diverse range of machineries, equipment, raw material and tools covering concepts and activities from multiple domains including but not limited to Aerospace, Space-Ed, Drones, Robotics & AI, Designing, Meteorology, E-Vehicles and much more. The lab also includes a range of prototyping machineries to make it self-sustainable for multiple years.</p>
                        </div>

                    </div>

                </div>
            </div>

        </section>
        {/* <!-- ***** Main Banner Area End ***** --> */}
        <section class="journey-section scl-section bg-blk">
            <div class="container">
                <div class="col-md-12 mx-auto scl-block left_figblock">
                    <div class="row">
                        <div class="col-md-5 left-prnt left-prnt-top">
                            <div class="box_parent">
                                <div class="box1"
                                    style={{ background: "url(/images/tilt-imgs/tilt-1.jpg)" }}
                                // style="background:url(./assets/images/tilt-imgs/tilt-1.jpg)"
                                ></div>
                                <svg class="flt_svg" xmlns="http://www.w3.org/2000/svg">
                                    <defs>
                                        <filter id="flt_tag">
                                            <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="blur" />
                                            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="flt_tag" />
                                            <feComposite in="SourceGraphic" in2="flt_tag" operator="atop" />
                                        </filter>
                                    </defs>
                                </svg>
                            </div>
                            <img src="/images/tilt-imgs/fig-caption1.png" class="sml-figcaption" alt="" />
                        </div>
                        <div class="col-md-7 set-content">
                            <div class="parra-center">
                                <h3>Dedicated Faculty</h3>
                                <p>We take a lot of pride in our trained and certified faculty members who not only execute the AeroBay vision but also make sure the mantle is passes from one generation to other through their creative and innovative approach towards looking at curriculum based design thinking problems. Certified by STEM.org & AMAI.in our trainers also regularly update themselves on new technologies and courses in the space of STEAM education.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-12 mx-auto scl-block right_figblock">
                    <div class="row">
                        <div class="col-md-5">
                            <div class="box_parent">
                                <div class="box1 box2"
                                    style={{ background: "url(/images/tilt-imgs/tilt-2.jpg)" }}
                                //  style="background:url(./assets/images/tilt-imgs/tilt-2.jpg)"
                                ></div>
                                <svg class="flt_svg" xmlns="http://www.w3.org/2000/svg">
                                    <defs>
                                        <filter id="flt_tag">
                                            <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="blur" />
                                            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="flt_tag" />
                                            <feComposite in="SourceGraphic" in2="flt_tag" operator="atop" />
                                        </filter>
                                    </defs>
                                </svg>
                            </div>
                        </div>
                        <div class="col-md-7 set-content">
                            <div class="parra-center">
                                <h3>Take-Away Kit</h3>
                                <p>What{"'"}s the actual fun in all the practical and hands-on learning if you don{"'"}t get to take your hard work back home and show it off to your friends and family. Well{","} we make sure exactly that happens! Specially crafted and in-house designed take-away product kits for all age groups makes sure the student can show a tangible end outcome at home. The products upgrade based on the age and class of each student.</p>
                            </div>
                        </div>

                    </div>
                </div>
                <div class="col-md-12 mx-auto scl-block left_figblock">
                    <div class="row">
                        <div class="col-md-5">
                            <div class="box_parent">
                                <div class="box1"
                                    style={{ background: "url(/images/tilt-imgs/tilt-3.jpg)" }}
                                // style="background:url(./assets/images/tilt-imgs/tilt-3.jpg)"
                                ></div>
                                <svg class="flt_svg" xmlns="http://www.w3.org/2000/svg">
                                    <defs>
                                        <filter id="flt_tag">
                                            <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="blur" />
                                            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="flt_tag" />
                                            <feComposite in="SourceGraphic" in2="flt_tag" operator="atop" />
                                        </filter>
                                    </defs>
                                </svg>
                            </div>
                        </div>
                        <div class="col-md-7 set-content">
                            <div class="parra-center">
                                <h3>Customized Curriculum</h3>
                                <p>Our expert In-house team along with curriculum experts from NASA and Discovery have crafted a best-in-world Integrated STEAM curriculum which makes sure that all the activities and products designed and built are aligned with your school board be it IB, Cambridge, CBSE, State or independent. Not just that, we have also made sure to keep it customized and personalized for each school and make sure we provide exactly what you are looking for.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-12 mx-auto scl-block right_figblock">
                    <div class="row">
                        <div class="col-md-5 left-prnt left-prnt-middle">
                            <div class="box_parent">
                                <div class="box1 box2"
                                    style={{ background: "url(/images/tilt-imgs/tilt-4.jpg)" }}
                                //  style="background:url(./assets/images/tilt-imgs/tilt-4.jpg)"
                                ></div>
                                <svg class="flt_svg" xmlns="http://www.w3.org/2000/svg">
                                    <defs>
                                        <filter id="flt_tag">
                                            <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="blur" />
                                            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="flt_tag" />
                                            <feComposite in="SourceGraphic" in2="flt_tag" operator="atop" />
                                        </filter>
                                    </defs>
                                </svg>
                            </div>
                            <img src="/images/tilt-imgs/fig-caption2.png" class="sml-figcaption" alt="" />
                        </div>
                        <div class="col-md-7 set-content">
                            <div class="parra-center">
                                <h3>Competitions</h3>
                                <p>Our association also offers unlimited access to National and International competitions from 12 collaborators including NASA, ISRO, Boeing, Discovery, Samsung, HP and more. The best part, no additional enrollments fee for competitions once your school is already part of the AeroBay offerings. We also run our standalone National Design thinking challenge, look out for our social media handles for more information on our hosted competitions.</p>
                            </div>
                        </div>

                    </div>
                </div>
                <div class="col-md-12 mx-auto scl-block left_figblock">
                    <div class="row">
                        <div class="col-md-5 left-prnt left-prnt-middle2">
                            <div class="box_parent">
                                <div class="box1"
                                    style={{ background: "url(/images/tilt-imgs/tilt-5.jpg)" }}
                                // style="background:url(./assets/images/tilt-imgs/tilt-5.jpg)"
                                ></div>
                                <svg class="flt_svg" xmlns="http://www.w3.org/2000/svg">
                                    <defs>
                                        <filter id="flt_tag">
                                            <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="blur" />
                                            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="flt_tag" />
                                            <feComposite in="SourceGraphic" in2="flt_tag" operator="atop" />
                                        </filter>
                                    </defs>
                                </svg>
                            </div>
                            <img src="/images/tilt-imgs/fig-caption3.png" class="sml-figcaption" alt="" />
                        </div>
                        <div class="col-md-7 set-content">
                            <div class="parra-center">
                                <h3>Certification</h3>
                                <p>Well gone are the days of pen and paper printed certificates! We bring to you blockchain based certificates provided to all AeroBay enrolled students of your school issued by STEM.org (World oldest standing STEM affiliation platform) & AMAI.in. Not just that, we have also partnered with Aero Modelers Association of India to offer qualified certificates which can be later redeemed for interesting opportunities in the Drone sector by the students.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-12 mx-auto scl-block right_figblock">
                    <div class="row">
                        <div class="col-md-5 left-prnt left-prnt-btm">
                            <div class="box_parent">
                                <div class="box1 box2"
                                    style={{ background: "url(/images/tilt-imgs/tilt-6.jpg)" }}
                                //  style="background:url(./assets/images/tilt-imgs/tilt-6.jpg)"
                                ></div>
                                <svg class="flt_svg" xmlns="http://www.w3.org/2000/svg">
                                    <defs>
                                        <filter id="flt_tag">
                                            <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="blur" />
                                            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="flt_tag" />
                                            <feComposite in="SourceGraphic" in2="flt_tag" operator="atop" />
                                        </filter>
                                    </defs>
                                </svg>
                            </div>
                            <img src="/images/tilt-imgs/fig-caption4.png" class="sml-figcaption" alt="" />
                        </div>
                        <div class="col-md-7 set-content">
                            <div class="parra-center">
                                <h3>Analytics and LMS</h3>
                                <p>Our advance learning management system records, analyzes and provides a customized digital portfolio for each student enrolled in AeroBay program. We also provide high quality analytical data process on various parameters for the school to further customize individual student learning and provide quantified data for career support and guidance. Our advanced analytical process also measures improvement in student’s performance in all 05 skills mentioned under the Blooms Taxonomy.</p>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    </div>)
}
