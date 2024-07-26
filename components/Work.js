import React, { useState, useRef, useEffect } from "react";
import styles from "../styles/work.module.scss";
import { motion } from "framer-motion";

export default function Work({
  img,
  name,
  overview,
  shift = 0,
  changeVideo,
  id,
}) {
  const elRef = useRef(null);
  const [isAnimating, setIsAnimating] = useState(false);

  const variants = {
    hidden: { scale: 0.95 },
    visible: { scale: 1 },
  };

  useEffect(() => {
    // console.log("elRef", elRef.current);

    return () => {};
  }, [elRef]);

  useEffect(() => {
    const handleScroll = () => {
      const el = elRef.current;
      if (el) {
        // console.log("elRef", elRef.current);
        const stickyTop = parseInt(window.getComputedStyle(el).top, 10);
        const marginTop = parseInt(window.getComputedStyle(el).marginTop, 10);
        const height = parseInt(window.getComputedStyle(el).height, 10);
        // console.log("stickyTop", stickyTop);
        const currentTop = el.getBoundingClientRect().top;
        console.log("stickyTop", stickyTop);
        console.log("marginTop", marginTop);
        console.log("currentTop", currentTop - 10);
        // console.log("currentTop", currentTop);
        if (currentTop - 10 * id < stickyTop) {
          // setIsAnimating(true);
          // setTimeout(() => {
          //   setIsAnimating(false);
          // }, 100);
          changeVideo(img);
        } // el.classList.toggle(styles.isSticky, currentTop === stickyTop);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <motion.div
      className={styles.workContainer}
      ref={elRef}
      key={name}
      // initial="visible"
      // animate={isAnimating ? "hidden" : "visible"}
      // variants={variants}
      // transition={{ duration: 0.2, ease: [0.34, 1.56, 0.64, 1] }}
    >
      <div className={styles.work}>
        {/* <div className={styles.container1}> */}
        <div className={styles.container}>
          <div className={styles.logoContainer}>
            <img src={img?.src} className={styles.logo} alt="Project Logo" />
            <p className={styles.title}>{name}</p>
          </div>
        </div>
      </div>
      <div className={styles.separator1}></div>
      <div className={styles.separator2}></div>
      <div className={styles.container1}>
        {/* <img
          src={overview?.src}
          className={styles.overview}
          alt="Project Image"
          style={{ marginTop: -shift + "%" }}
        /> */}
      </div>
      {/* </div> */}
    </motion.div>
  );
}
