"use client";
import { useEffect, useRef, useState } from "react";
import dynamic from 'next/dynamic';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { Navigation, Pagination, Autoplay } from 'swiper/modules'; // Import Swiper modules
import Link from "next/link";
import { fetchData, postData } from "@/lib/api";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


// Dynamically import OwlCarousel
const OwlCarousel = dynamic(() => import('react-owl-carousel'), {
  ssr: false,
});


const partnersData = [
  { img: "/images/partners/brand-1.png", },
  { img: "/images/partners/brand-2.png", },
  { img: "/images/partners/brand-3.png", },
  { img: "/images/partners/brand-4.png", },
  { img: "/images/partners/brand-5.png", },
  { img: "/images/partners/brand-6.png", },
  { img: "/images/partners/brand-7.png", },
];

const mediaData = [
  { img: "/images/media/1.jpg", },
  { img: "/images/media/2.jpg", },
  { img: "/images/media/3.jpg", },
  { img: "/images/media/4.jpg", },
  { img: "/images/media/5.jpg", },
  { img: "/images/media/6.jpg", },
  { img: "/images/media/7.jpg", },
  { img: "/images/media/8.jpg", },
  { img: "/images/media/9.jpg", },
  { img: "/images/media/10.jpg", },
  { img: "/images/media/11.jpg", },
  { img: "/images/media/12.jpg", },
  { img: "/images/media/13.jpg", },
  { img: "/images/media/14.jpg", },
  { img: "/images/media/15.jpg", },
  { img: "/images/media/16.jpg", },
  { img: "/images/media/17.jpg", },
  { img: "/images/media/18.jpg", },
  { img: "/images/media/19.jpg", },
  { img: "/images/media/20.jpg", },
  { img: "/images/media/21.jpg", },
  { img: "/images/media/22.jpg", },
  { img: "/images/media/23.jpg", },
  { img: "/images/media/24.jpg", },
  { img: "/images/media/25.jpg", },
  { img: "/images/media/26.jpg", },
  { img: "/images/media/27.jpg", },
  { img: "/images/media/28.jpg", },
  { img: "/images/media/29.jpg", },
  { img: "/images/media/30.jpg", },
  { img: "/images/media/31.jpg", },
];





const Slider = dynamic(() => import('@/components/slider/page'), { ssr: false });
export default function Home() {
  const [showModal, setShowModal] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState('student')
  const [activeThumb, setActiveThumb] = useState('');
  const [activeCard, setActiveCard] = useState(null);
  const [testimonialSlider, setTestimonialSlider] = useState({
    data: [],
    options: {
      spaceBetween: 30,
      slidesPerView: 3, // Shows 3 slides per view (default for larger screens)
      slidesPerGroup: 1, // Scroll 1 slide at a time
      loop: true, // Infinite looping
      autoplay: {
        delay: 5000, // Auto-slide every 5 seconds
        disableOnInteraction: false, // Continue autoplay even after interaction
      },
      pagination: {
        clickable: true, // Clickable pagination dots
      },
      navigation: true, // Enable navigation buttons
      speed: 300, // Transition speed
      breakpoints: {
        0: {
          slidesPerView: 1, // Show 1 slide on small screens (mobile)
          slidesPerGroup: 1, // Scroll 1 slide at a time
        },
        767: {
          slidesPerView: 1, // Show 1 slide on medium screens (tablet)
          slidesPerGroup: 1, // Scroll 1 slide at a time
        },
        991: {
          slidesPerView: 2, // Show 2 slides on larger screens (tablet)
          slidesPerGroup: 2, // Scroll 2 slides at a time
        },
        1200: {
          slidesPerView: 3, // Show 3 slides on full desktop
          slidesPerGroup: 3, // Scroll 3 slides at a time
        },
      },
      modules: [Navigation, Pagination, Autoplay], // Pass modules here
    }
  })




  const [youtubeData, setYoutubeData] = useState({
    data: [],
    options: {
      slidesPerView: 3, // Default for larger screens
      spaceBetween: 30,
      navigation: true, // Enable navigation buttons
      pagination: {
        clickable: true, // Enable pagination dots
      },
      autoplay: {
        delay: 5000, // Autoplay every 5 seconds
        disableOnInteraction: false, // Continue autoplay after user interaction
      },
      loop: true, // Enable infinite loop
      speed: 300, // Transition speed
      breakpoints: { // Responsive behavior
        0: {
          slidesPerView: 1, // Show 1 slide on small screens (mobile)
        },
        767: {
          slidesPerView: 1, // Show 1 slide on screens between 0px and 767px (tablet)
        },
        991: {
          slidesPerView: 2, // Show 2 slides on screens between 767px and 991px (tablet/desktop)
        },
        1200: {
          slidesPerView: 3, // Show 3 slides on larger screens (full desktop)
        },
      },
      modules: [Navigation, Pagination, Autoplay], // Enable Swiper modules
    }
  })




  const logoData = [
    { icon: "/images/small-ico1.svg", count: "17", title: "States" },
    { icon: "/images/small-ico2.svg", count: "100", title: "Schools" },
    { icon: "/images/small-ico3.svg", count: "20", title: "Students" },
  ];
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
  const showCard = (cardId) => {
    setActiveCard(cardId);
  };

  const hideCard = () => {
    setActiveCard(null);
  };
  const showAnyProduct = (thumbId) => {
    setActiveThumb(thumbId);
  };


  useEffect(() => {
    if (typeof window !== "undefined") {
      window.$ = window.jQuery = require('jquery');
    }
  }, []);
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(false); // Set to false to start with sound

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.muted = false; // Try to start unmuted
      video.play().catch((error) => {
        console.warn("Autoplay with sound blocked. Trying muted mode...", error);
        video.muted = true; // Fallback to muted autoplay
        video.play();
        setIsMuted(true); // Update state to reflect muted status
      });
    }
  }, []);

  // const handleToggleSound = () => {
  //   const video = videoRef.current;
  //   if (video) {
  //     video.muted = false;
  //     setIsMuted(false);
  //   }
  // };

  const handleToggleSound = () => {
    const video = videoRef.current;
    if (video) {
      video.muted = !video.muted;
      setIsMuted(video.muted);
    }
  };

  const getPodcastsTestimonial = () => {
    fetchData(`/testimonial?category=${'podcasts'}&page=1`)
      .then((json) => {
        setYoutubeData({ ...youtubeData, data: json.testimonials })
      })
      .catch((error) => console.error('Failed to load jobs', error));
  };

  const getTestimonial = () => {
    fetchData(`/testimonial?category=${activeTestimonial}&page=1`)
      .then((json) => {
        setTestimonialSlider({ ...testimonialSlider, data: json.testimonials })
      })
      .catch((error) => console.error('Failed to load jobs', error));
  };

  useEffect(() => {
    getTestimonial()
    getPodcastsTestimonial()
  }, [activeTestimonial])

  const CounterCard = ({ index, iconSrc, count, title }) => {
    const [counter, setCounter] = useState(0);
    const [ref, inView] = useInView({
      triggerOnce: true, // Count once when the component becomes visible
      threshold: 0.1,    // Adjust this value to control when the counter starts
    });

    useEffect(() => {
      if (inView) {
        let start = 0;
        const end = parseInt(count); // The final count
        if (start === end) return; // If already counted, do nothing
        let incrementTime = (15000 / end); // The duration of the count animation

        let timer = setInterval(() => {
          start += 1;
          setCounter(start);
          if (start === end) {
            clearInterval(timer);
          }
        }, incrementTime);
      }
    }, [inView, count]);

    return (
      <div className="col">
        <div className="card card-wrap">
          <div className="combo-box" ref={ref}>
            <div className="left-icon">
              <img src={iconSrc} alt={title} width={50} height={50} />
            </div>
            <div className="count-area-content percentage">
              <div className="count-digit">{counter}{index == 2 ? "K" : ""}</div>
              <h5 className="count-title">{title}</h5>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const [data, setData] = useState(null);
  useEffect(() => {
    fetchData('/users')
      .then((json) => setData(json))
      .catch((error) => console.error('Failed to load data', error));
  }, []);


  return (
    <main className="" >
      {/* <!-- ***** Main Banner Area Start ***** --> */}

      <section className="section main-banner" id="top" data-section="section1">
        <video
          ref={videoRef}
          autoPlay
          muted={isMuted}
          loop
          playsInline
          preload="auto"
          id="bg-video"
        >
          <source src="/videos/home-video.mp4" type="video/mp4" />
          <source src="/videos/home-video.webm" type="video/webm" />
          <source src="/videos/home-video.ogg" type="video/ogg" />
          Your browser does not support the video tag.
        </video>
        <div className="video-overlay header-text">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="caption">
                  <img src="/images/aerobay-figure.svg" className="img-fluid brand-figure" alt="" />
                  <div id="scroll-down-animation">
                    <a href="#featured">
                      <span className="mouse">
                        <span className="move"></span>
                      </span>
                    </a>
                  </div>
                  <button
                    className={`play-btn ${!isMuted ? "play-active" : ""}`}
                    onClick={handleToggleSound}
                  >
                    <span><span className="dot-1"></span><span className="dot-1 dt-2"></span><span className="dot-1 dt-3"></span><span className="dot-1 dt-4"></span></span>
                  </button>
                  {/* <button onClick={handlePlay} className="manual-play-btn">Play Video</button> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* <!-- ***** Main Banner Area End ***** --> */}
      < section id="featured" className=" section.our-facts bg-blk" >
        <div className="container">
          <div className="row">
            <div className="col-lg-12 heading-section text-center">
              <h2>What Is AeroBay?</h2>
              <p>Revolutionizing K–12 Education through STEAM Solutions</p>
            </div>
          </div>
        </div>
        <div className="container-fluid fig-big p-0">
          <img
            src="/images/feature-img.png"
            className="visible-sml w-100"
            alt=""
          />
          <div className={`w-100 col global-box d-none-sml ${activeCard ? " current" : " "}`}>
            <video autoPlay muted loop id="bg-video" className="bg-cld">
              <source src="/videos/bg-cloud.mp4" type="video/mp4" />
            </video>
            <div className="container">
              <div className="rounded-elipse">
                {/** Repeat this block for each planet-box */}
                {[...Array(7)].map((_, i) => {
                  const cardId = `card${i + 1}`;
                  return (
                    <Link key={cardId}
                      href="/more/education"
                    >
                      <div
                        className={`planet-${i + 1} planet-box`}
                        onMouseEnter={() => showCard(cardId)}
                        onMouseLeave={() => hideCard()}
                      >
                        <div className="fig-planet">
                          <img
                            src={`/images/hmsect-global/${i + 1}.png`}
                            alt=""

                          />
                        </div>
                        <img
                          className="fig-helper"
                          src={`/images/hmsect-global/${i + 1}-helper.png`}
                          alt=""

                        />
                        <div className={`crd-box crd-box${i + 1}`}>
                          <img
                            className="card-fig"
                            src={`/images/hmsect-global/card-fig${i + 1}.png`}
                            alt=""
                          />
                          <div className="card">
                            <h5>{['STEAM Trainer', 'Certifications', 'Customized Curriculum', 'Analytics & LMS', 'Competitions', 'Composite Skill Lab Setup', 'Individual AeroBay Kit'][i]}</h5>
                            <p>{[
                              'Qualified Aerospace Engineer and STEAM Trainer',
                              'Certificates provided to all AeroBay enrolled students of your school issued by STEM.org & AMAI.in',
                              'Customized for all age groups Integrated with CBSC/ICSE',
                              'Detailed student progress reports',
                              'National/International Aeromodeling and Space Competitions',
                              'Industrial Grade Labs with Tunnel, Satellite, 3D Printer, CNC Machine, Weather Station and much more.',
                              'Curated to provide concept based experiential learning'
                            ][i]}</p>
                          </div>
                        </div>
                      </div>
                    </Link>
                  );
                })}
                <div className="vid-card">
                  <img
                    className="sun-orbit"
                    src="/images/hmsect-global/sun.gif"
                    alt="Sun Orbit"
                  />
                  <img
                    className="orbit-logo"
                    src="/images/hmsect-global/logo-orbit.gif"
                    alt="Orbit Logo"

                  />
                </div>
              </div>
            </div>
            <div className="hover-cards" >
              {[...Array(7)].map((_, i) => (
                <div
                  key={`card${i + 1}`}
                  id={`card${i + 1}`}
                  className="card-img"
                  style={{ display: activeCard === `card${i + 1}` ? 'block' : 'none' }}
                >
                  {/* Add card content here */}
                </div>
              ))}
            </div>
          </div>
          <Link href="/aerobay-for-school" className="btn more-btn">
            <span className="outer-bx">
              KNOW MORE <span>&#129109;</span>
            </span></Link>
        </div>
        <div className="container">
          <div className="col-lg-12 mx-auto counter-box">
            <div className="row percentage">
              {logoData.map((item, index) => (
                <CounterCard
                  key={index}
                  index={index}
                  iconSrc={item.icon}
                  count={item.count}
                  title={item.title}
                />
              ))}
            </div>
          </div>
        </div>
        {/* <div className="container">
          <div className="col-lg-12 mx-auto counter-box">
            <div className="row">
              <div className="col">
                <div className="card card-wrap">
                  <div className="combo-box">
                    <div className="left-icon">
                      <img
                        src="/images/small-ico1.svg"
                        alt=""
                        width={50}
                        height={50}
                      />
                    </div>
                    <div className="count-area-content percentage">
                      <div className="count-digit">17</div>
                      <h5 className="count-title">States</h5>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card card-wrap">
                  <div className="combo-box">
                    <div className="left-icon">
                      <img
                        src="/images/small-ico2.svg"
                        alt=""
                        width={50}
                        height={50}
                      />
                    </div>
                    <div className="count-area-content percentage">
                      <div className="count-digit">100</div>
                      <h5 className="count-title">Schools</h5>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card card-wrap">
                  <div className="combo-box counter-last">
                    <div className="left-icon">
                      <img
                        src="/images/small-ico3.svg"
                        alt=""
                        width={50}
                        height={50}
                      />
                    </div>
                    <div className="count-area-content percentage">
                      <div className="count-digit">20</div>
                      <h5 className="count-title">Students</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </section >

      <section className="whyus-section bg-blk">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 heading-section text-center">
              <h2>Why We Stand Out?</h2>
              <h3>STRENGTH</h3>
            </div>
          </div>
        </div>

        <div className={`container-fluid flow-wrap ${activeThumb ? " whole-fix " : " "}`}>
          <div className="container p-0">
            <div className="base-wrap">
              {/** Thumbnails */}
              <div
                className={`thumbnl items ${activeThumb == "thumb1" ? " show-card " : " "}`}
                onMouseEnter={() => showAnyProduct('thumb1')}
                onMouseLeave={() => showAnyProduct('')}
                style={{ gridColumn: 'span 2', gridRow: 'span 4', display: 'block', alignItems: 'center', justifyContent: 'center' }}
              >
                <figure className="story-img-mob">
                  <img src="/images/gallery-1.png" alt="" />
                </figure>
                <div className="story tile-first1" style={{ backgroundColor: 'rgba(0, 0, 0, 0.85)' }}>
                  <h3 style={{ color: '#fff' }}>
                    <span style={{ color: 'yellow' }}>NEP 2020</span> {' '} Framework-aligned Experimental Learning Ecosystem for your school.

                  </h3>
                </div>
              </div>
              <div
                className={`thumbnl items ${activeThumb == "thumb2" ? " show-card " : " "}`}
                onMouseEnter={() => showAnyProduct('thumb2')}
                onMouseLeave={() => showAnyProduct('')}
                style={{ gridColumn: 'span 2', gridRow: 'span 3', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
              >
                <figure className="story-img-mob">
                  <img src="/images/gallery-2.png" alt="" />
                </figure>
                <div className="story tile-first1" style={{ backgroundColor: 'rgba(0, 0, 0, 0.85)' }}>
                  <h3 style={{ color: '#fff' }}>
                    <span style={{ color: 'yellow' }}>Curriculum, Kits, Activities</span> {' '} and lab set-up cater to all Grades 1st-12th, so you can empower early learning as well.
                  </h3>
                </div>
              </div>

              <div
                className={`thumbnl items ${activeThumb == "thumb3" ? " show-card " : " "}`}
                onMouseEnter={() => showAnyProduct('thumb3')}
                onMouseLeave={() => showAnyProduct('')}
                style={{ gridColumn: 'span 2', gridRow: 'span 4', display: 'block', alignItems: 'center', justifyContent: 'center' }}
              >
                <figure className="story-img-mob">
                  <img src="/images/gallery-3.png" alt="" />
                </figure>
                <div className="story tile-first1" style={{ backgroundColor: 'rgba(0, 0, 0, 0.85)' }}>
                  <h3 style={{ color: '#fff' }}>
                    A pathway to STEAM and career guidance with an increased focus on <span style={{ color: 'yellow' }}>enterpreneurship</span> from 6th grade and above.
                  </h3>
                </div>
              </div>
              <div
                className={`thumbnl items ${activeThumb == "thumb4" ? " show-card " : " "}`}
                onMouseEnter={() => showAnyProduct('thumb4')}
                onMouseLeave={() => showAnyProduct('')}
                style={{ gridColumn: 'span 2', gridRow: 'span 4', display: 'block', alignItems: 'center', justifyContent: 'center' }}
              >
                <figure className="story-img-mob">
                  <img src="/images/gallery-4.png" alt="" />
                </figure>
                <div className="story tile-first1" style={{ backgroundColor: 'rgba(0, 0, 0, 0.85)' }}>
                  <h3 style={{ color: '#fff' }}>
                    Single vendor and platform to access all National and International competitions from{' '}
                    <span style={{ color: 'yellow' }}>NASA, ISRO, Airbus, Samsung, and much more.</span>
                  </h3>
                </div>
              </div>
              <div
                className={`thumbnl items ${activeThumb == "thumb5" ? " show-card " : " "}`}
                onMouseEnter={() => showAnyProduct('thumb5')}
                onMouseLeave={() => showAnyProduct('')}
                style={{ gridColumn: 'span 2', gridRow: 'span 4', display: 'block', alignItems: 'center', justifyContent: 'center' }}
              >
                <figure className="story-img-mob">
                  <img src="/images/gallery-5.png" alt="" />
                </figure>
                <div className="story tile-first1" style={{ backgroundColor: 'rgba(0, 0, 0, 0.85)' }}>

                  <h3 style={{ color: '#fff' }}>
                    A program focusing on the <span style={{ color: 'yellow' }}>21st-century skills</span> along with holistic student development rather than just Robotics and Coding.
                  </h3>
                </div>
              </div>
              <div
                className={`thumbnl items ${activeThumb == "thumb6" ? " show-card " : " "}`}
                onMouseEnter={() => showAnyProduct('thumb6')}
                onMouseLeave={() => showAnyProduct('')}
                style={{ gridColumn: 'span 2', gridRow: 'span 4', display: 'block', alignItems: 'center', justifyContent: 'center' }}
              >
                <figure className="story-img-mob">
                  <img src="/images/gallery-6.png" alt="" />
                </figure>
                <div className="story tile-first1" style={{ backgroundColor: 'rgba(0, 0, 0, 0.85)' }}>
                  <h3 style={{ color: '#fff' }}>
                    A program ensuring complete hand-holding to achive  <span style={{ color: 'yellow' }}>guarnteed outcomes</span> customized for each board and each class.
                  </h3>
                </div>
              </div>
              {/** Repeat this block for other thumbnails with `onMouseEnter` for thumb2 to thumb6 */}

              {/* Add other thumbnails similarly */}
            </div>
          </div>

          <div className="container flow-hidden-new">
            <div className="col-lg-10 mx-auto">
              <div className="row">
                {['thumb1', 'thumb2', 'thumb3', 'thumb4', 'thumb5', 'thumb6'].map((thumb) => (
                  <div
                    key={thumb}
                    className={`story-img ${activeThumb === thumb ? ' active ' : ''}`}
                    id={thumb}
                    style={{
                      backgroundImage: `url('/images/gallery-big${thumb.replace('thumb', '')}.jpg')`,
                      display: activeThumb === thumb ? 'block' : 'none'
                    }}
                  ></div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <Link href="/aerobay-for-school" className="btn more-btn">
          <span className="outer-bx">
            KNOW MORE <span>→</span>
          </span>
        </Link>
      </section>


      <section className="ourclients-section bg-blk">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 heading-section text-center">
              <h2>Our Clients</h2>
              <h3>Partners</h3>
            </div>
          </div>
        </div>
        <div className="container gal-wrappers p-0">
          <div className="col-lg-12 mx-auto client-list">
            <div className="row">
              <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={20}
                slidesPerView={3}
                breakpoints={{
                  320: { slidesPerView: 2 },
                  768: { slidesPerView: 3 },
                  1024: { slidesPerView: 5 },
                }}
                // navigation
                // pagination={{ clickable: true }}
                autoplay={{ delay: 2000 }}
                loop={true}
                className="partnersSwiper"
              >
                {partnersData.map((item, index) => (
                  <SwiperSlide key={index}>
                    <img src={item.img} alt={`partner ${index + 1}`} />
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* <div className="ourclients-items">

                <div className="item">
                  <img src="/images/partners/brand-1.png" alt="" />
                </div>
                <div className="item">
                  <img src="/images/partners/brand-2.png" alt="" />
                </div>
                <div className="item">
                  <img src="/images/partners/brand-3.png" alt="" />
                </div>
                <div className="item">
                  <img src="/images/partners/brand-4.png" alt="" />
                </div>
                <div className="item">
                  <img src="/images/partners/brand-5.png" alt="" />
                </div>
                <div className="item">
                  <img src="/images/partners/brand-6.png" alt="" />
                </div>
                <div className="item">
                  <img src="/images/partners/brand-7.png" alt="" />
                </div>
                <div className="item">
                  <img src="/images/partners/brand-8.png" alt="" />
                </div>
                <div className="item">
                  <img src="/images/partners/brand-9.png" alt="" />
                </div>
                </div> */}

            </div>
          </div>
        </div>
      </section>

      <section className="ourclients-section media-pre bg-blk">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 heading-section text-center">
              <h2>Media Presence</h2>
              <h3>Visibility</h3>
            </div>
          </div>
        </div>
        <div className="container gal-wrappers gal-wrappers2 p-0">
          <div className="col-lg-12 mx-auto client-list">
            <div className="row" dir="rtl">
              <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={20}
                slidesPerView={3}
                breakpoints={{
                  320: { slidesPerView: 2 },
                  768: { slidesPerView: 3 },
                  1024: { slidesPerView: 5 },
                }}
                // navigation
                // pagination={{ clickable: true }}
                autoplay={{ delay: 2000 }}
                loop={true}

                className="mediaSwiper"
              >
                {mediaData.map((item, index) => (
                  <SwiperSlide key={index}>
                    <img src={item.img} alt={`partner ${index + 1}`} />
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* <div className="ourclients-items ourclients-items">
                <div className="item">
                  <img src="/images/media/1.jpg" alt="" />
                </div>
                <div className="item">
                  <img src="/images/media/2.jpg" alt="" />
                </div>
                <div className="item">
                  <img src="/images/media/3.jpg" alt="" />
                </div>
                <div className="item">
                  <img src="/images/media/4.jpg" alt="" />
                </div>
                <div className="item">
                  <img src="/images/media/5.jpg" alt="" />
                </div>
                <div className="item">
                  <img src="/images/media/6.jpg" alt="" />
                </div>
                <div className="item">
                  <img src="/images/media/7.jpg" alt="" />
                </div>
                <div className="item">
                  <img src="/images/media/8.jpg" alt="" />
                </div>
                <div className="item">
                  <img src="/images/media/9.jpg" alt="" />
                </div>
                <div className="item">
                  <img src="/images/media/10.jpg" alt="" />
                </div>
                <div className="item">
                  <img src="/images/media/11.jpg" alt="" />
                </div>
                <div className="item">
                  <img src="/images/media/12.jpg" alt="" />
                </div>
                <div className="item">
                  <img src="/images/media/13.jpg" alt="" />
                </div>
                <div className="item">
                  <img src="/images/media/14.jpg" alt="" />
                </div>
                <div className="item">
                  <img src="/images/media/15.jpg" alt="" />
                </div>
                <div className="item">
                  <img src="/images/media/16.jpg" alt="" />
                </div>
                <div className="item">
                  <img src="/images/media/17.jpg" alt="" />
                </div>
                <div className="item">
                  <img src="/images/media/18.jpg" alt="" />
                </div>
                <div className="item">
                  <img src="/images/media/19.jpg" alt="" />
                </div>
                <div className="item">
                  <img src="/images/media/20.jpg" alt="" />
                </div>
                <div className="item">
                  <img src="/images/media/21.jpg" alt="" />
                </div>
                <div className="item">
                  <img src="/images/media/22.jpg" alt="" />
                </div>
                <div className="item">
                  <img src="/images/media/23.jpg" alt="" />
                </div>
                <div className="item">
                  <img src="/images/media/24.jpg" alt="" />
                </div>
                <div className="item">
                  <img src="/images/media/25.jpg" alt="" />
                </div>
                <div className="item">
                  <img src="/images/media/26.jpg" alt="" />
                </div>
                <div className="item">
                  <img src="/images/media/27.jpg" alt="" />
                </div>
                <div className="item">
                  <img src="/images/media/28.jpg" alt="" />
                </div>
                <div className="item">
                  <img src="/images/media/29.jpg" alt="" />
                </div>
                <div className="item">
                  <img src="/images/media/30.jpg" alt="" />
                </div>
                <div className="item">
                  <img src="/images/media/31.jpg" alt="" />
                </div>
                <div className="item">
                  <img src="/images/media/32.jpg" alt="" />
                </div>
                <div className="item">
                  <img src="/images/media/33.jpg" alt="" />
                </div>
                <div className="item">
                  <img src="/images/media/34.jpg" alt="" />
                </div>
                <div className="item">
                  <img src="/images/media/35.jpg" alt="" />
                </div>
                <div className="item">
                  <img src="/images/media/36.jpg" alt="" />
                </div>
                <div className="item">
                  <img src="/images/media/37.jpg" alt="" />
                </div>
                <div className="item">
                  <img src="/images/media/38.jpg" alt="" />
                </div>
                <div className="item">
                  <img src="/images/media/39.jpg" alt="" />
                </div>
                <div className="item">
                  <img src="/images/media/40.jpg" alt="" />
                </div>
                <div className="item">
                  <img src="/images/media/41.jpg" alt="" />
                </div>
                <div className="item">
                  <img src="/images/media/42.jpg" alt="" />
                </div>
                <div className="item">
                  <img src="/images/media/43.jpg" alt="" />
                </div>
                <div className="item">
                  <img src="/images/media/44.jpg" alt="" />
                </div>
                <div className="item">
                  <img src="/images/media/45.jpg" alt="" />
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </section>

      <section className="testimonial-section bg-blk">
        <div className="container">
          <div className="col-lg-12 heading-sect">
            <div className="row">
              <div className="col-lg-4">
                <h2 className="text-uppercase">TESTIMONIALS</h2>
              </div>
              <div className="col-lg-8">
                <ul className="nav nav-tabs justify-content-end">
                  <li className="nav-item" ><a className={`nav-link ${activeTestimonial == "student" ? "active" : ""} `} data-bs-toggle="tab" onClick={() => setActiveTestimonial("student")}  >Students</a></li>
                  <li className="nav-item"><a className={`nav-link ${activeTestimonial == "parents" ? "active" : ""} `} data-bs-toggle="tab" onClick={() => setActiveTestimonial("parents")}  >Parents</a></li>
                  <li className="nav-item"><a className={`nav-link ${activeTestimonial == "educators" ? "active" : ""} `} data-bs-toggle="tab" onClick={() => setActiveTestimonial("educators")}  >Educators</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid sliders-wrapper">
          <div className="tab-content">
            <div className={`tab-pane  fade  ${activeTestimonial == "student" ? "active show" : " "} `} id={"aer-tab1"} >
              <Slider data={testimonialSlider.data} options={testimonialSlider.options} style={"iframe"} />
            </div>
            <div className={`tab-pane  fade  ${activeTestimonial == "parents" ? "active show" : " "} `} id={"aer-tab2"} >
              <Slider data={testimonialSlider.data} options={testimonialSlider.options} style={"iframe"} />
            </div>
            <div className={`tab-pane  fade  ${activeTestimonial == "educators" ? "active show" : " "} `} id={"aer-tab3"} >
              <Slider data={testimonialSlider.data} options={testimonialSlider.options} style={"iframe"} />
            </div>
          </div>
        </div>
      </section>

      <section className="testimonial-section podcast-sect bg-blk">
        <div className="container">
          <div className="col-lg-12 heading-sect">
            <div className="row">
              <div className="col-md-4">
                <h2 className="text-uppercase">PODCASTS</h2>
              </div>
            </div>
          </div>
        </div>
        <Slider data={youtubeData.data} options={youtubeData.options} style={"iframe"} />
      </section>

      <section className="contact_us">
        <div className="container">
          <div className="row">
            <div className="col-md-12 p-0">
              <div className="row">
                <div className="col-md-4">
                  <div className="col-lg-12 p-0 text-center">
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
                <div className="col-md-6 offset-md-2">
                  <img src="/images/solar-system.jpg" alt="" className="img-fluid w-100" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section >
    </main >
  );
}
