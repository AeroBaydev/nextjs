"use client";

import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faInstagram, faFacebook, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import Image from "next/image";

export default function MeetTheVisionaries() {
    const [tabs, setTabs] = useState("aer-tab1")
    return (<div class="page-main">
        <section className="page_banner team_banner bg-blk">
            <div className="container">
                <div className="row">
                    <div className="col-md-9 mx-auto heading-section text-center">
                    <div class="light_heading">Team</div>
                        <h1>The AeroBay Team</h1>
                        <p>Our success is powered by a diverse team of passionate and creative professionals.<br /> Get to know the visionaries behind AeroBay, whose collective talents and<br /> commitment are shaping the future of our students.</p>
                    </div>
                    <div className="col-md-12 mx-auto tabs-block">
                        <ul className="nav nav-tabs">
                            <li className="nav-item"><a className={`nav-link ${tabs == "aer-tab1" ? "active" : ""} `} data-bs-toggle="tab" onClick={() => setTabs("aer-tab1")}>Founders</a></li>
                            <li className="nav-item"><a className={`nav-link ${tabs == "aer-tab2" ? "active" : ""} `} data-bs-toggle="tab" onClick={() => setTabs("aer-tab2")}>Leadership</a></li>
                            <li className="nav-item"><a className={`nav-link ${tabs == "aer-tab3" ? "active" : ""} `} data-bs-toggle="tab" onClick={() => setTabs("aer-tab3")}>Creative</a></li>
                            <li className="nav-item"><a className={`nav-link ${tabs == "aer-tab4" ? "active" : ""} `} data-bs-toggle="tab" onClick={() => setTabs("aer-tab4")}>Training & Execution</a></li>
                            <li className="nav-item"><a className={`nav-link ${tabs == "aer-tab5" ? "active" : ""} `} data-bs-toggle="tab" onClick={() => setTabs("aer-tab5")}>Product</a></li>
                            <li className="nav-item"><a className={`nav-link ${tabs == "aer-tab6" ? "active" : ""} `} data-bs-toggle="tab" onClick={() => setTabs("aer-tab6")}>HR & Finance</a></li>
                        </ul>

                        {/* <!-- Tab panes --> */}
                        <div className="tab-content mt-5">
                            <div className={`tab-pane container ${tabs == "aer-tab1" ? "active" : "fade"} `} id={"aer-tab1"}>
                                <div className="col tab-content">
                                    <div className="row">
                                        <div className="col-md-3">
                                            <div className="block1 wrap-pic-w team-card">
                                                <img src="/images/team/neha.jpg" alt="" />
                                                <div className="fig-caption">
                                                    <div className="member-info">
                                                        <h4>Neha<span className="d-block">Chauhan</span></h4>
                                                        <p><small>CEO & Founder</small></p>
                                                    </div>
                                                    <div className="member-network">
                                                        <a href="https://www.linkedin.com/in/neha-chauhan-04b401125/"><FontAwesomeIcon icon={faLinkedin} /></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="block1 wrap-pic-w team-card">
                                                <img src="/images/team/vaishnav-26.jpg" alt="" />
                                                <div className="fig-caption">
                                                    <div className="member-info">
                                                        <h4>CH <span className="d-block">Vaishnav</span></h4>
                                                        <p><small>CBO & Founder</small></p>
                                                    </div>
                                                    <div className="member-network">
                                                        <a href="https://www.linkedin.com/in/vaishnav-c-78532257/"><FontAwesomeIcon icon={faLinkedin} /></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="block1 wrap-pic-w team-card">
                                                <img src="/images/team/nitin.jpg" alt="" />
                                                <div className="fig-caption">
                                                    <div className="member-info">
                                                        <h4>Nitin <span className="d-block">Choyal</span></h4>
                                                        <p><small>CTO & Founder</small></p>
                                                    </div>
                                                    <div className="member-network">
                                                        <a href="https://www.linkedin.com/in/nitin-choyal-48668837/"><FontAwesomeIcon icon={faLinkedin} /></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="block1 wrap-pic-w team-card">
                                                <img src="/images/team/ashish.jpg" alt="" />
                                                <div className="fig-caption">
                                                    <div className="member-info">
                                                        <h4>Ashish <span className="d-block">Kumawat</span></h4>
                                                        <p><small>CMO & Founder</small></p>
                                                    </div>
                                                    <div className="member-network">
                                                        <a href="https://www.linkedin.com/in/ashish-kumawat-21462a70/"><FontAwesomeIcon icon={faLinkedin} /></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={`tab-pane container ${tabs == "aer-tab2" ? "active" : "fade"} `} id={"aer-tab2"}>
                                <div className="col tab-content">
                                    <div className="row">
                                        <div className="col-md-3">
                                            <div className="block1 wrap-pic-w team-card">
                                            <img src="/images/team/S7401840-10.jpg" alt="" />
                                                <div className="fig-caption">
                                                    <div className="member-info">
                                                    <h4>Aditya <span className="d-block">SV</span></h4>
                                                        <p><small>VP - Operations</small></p>
                                                    </div>
                                                    <div className="member-network">
                                                        <a href="https://www.linkedin.com/in/aditya-s-v-16612a198/"><FontAwesomeIcon icon={faLinkedin} /></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="block1 wrap-pic-w team-card">
                                                <img src="/images/team/S7402352-20.jpg" alt="" />
                                                <div className="fig-caption">
                                                    <div className="member-info">
                                                        <h4>Ravi <span className="d-block">Raushan</span></h4>
                                                        <p><small>B2B Relationship Manager</small></p>
                                                    </div>
                                                    <div className="member-network">
                                                        <a href="https://www.linkedin.com/in/ravinandan-kumar-raushan/"><FontAwesomeIcon icon={faLinkedin} /></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="block1 wrap-pic-w team-card">
                                                <img src="/images/team/abhishek-ahanker-1.jpg" alt="" />
                                                <div className="fig-caption">
                                                    <div className="member-info">
                                                        <h4>Abhishek <span className="d-block">Shankar</span></h4>
                                                        <p><small>STEAM Training Lead</small></p>
                                                    </div>
                                                    <div className="member-network">
                                                        <a href="https://www.linkedin.com/in/abhishek-shankar/"><FontAwesomeIcon icon={faLinkedin} /></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                            <div className={`tab-pane container ${tabs == "aer-tab3" ? "active" : "fade"} `} id={"aer-tab3"}>
                                <div className="col tab-content">
                                    <div className="row">
                                        <div className="col-md-3">
                                            <div className="block1 wrap-pic-w team-card">
                                                <img src="/images/team/S7401934-17.jpg" alt="" />
                                                <div className="fig-caption">
                                                    <div className="member-info">
                                                        <h4>Sharan M</h4>
                                                        <p><small>Creative Head</small></p>
                                                    </div>
                                                    <div className="member-network">
                                                        <a href="https://www.linkedin.com/in/sharan-m-542413292/"><FontAwesomeIcon icon={faLinkedin} /></a>
                                                        <a className="insta" href="https://www.instagram.com/sharan.created.this/"><FontAwesomeIcon icon={faInstagram} /></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="block1 wrap-pic-w team-card">
                                                <img src="/images/team/S7402426-24.jpg" alt="" />
                                                <div className="fig-caption">
                                                    <div className="member-info">
                                                        <h4>Shashwat <span className="d-block">Bajpai</span></h4>
                                                        <p><small>Admin - Social Media Strategist</small></p>
                                                    </div>
                                                    <div className="member-network">
                                                        <a href="https://www.linkedin.com/in/shashwat-bajpai-259b44209/"><FontAwesomeIcon icon={faLinkedin} /></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="block1 wrap-pic-w team-card">
                                                <img src="/images/team/S7402474-25.jpg" alt="" />
                                                <div className="fig-caption">
                                                    <div className="member-info">
                                                        <h4>Puneet <span className="d-block">Sharma</span></h4>
                                                        <p><small>Graphic Designer</small></p>
                                                    </div>
                                                    <div className="member-network">
                                                        <a href="https://www.linkedin.com/in/puneet31/"><FontAwesomeIcon icon={faLinkedin} /></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="block1 wrap-pic-w team-card">
                                                <img src="/images/team/S7401930-15.jpg" alt="" />
                                                <div className="fig-caption">
                                                    <div className="member-info">
                                                        <h4>Kunal <span className="d-block">Sharma</span></h4>
                                                        <p><small>Interior Designer</small></p>
                                                    </div>
                                                    <div className="member-network">
                                                        <a href="https://www.linkedin.com/in/kunal-sharma-094012166/"><FontAwesomeIcon icon={faLinkedin} /></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                            <div className={`tab-pane container ${tabs == "aer-tab4" ? "active" : "fade"} `} id={"aer-tab4"}>
                                <div className="col tab-content">
                                    <div className="row">
                                        <div className="col-md-3">
                                            <div className="block1 wrap-pic-w team-card">
                                                <img src="/images/team/S7401885-14.jpg" alt="" />
                                                <div className="fig-caption">
                                                    <div className="member-info">
                                                        <h4>Manglesh <span className="d-block">Pandey</span></h4>
                                                        <p><small>Training Admin - Product & Development</small></p>
                                                    </div>
                                                    <div className="member-network">
                                                        <a href="https://www.linkedin.com/in/manglesh-pandey-063275176/"><FontAwesomeIcon icon={faLinkedin} /></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="block1 wrap-pic-w team-card">
                                                <img src="/images/team/S7402371-22.jpg" alt="" />
                                                <div className="fig-caption">
                                                    <div className="member-info">
                                                        <h4>Naman <span className="d-block">Goyal</span></h4>
                                                        <p><small>Regional Manager</small></p>
                                                    </div>
                                                    <div className="member-network">
                                                        <a href="https://www.linkedin.com/in/0039-naman-goyal/"><FontAwesomeIcon icon={faLinkedin} /></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="block1 wrap-pic-w team-card">
                                                <img src="/images/team/S7401864-12.jpg" alt="" />
                                                <div className="fig-caption">
                                                    <div className="member-info">
                                                        <h4>Rakesh <span className="d-block">Kumar</span></h4>
                                                        <p><small>Training Associate - Aeromodelling</small></p>
                                                    </div>
                                                    <div className="member-network">
                                                        <a href="https://www.linkedin.com/in/rakesh-kumar-sah-a709a0152/"><FontAwesomeIcon icon={faLinkedin} /></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="block1 wrap-pic-w team-card">
                                                <img src="/images/team/S7402363-21.jpg" alt="" />
                                                <div className="fig-caption">
                                                    <div className="member-info">
                                                        <h4>Shivashish <span className="d-block">Pandey</span></h4>
                                                        <p><small>Regional Manager</small></p>
                                                    </div>
                                                    <div className="member-network">
                                                        <a href="https://www.linkedin.com/in/shivashish-pandey-6b882323b/"><FontAwesomeIcon icon={faLinkedin} /></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="block1 wrap-pic-w team-card">
                                                <img src="/images/team/S7401876-13.jpg" alt="" />
                                                <div className="fig-caption">
                                                    <div className="member-info">
                                                        <h4>Prathit <span className="d-block">Kalra</span></h4>
                                                        <p><small>Design & Development Associate</small></p>
                                                    </div>
                                                    <div className="member-network">
                                                        <a href="https://www.linkedin.com/in/prathit-kalra-b58402240/"><FontAwesomeIcon icon={faLinkedin} /></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="block1 wrap-pic-w team-card">
                                                <img src="/images/team/S7402408-23.jpg" alt="" />
                                                <div className="fig-caption">
                                                    <div className="member-info">
                                                        <h4>Manisha <span className="d-block">Luthra</span></h4>
                                                        <p><small>Training Admin - Academic</small></p>
                                                    </div>
                                                    <div className="member-network">
                                                        <a href="https://www.linkedin.com/in/manisha-luthra-b30a511a4/"><FontAwesomeIcon icon={faLinkedin} /></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="block1 wrap-pic-w team-card">
                                                <img src="/images/team/S7401859-11.jpg" alt="" />
                                                <div className="fig-caption">
                                                    <div className="member-info">
                                                        <h4>Rahul <span className="d-block">Kumar</span></h4>
                                                        <p><small>Training Assistant - Aeromodelling</small></p>
                                                    </div>
                                                    <div className="member-network">
                                                        <a href="https://www.linkedin.com/in/rahul-kumar-67746a310/"><FontAwesomeIcon icon={faLinkedin} /></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={`tab-pane container ${tabs == "aer-tab5" ? "active" : "fade"} `} id={"aer-tab5"}>
                                <div className="col tab-content">
                                    <div className="row">
                                        <div className="col-md-3">
                                             <div className="block1 wrap-pic-w team-card">
                                                <img src="/images/team/S7401797-9.jpg" alt="" />
                                                <div className="fig-caption">
                                                    <div className="member-info">
                                                        <h4>Barath <span className="d-block">Kumar S</span></h4>
                                                        <p><small>Production Manager</small></p>
                                                    </div>
                                                    <div className="member-network">
                                                        <a href="https://www.linkedin.com/in/barath-kumar-s-a1b583218/"><FontAwesomeIcon icon={faLinkedin} /></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="block1 wrap-pic-w team-card">
                                                <img src="/images/team/mahender-3.jpg" alt="" />
                                                <div className="fig-caption">
                                                    <div className="member-info">
                                                        <h4>Mahendra <span className="d-block">Kumar Saini</span></h4>
                                                        <p><small>Sr Product Associate</small></p>
                                                    </div>
                                                    <div className="member-network">
                                                        <a href="https://www.linkedin.com/in/mahendra-saini-a83b7226a/"><FontAwesomeIcon icon={faLinkedin} /></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="block1 wrap-pic-w team-card">
                                                <img src="/images/team/S7401787-7.jpg" alt="" />
                                                <div className="fig-caption">
                                                    <div className="member-info">
                                                        <h4>Piyush <span className="d-block">Kumar</span></h4>
                                                        <p><small>Product Associate</small></p>
                                                    </div>
                                                    <div className="member-network">
                                                        <a href="https://www.linkedin.com/in/piyush-kumar-a070011a1/"><FontAwesomeIcon icon={faLinkedin} /></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="block1 wrap-pic-w team-card">
                                                <img src="/images/team/S7401789-8.jpg" alt="" />
                                                <div className="fig-caption">
                                                    <div className="member-info">
                                                        <h4>Rajesh <span className="d-block">Sharma</span></h4>
                                                        <p><small>Product Associate</small></p>
                                                    </div>
                                                    <div className="member-network">
                                                        <a href="https://www.linkedin.com/in/rajesh-sharma-83058727b/"><FontAwesomeIcon icon={faLinkedin} /></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="block1 wrap-pic-w team-card">
                                                <img src="/images/team/S7401786-6.jpg" alt="" />
                                                <div className="fig-caption">
                                                    <div className="member-info">
                                                        <h4>Vishal <span className="d-block">Kumar Paswan</span></h4>
                                                        <p><small>Sr Product Associate</small></p>
                                                    </div>
                                                    <div className="member-network">
                                                        <a href="https://www.linkedin.com/in/vishal-kumar-6aa614296/"><FontAwesomeIcon icon={faLinkedin} /></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="block1 wrap-pic-w team-card">
                                                <img src="/images/team/S7402417-24.jpg" alt="" />
                                                <div className="fig-caption">
                                                    <div className="member-info">
                                                        <h4>Manvendra <span className="d-block">Singh</span></h4>
                                                        <p><small>Product Development Associate</small></p>
                                                    </div>
                                                    <div className="member-network">
                                                        <a href="#"><FontAwesomeIcon icon={faLinkedin} /></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={`tab-pane container ${tabs == "aer-tab6" ? "active" : "fade"} `} id={"aer-tab6"}>
                                <div className="col tab-content">
                                    <div className="row">
                                        <div className="col-md-3">
                                            <div className="block1 wrap-pic-w team-card">
                                                <img src="/images/team/S7401983-19.jpg" alt="" />
                                                <div className="fig-caption">
                                                    <div className="member-info">
                                                        <h4>Shefali <span className="d-block">Vishwakarma</span></h4>
                                                        <p><small>HR Executive</small></p>
                                                    </div>
                                                    <div className="member-network">
                                                        <a href="https://www.linkedin.com/in/shefali-vishwakarma-0b7aa5149/"><FontAwesomeIcon icon={faLinkedin} /></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="block1 wrap-pic-w team-card">
                                                <img src="/images/team/S7401952-18.jpg" alt="" />
                                                <div className="fig-caption">
                                                    <div className="member-info">
                                                        <h4>Dhatri <span className="d-block">Shukla</span></h4>
                                                        <p><small>HR Executive</small></p>
                                                    </div>
                                                    <div className="member-network">
                                                        <a href="https://www.linkedin.com/in/dhatri-shukla-ba156822b/"><FontAwesomeIcon icon={faLinkedin} /></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="block1 wrap-pic-w team-card">
                                                <img src="/images/team/S7401933-16.jpg" alt="" />
                                                <div className="fig-caption">
                                                    <div className="member-info">
                                                        <h4>Raj <span className="d-block">Kumar Jha</span></h4>
                                                        <p><small>Accountant</small></p>
                                                    </div>
                                                    <div className="member-network">
                                                        <a href="https://www.linkedin.com/in/jha-raj-187a83315/"><FontAwesomeIcon icon={faLinkedin} /></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>)
}
