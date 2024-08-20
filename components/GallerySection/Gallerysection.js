import React from "react";
import Instagram from "../../api/Instagram";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";
import instImg1 from "../../public/images/instragram/gal40.jpg"
import instImg3 from "../../public/images/instragram/gal41.jpg"
import instImg4 from "../../public/images/instragram/gal42.jpg"
import instImg5 from "../../public/images/instragram/gal5.jpg"
import instImg6 from "../../public/images/instragram/gal6.jpg"
import instImg7 from "../../public/images/instragram/gal7.jpg"
import instImg8 from "../../public/images/instragram/gal13.jpg"
import instImg9 from "../../public/images/instragram/gal16.jpg"
import instImg10 from "../../public/images/instragram/gal8.jpg"
import instImg11 from "../../public/images/instragram/gal20.jpg"
import instImg12 from "../../public/images/instragram/gal11.jpg"
import instImg13 from "../../public/images/instragram/gal14.jpg"
import instImg14 from "../../public/images/instragram/gal17.jpg"
import instImg15 from "../../public/images/instragram/gal18.jpg"




const images = [
    instImg1,
    instImg3,
    instImg4,
    instImg5,
    instImg6,
    instImg7,
    instImg8,
    instImg9,
    instImg10,
    instImg11,
    instImg12,
    instImg13,
    instImg14,
    instImg15
   
 
]


const GallerySection = () => {

    const imageSizes = [16, 32, 48, 64, 96, 128, 256, 384];
    const deviceSizes = [640, 750, 828, 1080, 1200, 1920, 2048, 3840];

    function nextImageUrl(src, size) {
        return `/_next/image?url=${encodeURIComponent(src)}&w=${size}&q=75`;
    }

    const slides = images.map(({ src, width, height }) => ({
        width,
        height,
        src: nextImageUrl(src, width),
        srcSet: imageSizes
            .concat(...deviceSizes)
            .filter((size) => size <= width)
            .map((size) => ({
                src: nextImageUrl(src, size),
                width: size,
                height: Math.round((height / width) * size),
            })),
    }));

    const [open, setOpen] = React.useState(false);

    return (
        <section className="wpo-instagram-section s2 section-padding">
            <div className="container">
                <div className="instagram-wrap">
                    <div className="row">
                        {Instagram.map((item) => (
                            <div className="col col-lg-4 col-md-6 col-12" key={item.id}>
                                <div className="instagram-card" >
                                    <div className="image">
                                        <Image
                                            src={item.imag}
                                            alt={`Instagram ${item.id}`}
                                            className="img img-responsive"
                                        />
                                        <div className="popup-icon" onClick={() => setOpen(true)}>
                                            <i className="ti-plus"></i>
                                        </div>
                                    </div>
                                   
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Lightbox
                open={open}
                close={() => setOpen(false)}
                slides={slides}
                plugins={[Zoom]}
            />
        </section>
    )
}

export default GallerySection;