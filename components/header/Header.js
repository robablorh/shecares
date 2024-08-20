import React from 'react'
import Link from 'next/link'
import MobileMenu from '../MobileMenu/MobileMenu'
import HeaderSearchForm from '../HeaderSearchForm/HeaderSearchForm';
import HeaderProfileForm from '../HeaderProfileForm/HeaderProfileForm';
import logo from '/public/images/logo.png'
import Image from 'next/image';

const Header = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <header id="header">
            <div className={"wpo-site-header " + props.hclass}>
                <nav className="navigation navbar navbar-expand-lg navbar-light">
                    <div className="container-fluid">
                        <div className="row align-items-center">
                            <div className="col-lg-3 col-md-3 col-3 d-lg-none dl-block">
                                <MobileMenu />
                            </div>
                            <div className="col-lg-3 col-md-5 col-6">
                                <div className="navbar-header">
                                    <Link onClick={ClickHandler} className="navbar-brand" href="/"><Image src={logo}
                                        alt="logo" /></Link>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-1 col-1">
                                <div id="navbar" className="collapse navbar-collapse navigation-holder">
                                    <ul className="nav navbar-nav mb-2 mb-lg-0">
                                        <li className="menu-item-has-children">
                                            <Link onClick={ClickHandler} href="/">Home</Link>
                                           
                                        </li>
                                        <li className="menu-item-has-children">
                                            <Link onClick={ClickHandler} href="/about">About</Link>
                                          
                                        </li>
                                     
                                        <li className="menu-item-has-children">
                                            <Link onClick={ClickHandler} href="/volunteer">Volunteer</Link>
                                           
                                        </li>
                                        <li className="menu-item-has-children">
                                            <Link onClick={ClickHandler} href="/gallery">Gallery</Link>
                                           
                                        </li>
                                        <li><Link onClick={ClickHandler} href="/contact">Contact</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3 col-2">
                                <div className="header-right">
                                    
                                    <div className="close-form">
                                        <Link onClick={ClickHandler} className="theme-btn" href="/donate">
                                            <span className="mobile">
                                                <i className="fi fa fa-heart"></i>
                                            </span>
                                            <span className="text">Donate Now</span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default Header;


