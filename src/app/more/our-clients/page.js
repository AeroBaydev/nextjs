"use client"

import schools from "../../../../data/schools"

const OurClient = () => {
  return (
    <div className="page-main">
      <style jsx>{`
        .client-card {
          margin-bottom: 35px;
          text-align: center;
        }

        .client-logo-frame {
          width: 190px;
          height: 190px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto;
          background: #fff;
          border: solid 3px #ccc;
          border-radius: 50%;
          overflow: hidden;
          box-shadow: 5px 5px rgb(151, 71, 255);
        }

        .client-logo-frame img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          display: block;
          border-radius: 50%;
          padding: 18px;
          transition: all 0.5s ease 0s;
        }

        .client-card:hover img {
          transform: scale(0.97);
          border: solid 10px #fff;
        }

        .client-name {
          font-size: 18px;
          color: #eee;
          margin: 15px 0 4px;
          line-height: 1.3;
        }

        .client-location {
          min-height: 20px;
          color: rgba(255, 255, 255, 0.7);
          font-size: 14px;
          line-height: 1.35;
          margin: 0;
        }

        @media (max-width: 576px) {
          .client-logo-frame {
            width: 110px;
            height: 110px;
          }

          .client-logo-frame img {
            padding: 12px;
          }

          .client-name {
            font-size: 15px;
          }

          .client-location {
            font-size: 13px;
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
          <div className="partners-list mx-auto">
            <div className="row justify-content-center">
              {schools.map((school) => (
                <div className="col col-6 col-sm-4 col-md-3 col-lg-2" key={school.logo}>
                  <div className="client-card">
                    <div className="client-logo-frame">
                      <img src={school.logo} alt={school.name} loading="lazy" />
                    </div>
                    <h4 className="client-name">{school.name}</h4>
                    {school.location ? <p className="client-location">{school.location}</p> : null}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default OurClient
