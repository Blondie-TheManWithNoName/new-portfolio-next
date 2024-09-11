import React, { useRef, useEffect, useState } from "react";
import styles from "../styles/workInfo.module.scss";
import intro from "../styles/intro.module.scss";
import classNames from "classnames";
import logo1 from "../public/images/logos/theogony.svg";
import mockupLg from "../public/images/mockup-lg-3.png";
import Image from "next/image";
import TechPill from "../components/TechPill";
import { useScroll, useTransform, motion, animate } from "framer-motion";
import Lenis from "lenis";
import MouseBall from "../components/MouseBall";
import { useRouter } from "next/router";
import { useCurrentTime } from "../hooks/useCurrentTime";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
import useWindowSize from "../hooks/useWIndowSize";
import Head from "next/head";

function WorkPage({ work, texts, video, nextWork, pills }) {
  const { width, height } = useWindowSize();
  const router = useRouter();
  // Lenis
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (typeof window !== "undefined") {
      document.body.style.height = "100vh";

      // Unblock scrolling after 3 seconds
      const timer = setTimeout(() => {
        document.body.style.height = "auto";
      }, 0);

      // Cleanup function to ensure scrolling is restored if the component unmounts
      return () => {
        clearTimeout(timer);
        document.body.style.height = "auto";
      };
    }
  }, []);

  const scrollToBottom = () => {
    const scrollToY =
      document.documentElement.scrollHeight - window.innerHeight;

    animate(window.scrollY, scrollToY, {
      duration: 0.4,
      ease: [0.33, 1, 0.68, 1],
      //   ease: [0.42, 0, 0.58, 1],
      onUpdate: (latest) => {
        window.scrollTo(0, latest);
      },
    });
  };

  const handleTransitionOut = () => {
    if (nextWork.url !== "snaketwo") {
      setTransitionIn(true);
      setShowBall(false);
      // bottomRef.current?.scrollIntoView({ behavior: "smooth" });
      scrollToBottom();

      setTimeout(() => {
        router.push(nextWork.url);
      }, 400);
    }
  };

  const handleTransitionHome = () => {
    setTimeout(() => {
      router.push("/");
    }, 400);
  };

  const containerRef = useRef(null);
  const containerTextRef = useRef(null);
  const [showBall, setShowBall] = useState({ show: false, text: "HOLA" });
  const [transitionIn, setTransitionIn] = useState(false);
  const currentTime = useCurrentTime();
  const [headerColor, setHeaderColor] = useState("#1C1D20");

  const bottomRef = useRef(null);

  const footerRef = useRef(null);

  const isFooterAtTop = useIntersectionObserver(footerRef, {
    root: null, // The viewport
    rootMargin: "0px",
    threshold: 0.96, // Trigger when 100% of the footer is in view
  });

  const { scrollYProgress: scrollYProgressContainer } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const { scrollYProgress: scrollYProgressText } = useScroll({
    target: containerTextRef,
    offset: ["start end", "end start"],
  });

  useEffect(() => {
    if (isFooterAtTop) setHeaderColor("white");
    else setHeaderColor("#1C1D20");
  }, [isFooterAtTop]);

  const transformTextY = useTransform(
    scrollYProgressText,
    [0, 1],
    [0, height / 3]
  );
  const transformRightY = useTransform(
    scrollYProgressContainer,
    [0, 1],
    [100, -100]
  );
  const transformLeftY = useTransform(
    scrollYProgressContainer,
    [0, 1],
    [-100, 100]
  );

  const textAnimation = {
    initial: {
      opacity: 0,
      y: "100%",
      transition: {
        type: "spring",
        damping: 250,
        stiffness: 2000,
        mass: 20,
      },
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 250,
        stiffness: 2000,
        mass: 20,
      },
    },
  };

  return (
    <>
      <Head>
        <title>{work.title} • Noah Guardiola</title>
        <meta property="og:title" content="My page title" key="title" />
      </Head>{" "}
      <main className={styles.main}>
        <header
          className={classNames(intro.header)}
          style={{ position: "fixed" }}
        >
          <a onClick={handleTransitionHome} style={{ color: headerColor }}>
            Noah Guardiola
          </a>
        </header>
        <MouseBall
          show={showBall}
          ballAnimation={false}
          xStartProp={0}
          yStartProp={0}
        />
        <motion.div className={styles.intro} style={{ y: transformTextY }}>
          <Image src={work.logo} className={styles.logo} alt="Logo" priority />
          <div className={styles.titleContainer}>
            <motion.h1
              className={classNames(styles.title, "gradientText")}
              variants={textAnimation}
              initial="initial"
              animate="animate"
            >
              {work.title}
            </motion.h1>
          </div>
          <div className={styles.subtitleContainer}>
            <motion.h2
              className={styles.subtitle}
              variants={textAnimation}
              initial="initial"
              animate="animate"
            >
              {work.subtitle}
            </motion.h2>
          </div>
        </motion.div>
        <section>
          <motion.p className={styles.overview} ref={containerTextRef}>
            {texts.overview}
          </motion.p>
          <div className={styles.workInfo}>
            {/* <h3>Stack</h3> */}
            <h3 className={styles.smallTitle}>Role</h3>
            <h3 className={styles.smallTitle}>Page</h3>

            {/* <div className={styles.line}></div> */}
            <div className={styles.line}></div>
            <div className={styles.line}></div>

            {/* <div className={styles.pills}>
            <TechPill name="TypeScript" color="#3178C6" />
            <TechPill name="NodeJS" color="#68A063" />
            <TechPill name="MySQL" color="#00758F" />
            <TechPill name="AWS" color="#FF9900" />
          </div> */}
            <div className={styles.info}>
              <p>{texts.role}</p>
            </div>
            <div className={styles.info}>
              <a href={`http://${texts.page}/`} target="_blank" rel="noopener">
                {texts.pageText ?? texts.page}
              </a>
            </div>
          </div>

          <div className={styles.mockupContainer}>
            <div className={styles.mockupLg}>
              <Image
                src={mockupLg}
                className={styles.mockupLgImage}
                alt="Laptop Mockup"
              />
              <div>
                <video muted loop autoPlay>
                  <source src={`/videos/${work.video}.mp4`} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
          <div className={styles.workInfo}>
            <h3 className={styles.smallTitle}>Why</h3>
            <h3 className={styles.smallTitle}>Stack</h3>

            <div className={styles.line}></div>
            <div className={styles.line}></div>

            <div className={styles.text}>
              <p>{texts.why}</p>
            </div>
            <div className={styles.pills}>
              {pills.map((pill) => (
                <TechPill key={pill} name={pill} />
              ))}
            </div>
          </div>
          <motion.div className={styles.phoneMockups} ref={containerRef}>
            {work.images?.uml ? (
              <Image
                src={work.images.uml}
                style={{
                  height: "100%",
                  width: "65%",
                }}
                alt="Project Diagram"
              />
            ) : (
              <>
                <motion.div style={{ y: transformRightY }}>
                  <Image
                    src={work.images.screen1}
                    style={{ objectFit: "cover", height: "100%" }}
                    alt="Phone Web view"
                  />
                </motion.div>
                <motion.div style={{ y: transformLeftY }}>
                  <Image
                    src={work.images.screen2}
                    style={{ objectFit: "cover", height: "100%" }}
                    alt="Phone Web view"
                  />
                </motion.div>
              </>
            )}
          </motion.div>
        </section>
        <footer className={styles.footer} ref={footerRef}>
          <div className={styles.nextCaseTitle}>
            <h3 className={styles.smallTitle}>Next Case</h3>
          </div>

          <div
            className={styles.nextCaseContainer}
            // onMouseEnter={() =>
            //   setShowBall({
            //     show: true,
            //     text: `${nextWork.url !== "snaketwo" ? "Next" : "Coming Soon"}`,
            //   })
            // }
            onMouseLeave={() => setShowBall({ show: false, text: "" })}
            onClick={handleTransitionOut}
            style={{ marginTop: transitionIn ? "10vh" : "20vh" }}
          >
            <div className={styles.nextContainer}>
              <div
                className={classNames(styles.logoNextContainer, {
                  [styles.logoNextContainerTransition]: transitionIn,
                })}
              >
                <Image
                  src={nextWork.logo}
                  className={styles.logoNext}
                  alt="Logo"
                />
              </div>
              <div
                className={styles.backgroundTransition}
                style={{
                  width: transitionIn && "150vw",
                  height: transitionIn && "150vw",
                }}
              ></div>
            </div>
            <h3 className={styles.nextCase}>{nextWork.title}</h3>
            {/* <div className={styles.line}></div> */}
            {/* <div className={styles.nextCaseOverview}></div> */}

            {/* <div className={styles.background}></div> */}
          </div>
          <div className={styles.footerFooterContainer}>
            <a
              className={styles.moreWork}
              onMouseEnter={() =>
                setShowBall({ show: true, text: "Coming Soon" })
              }
              onMouseLeave={() => setShowBall({ show: false, text: "" })}
            >
              All Work
            </a>
            <div className={styles.footerFooter}>
              <div className={styles.footerSection}>
                <p className={classNames(styles.smallTitle, styles.footerText)}>
                  Local Time
                </p>{" "}
                <p
                  className={classNames(styles.footerText)}
                  style={{ gridColumn: "span 2" }}
                >
                  {currentTime}
                </p>
              </div>
              <div className={styles.footerSection}>
                <p></p>
                <p
                  className={styles.footerText}
                  style={{
                    gridColumn: "span 2",
                    color: "#9EADBB",
                    textAlign: "center",
                  }}
                >
                  Designed & Coded by Noah
                </p>
              </div>
              <div className={styles.footerSection}>
                <p className={classNames(styles.smallTitle, styles.footerText)}>
                  Socials
                </p>{" "}
                <a
                  className={classNames(styles.footerText)}
                  href="https://www.linkedin.com/in/nbguardiola/"
                  target="_blank"
                  rel="noopener"
                >
                  LinkedIn
                </a>
                <a
                  className={classNames(styles.footerText)}
                  href="https://github.com/Blondie-TheManWithNoName"
                  target="_blank"
                  rel="noopener"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}

export default WorkPage;
