import Head from "next/head";
import intro from "../styles/intro.module.scss";
import carousell from "../styles/carousell.module.scss";
import aboutme from "../styles/aboutme.module.scss";
import classnames from "classnames";
import TopDivider from "../components/TopDivider";
import Carousell from "../components/Carousell";
import BotDivider from "../components/botDivider";
import { useEffect, useRef, useState } from "react";
import Lenis from "lenis";
import {
  useScroll,
  useTransform,
  motion,
  transform,
  cubicBezier,
  delay,
} from "framer-motion";
import Works from "../components/Works";

function getHeight(scroll, windowHeight) {
  // Top
  const normalizedTop = transform(scroll, [0, windowHeight / 2], [0, 1]);
  const easedTop = cubicBezier(0.45, 0, 0.55, 1)(normalizedTop);
  const resTop = transform(easedTop, [0, 1], [400, -50]);

  // Bottom
  const normalizedBot = transform(
    scroll,
    [windowHeight - windowHeight / 4, windowHeight],
    [0, 1]
  );
  const easedBot = cubicBezier(0.45, 0, 0.55, 1)(normalizedBot);
  const resBot = transform(easedBot, [0, 1], [0, 0]);

  // Top Shadow
  const easedShadowTop = cubicBezier(0.11, 0, 0.5, 0)(normalizedTop);
  const resShadowTop = transform(easedShadowTop, [0, 1], [400, 0]);

  // Bottom Shadow
  const easedShadowBot = cubicBezier(0.85, 0, 0.15, 1)(normalizedBot);
  const resShadowBot = transform(easedShadowBot, [0, 1], [400, 0]);
  return {
    top: resTop,
    bottom: resBot,
    shadowTop: resShadowTop,
    shadowBot: resShadowBot,
  };
}

export default function Home() {
  const container = useRef();
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [heightTop, setHeightTop] = useState({ top: 400, bottom: 400 });
  const [shadow, setShadow] = useState({ top: 0, bottom: 0 });
  const [heightBot, setHeightBot] = useState(0);
  const [x, setX] = useState(0);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    const resize = () => {
      setDimensions({ width: window.innerWidth, height: window.innerHeight });
    };
    const onScroll = () => {
      setX(transform(window.scrollY, [0, window.innerHeight], [0, 500]));
      const res = getHeight(window.scrollY, window.innerHeight);
      setHeightTop({ top: res.top, bottom: res.bottom });
      setShadow({ top: res.shadowTop, bottom: res.shadowBot });
    };
    resize();

    window.addEventListener("resize", resize);
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  const textContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.125, delayChildren: 0.25 },
    },
  };

  const textAnimation = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 250,
        stiffness: 2000,
        mass: 20,
      },
    },
    hidden: {
      opacity: 0,
      y: "200%",
      transition: {
        type: "spring",
        damping: 250,
        stiffness: 2000,
        mass: 20,
      },
    },
  };

  const curveTransform = useTransform(scrollYProgress, [0, 1], [300, 600]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 0]);
  const yPic = useTransform(scrollYProgress, [0, 1], [0, 2000]);
  const yText = useTransform(scrollYProgress, [0, 1], [0, 1500]);
  const height = useTransform(scrollYProgress, [0, 1], [400, 200]);
  // console.log("y", scrollYProgress);
  return (
    <>
      <Head>
        <title>Noah Guardiola • Web Developer</title>
        <meta property="og:title" content="My page title" key="title" />
      </Head>
      <main className={intro.main} ref={container}>
        <section className={intro.introSection}>
          <motion.div className={intro.intro}>
            <motion.div className={intro.introPic} style={{ y: yPic }}>
              <img src="../images/test-11.png" alt="Noah" />
            </motion.div>
            {/* <div className={intro.intro}> */}
            <motion.h1 className={intro.introText} style={{ y: yText }}>
              <motion.div
                variants={textContainer}
                initial="hidden"
                animate="visible"
              >
                <div
                  style={{
                    overflow: "hidden",
                    width: "fit-content",
                  }}
                  className={intro.indented}
                >
                  <motion.p className={intro.backText} variants={textAnimation}>
                    I'm a
                  </motion.p>
                </div>

                <div
                  style={{
                    overflow: "hidden",
                    width: "fit-content",
                    // paddingBlock: "10rem",
                    minidth: "0",
                    minHeight: "0",
                  }}
                >
                  <motion.p
                    className={intro.frontText}
                    variants={textAnimation}
                  >
                    <span className={intro.gradientText}>web developer</span>
                  </motion.p>
                </div>

                <div
                  style={{
                    overflow: "hidden",
                    width: "fit-content",
                  }}
                  className={intro.indented}
                >
                  <motion.p
                    className={intro.frontText}
                    // className={intro.indented}
                    variants={textAnimation}
                    style={{
                      overflow: "hidden",
                      width: "fit-content",
                      paddingBottom: "2rem",
                    }}
                  >
                    <motion.span>with</motion.span>{" "}
                    <motion.span
                      className={classnames(
                        intro.frontText,
                        intro.gradientText
                      )}
                    >
                      UX design
                    </motion.span>{" "}
                    <motion.span>focus</motion.span>
                  </motion.p>
                </div>
              </motion.div>
            </motion.h1>

            <div className={intro.introHello}>
              {/* <div>
                <h2>
                  {" "}
                  hello!
                  <br />
                  hola!
                  <br />
                  hej!
                  <br />
                  hello!
                </h2>
              </div> */}
            </div>
            {/* </div> */}
          </motion.div>
        </section>
        {/* <section className={carousell.carousell} ref={carousellRef}> */}
        {dimensions.width > 0 && (
          <TopDivider
            {...dimensions}
            heightTop={heightTop}
            heightBot={heightBot}
            shadow={shadow}
            y={{ y }}
            x={x}
          />
        )}
        {/* <motion.div
          className={classnames(intro.gradientText, carousell.carousellDiv)}
          style={y}
        ></motion.div> */}
        <section
          className={aboutme.aboutMe}
          style={{
            paddingBottom: "10em",
            // boxShadow: "0px -3px 25px 0px rgba(16, 49, 74, 0.5)",
          }}
        >
          <div className={aboutme.title}>
            <h2 className={intro.gradientText}>ABOUT ME</h2>
          </div>
          <div className={aboutme.aboutMeText}>
            <p className={aboutme.text}>
              I'm Noah and since a younger age I developed a passion for coding.
            </p>
            <p className={aboutme.text} style={{ marginTop: "5rem" }}>
              I like to work on websites from start to end with interactive and
              memorable user experience. I enjoy starting new challenging
              projects and face new problems to overcome myself.
            </p>
            {/* <p className={aboutme.text}>
              I enjoy starting new challenging projects and face new problems to
              overcome myself.
            </p> */}
          </div>
        </section>
        {/* <Carousell></Carousell> */}
        {/* </section> */}
        {/* <section className={aboutme.aboutMe}>
          <div className={aboutme.title}>
            <h2 className={intro.gradientText}>WORK</h2>
          </div>
        </section> */}
        <Works />
        <section
          className={aboutme.aboutMe}
          style={{ height: "200vh", marginTop: "20rem" }}
        >
          <div className={aboutme.title}>
            <h2 className={intro.gradientText}>CONTACT</h2>
          </div>
        </section>
      </main>
    </>
  );
}
