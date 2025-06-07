"use client";

import Image from "next/image";
import Link from "next/link";

export default function Careers() {
    return (<div class="page-main">
        <section class="page_banner career_banner bg-blk">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-9 mx-auto heading-section2 text-center">
                        <h1>Career</h1>
                    </div>
                    <div class="col-md-12 banr-btm banr-part">
                        <div class="row">
                            <div class="col-md-6 banr-btm-text">
                                <div class="text-parra">
                                    <h2>Your next adventure <span>starts here!</span></h2>
                                    <p>Join us in shaping the future</p>
                                    <Link href="/jobs" class="btn btn-primary view-btn">
                                        <span class="outer-bx">VIEW ALL JOBS</span>
                                    </Link>
                                    {/* <a href="careers-single.html" class="btn btn-primary view-btn"><span class="outer-bx">VIEW ALL JOBS</span></a> */}
                                </div>
                            </div>
                            <div class="col-md-6">
                                <img class="scl-collage" src="/images/collage-1.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="teamjoin_section bg-blk">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12 heading-section text-center">
                        <h2>Join Our Team</h2>
                        <p>Ignite your career with AeroBay! We’re looking for passionate and innovative individuals<br /> to join our dynamic team. Apply today and be a part of a mission that’s transforming<br /> education and inspiring young minds</p>
                        <p class="mt-5 mb-3 join_text">browse through jobs of our departments to find your fit</p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-12">
                        <div class="row">
                            <div class="col-md-4">
                                <div class="block1 wrap-pic-w team-card">
                                    <img src="/images/work/showcase_1.png" alt="" />
                                    <div class="fig-caption">
                                        <div class="member-info">
                                            <h4>Creative &<br /> Design</h4>
                                            <Link href="/jobs" class="link-job">
                                                View Jobs
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="block1 wrap-pic-w team-card">
                                    <img src="/images/work/showcase_2.png" alt="" />
                                    <div class="fig-caption">
                                        <div class="member-info">
                                            <h4>Training &<br /> Development</h4>
                                            <Link href="/jobs" class="link-job">
                                                View Jobs
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="block1 wrap-pic-w team-card">
                                    <img src="/images/work/showcase_3.png" alt="" />
                                    <div class="fig-caption">
                                        <div class="member-info">
                                            <h4>Product &<br /> Inventory</h4>
                                            <Link href="/jobs" class="link-job">
                                                View Jobs
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="block1 wrap-pic-w team-card">
                                    <img src="/images/work/showcase_4.png" alt="" />
                                    <div class="fig-caption">
                                        <div class="member-info">
                                            <h4>Sales &<br /> Marketing</h4>
                                            <Link href="/jobs" class="link-job">
                                                View Jobs
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="block1 wrap-pic-w team-card">
                                    <img src="/images/work/showcase_5.png" alt="" />
                                    <div class="fig-caption">
                                        <div class="member-info">
                                            <h4>Human<br /> Resource</h4>
                                            <Link href="/jobs" class="link-job">
                                                View Jobs
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="block1 wrap-pic-w team-card">
                                    <img src="/images/work/showcase_6.png" alt="" />
                                    <div class="fig-caption">
                                        <div class="member-info">
                                            <h4>Operation &<br /> Administration</h4>
                                            <Link href="/jobs" class="link-job">
                                                View Jobs
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>

        </section>
        <section class="page_bannerbtm schl-block bg-blk">
            <div class="container">
                <div class="row">
                    <div class="col-md-11 mx-auto heading-section text-center">
                        <h2>Life At AeroBay</h2>
                        <div class="col-md-10 mx-auto video_block">
                            <div class="figure banner-fig">
                                <div class="embed-responsive embed-responsive-16by9">
                                    <iframe height="450" class="embed-responsive-item" src="https://www.youtube.com/embed/bMSJqcYJtvQ?si=bbYaiakXQ4vUxnTr"></iframe>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>

        </section>

    </div>)
}
