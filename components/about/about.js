import React from "react";
import Link from "next/link";

import abImg2 from "/public/images/about/image.jpg";
import Image from "next/image";

const About = (props) => {
  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  return (
    <section className="wpo-about-section section-padding">
      <div className="container">
        <div className="wpo-about-wrap">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12 col-12">
              <div className="wpo-about-img">
                <div className="">
                  <Image src={abImg2} alt="img" />
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-12">
              <div className="wpo-about-text">
                <div className="wpo-section-title">
                  <h2>Empowering Young Girls, Enriching Communities</h2>
                </div>
                <p>
                  She Cares Foundation is dedicated to empowering young girls in
                  rural areas through education, health, and economic
                  empowerment. Our mission is to create a brighter future for
                  girls, free from barriers and limitations.Every contribution
                  counts, and together, we can make a difference in the lives of
                  these young girls. Let's Empower Together!
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
                      <p>To create a brighter <br/> future for
                  girls, free from barriers and limitations.</p>
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
                      <p>To ensure that all girls of  <br/>school age attend school without any hindrances</p>
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

export default About;
