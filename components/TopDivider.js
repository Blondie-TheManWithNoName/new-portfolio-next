import React, { useState, useEffect, useRef } from "react";
import styles from "../styles/carousell.module.scss";
import { useScroll, useTransform, motion } from "framer-motion";

export default function TopDivider({
  width,
  height,
  heightTop,
  heightBot,
  shadow,
  y,
  x,
}) {
  const topPath = `
              M0 50
              Q ${width / 2} ${heightTop.top} ${width} 50
              L ${width} ${1.75 * height}
              Q ${width / 2} ${1.75 * height + heightTop.bottom} 0 ${
    1.75 * height
  }
              Z
              `;

  const shadowPath = `
              M0 0
              Q ${width / 2} ${shadow.top - 50} ${width} 0
              L ${width} ${2 * height}
              Q ${width / 2} ${2 * height + shadow.bottom + 50} 0 ${2 * height}
              Z
              `;

  return (
    // <div className={styles.topDividerContainer}>
    <motion.div className={styles.topDividerContainer} style={y}>
      {/* <svg>
        <foreignObject clip-path="url(#mask)" width="100%" height="100%">
          {
            <video
              src="../videos/video-test-1.mp4"
              alt="Noah"
              className={styles.video}
              playsInline
              autoPlay
              muted
              loop
            />
          }
        </foreignObject>
      </svg> */}
      {/* <div className={styles.videos}>
        <video
          src="../videos/video-test-1.mp4"
          alt="Noah"
          className={styles.video}
          playsInline
          autoPlay
          muted
          loop
        /> */}
      {/* <video
          src="../videos/video-test-1.mp4"
          alt="Noah"
          className={styles.video}
          playsInline
          autoPlay
          muted
          loop
        />
        <video
          src="../videos/video-test-1.mp4"
          alt="Noah"
          className={styles.video}
          playsInline
          autoPlay
          muted
          loop
        /> */}
      {/* </div> */}
      {/* <div
        className={styles.videos}
        style={{ paddingRight: `${x}px`, marginTop: "5%" }}
      >
        <video
          src="../videos/video-test-1.mp4"
          alt="Noah"
          className={styles.video}
          playsInline
          autoPlay
          muted
          loop
        />
        <video
          src="../videos/video-test-1.mp4"
          alt="Noah"
          className={styles.video}
          playsInline
          autoPlay
          muted
          loop
        />
        <video
          src="../videos/video-test-1.mp4"
          alt="Noah"
          className={styles.video}
          playsInline
          autoPlay
          muted
          loop
        />
      </div> */}
    </motion.div>
    // </div>
  );
}
