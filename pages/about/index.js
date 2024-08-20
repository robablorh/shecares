import React, { Fragment } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import PageTitle from '../../components/pagetitle/PageTitle'
import About from '../../components/about/about';
import CausesSecion from '../../components/CausesSecion/CausesSecion';
import ServiceSection from '../../components/ServiceSection/ServiceSection';
import CtaSection from '../../components/CtaSection/CtaSection';
import EventSection from '../../components/EventSection/EventSection';
import Footer from '../../components/footer/Footer';
import Scrollbar from '../../components/scrollbar/scrollbar'
import Logo from '/public/images/logo.svg'
import About2 from '../../components/about2/about2';

const AboutPage = () => {
    return (
        <Fragment>
            <Navbar Logo={Logo} hclass={'wpo-site-header-s5'} />
            <PageTitle pageTitle={'About Us'} pagesub={'About'} />
            <About2 />
          
            <ServiceSection />
            <CtaSection />
            <EventSection />
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};
export default AboutPage;
