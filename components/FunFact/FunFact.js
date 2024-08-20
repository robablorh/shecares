import React from 'react'
import CountUp from 'react-countup';

const FunFact = (props) => {
    return (
        <section className={" section-padding " + props.hclass}>
            <div className="container">
                <div className="fun-fact-wrap">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                            <div className="info">
                                <h3><span><CountUp end={26} enableScrollSpy /></span></h3>
                                <p> Schools visited
                                   </p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                            <div className="info">
                                <h3><span><CountUp end={4} enableScrollSpy />K</span></h3>
                                <p>Sanitary items shared
                                   </p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                            <div className="info">
                                <h3><span><CountUp end={3} enableScrollSpy /></span></h3>
                                <p>Regions in Ghana</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                            <div className="info">
                                <h3><span><CountUp end={2} enableScrollSpy /></span></h3>
                                <p>Years of
                                    Fund Raising</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FunFact;




