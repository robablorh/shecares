import { useState } from 'react';
import Link from "next/link";
import icon from "/public/images/cta/top-icon.png";

const CtaSection3 = () => {
    const [showModal, setShowModal] = useState(false);

    const handleClick = () => {
        setShowModal(true);
    };

    const handleClose = () => {
        setShowModal(false);
    };

    return (
        <>
            <section className="wpo-cta-section-s3">
                <div className="container">
                    <div className="bg-color">
                        <div className="row justify-content-center">
                            <div className="col-lg-8">
                                <div className="cta-wrap">
                                    <div className="icon">
                                        <img src={icon} alt="" />
                                    </div>
                                    <span>Help us raise them up.</span>
                                    <h2>Your donation means a lot to them. Donate what you can.</h2>
                                    <button onClick={handleClick} className="theme-btn">Donate Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Modal */}
            {showModal && (
                <div className="modal show d-block" tabIndex="-1" role="dialog">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Donate Now</h5>
                                <button type="button" className="close" aria-label="Close" onClick={handleClose}>
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <p>Your donation makes a difference. Please proceed to the donation page.</p>
                            </div>
                            <div className="modal-footer">
                                <Link href="/donate" className="btn btn-primary" onClick={handleClose}>Proceed to Donate</Link>
                                <button type="button" className="btn btn-secondary" onClick={handleClose}>Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default CtaSection3;