import React, { Fragment } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import PageTitle from '../../components/pagetitle/PageTitle'
import GallerySection from '../../components/GallerySection/Gallerysection';

import Scrollbar from '../../components/scrollbar/scrollbar'
import Footer from '../../components/footer/Footer';
import Logo from '/public/images/logo.svg'



const GalleryPage = () => {
    return (
        <Fragment>
            <Navbar Logo={Logo} hclass={'wpo-site-header-s5'} />
            <PageTitle pageTitle={'Gallery'} pagesub={'Gallery'} />
            <GallerySection />
            <Footer />
            <Scrollbar />
        </Fragment>
    )
}

export default GalleryPage;


