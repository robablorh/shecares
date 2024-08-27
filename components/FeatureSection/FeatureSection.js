import React from 'react';


const featuresData = [
    {
        iconClass: 'flaticon-volunteer',
        title: 'Become a volunteer',
        description: 'join young Ghanaian youth put a smile on these girls faces'
    },
  
    {
        iconClass: 'flaticon-charity',
        title: 'Start donating',
        description: 'No matter how little or much lets contribute '
    }
];


const FeatureSection = () => {
    return (
        <section className="wpo-features-area">
            <div className="container">
                <div className="features-wrap">
                    <div className="row">
                        {featuresData.map((feature, index) => (
                            <div className="col col-lg-6 col-md-6 col-12" key={index}>
                                <div className="feature-item-wrap animate__animated animate__fadeInUp">
                                    <div className="feature-item">
                                        <div className="feature-icon">
                                            <div className="icon">
                                                <i className={`fi ${feature.iconClass}`}></i>
                                            </div>
                                        </div>
                                        <div className="feature-text animate__animated animate__fadeInUp">
                                            <h2>{feature.title}</h2>
                                            <p>{feature.description}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )

}

export default FeatureSection;