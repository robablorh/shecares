import React, { useState } from "react";
import Image1 from '/public/images/slider/img3.jpeg';
import Image2 from '/public/images/slider/image-1.jpeg';
import Image from "next/image";
import 'animate.css';
import Typewriter from 'typewriter-effect'; 


const Hero = () => {

    return (
        <section className="static-hero">
            <div className="hero-container">
                <div className="hero-inner">
                    <div className="container-fluid">
                        <div className="hero-content">
                            <div className="slide-title-sub">
                              
                            </div>
                            <div className="slide-title">

                                
                                <h2><Typewriter
                  onInit={(typewriter) => {
                    typewriter
                      .typeString("Empower Her")
                      .typeString(" <br/>Tomorrow")
                      .callFunction(() => {
                        console.log("String typed out!");
                      })
                      .pauseFor(2500)

                      .callFunction(() => {
                        console.log("All strings were deleted");
                      })
                      .start();
                  }}
                /></h2>
                            </div>
                            <div className="slide-text  animate__animated animate__fadeInUp">
                                <p> Together, let's break the barriers of menstruation 
                                 and brighten the future for girls everywhere..</p>
                            </div>
                            <div className="clearfix"></div>
                           
                            <div className="charius-pic">
                                <div className="charius-pic-main animate__animated animate__zoomIn ">
                                    <Image src={Image1} alt="img" />
                                </div>
                                <div className="charius-inner animate__animated animate__zoomIn">
                                    <Image src={Image2} alt="img" />
                                </div>

                               
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero;