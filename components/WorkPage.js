import React, { useRef, useEffect, useState } from "react";
import styles from "../styles/workInfo.module.scss";
import classNames from "classnames";
import logo1 from "../public/images/logos/theogony.svg";
import mockupLg from "../public/images/mockup-lg.png";
import Image from "next/image";
import TechPill from "../components/TechPill";
import { useScroll, useTransform, motion, animate } from "framer-motion";
import Lenis from "lenis";
import MouseBall from "../components/MouseBall";
import { useRouter } from "next/router";

function WorkPage({ work, texts, video, nextWork }) {
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
  }, []);


  const handleTransitionOut = () => {
    setTransitionIn(true);
    setShowBall(false);

    setTimeout(() => {
      router.push(nextWork.url);
    }, 400);
  };

  const containerRef = useRef(null);
  const containerTextRef = useRef(null);
  const [showBall, setShowBall] = useState({ show: false, text: "HOLA" });
  const [transitionIn, setTransitionIn] = useState(false);

  const bottomRef = useRef(null);

  const { scrollYProgress: scrollYProgressContainer } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const { scrollYProgress: scrollYProgressText } = useScroll({
    target: containerTextRef,
    offset: ["start end", "end start"],
  });

  const transformTextY = useTransform(scrollYProgressText, [0, 1], [0, 300]);
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
    <main className={styles.main}>
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
            <a
              href="http://theogonia.net"
              target="_blank"
              rel="noopener noreferrer"
            >
              {texts.page}
            </a>
          </div>
        </div>

        <div className={styles.mockupContainer}>
          <div className={styles.mockupLg}>
            <Image src={mockupLg} className={styles.mockupLgImage} />
            <div>
              <video muted loop autoPlay>
                <source src={video} type="video/mp4" />
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
            <TechPill name="TypeScript" color="#3178C6" />
            <TechPill name="NodeJS" color="#68A063" />
            <TechPill name="ExpressJS" color="#FF9900" />
            <TechPill name="MySQL" color="#00758F" />
            <TechPill name="REST" color="#FF9900" />
            <TechPill name="TypeORM" color="#FF9900" />
            <TechPill name="AWS" color="#FF9900" />
            <TechPill name="DBeaver" color="#FF9900" />
            <TechPill name="CSR Pattern" color="#FF9900" />
            <TechPill name="Best Practices" color="#FF9900" />
          </div>
        </div>
        <motion.div className={styles.phoneMockups} ref={containerRef}>
          <motion.div style={{ y: transformRightY }}></motion.div>
          <motion.div style={{ y: transformLeftY }}></motion.div>
        </motion.div>
      </section>
      <footer className={styles.footer}>
        <div
          className={styles.nextCaseContainer}
          onMouseEnter={() => setShowBall({ show: true, text: "Check" })}
          onMouseLeave={() => setShowBall({ show: false, text: "" })}
          onClick={handleTransitionOut}
        >
          <div className={styles.nextCaseTitle}>
            <h3 className={classNames(styles.smallTitle)}>Next Case</h3>
          </div>
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
                width: transitionIn ? "150vw" : "6vw",
                height: transitionIn ? "150vw" : "6vw",
              }}
            ></div>
          </div>
          <h3 className={styles.nextCase}>{nextWork.title}</h3>
          <div
            className={styles.line}
            style={{ position: "absolute", top: "93%" }}
          ></div>
          {/* <div className={styles.nextCaseOverview}></div> */}

          {/* <div className={styles.background}></div> */}
        </div>
      </footer>
    </main>
  );
}

export default WorkPage;
