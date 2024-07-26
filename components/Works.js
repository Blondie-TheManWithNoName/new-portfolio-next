import React, { useState, useRef, useEffect } from "react";
import styles from "../styles/work.module.scss";
import Work from "./Work";
import { motion } from "framer-motion";

import snake from "../public/images/logos/snake_two.svg";
import recader from "../public/images/logos/es_recader.svg";
import kenken from "../public/images/logos/kenken.svg";
import cards from "../public/images/logos/cards.svg";
import theogony from "../public/images/logos/theogony.svg";
import theogonyAPI from "../public/images/logos/theogony_api.svg";

import test1 from "../public/images/test-pic.jpg";
// import test2 from "../public/images/test-pic-2.jpg";
import test2 from "../public/images/test-pic-2.png";
import test3 from "../public/images/test-pic-3.jpg";
import test4 from "../public/images/test-pic-4.jpg";
import test5 from "../public/images/test-pic-5.jpg";
import test6 from "../public/images/test-pic-6.jpg";

export default function Works() {
  const elRef = useRef(null);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     console.log("elRef", elRef);
  //     const el = elRef.current;
  //     if (el) {
  //       const stickyTop = parseInt(window.getComputedStyle(el).top, 10);
  //       console.log("stickyTop", stickyTop);
  //       const currentTop = el.getBoundingClientRect().top;
  //       console.log("currentTop", currentTop);

  //       el.classList.toggle(styles.isSticky, currentTop === stickyTop);
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   // Cleanup the event listener on component unmount
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  const variants = {
    hidden: { scale: 0.95 },
    visible: { scale: 1 },
  };

  const [imageSrc, setImageSrc] = useState(test2?.src);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    console.log("imageSrc changed", imageSrc);

    return () => {};
  }, [imageSrc]);

  const changeVideo = (img) => {
    setImageSrc((prevSrc) => {
      if (prevSrc !== img?.src) {
        setIsAnimating(true);
        setTimeout(() => {
          setImageSrc(img.src);
          setIsAnimating(false);
        }, 100); // Duration of the fade-out animation
      } else {
        // setImageSrc(test2?.src); // Change back to test2.src without animation
      }
      return prevSrc;
    });
  };
  return (
    // <div style={{ position: "relative", height: "200vh" }}>
    <div className={styles.works}>
      <div className={styles.video}>
        <motion.img
          src={imageSrc}
          className={styles.overview}
          alt="Project Image"
          ref={elRef}
          initial="visible"
          animate={isAnimating ? "hidden" : "visible"}
          variants={variants}
          transition={{ duration: 0.2, ease: [0.34, 1.56, 0.64, 1] }}
        />
      </div>
      {/* </div> */}
      {/* <div className={styles.video2}> */}
      <Work
        img={theogony}
        name={"Theogony"}
        overview={test1}
        shift={65}
        changeVideo={changeVideo}
        id={2}
      />
      <Work
        img={recader}
        name="es Recader"
        overview={test2}
        shift={10}
        changeVideo={changeVideo}
        id={1}
      />
      {/* <Work
        img={theogonyAPI}
        name="Theogony API"
        overview={test4}
        shift={35}
        changeVideo={changeVideo}
      />
      <Work
        img={kenken}
        name="Ken Ken"
        overview={test3}
        shift={25}
        changeVideo={changeVideo}
      />
      <Work
        img={snake}
        name="Snake II"
        overview={test6}
        shift={30}
        changeVideo={changeVideo}
      />
      <Work
        img={cards}
        name="Card Mat"
        overview={test5}
        shift={10}
        changeVideo={changeVideo}
      /> */}
      {/* </div> */}
    </div>
  );
}
