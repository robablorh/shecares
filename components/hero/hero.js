import React, { useState } from "react";
import Image1 from '/public/images/slider/img3.jpeg';
import Image2 from '/public/images/slider/img5.jpeg';
import Image from "next/image";


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
                                <h2>"Empower Her Tomorrow"</h2>
                            </div>
                            <div className="slide-text">
                                <p> Together, let's break the barriers of menstruation 
                                 and brighten the future for girls everywhere..</p>
                            </div>
                            <div className="clearfix"></div>
                           
                            <div className="charius-pic">
                                <div className="charius-pic-main">
                                    <Image src={Image1} alt="img" />
                                </div>
                                <div className="charius-inner">
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