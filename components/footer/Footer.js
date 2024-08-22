import Link from 'next/link'
import logo from '/public/images/logo.png'
import Services from '../../api/Services';
import Image from 'next/image';



const ClickHandler = () => {
    window.scrollTo(10, 0);
}


const Footer = (props) => {


    return (
        <footer className="wpo-site-footer">
            <div className="wpo-top-footer">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                            <div className="widget">
                                <div className="logo">
                                    <Link className="navbar-brand" href="/home">
                                        <Image  className=' logofoot' src={logo} alt="" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                            <div className="widget">
                                <div className="social">
                                    <ul>
                                        <li>
                                            <Link onClick={ClickHandler} href="/">
                                                <i className="fi flaticon-facebook-app-symbol"></i>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link onClick={ClickHandler} href="/">
                                                <i className="fi flaticon-twitter"></i>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link onClick={ClickHandler} href="/">
                                                <i className="fi flaticon-linkedin"></i>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link onClick={ClickHandler} href="https://www.instagram.com/theshecaresfoundation?igsh=YTNtcGl5OTUzY3U5">
                                                <i className="fi flaticon-instagram"></i>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="wpo-upper-footer">
                <div className="container">
                    <div className="row">
                        <div className="col col-lg-4 col-md-6 col-12 col-md-6 col-sm-12 col-12">
                            <div className="widget about-widget">
                                <div className="widget-title">
                                    <h3>She Cares Foundation</h3>
                                </div>
                                <p>Join us in bringing joy to young girls! Menstruation isn't a choice, but our support can make all the difference."</p>
                            </div>
                        </div>
                        <div className="col col-lg-3 col-md-6 col-12 col-md-6 col-sm-12 col-12">
                            <div className="widget link-widget">
                                <div className="widget-title">
                                    <h3>Quick Links</h3>
                                </div>
                                <ul>
                                    <li><Link onClick={ClickHandler} href="/home">Home</Link></li>
                                    <li><Link onClick={ClickHandler} href="/bout">About Us</Link></li>
                                    <li><Link onClick={ClickHandler} href="/service">Services</Link></li>
                                    <li><Link onClick={ClickHandler} href="/volunteer">Volunteer</Link></li>
                                   
                                </ul>
                            </div>
                        </div>
                       
                        <div className="col col-lg-3 col-md-6 col-12 col-md-6 col-sm-12 col-12">
                            <div className="widget newsletter-widget">
                                <div className="widget-title">
                                    <h3>Contact Us</h3>
                                </div>
                                
                                <ul className="info">
                                    <li><i className="flaticon-email"></i>shecaresfoundationgh@gmail.com</li>
                                    <li><i className="flaticon-telephone"></i> +(233) 572755340</li>
                                    <li><i className="flaticon-location"></i> Dansoman , Accra</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="wpo-lower-footer">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col col-lg-6 col-md-12 col-12">
                            <ul>
                                <li>&copy; 2024 <Link onClick={ClickHandler} href="/">She Cares Foundation</Link>. All rights reserved.Built by Roberta Ablorh (0249222031)</li>
                            </ul>
                        </div>
                        <div className="col col-lg-6 col-md-12 col-12">
                            <div className="link">
                                <ul>
                                
                                    <li><Link onClick={ClickHandler} href="/about">About us</Link></li>
                                    <li><Link onClick={ClickHandler} href="/gallery">Gallery</Link></li>
                                    <li><Link onClick={ClickHandler} href="/volunteer">Volunteer</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;




