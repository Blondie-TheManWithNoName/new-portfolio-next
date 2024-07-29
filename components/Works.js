import React, { useState, useRef, useEffect } from "react";
import styles from "../styles/work.module.scss";
import Work from "./Work";
import useScrollPosition from "../hooks/useScrollPosition";

import { FlatTree, motion } from "framer-motion";
import Sticky from "react-stickynode";

import house from "../public/images/logos/house.svg";
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

const logos = [house, logo1, logo2, logo3, logo4, logo5, logo6];
// const images = ["Theogony", "test2", "test3", "test4", "test5", "test6"];
const images = [
  { color1: "#46B861", color2: "#ffffff" },
  { color1: "#F97061", color2: "#ffffff" },
  { color1: "#46B861", color2: "#ffffff" },
  { color1: "#42617E", color2: "#7C68CD" },
  { color1: "#3967BA", color2: "#E45420" },
  { color1: "#F37363", color2: "#404A4F" },
];
// const logos = [logo1, logo2];

export default function Works() {
  const elRef = useRef(null);

  const [boundingTop, setBoundingTop] = useState(0);

  useEffect(() => {
    const updateBoundingTop = () => {
      if (elRef.current) {
        const rect = elRef.current.getBoundingClientRect();
        setBoundingTop(rect.top);
      }
    };

    // Initial update
    updateBoundingTop();

    // Update on scroll
    window.addEventListener("scroll", updateBoundingTop);

    return () => {
      window.removeEventListener("scroll", updateBoundingTop);
    };
  }, []);

  const variants = {
    hidden: { scale: 0.95 },
    visible: { scale: 1 },
  };

  const [imageSrc, setImageSrc] = useState(test2?.src);
  const [isAnimating, setIsAnimating] = useState(false);
  const [workIndex, setWorkIndex] = useState(0);
  const [fixed, setFixed] = useState(0);

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
      "path",
      window.getComputedStyle(elRef.current.children[id]).clipPath
    );
    console.log("comp", `circle(0% at 98% ${id * 10}%)`);
    // console.log(elRef.current.children[id].children[0]);
    window.getComputedStyle(elRef.current.children[id]).clipPath ==
    `circle(0% at 98% ${id * 10}%)`
      ? (elRef.current.children[id].style.clipPath = "circle(85%)")
      : (elRef.current.children[id].style.clipPath = `circle(0% at 98% ${
          id * 10
        }%)`);
  };

  const getRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };
  const scrollY = useScrollPosition();
  const handleStateChange = (status) => {
    if (status.status === Sticky.STATUS_FIXED) {
      console.log("FIXED", scrollY);
      setFixed(scrollY);
    } else {
      // changeVideo(id);
      setFixed(false);
    }
  };

  useEffect(() => {
    if (fixed) {
      // console.log("scroll", fixed, scrollY);
      if (scrollY - fixed >= 500 * (workIndex + 1)) {
        setWorkIndex(workIndex + 1);
      }
      if (scrollY - fixed < 500 * workIndex) {
        setWorkIndex(workIndex - 1);
      }
    }

    return () => {};
  }, [scrollY, fixed, workIndex]);

  return (
    <div className={styles.stickyContainer}>
      <Sticky
        top={0}
        onStateChange={handleStateChange}
        innerClass="workContainer"
        className="workContainer"
      >
        {/* <div className={styles.workContainer}> */}
        <div className={styles.title}>
          <h2>
            Theogony
            <span>Greek Gods Dynamic Family Tree</span>
          </h2>
        </div>
        {/* <div className={styles.videosContainer}> */}
        <video className={styles.video} muted loop autoPlay>
          <source src={`/videos/test-video-2.mp4`} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* <video className={styles.video} muted loop autoPlay>
            <source src={`/videos/test-video-1.mp4`} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div> */}
        <section className={styles.skills}>
          <img src="https://skillicons.dev/icons?i=git" />
          <img src="https://skillicons.dev/icons?i=javascript" />
          <img src="https://skillicons.dev/icons?i=html" />
          <img src="https://skillicons.dev/icons?i=css" />
          <img src="https://skillicons.dev/icons?i=nodejs" />
        </section>
        <div
          className={styles.logosContainer}
          style={{
            marginTop: `calc(52vh - ${5 * workIndex}rem)`,
          }}
        >
          {logos.map((logo, index) => (
            <div
              style={{
                backgroundColor: workIndex === index ? "#fff" : "#ccc",
                width: workIndex === index ? "6rem" : "4rem",
                height: workIndex === index ? "6rem" : "4rem",
              }}
            >
              <img src={logo?.src} alt="Project Logo" />
            </div>
          ))}
        </div>
      </Sticky>

      {/* </div> */}
      {/* <div className={styles.video} ref={elRef}>
        <div style={{ zIndex: 1 }} className={styles.workTitle}>
          <span>WORK</span>
        </div>
        {images.map((image, index) => (
          <div className={styles.overview}>
            <video muted loop autoPlay>
              <source
                src={`/videos/test-video-${index + 1}.mp4`}
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
        ))}
      </div> */}
    </div>
  );
}
