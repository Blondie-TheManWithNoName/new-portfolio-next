import React, { useState, useRef, useEffect } from "react";
import styles from "../styles/work.module.scss";
import Work from "./Work";
import ParallaxImage from "./ParallaxImage";
import useScrollPosition from "../hooks/useScrollPosition";

import { FlatTree, motion, useScroll, useTransform } from "framer-motion";
import Sticky from "react-stickynode";

import house from "../public/images/logos/house.svg";
import logo1 from "../public/images/logos/theogony.svg";
import logo2 from "../public/images/logos/es_recader.svg";
import logo3 from "../public/images/logos/theogony_api.svg";
import logo4 from "../public/images/logos/kenken.svg";
import logo5 from "../public/images/logos/snake_two.svg";
import logo6 from "../public/images/logos/cards.svg";

import background1 from "../public/images/background/theogony-1.svg";
import background2 from "../public/images/background/theogony-2.svg";
import snake1 from "../public/images/background/snake-1.svg";
import snake2 from "../public/images/background/snake-2.svg";

const backgrounds = [
  { background1: "", background2: "" },
  { background1: background1, background2: background2 },
  { background1: snake2, background2: snake2 },
  { background1: background1, background2: background2 },
  { background1: snake2, background2: snake2 },
  { background1: background1, background2: background2 },
  { background1: snake2, background2: snake2 },
];

import { fixedPositions1 } from "./backgrounds/theogony";
import { fixedPositions2 } from "./backgrounds/cards";
import path1 from "../public/images/background/path.svg";
import path2 from "../public/images/background/card-path.svg";

// import test2 from "../public/images/test-pic-2.jpg";
// import video1 from "../public/videos/test-video-1.mp4";
// import video2 from "../public/videos/test-video-2.mp4";
// import video3 from "../public/videos/test-video-3.mp4";
// import video4 from "../public/videos/test-video-4.mp4";
// import video5 from "../public/videos/test-video-5.mp4";
// import video6 from "../public/videos/test-video-6.mp4";

import test2 from "../public/images/test-pic-2.jpg";
import test3 from "../public/images/test-pic-3.jpg";
import test4 from "../public/images/test-pic-2.jpg";
import test5 from "../public/images/test-pic-3.jpg";
import test6 from "../public/images/test-pic-2.jpg";

// import video from "../public/images/test-video-1.mp4";

const logos = [house, logo1, logo2, logo3, logo4, logo5, logo6];
const titles = [
  { title: "⠀", description: "⠀" },
  { title: "Theogony", description: "Greek Gods Dynamic Family Tree" },
  { title: "Es Recader", description: "Description" },
  { title: "Theogony API", description: "Description" },
  { title: "Ken Ken", description: "Description" },
  { title: "Snake II", description: "Description" },
  { title: "Card Mat", description: "Description" },
];

// const videos = [video1, video2, video3, video4, video5, video6];
// const images = ["Theogony", "test2", "test3", "test4", "test5", "test6"];

const HEIGHT = 2000;

const skills = [
  ["", "", "", "", "", "", "", ""],
  ["", "typescript", "html", "sass", "react", "figma", "", ""],
  ["", "javascript", "html", "tailwind", "nextjs", "figma", "", ""],
  ["", "typescript", "nodejs", "express", "aws", "mysql", "", ""],
  ["", "java", "idea", "figma", "gitlab", "", "", ""],
  ["", "javascript", "html", "css", "git", "", "", ""],
  ["", "javascript", "html", "css", "git", "nodejs", "express", ""],
];
const images = [
  { color1: "#46B861", color2: "#ffffff" },
  { color1: "#F97061", color2: "#ffffff" },
  { color1: "#46B861", color2: "#ffffff" },
  { color1: "#42617E", color2: "#7C68CD" },
  { color1: "#3967BA", color2: "#E45420" },
  { color1: "#F37363", color2: "#404A4F" },
];
// const logos = [logo1, logo2];

export default function Works({ lenis }) {
  const elRef = useRef(null);

  const [imageSrc, setImageSrc] = useState(test2?.src);
  const [workIndex, setWorkIndex] = useState(0);
  const [fixed, setFixed] = useState(0);

  const scrollY = useScrollPosition();
  const handleStateChange = (status) => {
    if (status.status === Sticky.STATUS_FIXED) {
      setFixed(scrollY);
    } else {
      setFixed(false);
    }
  };

  useEffect(() => {
    console.log("scrollY", scrollY, window.innerHeight + window.innerHeight);
    if (fixed) {
      if (scrollY - fixed >= HEIGHT * (workIndex + 1)) {
        setWorkIndex(workIndex + 1);
      }
      if (scrollY - fixed < HEIGHT * workIndex) {
        setWorkIndex(workIndex - 1);
      }
    }

    return () => {};
  }, [scrollY, fixed, workIndex]);

  const container = useRef();

  // const { scrollYProgress } = useScroll({
  //   target: container,
  //   offset: ["start end", "end start"],
  // });

  const [yPics, setYPics] = useState([]);

  // const yPic2 = useTransform(scrollYProgress, [0, 1], [0, -1000]);

  useEffect(() => {
    if (container.current) {
      const topPosition = container.current.getBoundingClientRect().top;
      console.log(topPosition);
    }
  }, []);

  return (
    <div className={styles.stickyContainer} ref={container}>
      {/* <div
        className={styles.parallaxContainer}
        style={{ top: `calc(${HEIGHT * workIndex}px - ${0 * workIndex}rem)` }}
        ref={container}
      ></div> */}

      <Sticky
        top={0}
        onStateChange={handleStateChange}
        innerClass="workContainer"
        className="workContainer"
        style={{ backgroundColor: "red" }}
      >
        <div className={styles.backgroundWrapper}>
          <div
            className={styles.backgroundContainer}
            style={{
              top: `calc(-${100 * workIndex}% - ${0 * workIndex}rem)`,
            }}
          >
            {backgrounds.map((background, index) => (
              <div className={styles.background}>
                {/* <motion.div
                  className={styles.background1}
                  style={{
                    backgroundImage: `url(${background.background1?.src})`,
                    backgroundSize: "cover",
                    y: index === workIndex ? yPics[index] : undefined,
                    backgroundPosition: "center",
                  }}
                ></motion.div> */}
                <ParallaxImage
                  key={index}
                  path={index % 2 ? path1 : path2}
                  fixedPositions={index % 2 ? fixedPositions1 : fixedPositions2}
                  imageUrl={background.background1?.src}
                  startOffset={fixed + index * HEIGHT}
                  endOffset={fixed + (index + 1) * HEIGHT}
                  move={-500}
                />
                {/* <ParallaxImage
                  key={index}
                  imageUrl={background.background2?.src}
                  startOffset={fixed + index * HEIGHT}
                  endOffset={fixed + (index + 1) * HEIGHT}
                  move={-800}
                /> */}
                {/* <motion.div
                  className={styles.background1}
                  style={{
                    backgroundImage: `url(${background.background2?.src})`,
                    backgroundSize: "cover",
                    // y: yPic2,
                    // backgroundSize: "100%",
                    backgroundPosition: "center",
                  }}
                ></motion.div> */}
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
            {logos.map((logo, index) => (
              <>
                <h2>{titles[index].title}</h2>
                <h3>{titles[index].description}</h3>
              </>
            ))}
          </div>
        </div>
        <div className={styles.videosWrapper}>
          <div
            className={styles.videosContainer}
            style={{
              top: `calc(-${100 * workIndex}% - ${8 * workIndex}rem)`,
            }}
          >
            {logos.map((logo, index) =>
              index === 0 ? (
                <div className={styles.workTitle}>
                  <h2>WORK</h2>
                </div>
              ) : (
                <video className={styles.video} muted loop autoPlay>
                  <source
                    src={`/videos/test-video-${index}.mp4`}
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
              )
            )}
          </div>
        </div>
        <section className={styles.skills}>
          {skills.map((skill, indexSkills) => (
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
                      src={`https://skillicons.dev/icons?i=${skills[indexWork][indexSkills]}`}
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
