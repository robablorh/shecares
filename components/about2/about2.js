import React from "react";
import Link from "next/link";

import abImg2 from "/public/images/about/ceo.jpeg";
import Image from "next/image";

const About2 = (props) => {
  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  return (
    <section className="wpo-about-section section-padding">
      <div className="container">
        <div className="wpo-about-wrap">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12 col-12">
              <div className="">
                <div className="wpo-about-img">
                  <Image src={abImg2} alt="img" />
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-12">
              <div className="wpo-about-text">
                <div className="wpo-section-title">
                  <h2>Pearl Yayra Dodoo Founder, The She Cares Foundation</h2>
                </div>
                <p>
                  Pearl Yayra Dodoo is a passionate philanthropist dedicated to
                  improving the reproductive health and wellbeing of young girls
                  in rural Ghana. Through her organization, The She Cares
                  Foundation, she provides vital education, resources, and
                  support to empower girls to make informed decisions about
                  their bodies and futures. With a focus on community-based
                  initiatives and collaborative partnerships, Pearl's work aims
                  to break down barriers and promote gender equality, ultimately
                  shaping a brighter future for generations to come.
                </p>

                <div className="about-info-wrap">
                  <div className="about-info-item">
                    <div className="about-info-icon">
                      <div className="icon">
                        <i className="fi flaticon-target"></i>
                      </div>
                    </div>
                    <div className="about-info-text">
                      <h4>Our Mission</h4>
                      <p>
                        To create a brighter <br /> future for girls, free from
                        barriers and limitations.
                      </p>
                    </div>
                  </div>
                  <div className="about-info-item">
                    <div className="about-info-icon">
                      <div className="icon">
                        <i className="fi flaticon-mountain"></i>
                      </div>
                    </div>
                    <div className="about-info-text">
                      <h4>Our Vision</h4>
                      <p>
                        To ensure that all girls of <br />
                        school age attend school without any hindrances
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About2;
