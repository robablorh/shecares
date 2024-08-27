import React from "react";
import Instagram from "../../api/Instagram";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";
import instImg1 from "../../public/images/instragram/gal40.jpg";
import instImg3 from "../../public/images/instragram/gal41.jpg";
import instImg4 from "../../public/images/instragram/gal43.jpg";
import instImg5 from "../../public/images/instragram/gal61.jpg";
import instImg6 from "../../public/images/instragram/gal62.jpg";
import instImg7 from "../../public/images/instragram/gal63.jpg";
import instImg8 from "../../public/images/instragram/gal64.jpg";
import instImg9 from "../../public/images/instragram/gal65.jpg";
import instImg10 from "../../public/images/instragram/gal66.jpg";
import instImg11 from "../../public/images/instragram/gal63.jpg";
import instImg12 from "../../public/images/instragram/gal68.jpg";
import instImg13 from "../../public/images/instragram/gal69.jpg";
import instImg14 from "../../public/images/instragram/gal70.jpg";
import instImg15 from "../../public/images/instragram/gaal1.jpeg";
import instImg16 from "../../public/images/instragram/gaal2.jpeg";
import instImg17 from "../../public/images/instragram/gaal3.jpeg";
import instImg18 from "../../public/images/instragram/gaal4.jpeg";
import instImg19 from "../../public/images/instragram/gaal5.jpeg";
import instImg20 from "../../public/images/instragram/gaal6.jpeg";
import instImg21 from "../../public/images/instragram/gaal7.jpeg";
import instImg22 from "../../public/images/instragram/gaal8.jpeg";
import instImg23 from "../../public/images/instragram/gaal9.jpeg";
import instImg24 from "../../public/images/instragram/gaal10.jpeg";
import instImg25 from "../../public/images/instragram/gaal11.jpeg";
import instImg26 from "../../public/images/instragram/gaal12.jpeg";
import instImg27 from "../../public/images/instragram/gaal13.jpeg";
import instImg28 from "../../public/images/instragram/gaal14.jpeg";
import instImg29 from "../../public/images/instragram/gaal15.jpeg";
import instImg30 from "../../public/images/instragram/gaal16.jpeg";
import instImg31 from "../../public/images/instragram/gaal17.jpeg";
import instImg32 from "../../public/images/instragram/gaal18.jpeg";
import instImg33 from "../../public/images/instragram/gaal19.jpeg";
import instImg34 from "../../public/images/instragram/gaal20.jpeg";
import instImg35 from "../../public/images/instragram/gaal21.jpeg";
import instImg36 from "../../public/images/instragram/gaal22.jpeg";
import instImg37 from "../../public/images/instragram/gaal23.jpeg";
import instImg38 from "../../public/images/instragram/gaal24.jpeg";
import instImg39 from "../../public/images/instragram/gaal25.jpeg";
import instImg40 from "../../public/images/instragram/gaal26.jpeg";

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
  instImg15,
  instImg16,
  instImg17,
  instImg18,
  instImg19,
  instImg20,
  instImg21,
  instImg22,
  instImg23,
  instImg24,
  instImg26,
  instImg25,
  instImg27,
  instImg28,
  instImg29,
  instImg30,
  instImg31,
  instImg32,
  instImg33,
  instImg34,
  instImg35,
  instImg36,
  instImg37,
  instImg38,
  instImg39,
  instImg40,
];

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
                <div className="instagram-card">
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
  );
};

export default GallerySection;
