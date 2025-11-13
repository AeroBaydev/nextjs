"use client";

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

export default function MeetTheVisionaries() {
  const [tabs, setTabs] = useState("aer-tab1");
  return (
    <div className="page-main">
      <section className="page_banner team_banner bg-blk">
        <div className="container">
          <div className="row">
            <div className="col-md-9 mx-auto heading-section text-center">
              <div class="light_heading">Team</div>
              <h1>The AeroBay Team</h1>
              <p>
                Our success is powered by a diverse team of passionate and
                creative professionals.
                <br /> Get to know the visionaries behind AeroBay, whose
                collective talents and
                <br /> commitment are shaping the future of our students.
              </p>
            </div>
            <div className="col-md-12 mx-auto tabs-block">
              <ul className="nav nav-tabs">
                <li className="nav-item">
                  <a
                    href="#aer-tab1"
                    role="tab"
                    aria-controls="aer-tab1"
                    aria-selected={tabs == "aer-tab1"}
                    className={`nav-link ${tabs == "aer-tab1" ? "active" : ""}`}
                    data-bs-toggle="tab"
                    onClick={() => setTabs("aer-tab1")}
                  >
                    Founders
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="#aer-tab2"
                    role="tab"
                    aria-controls="aer-tab2"
                    aria-selected={tabs == "aer-tab2"}
                    className={`nav-link ${tabs == "aer-tab2" ? "active" : ""}`}
                    data-bs-toggle="tab"
                    onClick={() => setTabs("aer-tab2")}
                  >
                    Leadership
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="#aer-tab3"
                    role="tab"
                    aria-controls="aer-tab3"
                    aria-selected={tabs == "aer-tab3"}
                    className={`nav-link ${tabs == "aer-tab3" ? "active" : ""}`}
                    data-bs-toggle="tab"
                    onClick={() => setTabs("aer-tab3")}
                  >
                    Content & Creative
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="#aer-tab4"
                    role="tab"
                    aria-controls="aer-tab4"
                    aria-selected={tabs == "aer-tab4"}
                    className={`nav-link ${tabs == "aer-tab4" ? "active" : ""}`}
                    data-bs-toggle="tab"
                    onClick={() => setTabs("aer-tab4")}
                  >
                    Training & Execution
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="#aer-tab5"
                    role="tab"
                    aria-controls="aer-tab5"
                    aria-selected={tabs == "aer-tab5"}
                    className={`nav-link ${tabs == "aer-tab5" ? "active" : ""}`}
                    data-bs-toggle="tab"
                    onClick={() => setTabs("aer-tab5")}
                  >
                    Product
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="#aer-tab6"
                    role="tab"
                    aria-controls="aer-tab6"
                    aria-selected={tabs == "aer-tab6"}
                    className={`nav-link ${tabs == "aer-tab6" ? "active" : ""}`}
                    data-bs-toggle="tab"
                    onClick={() => setTabs("aer-tab6")}
                  >
                    HR & Finance
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="#aer-tab7"
                    role="tab"
                    aria-controls="aer-tab7"
                    aria-selected={tabs == "aer-tab7"}
                    className={`nav-link ${tabs == "aer-tab7" ? "active" : ""}`}
                    data-bs-toggle="tab"
                    onClick={() => setTabs("aer-tab7")}
                  >
                    Sales
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="#aer-tab7"
                    role="tab"
                    aria-controls="aer-tab7"
                    aria-selected={tabs == "aer-tab8"}
                    className={`nav-link ${
                      tabs == "aer-tab8s" ? "active" : ""
                    }`}
                    data-bs-toggle="tab"
                    onClick={() => setTabs("aer-tab8")}
                  >
                    IT & Software
                  </a>
                </li>
              </ul>

              {/* <!-- Tab panes --> */}
              {/* Founders */}
              <div className="tab-content mt-5">
                <div
                  className={`tab-pane container fade ${
                    tabs == "aer-tab1" ? "show active" : ""
                  }`}
                  id={"aer-tab1"}
                >
                  <div className="col tab-content">
                    <div className="row">
                      <div className="col-md-3">
                        <div className="block1 wrap-pic-w team-card">
                          <img src="/images/team/neha.jpg" alt="" />
                          <div className="fig-caption">
                            <div className="member-info">
                              <h4>
                                Neha<span className="d-block">Chauhan</span>
                              </h4>
                              <p>
                                <small>CEO & Founder</small>
                              </p>
                            </div>
                            <div className="member-network">
                              <a href="https://www.linkedin.com/in/neha-chauhan-04b401125/">
                                <FontAwesomeIcon icon={faLinkedin} />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="block1 wrap-pic-w team-card">
                          <img src="/images/team/vaishnav-26.jpg" alt="" />
                          <div className="fig-caption">
                            <div className="member-info">
                              <h4>
                                CH <span className="d-block">Vaishnav</span>
                              </h4>
                              <p>
                                <small>CBO & Founder</small>
                              </p>
                            </div>
                            <div className="member-network">
                              <a href="https://www.linkedin.com/in/vaishnav-c-78532257/">
                                <FontAwesomeIcon icon={faLinkedin} />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="block1 wrap-pic-w team-card">
                          <img src="/images/team/nitin.jpg" alt="" />
                          <div className="fig-caption">
                            <div className="member-info">
                              <h4>
                                Nitin <span className="d-block">Choyal</span>
                              </h4>
                              <p>
                                <small>CTO & Founder</small>
                              </p>
                            </div>
                            <div className="member-network">
                              <a href="https://www.linkedin.com/in/nitin-choyal-48668837/">
                                <FontAwesomeIcon icon={faLinkedin} />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="block1 wrap-pic-w team-card">
                          <img src="/images/team/ashish.jpg" alt="" />
                          <div className="fig-caption">
                            <div className="member-info">
                              <h4>
                                Ashish <span className="d-block">Kumawat</span>
                              </h4>
                              <p>
                                <small>CMO & Founder</small>
                              </p>
                            </div>
                            <div className="member-network">
                              <a href="https://www.linkedin.com/in/ashish-kumawat-21462a70/">
                                <FontAwesomeIcon icon={faLinkedin} />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Leadership */}
                <div
                  className={`tab-pane container fade ${
                    tabs == "aer-tab2" ? "show active" : ""
                  }`}
                  id={"aer-tab2"}
                >
                  <div className="col tab-content">
                    <div className="row">
                      <div className="col-md-3">
                        <div className="block1 wrap-pic-w team-card">
                          <img src="/images/team/S7401840-10.jpg" alt="" />
                          <div className="fig-caption">
                            <div className="member-info">
                              <h4>
                                Aditya <span className="d-block">SV</span>
                              </h4>
                              <p>
                                <small>VP - Operations</small>
                              </p>
                            </div>
                            <div className="member-network">
                              <a href="https://www.linkedin.com/in/aditya-s-v-16612a198/">
                                <FontAwesomeIcon icon={faLinkedin} />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="block1 wrap-pic-w team-card">
                          <img src="/images/team/S7402352-20.jpg" alt="" />
                          <div className="fig-caption">
                            <div className="member-info">
                              <h4>
                                Ravi <span className="d-block">Raushan</span>
                              </h4>
                              <p>
                                <small>B2B Relationship Manager</small>
                              </p>
                            </div>
                            <div className="member-network">
                              <a href="https://www.linkedin.com/in/ravinandan-kumar-raushan/">
                                <FontAwesomeIcon icon={faLinkedin} />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="block1 wrap-pic-w team-card">
                          <img
                            src="/images/team/abhishek-ahanker-1.jpg"
                            alt=""
                          />
                          <div className="fig-caption">
                            <div className="member-info">
                              <h4>
                                Abhishek{" "}
                                <span className="d-block">Shankar</span>
                              </h4>
                              <p>
                                <small>LEARNING AND DEVELOPMENT HEAD</small>
                              </p>
                            </div>
                            <div className="member-network">
                              <a href="https://www.linkedin.com/in/abhishek-shankar/">
                                <FontAwesomeIcon icon={faLinkedin} />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="block1 wrap-pic-w team-card">
                          <img src="/images/team/S7402408-23.jpg" alt="" />
                          <div className="fig-caption">
                            <div className="member-info">
                              <h4>
                                Manisha <span className="d-block">Luthra</span>
                              </h4>
                              <p>
                                <small>Cheif People Officer</small>
                              </p>
                            </div>
                            <div className="member-network">
                              <a href="https://www.linkedin.com/in/manisha-luthra-b30a511a4/">
                                <FontAwesomeIcon icon={faLinkedin} />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Creative */}
                <div
                  className={`tab-pane container fade ${
                    tabs == "aer-tab3" ? "show active" : ""
                  }`}
                  id={"aer-tab3"}
                >
                  <div className="col tab-content">
                    <div className="row">
                      <div className="col-md-3">
                        <div className="block1 wrap-pic-w team-card">
                          <img src="/images/team/vineet.png" alt="" />
                          <div className="fig-caption">
                            <div className="member-info">
                              <h4>Vineet Kumar Jaiswal</h4>
                              <p>
                                <small>Graphic Designer</small>
                              </p>
                            </div>
                            <div className="member-network">
                              <a href="https://www.linkedin.com/in/vineet-jaiswal17/">
                                <FontAwesomeIcon icon={faLinkedin} />
                              </a>
                              {/* <a className="insta" href="https://www.instagram.com/sharan.created.this/"><FontAwesomeIcon icon={faInstagram} /></a> */}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="block1 wrap-pic-w team-card">
                          <img src="/images/team/sarthak.png" alt="" />
                          <div className="fig-caption">
                            <div className="member-info">
                              <h4>
                                Sarthak <span className="d-block">Gange</span>
                              </h4>
                              <p>
                                <small>Interior Designer</small>
                              </p>
                            </div>
                            <div className="member-network">
                              <a href="https://www.linkedin.com/in/sarthak-gange-874023279/">
                                <FontAwesomeIcon icon={faLinkedin} />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="block1 wrap-pic-w team-card">
                          <img src="/images/team/karan.png" alt="" />
                          <div className="fig-caption">
                            <div className="member-info">
                              <h4>
                                Karan
                                <span className="d-block">Singh Khati</span>
                              </h4>
                              <p>
                                <small>Interior Designer</small>
                              </p>
                            </div>
                            <div className="member-network">
                              <a href="https://www.linkedin.com/in/karan-singh-khati-7a694937b/">
                                <FontAwesomeIcon icon={faLinkedin} />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="block1 wrap-pic-w team-card">
                          <img src="/images/team/ritu.png" alt="" />
                          <div className="fig-caption">
                            <div className="member-info">
                              <h4>
                                Ritu <span className="d-block">Kadam</span>
                              </h4>
                              <p>
                                <small>Subject Matter Expert</small>
                              </p>
                            </div>
                            <div className="member-network">
                              <a href="https://www.linkedin.com/in/ritu-kadam-0599a8236/">
                                <FontAwesomeIcon icon={faLinkedin} />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Training */}
                <div
                  className={`tab-pane container fade ${
                    tabs == "aer-tab4" ? "show active" : ""
                  }`}
                  id={"aer-tab4"}
                >
                  <div className="col tab-content">
                    <div className="row">
                        <div className="col-md-3">
                        <div className="block1 wrap-pic-w team-card">
                          <img src="/images/team/S7401885-14.jpg" alt="" />
                          <div className="fig-caption">
                            <div className="member-info">
                              <h4>
                                Manglesh <span className="d-block">Pandey</span>
                              </h4>
                              <p>
                                <small>Training Admin Head</small>
                              </p>
                            </div>
                            <div className="member-network">
                              <a href="https://www.linkedin.com/in/manglesh-pandey-063275176/">
                                <FontAwesomeIcon icon={faLinkedin} />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="block1 wrap-pic-w team-card">
                          <img src="/images/team/ashwani.png" alt="" />
                          <div className="fig-caption">
                            <div className="member-info">
                              <h4>
                                Ashwani <span className="d-block">Shukla</span>
                              </h4>
                              <p>
                                <small>Regional Manager</small>
                              </p>
                            </div>
                            <div className="member-network">
                              <a href="">
                                <FontAwesomeIcon icon={faLinkedin} />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="block1 wrap-pic-w team-card">
                          <img src="/images/team/S7402363-21.jpg" alt="" />
                          <div className="fig-caption">
                            <div className="member-info">
                              <h4>
                                Shivashish{" "}
                                <span className="d-block">Pandey</span>
                              </h4>
                              <p>
                                <small>Regional Manager</small>
                              </p>
                            </div>
                            <div className="member-network">
                              <a href="https://www.linkedin.com/in/shivashish-pandey-6b882323b/">
                                <FontAwesomeIcon icon={faLinkedin} />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="block1 wrap-pic-w team-card">
                          <img src="/images/team/nitish.png" alt="" />
                          <div className="fig-caption">
                            <div className="member-info">
                              <h4>
                                Nitish Sarita{" "}
                                <span className="d-block">Rana</span>
                              </h4>
                              <p>
                                <small>Impact Head</small>
                              </p>
                            </div>
                            <div className="member-network">
                              <a href="https://www.linkedin.com/in/shivashish-pandey-6b882323b/">
                                <FontAwesomeIcon icon={faLinkedin} />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="block1 wrap-pic-w team-card">
                          <img src="/images/team/S7401859-11.jpg" alt="" />
                          <div className="fig-caption">
                            <div className="member-info">
                              <h4>
                                Rahul <span className="d-block">Kumar</span>
                              </h4>
                              <p>
                                <small>
                                  Training Assistant - Aeromodelling
                                </small>
                              </p>
                            </div>
                            <div className="member-network">
                              <a href="https://www.linkedin.com/in/rahul-kumar-67746a310/">
                                <FontAwesomeIcon icon={faLinkedin} />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Producation */}
                <div
                  className={`tab-pane container fade ${
                    tabs == "aer-tab5" ? "show active" : ""
                  }`}
                  id={"aer-tab5"}
                >
                  <div className="col tab-content">
                    <div className="row">
                      <div className="col-md-3">
                        <div className="block1 wrap-pic-w team-card">
                          <img src="/images/team/Swapnil.png" alt="" />
                          <div className="fig-caption">
                            <div className="member-info">
                              <h4>
                                Swapnil <span className="d-block">Mishra</span>
                              </h4>
                              <p>
                                <small>Strategic Sourcing Manager</small>
                              </p>
                            </div>
                            <div className="member-network">
                              <a href="https://www.linkedin.com/in/swapnil-mishra-be-electronics-purchaselead/">
                                <FontAwesomeIcon icon={faLinkedin} />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="block1 wrap-pic-w team-card">
                          <img src="/images/team/S7401797-9.jpg" alt="" />
                          <div className="fig-caption">
                            <div className="member-info">
                              <h4>
                                Barath <span className="d-block">Kumar S</span>
                              </h4>
                              <p>
                                <small>Production Manager</small>
                              </p>
                            </div>
                            <div className="member-network">
                              <a href="https://www.linkedin.com/in/barath-kumar-s-a1b583218/">
                                <FontAwesomeIcon icon={faLinkedin} />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="block1 wrap-pic-w team-card">
                          <img src="/images/team/mahender-3.jpg" alt="" />
                          <div className="fig-caption">
                            <div className="member-info">
                              <h4>
                                Mahendra{" "}
                                <span className="d-block">Kumar Saini</span>
                              </h4>
                              <p>
                                <small>Quality Check Manager</small>
                              </p>
                            </div>
                            <div className="member-network">
                              <a href="https://www.linkedin.com/in/mahendra-saini-a83b7226a/">
                                <FontAwesomeIcon icon={faLinkedin} />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="block1 wrap-pic-w team-card">
                          <img src="/images/team/S7401786-6.jpg" alt="" />
                          <div className="fig-caption">
                            <div className="member-info">
                              <h4>
                                Vishal{" "}
                                <span className="d-block">Kumar Paswan</span>
                              </h4>
                              <p>
                                <small>Sr Product Associate</small>
                              </p>
                            </div>
                            <div className="member-network">
                              <a href="https://www.linkedin.com/in/vishal-kumar-6aa614296/">
                                <FontAwesomeIcon icon={faLinkedin} />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="block1 wrap-pic-w team-card">
                          <img src="/images/team/S7401787-7.jpg" alt="" />
                          <div className="fig-caption">
                            <div className="member-info">
                              <h4>
                                Piyush <span className="d-block">Kumar</span>
                              </h4>
                              <p>
                                <small>Product Associate</small>
                              </p>
                            </div>
                            <div className="member-network">
                              <a href="https://www.linkedin.com/in/piyush-kumar-a070011a1/">
                                <FontAwesomeIcon icon={faLinkedin} />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="block1 wrap-pic-w team-card">
                          <img src="/images/team/S7401789-8.jpg" alt="" />
                          <div className="fig-caption">
                            <div className="member-info">
                              <h4>
                                Rajesh <span className="d-block">Sharma</span>
                              </h4>
                              <p>
                                <small>Product Associate</small>
                              </p>
                            </div>
                            <div className="member-network">
                              <a href="https://www.linkedin.com/in/rajesh-sharma-83058727b/">
                                <FontAwesomeIcon icon={faLinkedin} />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="block1 wrap-pic-w team-card">
                          <img src="/images/team/S7401876-13.jpg" alt="" />
                          <div className="fig-caption">
                            <div className="member-info">
                              <h4>
                                Prathit <span className="d-block">Kalra</span>
                              </h4>
                              <p>
                                <small>Senior Design Engineer</small>
                              </p>
                            </div>
                            <div className="member-network">
                              <a href="https://www.linkedin.com/in/prathit-kalra-b58402240/">
                                <FontAwesomeIcon icon={faLinkedin} />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="block1 wrap-pic-w team-card">
                          <img src="/images/team/Satendra.png" alt="" />
                          <div className="fig-caption">
                            <div className="member-info">
                              <h4>
                                Satendra{" "}
                                <span className="d-block">Kushwaha</span>
                              </h4>
                              <p>
                                <small>Product Designer</small>
                              </p>
                            </div>
                            <div className="member-network">
                              <a href="https://www.linkedin.com/in/satendra-kushwaha-676698225/">
                                <FontAwesomeIcon icon={faLinkedin} />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="block1 wrap-pic-w team-card">
                          <img src="/images/team/Faizan.png" alt="" />
                          <div className="fig-caption">
                            <div className="member-info">
                              <h4>
                                Faizan <span className="d-block">Shaukat</span>
                              </h4>
                              <p>
                                <small>Product Designer</small>
                              </p>
                            </div>
                            <div className="member-network">
                              <a href="https://www.linkedin.com/in/faizan-shaukat-475196330/">
                                <FontAwesomeIcon icon={faLinkedin} />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="block1 wrap-pic-w team-card">
                          <img src="/images/team/Qumar.png" alt="" />
                          <div className="fig-caption">
                            <div className="member-info">
                              <h4>
                                Md.<span className="d-block">Qumar</span>
                              </h4>
                              <p>
                                <small>Product Designer</small>
                              </p>
                            </div>
                            <div className="member-network">
                              <a href="https://www.linkedin.com/in/mohammad-qumar-mokhtar-225b49198/">
                                <FontAwesomeIcon icon={faLinkedin} />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="block1 wrap-pic-w team-card">
                          <img src="/images/team/S7402417-24.jpg" alt="" />
                          <div className="fig-caption">
                            <div className="member-info">
                              <h4>
                                Manvendra <span className="d-block">Singh</span>
                              </h4>
                              <p>
                                <small>Product Development Associate</small>
                              </p>
                            </div>
                            <div className="member-network">
                              <a href="#">
                                <FontAwesomeIcon icon={faLinkedin} />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Sales */}
                <div
                  className={`tab-pane container fade ${
                    tabs == "aer-tab7" ? "show active" : ""
                  }`}
                  id={"aer-tab7"}
                >
                  <div className="col tab-content">
                    <div className="row">
                      <div className="col-md-3">
                        <div className="block1 wrap-pic-w team-card">
                          <img src="/images/team/saumya.png" alt="" />
                          <div className="fig-caption">
                            <div className="member-info">
                              <h4>
                                Saumya <span className="d-block">Patel</span>
                              </h4>
                              <p>
                                <small>Business Develoment Associate</small>
                              </p>
                            </div>
                            <div className="member-network">
                              <a href="https://www.linkedin.com/in/saumya-patel-89139123b/">
                                <FontAwesomeIcon icon={faLinkedin} />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                    </div>
                  </div>
                </div>


                {/* IT & Software */}
                <div
                  className={`tab-pane container fade ${
                    tabs == "aer-tab8" ? "show active" : ""
                  }`}
                  id="aer-tab8"
                >
                  <div className="col tab-content">
                    <div className="row">
                      <div className="col-md-3">
                        <div className="block1 wrap-pic-w team-card">
                          <img src="/images/team/gaurav.png"alt="gaurav"/>
                          <div className="fig-caption">
                            <div className="member-info">
                              <h4>
                                Gaurav <span className="d-block">Pratap Singh</span>
                              </h4>
                              <p>
                                <small>Software Development Engineer</small>
                              </p>
                            </div>
                            <div className="member-network">
                              <a
                                href="https://www.linkedin.com/in/gaurav-pratap2631/"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <FontAwesomeIcon icon={faLinkedin} />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* HR and Finance */}
                <div
                  className={`tab-pane container fade ${
                    tabs == "aer-tab6" ? "show active" : ""
                  }`}
                  id={"aer-tab6"}
                >
                  <div className="col tab-content">
                    <div className="row">
                      <div className="col-md-3">
                        <div className="block1 wrap-pic-w team-card">
                          <img src="/images/team/sonal.png" alt="" />
                          <div className="fig-caption">
                            <div className="member-info">
                              <h4>
                                Sonal{" "}
                                <span className="d-block">Srivastava</span>
                              </h4>
                              <p>
                                <small>Human Resource Business Partner</small>
                              </p>
                            </div>
                            <div className="member-network">
                              <a href="https://www.linkedin.com/in/sonal-srivastava-3989b2179/">
                                <FontAwesomeIcon icon={faLinkedin} />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="block1 wrap-pic-w team-card">
                          <img src="/images/team/samriddhi.png" alt="" />
                          <div className="fig-caption">
                            <div className="member-info">
                              <h4>
                                Samridhi <span className="d-block">Kapoor</span>
                              </h4>
                              <p>
                                <small>Talent Acquisition Lead</small>
                              </p>
                            </div>
                            <div className="member-network">
                              <a href="https://www.linkedin.com/in/samridhi-kapoor-5606761aa/">
                                <FontAwesomeIcon icon={faLinkedin} />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="block1 wrap-pic-w team-card">
                          <img src="/images/team/S7401933-16.jpg" alt="" />
                          <div className="fig-caption">
                            <div className="member-info">
                              <h4>
                                Raj <span className="d-block">Kumar Jha</span>
                              </h4>
                              <p>
                                <small>Accountant</small>
                              </p>
                            </div>
                            <div className="member-network">
                              <a href="https://www.linkedin.com/in/jha-raj-187a83315/">
                                <FontAwesomeIcon icon={faLinkedin} />
                              </a>
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
    </div>
  );
}
