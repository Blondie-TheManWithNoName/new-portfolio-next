import React, { useState, useRef, useEffect } from "react";
import styles from "../styles/work.module.scss";
import Work from "./Work";
import { FlatTree, motion } from "framer-motion";

import logo1 from "../public/images/logos/theogony.svg";
import logo2 from "../public/images/logos/es_recader.svg";
import logo3 from "../public/images/logos/theogony_api.svg";
import logo4 from "../public/images/logos/kenken.svg";
import logo5 from "../public/images/logos/snake_two.svg";
import logo6 from "../public/images/logos/cards.svg";

// import test2 from "../public/images/test-pic-2.jpg";
import test1 from "../public/images/test-pic-3.jpg";
import test2 from "../public/images/test-pic-2.jpg";
import test3 from "../public/images/test-pic-3.jpg";
import test4 from "../public/images/test-pic-2.jpg";
import test5 from "../public/images/test-pic-3.jpg";
import test6 from "../public/images/test-pic-2.jpg";

// import video from "../public/images/test-video-1.mp4";

const logos = [logo1, logo2, logo3, logo4, logo5, logo6];
const images = ["Theogony", "test2", "test3", "test4", "test5", "test6"];
// const logos = [logo1, logo2];

export default function Works() {
  const elRef = useRef(null);

  const variants = {
    hidden: { scale: 0.95 },
    visible: { scale: 1 },
  };

  const [imageSrc, setImageSrc] = useState(test2?.src);
  const [isAnimating, setIsAnimating] = useState(false);

  var currentImg = undefined;

  useEffect(() => {
    // console.log("imageSrc changed", imageSrc);

    return () => {};
  }, [imageSrc]);

  const changeVideo = (id) => {
    // window.getComputedStyle(elRef.current.children[id]).opacity == 1
    //   ? (elRef.current.children[id].style.opacity = 0)
    //   : (elRef.current.children[id].style.opacity = 1);

    // elRef.current.children[id].style.opacity = 0;
    console.log(
      window.getComputedStyle(elRef.current.children[id].children[0])
        .clipPath == "circle(5% at 50% 85%)"
    );
    // console.log(elRef.current.children[id].children[0]);
    window.getComputedStyle(elRef.current.children[id]).clipPath ==
    "circle(0% at 50% 85%)"
      ? (elRef.current.children[id].style.clipPath = "circle(85%)")
      : (elRef.current.children[id].style.clipPath = "circle(0% at 50% 85%)");
  };

  return (
    <div>
      <div className={styles.video} ref={elRef}>
        {/* <div className={styles.overview}> */}
        <div style={{ zIndex: 1 }} className={styles.workTitle}>
          {/* <div
            style={{
              height: "10rem",
              width: "100%",
              backgroundColor: "red",
              position: "absolute",
              top: "65%",
            }}
          ></div> */}
          <span className={styles.gradientText}>WORK</span>
        </div>
        {/* </div> */}
        {images.map((image, index) => (
          <div
            className={styles.overview}
            style={{
              clipPath: "circle(0% at 50% 85%)",
              backgroundImage: `linear-gradient(${
                (index + 1) * (index + 1) * 12 + 45
              }deg, rgba(175,66,97,1) 0%, rgba(0,134,209,1) 100%)`,
            }}
          >
            {/* <video src={video}></video> */}
            <video muted loop autoPlay>
              <source
                src={`/videos/test-video-${index + 1}.mp4`}
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
            <div>
              <h1 className={styles.title}>{image}</h1>
            </div>
            <div className={styles.container}>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Fugiat, molestiae amet! Quam minus sit beatae, neque ea eligendi
                dolorem eum id iusto, ad praesentium aperiam itaque possimus
                tempore corporis exercitationem!
              </p>
            </div>

            {/* <img
              priority={true}
              src={image.src}
              alt="Project Image"
              style={{ zIndex: index + 2 }}
            /> */}
          </div>
        ))}
      </div>
      {logos.map((logo, index) => (
        <div>
          <Work img={logo} changeVideo={changeVideo} id={index + 1} />
          <div style={{ height: "50vh" }}></div>
        </div>
      ))}
    </div>
  );
}
