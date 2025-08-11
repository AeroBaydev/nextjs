"use client"

import { useState, useRef, useEffect } from "react"
import schools from "../../../../data/schools" // Importing the schools data

const OurClient = () => {
  const [expanded, setExpanded] = useState(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [mounted, setMounted] = useState(false)
  const hoverTimeout = useRef()

  // Fix hydration by ensuring component is mounted
  useEffect(() => {
    setMounted(true)
  }, [])

  // Only show overlay when mouse is near the center of the logo
  const handleLogoMouseMove = (e, idx) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    const dist = Math.sqrt(Math.pow(e.clientX - centerX, 2) + Math.pow(e.clientY - centerY, 2))

    if (dist < 40) {
      clearTimeout(hoverTimeout.current)
      setExpanded(idx)
    } else {
      handleMouseLeave()
    }
  }

  const handleMouseLeave = () => {
    hoverTimeout.current = setTimeout(() => setExpanded(null), 120)
  }

  const handleOverlayEnter = () => clearTimeout(hoverTimeout.current)

  // Handle form opening
  const handleScheduleVisit = () => {
    // Replace # with your actual form link
    window.open("#", "_blank")
  }

  // Simple auto-slide effect - no animations, just change images
  useEffect(() => {
    if (expanded !== null && schools[expanded].gallery?.length > 0) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % schools[expanded].gallery.length)
      }, 1500) // Change image every 1.5 seconds

      return () => clearInterval(interval)
    }
  }, [expanded])

  // Reset image index when overlay opens
  useEffect(() => {
    if (expanded !== null) {
      setCurrentImageIndex(0)
    }
  }, [expanded])

  if (!mounted) {
    return null // Prevent hydration mismatch
  }

  return (
    <div className="page-main">
      <style jsx>{`
  .school-card-overlay {
    position: fixed;
    top: 0; 
    left: 0; 
    width: 100vw; 
    height: 100vh;
    background: rgba(0,0,0,0.7);
    backdrop-filter: blur(8px);
    z-index: 9999;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
    box-sizing: border-box;
  }
  .school-card {
    width: 100%;
    height: auto;
    max-width: min(1200px, 95vw);
    max-height: min(90vh, 800px);
    background: linear-gradient(135deg, #ffffff 0%, #f8faff 100%);
    border-radius: 24px;
    box-shadow: 0 25px 50px rgba(0,0,0,0.15);
    padding: 0;
    display: flex;
    gap: 0;
    align-items: stretch;
    position: relative;
    animation: slideUp 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    overflow: hidden;
    border: 1px solid rgba(255,255,255,0.2);
    margin: auto;
  }
  @keyframes slideUp {
    from { opacity: 0; transform: translateY(30px) scale(0.95);}
    to { opacity: 1; transform: translateY(0) scale(1);}
  }
  @keyframes float {
    0%, 100% { transform: translateY(0px) rotate(0deg); }
    50% { transform: translateY(-20px) rotate(180deg); }
  }
  @keyframes orbit {
    0% { transform: rotate(0deg) translateX(30px) rotate(0deg); }
    100% { transform: rotate(360deg) translateX(30px) rotate(-360deg); }
  }
  @keyframes pulse {
    0%, 100% { opacity: 0.3; transform: scale(1); }
    50% { opacity: 0.6; transform: scale(1.1); }
  }
  @keyframes drift {
    0%, 100% { transform: translateX(0px) translateY(0px); }
    25% { transform: translateX(20px) translateY(-15px); }
    50% { transform: translateX(-10px) translateY(-25px); }
    75% { transform: translateX(-20px) translateY(-10px); }
  }
  .info { 
    flex: 1.3; 
    display: flex; 
    flex-direction: column; 
    padding: 40px;
    background: linear-gradient(135deg, #6A4BFF 0%, #8B5FFF 50%, #A855F7 100%);
    color: white;
    position: relative;
    overflow: hidden;
    min-height: 0;
  }
  .info::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: radial-gradient(circle at 25% 25%, rgba(255,255,255,0.1) 1px, transparent 1px),
                     radial-gradient(circle at 75% 75%, rgba(255,255,255,0.1) 1px, transparent 1px);
    background-size: 50px 50px;
    opacity: 0.3;
    pointer-events: none;
  }
  .info > * {
    position: relative;
    z-index: 1;
  }
  .school-header {
    display: flex;
    align-items: center;
    gap: 20px;
    margin-bottom: 30px;
    padding-bottom: 25px;
    border-bottom: 1px solid rgba(255,255,255,0.2);
    flex-shrink: 0;
  }
  .school-logo { 
    width: 80px; 
    height: 80px; 
    border-radius: 20px; 
    object-fit: cover; 
    border: 3px solid rgba(255,255,255,0.3);
    box-shadow: 0 8px 25px rgba(0,0,0,0.2);
    background: white;
    padding: 8px;
    flex-shrink: 0;
  }
  .school-title {
    flex: 1;
    min-width: 0;
  }
  .school-name { 
    font-size: clamp(20px, 4vw, 28px); 
    font-weight: 800; 
    color: white;
    margin-bottom: 8px;
    line-height: 1.2;
    text-shadow: 0 2px 4px rgba(0,0,0,0.1);
    word-wrap: break-word;
  }
  .school-location { 
    font-size: clamp(14px, 3vw, 16px); 
    color: rgba(255,255,255,0.9); 
    font-weight: 600;
    margin-bottom: 4px;
  }
  .school-principal { 
    font-size: clamp(12px, 2.5vw, 14px); 
    color: rgba(255,255,255,0.8); 
    font-weight: 500;
  }
  .info-grid {
    display: grid;
    gap: 20px;
    margin-bottom: 30px;
    flex: 1;
    overflow-y: auto;
  }
  .info-card {
    background: rgba(255,255,255,0.15);
    backdrop-filter: blur(10px);
    border-radius: 16px;
    padding: 20px;
    border: 1px solid rgba(255,255,255,0.2);
    flex-shrink: 0;
  }
  .info-label { 
    font-weight: 700; 
    color: rgba(255,255,255,0.9);
    font-size: clamp(10px, 2vw, 12px);
    text-transform: uppercase;
    letter-spacing: 1px;
    margin-bottom: 8px;
  }
  .info-value { 
    font-size: clamp(14px, 3vw, 16px); 
    color: white; 
    font-weight: 600;
    line-height: 1.4;
    word-wrap: break-word;
  }
  .info-value a { 
    color: #FFE4B5; 
    text-decoration: none; 
    font-weight: 600;
    transition: all 0.3s ease;
  }
  .info-value a:hover { 
    color: #FFF8DC; 
    text-decoration: underline;
    text-shadow: 0 0 8px rgba(255,228,181,0.5);
  }
  .visit-button { 
    align-self: stretch;
    margin-top: auto;
    padding: 18px 32px; 
    background: linear-gradient(135deg, #FF6B6B 0%, #FF8E53 100%);
    color: white; 
    font-size: clamp(14px, 3vw, 16px); 
    border: none; 
    border-radius: 16px; 
    cursor: pointer; 
    text-decoration: none; 
    transition: all 0.3s ease; 
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    box-shadow: 0 8px 25px rgba(255,107,107,0.4);
    transform: translateY(0);
    text-align: center;
    position: relative;
    overflow: hidden;
    flex-shrink: 0;
  }
  .visit-button::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
    transition: left 0.5s;
  }
  .visit-button:hover::before {
    left: 100%;
  }
  .visit-button:hover { 
    transform: translateY(-3px);
    box-shadow: 0 12px 35px rgba(255,107,107,0.5);
  }
  .gallery {
    flex: 1.7;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    background: linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%);
    padding: 40px;
    overflow: hidden;
    min-height: 0;
  }
  .gallery::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      radial-gradient(circle at 20% 30%, rgba(106,75,255,0.1) 0%, transparent 50%),
      radial-gradient(circle at 80% 70%, rgba(168,85,247,0.1) 0%, transparent 50%),
      radial-gradient(circle at 50% 50%, rgba(59,130,246,0.05) 0%, transparent 50%);
    pointer-events: none;
  }
  .aerospace-bg {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    pointer-events: none;
    overflow: hidden;
  }
  .satellite {
    position: absolute;
    width: 20px;
    height: 20px;
    background: linear-gradient(45deg, #60A5FA, #3B82F6);
    border-radius: 50%;
    animation: orbit 20s linear infinite;
  }
  .satellite:nth-child(1) { top: 20%; left: 20%; animation-delay: 0s; }
  .satellite:nth-child(2) { top: 60%; right: 20%; animation-delay: -7s; }
  .satellite:nth-child(3) { bottom: 30%; left: 30%; animation-delay: -14s; }
  .rocket {
    position: absolute;
    width: 8px;
    height: 24px;
    background: linear-gradient(180deg, #F59E0B 0%, #EF4444 100%);
    border-radius: 4px 4px 0 0;
    animation: float 8s ease-in-out infinite;
  }
  .rocket:nth-child(4) { top: 15%; right: 15%; animation-delay: -2s; }
  .rocket:nth-child(5) { bottom: 20%; right: 40%; animation-delay: -5s; }
  .star {
    position: absolute;
    width: 4px;
    height: 4px;
    background: #FBBF24;
    border-radius: 50%;
    animation: pulse 3s ease-in-out infinite;
  }
  .star:nth-child(6) { top: 10%; left: 10%; animation-delay: 0s; }
  .star:nth-child(7) { top: 25%; right: 25%; animation-delay: -1s; }
  .star:nth-child(8) { bottom: 15%; left: 15%; animation-delay: -2s; }
  .star:nth-child(9) { bottom: 40%; right: 10%; animation-delay: -1.5s; }
  .planet {
    position: absolute;
    width: 30px;
    height: 30px;
    background: linear-gradient(135deg, #8B5CF6 0%, #A855F7 100%);
    border-radius: 50%;
    animation: drift 15s ease-in-out infinite;
  }
  .planet:nth-child(10) { top: 40%; left: 5%; animation-delay: -3s; }
  .planet:nth-child(11) { bottom: 25%; right: 5%; animation-delay: -8s; }
  .gallery-cell {
    width: 100%;
    height: 100%;
    max-height: 500px;
    background: rgba(255,255,255,0.05);
    backdrop-filter: blur(10px);
    border-radius: 20px;
    border: 1px solid rgba(255,255,255,0.1);
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    overflow: hidden;
    position: relative;
    box-shadow: 0 15px 35px rgba(0,0,0,0.3);
    z-index: 2;
  }
  .gallery-cell img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 20px;
    display: block;
  }
  .close-btn {
    position: absolute; 
    top: 15px; 
    right: 15px;
    background: rgba(255,255,255,0.9);
    backdrop-filter: blur(10px);
    border: none; 
    border-radius: 50%;
    width: 45px; 
    height: 45px; 
    font-size: 24px; 
    cursor: pointer;
    z-index: 10;
    transition: all 0.3s ease;
    color: #6A4BFF;
    font-weight: bold;
    box-shadow: 0 8px 25px rgba(0,0,0,0.15);
  }
  .close-btn:hover {
    background: rgba(255,255,255,1);
    transform: scale(1.1) rotate(90deg);
    box-shadow: 0 12px 35px rgba(0,0,0,0.2);
  }

  /* Tablet Landscape */
  @media (max-width: 1200px) {
    .school-card {
      max-width: 90vw;
      max-height: 85vh;
    }
    .info {
      padding: 35px;
    }
    .gallery {
      padding: 35px;
    }
  }

  /* Tablet Portrait */
  @media (max-width: 992px) {
    .school-card-overlay {
      padding: 15px;
    }
    .school-card { 
      flex-direction: column; 
      max-height: 90vh;
      overflow-y: auto;
      max-width: 95vw;
    }
    .info {
      padding: 30px;
      flex: none;
    }
    .gallery {
      padding: 30px;
      flex: none;
      min-height: 300px;
    }
    .gallery-cell { 
      height: 300px;
      max-height: none;
    }
    .school-header {
      margin-bottom: 25px;
      padding-bottom: 20px;
    }
  }

  /* Mobile Landscape */
  @media (max-width: 768px) {
    .school-card-overlay {
      padding: 10px;
    }
    .school-card {
      max-width: 98vw;
      max-height: 95vh;
      border-radius: 20px;
    }
    .info {
      padding: 25px;
    }
    .gallery {
      padding: 25px;
      min-height: 250px;
    }
    .gallery-cell {
      height: 250px;
    }
    .school-header {
      gap: 15px;
      margin-bottom: 20px;
    }
    .school-logo {
      width: 70px;
      height: 70px;
    }
    .info-grid {
      gap: 15px;
      margin-bottom: 25px;
    }
    .info-card {
      padding: 15px;
    }
    .visit-button {
      padding: 15px 25px;
    }
  }

  /* Mobile Portrait */
  @media (max-width: 576px) {
    .school-card-overlay {
      padding: 5px;
    }
    .school-card { 
      max-width: 100vw;
      max-height: 98vh;
      margin: 0;
      border-radius: 15px;
    }
    .info {
      padding: 20px;
    }
    .gallery {
      padding: 20px;
      min-height: 200px;
    }
    .gallery-cell { 
      height: 200px;
    }
    .school-header {
      flex-direction: column;
      text-align: center;
      gap: 12px;
      margin-bottom: 20px;
      padding-bottom: 15px;
    }
    .school-logo {
      width: 60px;
      height: 60px;
    }
    .info-grid {
      gap: 12px;
      margin-bottom: 20px;
    }
    .info-card {
      padding: 12px;
      border-radius: 12px;
    }
    .visit-button {
      padding: 12px 20px;
      border-radius: 12px;
    }
    .close-btn {
      top: 10px;
      right: 10px;
      width: 40px;
      height: 40px;
      font-size: 20px;
    }
  }

  /* Very Small Screens */
  @media (max-width: 400px) {
    .school-card {
      border-radius: 10px;
    }
    .info {
      padding: 15px;
    }
    .gallery {
      padding: 15px;
      min-height: 180px;
    }
    .gallery-cell {
      height: 180px;
      border-radius: 15px;
    }
    .school-header {
      margin-bottom: 15px;
      padding-bottom: 12px;
    }
    .info-grid {
      margin-bottom: 15px;
    }
    .close-btn {
      width: 35px;
      height: 35px;
      font-size: 18px;
    }
  }
`}</style>

      <section className="page_banner clients-banner bg-blk">
        <div className="container">
          <div className="row">
            <div className="col-md-10 mx-auto heading-section text-center">
              <div className="light_heading">Clients</div>
              <h1>Our Clients</h1>
              <p>
                Showcasing our valued partners in education. Browse through the schools we{"'"}ve collaborated with and
                see how our tailored solutions have supported their unique learning environments.
              </p>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-md-12 partners-list mt-5 mx-auto">
              <div className="row">
                {schools.map((school, idx) => (
                  <div className="col col-12 col-md-6 mb-4" key={school.name} style={{ cursor: "pointer" }}>
                    <div className="card-pr text-center" style={{ minHeight: 120 }}>
                      <div
                        className="client-fig"
                        onMouseMove={(e) => handleLogoMouseMove(e, idx)}
                        onMouseLeave={handleMouseLeave}
                      >
                        <img src={school.logo || "/placeholder.svg"} alt={school.name} />
                      </div>
                      <h4>{school.name}</h4>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Overlay Card */}
        {expanded !== null && (
          <div className="school-card-overlay" onMouseEnter={handleOverlayEnter} onMouseLeave={handleMouseLeave}>
            <div className="school-card">
              <button className="close-btn" onClick={() => setExpanded(null)} aria-label="Close">
                ×
              </button>

              {/* LEFT: Enhanced Info Section */}
              <div className="info">
                <div className="school-header">
                  <img src={schools[expanded].logo || "/placeholder.svg"} alt="School Logo" className="school-logo" />
                  <div className="school-title">
                    <div className="school-name">{schools[expanded].name}</div>
                    <div className="school-location">{schools[expanded].location}</div>
                    <div className="school-principal">
                      <strong>Principal:</strong> {schools[expanded].principal}
                    </div>
                  </div>
                </div>

                <div className="info-grid">
                  <div className="info-card">
                    <div className="info-label">AeroBay Program Year</div>
                    <div className="info-value">{schools[expanded].joined}</div>
                  </div>

                  <div className="info-card">
                    <div className="info-label">School Website</div>
                    <div className="info-value">
                      <a href={schools[expanded].website} target="_blank" rel="noopener noreferrer">
                        Visit Website →
                      </a>
                    </div>
                  </div>

                  <div className="info-card">
                    <div className="info-label">Testimonial</div>
                    <div className="info-value">
                      {schools[expanded].testimonial ||
                        "Collaborating with AeroBay has been a transformative experience for our educational programs."}
                    </div>
                  </div>
                </div>

                <button onClick={handleScheduleVisit} className="visit-button">
                  Schedule a School Visit
                </button>
              </div>

              {/* RIGHT: Aerospace-themed Gallery */}
              <div className="gallery">
                {/* Animated Aerospace Background */}
                <div className="aerospace-bg">
                  <div className="satellite"></div>
                  <div className="satellite"></div>
                  <div className="satellite"></div>
                  <div className="rocket"></div>
                  <div className="rocket"></div>
                  <div className="star"></div>
                  <div className="star"></div>
                  <div className="star"></div>
                  <div className="star"></div>
                  <div className="planet"></div>
                  <div className="planet"></div>
                </div>

                <div className="gallery-cell">
                  {schools[expanded].gallery?.length > 0 ? (
                    <img
                      src={schools[expanded].gallery[currentImageIndex] || "/placeholder.svg"}
                      alt={`${schools[expanded].name} Gallery ${currentImageIndex + 1}`}
                      onError={(e) => {
                        e.target.onerror = null
                        e.target.src = schools[expanded].logo || "/images/placeholder.png"
                      }}
                    />
                  ) : (
                    <img
                      src={schools[expanded].logo || "/placeholder.svg"}
                      alt={`${schools[expanded].name}`}
                      onError={(e) => {
                        e.target.onerror = null
                        e.target.src = "/images/placeholder.png"
                      }}
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </section>
    </div>
  )
}

export default OurClient
