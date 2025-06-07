import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faInstagram, faFacebook, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
const Footer = () => {
    return (<>  <footer className="footer">
        <div className="footer-top">
            <div className="container">
                <div className="col-12 form-tp">
                    <div className="row">
                        <div className="col-md-7">
                            <h4 className="text-uppercase">Only the good stuff! <span>we promise!</span></h4>
                        </div>
                        <div className="col-md-5">
                            <form className="subscribe_fm">
                                <input type="email" className="form-control" value="" placeholder="Your Email" required />
                                <button type="submit" className="btn btn-primary"><span class="outer-bx">Subscribe</span></button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="col-12 social">
                    <div className="row">
                        <ul className="social_links d-flex">
                            <li>
                                <a target="_blank" href="https://www.instagram.com/aero_bay?igsh=MW05OHVzOW9naGx0OQ%3D%3D&utm_source=qr">
                                    <FontAwesomeIcon icon={faInstagram} />
                                </a>
                            </li>
                            <li>
                                <a target="_blank" href="https://www.facebook.com/aviotronaerospace?mibextid=LQQJ4d">
                                    <FontAwesomeIcon icon={faFacebook} />
                                </a>
                            </li>
                            <li>
                                <a target="_blank" href="https://www.linkedin.com/company/aviotron-aerospace/">
                                    <FontAwesomeIcon icon={faLinkedin} />
                                </a>
                            </li>
                            <li>
                                <a target="_blank" href="https://youtube.com/@aerobaypodcast?si=vobd5gUxB0NJX_bD">
                                    <FontAwesomeIcon icon={faYoutube} />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div className="footer-middle mb-5">
            <div className="container">
                <div className="col-12">
                    <div className="row">
                        <div className="col-md-5">
                            <div className="card card-logo">
                                <img src="/images/ftr-logo.svg" alt="" />
                            </div>
                        </div>
                        <div className="col-md-7">
                            <div className="col-md-12 p-0 card ftr-card">
                                <div className="row">
                                    <div className="col-md-8">
                                        <p>‘AeroBay’ brand is owned and operated by Aviotron Aerospace Pvt Ltd. We are one of the fastest-growing companies in India and are focused on upskilling the next generation of Aviators, Designers, Scientists and much more. Our experiential learning solutions are adored by students, parents and educational institutions.</p>
                                        <div className="col-md-10 p-0 crd-btm-content">
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <h6>Phone</h6>
                                                    <ul className="list-inline">
                                                        <li>
                                                            <a href="tel:6378782207">
                                                                <FontAwesomeIcon icon={faPhone} /> +91 6378782207
                                                            </a>
                                                        </li>
														<li>
                                                            <a href="tel:9024770407">
                                                                <FontAwesomeIcon icon={faPhone} /> +91 9024770407
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="col-md-6">
                                                    <h6>Address</h6>
                                                    <p>D-64, D Block, Sector 63, Noida, Hazratpur Wajidpur, Uttar Pradesh 201301</p>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                    <div className="col-md-3 offset-md-1 ftr-combobx">
                                        <div className="cmb-wraps">
                                            <ul className="list-inline ftr-rtlist">
                                                <li><a href="#">Our story</a></li>
                                                <li><a href="#">Blog</a></li>
                                                <li><a href="#">Terms & conditions</a></li>
                                                <li><a href="#">Privacy policy</a></li>
                                            </ul>
                                            <div className="crd-btm-content2">
                                                <ul className="list-inline btm-list ">
                                                    <li>General Enquiry:</li>
                                                    <li><a href="mailto:info@aviotron.com">info@aviotron.com</a></li>
                                                </ul>
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
        <div className="footer-btm text-center">
            <div className="container">
                <p>©2024 Aviotron Aerospace Pvt. Ltd</p>
            </div>
        </div>
    </footer>
        {/* <!-- Back to top-- > */}
        <div className="btn-back-to-top" id="myBtn">
            <span className="symbol-btn-back-to-top">
                
				<FontAwesomeIcon icon={faChevronUp} />
            </span>
        </div>
    </>)
}
export default Footer;