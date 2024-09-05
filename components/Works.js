import React, { useState, useRef, useEffect } from "react";
import styles from "../styles/work.module.scss";
import intro from "../styles/intro.module.scss";
import ParallaxImage from "./ParallaxImage";
import useScrollPosition from "../hooks/useScrollPosition";
import useWindowSize from "../hooks/useWIndowSize";

import classnames from "classnames";
import { useRouter } from "next/router";

import { motion } from "framer-motion";
import Sticky from "react-stickynode";
import { logos, backgrounds, titles, skills, videos } from "../assets/assets";

export default function Works({ setShowBall }) {
  const [workIndex, setWorkIndex] = useState(0);
  const [fixed, setFixed] = useState(0);
  const [scrollLocked, setScrollLocked] = useState(false);
  const [out, setOut] = useState(false);
  const { width, height } = useWindowSize();
  const HEIGHT = height * 3; // CHECK
  const router = useRouter();
  const workTop = height * 1.9;
  const scrollY = useScrollPosition();

  const handleFocus = (index) => {
    setWorkIndex(index);
  };

  useEffect(() => {
    if (scrollY >= workTop && fixed !== workTop) {
      setFixed(workTop);
    }
    if (scrollY < workTop) {
      setFixed(0);
      setOut(false);
    }
    if (scrollY >= HEIGHT * logos.length + height * 0.9) {
      setFixed(0);
      setOut(true);
    }
  }, [scrollY]);

  useEffect(() => {
    // console.log("hola", scrollY - fixed, ">=", HEIGHT * (workIndex + 1));
    if (fixed) {
      if (
        scrollY - fixed >= HEIGHT * (workIndex + 1) &&
        scrollY - fixed < HEIGHT * (workIndex + 2) &&
        !scrollLocked
      ) {
        console.log("");
        setWorkIndex(workIndex + 1);
      }
      if (
        scrollY - fixed < HEIGHT * workIndex &&
        scrollY - fixed >= HEIGHT * (workIndex - 1) &&
        !scrollLocked
      ) {
        setWorkIndex(workIndex - 1);
      }
    }

    return () => {};
  }, [scrollY, fixed, workIndex, scrollLocked]);

  const handleKeyDown = (index, event) => {
    if (event.key === "Enter") {
      event.preventDefault(); // Prevent the default action
      router.push(titles[index].page); // Trigger the click handler
    }
  };
  const container = useRef();

  return (
    <div
      className={styles.stickyContainer}
      style={{ height: HEIGHT * logos.length }}
    >
      {/* <Sticky
        top={0}
        onStateChange={handleStateChange}
        innerClass="workContainer"
        className="workContainer"
      > */}
      <div
        className={styles.workContainer}
        style={{
          position: fixed ? "fixed" : out ? "absolute" : "relative",
          ...(out && { bottom: 0 }),
          ...(fixed && { top: 0 }),
        }}
      >
        <div className={styles.backgroundWrapper}>
          <div
            className={styles.backgroundContainer}
            style={{
              top: `-${100 * workIndex}%`,
            }}
          >
            {backgrounds.map((background, index) => (
              <div className={styles.background}>
                {fixed && (
                  <ParallaxImage
                    key={index}
                    path={background.path}
                    fixedPositions={background.background}
                    className={background.className}
                    startOffset={fixed + index * HEIGHT}
                    endOffset={fixed + (index + 1) * HEIGHT}
                    move={-800}
                  />
                )}
                {fixed && background.background2 && (
                  <ParallaxImage
                    key={`${index}-2`}
                    path={background.path}
                    fixedPositions={background.background2}
                    className={background.className}
                    startOffset={fixed + index * HEIGHT}
                    endOffset={fixed + (index + 1) * HEIGHT}
                    move={-500}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
        <div className={styles.titleWrapper}>
          <div
            className={styles.title}
            style={{
              top: `calc(-${100 * workIndex}% - ${4 * workIndex}rem)`,
            }}
          >
            {titles.map((title) => (
              <>
                <h2>{title.title}</h2>
                <h3>{title.description}</h3>
              </>
            ))}
          </div>
        </div>
        <div className={styles.videosWrapper}>
          <div
            className={styles.videosContainer}
            style={{
              top: `calc(-${100 * workIndex}% - ${10 * workIndex}vh + ${
                workIndex * 4 + 2
              }vh)`,
            }}
          >
            {logos.map((logo, index) => {
              if (index === 0) {
                return workTitle(setShowBall);
              } else if (index === logos.length - 1) {
                return moreWorkTitle(setShowBall);
              } else {
                return (
                  <video
                    key={index} // Added key prop for React list rendering
                    className={styles.video}
                    muted
                    loop
                    autoPlay
                    // tabindex="0"
                    // role="link"
                    // onFocus={() => handleFocus(index)}
                    onMouseEnter={() =>
                      setShowBall({ show: true, text: "View" })
                    }
                    onMouseLeave={() => setShowBall({ show: false, text: "" })}
                    onClick={() => router.push(titles[index].page)}
                    onKeyDown={(event) => handleKeyDown(index, event)} // Handle keydown
                  >
                    <source
                      src={`/videos/${videos[index]}-compressed.mp4`}
                      type="video/mp4"
                    />
                    Your browser does not support the video tag.
                  </video>
                );
              }
            })}
          </div>
        </div>
        <section className={styles.skills}>
          {skills[0].map((skill, indexSkills) => (
            <motion.div className={styles.skillsWrapped} key={indexSkills}>
              <div
                className={styles.skillsContainer}
                style={{
                  top: `calc(-${100 * workIndex}% - ${4 * workIndex}rem)`,
                  transitionDelay: `${50 * indexSkills}ms`,
                }}
              >
                {logos.map((logo, indexWork) =>
                  skills[indexWork][indexSkills] !== "" ? (
                    <img
                      key={`${indexWork}-${indexSkills}`}
                      // src={`/skills/aws.svg`}
                      src={`../skills/${skills[indexWork][indexSkills]}.svg`}
                      alt={`Skill icon ${indexWork}-${indexSkills}`}
                    />
                  ) : (
                    <div></div>
                  )
                )}
              </div>
            </motion.div>
          ))}
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
      </div>

      {/* </Sticky> */}
    </div>
  );
}

function workTitle(setShowBall) {
  return (
    <div
      className={classnames(styles.workTitle, styles.mouseBallHover)}
      onMouseEnter={() => setShowBall({ show: true, text: "Scroll" })}
      onMouseLeave={() => setShowBall({ show: false, text: "Scroll" })}
    >
      <h2 style={{ position: "relative" }}>
        <div className={classnames(intro.gradientText, styles.recentTitle)}>
          RECENT
        </div>
        <div>WORK</div>
      </h2>
    </div>
  );
}

function moreWorkTitle(setShowBall) {
  return (
    <div
      className={classnames(styles.workTitle, styles.mouseBallHover)}
      onMouseEnter={() => setShowBall({ show: true, text: "Coming Soon" })}
      onMouseLeave={() => setShowBall({ show: false, text: "" })}
    >
      <h2 style={{ position: "relative" }}>
        <div
          className={classnames(intro.gradientText, styles.recentTitle)}
          style={{ right: 0 }}
        >
          MORE
        </div>
        <div>WORK</div>
      </h2>
    </div>
  );
}
