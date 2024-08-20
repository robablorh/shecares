import React, { Fragment } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import PageTitle from '../../components/pagetitle/PageTitle'
import Scrollbar from '../../components/scrollbar/scrollbar'
import { useRouter } from 'next/router'
import blogs from '../../api/blogs'
import BlogSingle from '../../components/BlogDetails/BlogSingle.js'
import Footer from '../../components/footer/Footer';
import Logo from '/public/images/logo.svg'

const BlogDetails = () => {

    const router = useRouter()

    const BlogDetails = blogs.find(item => item.slug === router.query.slug)

    return (
        <Fragment>
            <Navbar Logo={Logo} hclass={'wpo-site-header-s5'} />
            <PageTitle pageTitle={BlogDetails?.title} pagesub={'Blog'} />
            <BlogSingle />
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};
export default BlogDetails;
