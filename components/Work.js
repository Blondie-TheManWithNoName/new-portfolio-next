import React, { useState, useRef, useEffect } from "react";
import styles from "../styles/work.module.scss";
import Sticky from "react-stickynode";
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

  const handleStateChange = (status) => {
    if (status.status === Sticky.STATUS_FIXED) {
      changeVideo(id);
    } else if (status.status === Sticky.STATUS_ORIGINAL) {
      changeVideo(id);
    }
  };
  return (
    <Sticky
      onStateChange={handleStateChange}
      top={id * 85}
      innerActiveClass="stickyContainer"
      className="stickyContainer"
    >
      <motion.div
        className={styles.workContainer}
        // initial="visible"
        // animate={isAnimating ? "hidden" : "visible"}
        // variants={variants}
        // transition={{ duration: 0.2, ease: [0.34, 1.56, 0.64, 1] }}
      >
        <div className={styles.work}>
          {/* <div className={styles.container1}> */}
          {/* <div className={styles.container}> */}
          {/* <div className={styles.logoContainer}> */}
          <img src={img?.src} className={styles.logo} alt="Project Logo" />
          {/* <p className={styles.title}>{name}</p> */}
          {/* </div> */}
          {/* </div> */}
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
    </Sticky>
  );
}
