import Link from "next/link";
import { useState, useEffect } from "react";
import Image from "next/image";

const NavBar = () => {
    const [showModal, setShowModal] = useState(false);
    const [showMenu, setShowMenu] = useState(false);
    const [showAbout, setShowAbout] = useState(false);
    const [showMore, setShowMore] = useState(false);
    const [lastScroll, setLastScroll] = useState(0);
    const [isBackgroundHeader, setIsBackgroundHeader] = useState(false);

    useEffect(() => {
        // Check if the modal has been shown before in localStorage
        const hasSeenModal = localStorage.getItem('hasSeenModal');

        // If not, show the modal and set the flag in localStorage
        if (!hasSeenModal) {
            setTimeout(() => {
                setShowModal(true);
                localStorage.setItem('hasSeenModal', 'true');
            }, 8000);
        }
    }, []);

    const handleOpenModal = () => setShowModal(true);
    const handleCloseModal = () => setShowModal(false);
    const handleOpenMenu = () => setShowMenu(!showMenu);


    useEffect(() => {
        const handleScroll = () => {
            const scroll = window.scrollY;

            if (lastScroll - scroll > 0) {
                setIsBackgroundHeader(true);
            } else {
                setIsBackgroundHeader(false);
            }

            setLastScroll(scroll);

            // Remove background if scrolled to the top
            if (scroll === 0) {
                setIsBackgroundHeader(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScroll]);

    return (
        <header className={`header-area header-sticky ${isBackgroundHeader ? 'background-header' : ''}`} >
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <nav className="main-nav">
                            {/* <!-- ***** Logo Start ***** --> */}
                            <Link href="/" className="logo">
                                <img className="logo-base" src="/images/logo.png" alt="Aerobay" />
                                <img className="logo-hover" src="/images/logo-hover.png" alt="Aerobay" />
                            </Link>
                            {/* <!-- ***** Menu Start ***** --> */}
                            <ul className="nav" style={showMenu ? { display: "block" } : { display: "none" }}>
                                <li className={`has-sub ${showAbout ? "is-open-sub" : ""}`} onClick={() => setShowAbout(!showAbout)}>
                                    <a href="javascript:void(0)">About us</a>
                                    <ul className="sub-menu" style={showAbout ? { display: "block" } : { display: "none" }}>
                                        <li>
                                            <Link href="/about/the-aerobay-story">
                                                The aerobay story
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/about/meet-the-visionaries">
                                                Meet the visionaries
                                            </Link>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <Link href="/aerobay-for-school">
                                        Aerobay for schools
                                    </Link>
                                </li>
                                <li className="scroll-to-section">
                                    <Link href="/careers">
                                        Careers
                                    </Link>
                                </li>
                                <li className="scroll-to-section">
                                    <Link href="/get-in-touch">
                                        Get in touch
                                    </Link>
                                </li>
                                <li className={`has-sub ${showMore ? "is-open-sub" : ""}`} onClick={() => setShowMore(!showMore)}>
                                    <a href="javascript:void(0)">More</a>
                                    <ul className="sub-menu" style={showMore ? { display: "block" } : { display: "none" }}>
                                        <li><Link href="/more/our-clients">
                                            Our Clients
                                        </Link></li>
                                        <li><Link href="/more/education">
                                            What’s new in education
                                        </Link></li>
                                    </ul>
                                </li>
                            </ul>
                            <div className="right-link">
                                <a href="http://lms.aerobay.in" target="_blank" style={{ cursor: "pointer", color: "white" }} >LMS <span><svg fill="#fff" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
  <polygon points="7 7 15.586 7 5.293 17.293 6.707 18.707 17 8.414 17 17 19 17 19 5 7 5 7 7"/>
</svg></span></a>
                            </div>
                            <a className={`menu-trigger ${showMenu && "active"}`} onClick={handleOpenMenu}>
                                <span>Menu</span>
                            </a>
                            {/* <!-- ***** Menu End ***** --> */}
                        </nav>
                    </div>
                </div>
            </div>
            <div className={`modal fade contact_mdl ${showModal ? "show" : ""}`} id="contactModal" tabIndex="-1" style={showModal ? { display: "block" } : { display: "none" }} aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-xl">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={handleCloseModal}></button>
                        </div>
                        <div className="modal-body">
                            <div className="container-fluid">
                                <div className="row">
                                    <div class="col-md-8 p-l-4 p-r-4 left-colmn">
                                        <h2><img src="assets/images/heading-helper.png" alt="" /> COMPOSITE SKILL LAB <img src="assets/images/heading-helper.png" alt="" /> </h2>
                                        <p><strong>Establishment of Composite Skill Labs:</strong> CBSE has mandated all affiliated schools to establish a {"'"}Composite Skill Lab{"'"} with the necessary equipment and machinery to implement the recommendations of the NEP 2020 and NCF-SE. Schools can set up either one lab of 600 sq. ft. for classes VI–XII or two separate labs of 400 sq. ft. each, one for classes VI–X and another for classes XI–XII. Vocational training centers in schools are crucial for providing the necessary resources for hands-on learning experiences and effective skill development.</p>
                                        <p><strong>Implementation Timeline:</strong> Schools seeking fresh affiliation with CBSE must have a Composite Skill Lab as a mandatory requirement. Schools already affiliated with CBSE must set up the lab within three years from the date of this circular.</p>
                                        <p><strong>Focus on Skill Education:</strong> The National Education Policy (NEP) 2020 and the National Curriculum Framework for School Education (NCF-SE) emphasize enhancing skill education by integrating skill subjects as a mandatory part of the curriculum from class VI onwards.</p>
                                        <p><strong>Real-World Engagement:</strong> Schools are required to provide opportunities for students to engage in practical, real-world tasks and projects related to their chosen skills. This is essential to bridge the gap between theory and practice.</p>
                                        <p><strong>Skill Subject Offerings:</strong> Schools that already offer skill subjects are encouraged to expand the options available to students. Those that do not yet offer any skill subjects are advised to introduce at least one skill subject.</p>
                                        <p class="footr-links">  <Link href="/more/education" onClick={handleCloseModal}>Revolutionizing Education with Composite Skill Labs</Link> <Link href="https://www.cbse.gov.in/cbsenew/documents/75_Circular_2024_Composite_Skill_Labs_27082024.pdf">
                                            <button className="btn btn-primary know-btn"><span className="outer-bx">Know more</span></button>
                                        </Link></p>
                                    </div>
                                    <div className="col-md-4">
                                        <p className="text-center"><img className="logo-blue" src="assets/images/aero-blue-logo.svg" alt="" /></p>
                                        <h4>Only the good <br />stuff, <span>we promise</span></h4>
                                        <form id="contact_form" className="contact_form w-100">
                                            <div className="form-outline mb-3">
                                                <label className="form-label">Email address</label>
                                                <input type="email" id="email_ad" placeholder="me@company.com" className="form-control" />
                                            </div>
                                            <div className="form-outline mb-3">
                                                <label className="form-label">Contact No.</label>
                                                <input type="text" className="form-control" placeholder="+91 XXX XXX XXXX" />
                                            </div>
                                            <div className="form-outline mb-3">
                                                <button type="button" className="btn btn-primary btn-Subsc">Subscribe</button>
                                            </div>
                                            <div className="form-outline">
                                                <a href="#" data-bs-dismiss="modal">Thank you, I already Subscribed</a>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default NavBar;
