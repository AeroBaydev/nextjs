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
                                    <Link href="https://aerobay.zohorecruit.in/jobs/Careers" class="btn btn-primary view-btn">
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
//--=================Youtube Video=================--//
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
