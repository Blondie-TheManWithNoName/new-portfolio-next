import Head from "next/head";
import intro from "../styles/intro.module.scss";
import carousell from "../styles/carousell.module.scss";
import classNames from "classnames";
import useScrollPosition from "../hooks/useScrollPosition";
import useWindowSize from "../hooks/useWIndowSize";
import aboutme from "../styles/aboutme.module.scss";
import footer from "../styles/footer.module.scss";
import classnames from "classnames";
import MouseBall from "../components/MouseBall";
import favicon from "../public/images/favicon.jpg";
import hero from "../public/images/hero.jpg";
import ogImage from "../public/images/ogImage.png";
import { useEffect, useRef, useState } from "react";
import { useCurrentTime } from "../hooks/useCurrentTime";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";

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
import Image from "next/image";
import BallAnimation from "../components/BallAnimation";

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
  const currentTime = useCurrentTime();

  const container = useRef();
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [heightTop, setHeightTop] = useState({ top: 400, bottom: 400 });
  const [shadow, setShadow] = useState({ top: 0, bottom: 0 });
  const [heightBot, setHeightBot] = useState(0);
  const [ballAnimation, setBallAnimation] = useState(false);
  const [x, setX] = useState(0);
  const [headerColor, setHeaderColor] = useState("white");
  const [headerFixed, setHeaderFixed] = useState(false);
  const footerRef = useRef(null);

  const isFooterAtTop = useIntersectionObserver(footerRef, {
    root: null, // The viewport
    rootMargin: "0px",
    threshold: 0.96, // Trigger when 100% of the footer is in view
  });

  useEffect(() => {
    window.scrollTo(0, 0);
    if (typeof window !== "undefined") {
      document.body.style.height = "100vh";

      // Unblock scrolling after 3 seconds
      const timer = setTimeout(() => {
        document.body.style.height = "auto";
      }, 2000);

      // Cleanup function to ensure scrolling is restored if the component unmounts
      return () => {
        clearTimeout(timer);
        document.body.style.height = "auto";
      };
    }
  }, []);

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

  const ballRef = useRef(null);
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // lenis.on("scroll", ({ scroll }) => {
    //   console.log("isScrolling:", lenis.isScrolling);
    // });

    return () => {
      lenis.destroy();
    };
  }, []);

  const scrollY = useScrollPosition();
  const { width, height } = useWindowSize();

  useEffect(() => {
    if (scrollY >= height * 1.15) setHeaderFixed(true);
    else setHeaderFixed(false);
  }, [scrollY]);

  useEffect(() => {
    if (isFooterAtTop) setHeaderColor("white");
    else setHeaderColor("#1C1D20");
  }, [isFooterAtTop]);

  const textContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1.5, // Specify the duration for opacity animation
        ease: [0.16, 1, 0.3, 1],
        staggerChildren: 0.125,
        delayChildren: 2,
      },
    },
  };

  const textAnimation = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        y: {
          type: "spring",
          damping: 250,
          stiffness: 2000,
          mass: 20,
        },
        // opacity: {
        //   duration: 2, // Specify the duration for opacity animation
        //   ease: [0.16, 1, 0.3, 1], // Use a different easing for opacity
        // },
      },
    },
    hidden: {
      opacity: 0,
      y: "100%",
      transition: {
        y: {
          type: "spring",
          damping: 250,
          stiffness: 2000,
          mass: 20,
        },
        // opacity: {
        //   duration: 2, // Specify the duration for opacity animation
        //   ease: [0.16, 1, 0.3, 1],
        // },
      },
    },
  };

  const [showBall, setShowBall] = useState({ show: false, text: "HOLA" });
  const curveTransform = useTransform(scrollYProgress, [0, 1], [300, 600]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 0]);
  const yPic = useTransform(scrollYProgress, [0, 1], [0, 4000]);
  const yText = useTransform(scrollYProgress, [0, 1], [0, 2000]);
  return (
    <>
      <Head>
        <title>Noah Guardiola • Web Developer</title>
        <meta
          name="description"
          content="Noah, Web Developer developing interactive and memorable user experiences. Creating tailored designs from scratch with cutting-edge techonlogy."
          key="desc"
        />
        {/* Canonical Tag */}
        <link rel="canonical" href="https://www.noahguardiola.com/" />

        {/* Meta Robots */}
        {/* <meta name="robots" content="index, follow" /> */}

        {/* Open Graph Meta Tags */}
        <meta
          property="og:site_name"
          content="Noah Guardiola • Web Developer"
        />
        <meta property="og:title" content="Noah Guardiola • Web Developer" />
        <meta
          property="og:description"
          content="Web Developer developing interactive and memorable user experiences. Creating tailored designs from scratch with cutting-edge techonlogy."
        />
        <meta property="og:image" content={ogImage} />
        <meta property="og:url" content="https://www.noahguardiola.com/" />
        <meta property="og:type" content="website" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="" />
        <meta name="twitter:title" content="Noah Guardiola • Web Developer" />
        <meta
          name="twitter:description"
          content="Web Developer developing interactive and memorable user experiences. Creating tailored designs from scratch with cutting-edge techonlogy."
        />
        <meta name="twitter:image" content={ogImage} />

        {/* Viewport Meta Tag */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Charset Meta Tag */}
        <meta charSet="UTF-8" />

        {/* Language Meta Tag */}
        <meta httpEquiv="Content-Language" content="en" />

        {/* Content Type Meta Tag */}
        <meta http-equiv="Content-Type" content="text/html" />

        {/* Author Meta Tag */}
        <meta name="author" content="Noah" />
      </Head>

      <header className={intro.header} style={{ position: "absolute" }}>
        <a href="" style={{ color: "#fff" }}>
          Noah Guardiola
        </a>
      </header>
      <header
        className={classNames(
          intro.header,
          headerFixed ? intro.fadeIn : intro.fadeOut
        )}
        style={{ position: "fixed" }}
      >
        <a href="" style={{ color: headerColor }} tabindex="-1">
          Noah Guardiola
        </a>
      </header>
      <main className={intro.main} ref={container}>
        <MouseBall
          show={showBall}
          ballAnimation={true}
          xStartProp={0}
          yStartProp={0}
        />
        <section className={intro.introSection}>
          {/* <BallAnimation ref={ballRef} /> */}
          <motion.div
            className={intro.intro}
            onMouseEnter={() => setShowBall({ show: true, text: "Hello" })}
            onMouseLeave={() => setShowBall({ show: false, text: "" })}
          >
            <motion.div className={intro.introPic} style={{ y: yPic }}>
              <Image
                src={hero}
                alt="Noah"
                draggable="false"
                userSelect="none"
                pointerEvents="none"
                onmousedown="return false"
                width={3428}
                height={4568}
                className={intro.heroImg}
                style={{ userSelect: "none", pointerEvents: "none" }}
              />
            </motion.div>
            <motion.h1 className={intro.introText} style={{ y: yText }}>
              <motion.div
                variants={textContainer}
                initial="hidden"
                animate="visible"
                style={{
                  position: "relative",
                  overflow: "visible",
                  // width: "100%",
                  // margin: "auto",
                }}
              >
                <div className={intro.indented}>
                  <motion.p className={intro.backText} variants={textAnimation}>
                    I'm a
                  </motion.p>
                </div>

                <div
                  style={{
                    // overflow: "hidden",
                    width: "fit-content",
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
                    overflow: "visible",
                  }}
                  className={intro.indented}
                >
                  <motion.p
                    variants={textAnimation}
                    style={{
                      overflow: "visible",
                      paddingBottom: "2rem",
                    }}
                  >
                    with{" "}
                    <motion.span className={intro.gradientText}>
                      UX design
                    </motion.span>{" "}
                    focus
                  </motion.p>
                </div>
              </motion.div>
            </motion.h1>
          </motion.div>
        </section>
        <section
          className={aboutme.aboutMe}
          // style={{
          //   paddingBottom: "10em",
          //   // boxShadow: "0px -3px 25px 0px rgba(16, 49, 74, 0.5)",
          // }}
        >
          <div className={aboutme.aboutMeText}>
            {/* <p className={aboutme.text}>
              I'm Noah and since a younger age I developed a passion for coding.
              </p> */}
            <p className={aboutme.text}>
              I stay engaged from the first idea to the final result. I aim to
              create interactive and memorable user experiences by tailoring
              each step of the process.
            </p>
            {/* <p className={aboutme.text}>
              I enjoy starting new challenging projects and face new problems to
              overcome myself.
              </p> */}
          </div>
          <div className={aboutme.stack}>
            {/* <div className={aboutme.line}></div> */}
            <div className={classNames(aboutme.line, "smallText")}>
              MY STACK
            </div>
            <div className={aboutme.skillContainer}>
              <img
                key={`nestjs`}
                // src={`/skills/aws.svg`}
                src={`../skills/about-me/typescript.svg`}
                alt={`Skill icon /skills/typescript.svg`}
              />
              <p>TypeScript</p>
            </div>
            <div className={aboutme.skillContainer}>
              <img
                key={`nestjs`}
                // src={`/skills/aws.svg`}
                src={`../skills/about-me/nodejs.svg`}
                alt={`Skill icon /skills/nestjs.svg`}
              />
              <p>NodeJS</p>
            </div>
            <div className={aboutme.skillContainer}>
              <img
                key={`nestjs`}
                // src={`/skills/aws.svg`}
                src={`../skills/about-me/nestjs.svg`}
                alt={`Skill icon /skills/nestjs.svg`}
              />
              <p>NestJS</p>
            </div>
            <div className={aboutme.skillContainer}>
              <img
                key={`nestjs`}
                // src={`/skills/aws.svg`}
                src={`../skills/about-me/typeorm.svg`}
                alt={`Skill icon /skills/nestjs.svg`}
              />
              <p>TypeORM</p>
            </div>
            <div className={aboutme.skillContainer}>
              <img
                key={`nestjs`}
                // src={`/skills/aws.svg`}
                src={`../skills/about-me/mysql.svg`}
                alt={`Skill icon /skills/nestjs.svg`}
              />
              <p>MySQL</p>
            </div>
            <div className={aboutme.skillContainer}>
              <img
                key={`nestjs`}
                // src={`/skills/aws.svg`}
                src={`../skills/about-me/aws.svg`}
                alt={`Skill icon /skills/nestjs.svg`}
              />
              <p>AWS</p>
            </div>
            <div className={aboutme.skillContainer}>
              <img
                key={`nestjs`}
                // src={`/skills/aws.svg`}
                src={`../skills/about-me/react.svg`}
                alt={`Skill icon /skills/nestjs.svg`}
              />
              <p>React</p>
            </div>
            <div className={aboutme.skillContainer}>
              <img
                key={`nestjs`}
                // src={`/skills/aws.svg`}
                src={`../skills/about-me/tailwind.svg`}
                alt={`Skill icon /skills/nestjs.svg`}
              />
              <p>TailWind</p>
            </div>
            <div className={aboutme.skillContainer}>
              <img
                key={`nestjs`}
                // src={`/skills/aws.svg`}
                src={`../skills/about-me/figma.svg`}
                alt={`Skill icon /skills/nestjs.svg`}
              />
              <p>Figma</p>
            </div>
            <div className={aboutme.skillContainer}>
              <img
                key={`nestjs`}
                // src={`/skills/aws.svg`}
                src={`../skills/about-me/git.svg`}
                alt={`Skill icon /skills/nestjs.svg`}
              />
              <p>Git</p>
            </div>
            <div className={aboutme.skillContainer}>
              <img
                key={`nestjs`}
                // src={`/skills/aws.svg`}
                src={`../skills/about-me/jwt.svg`}
                alt={`Skill icon /skills/nestjs.svg`}
              />
              <p>JWT</p>
            </div>
            <div className={aboutme.skillContainer}>
              <img
                key={`nestjs`}
                // src={`/skills/aws.svg`}
                src={`../skills/about-me/clickup.svg`}
                alt={`Skill icon /skills/nestjs.svg`}
              />
              <p>ClickUp</p>
            </div>
          </div>
        </section>
        {/* <Carousell></Carousell> */}
        {/* </section> */}
        {/* <section className={aboutme.aboutMe}>
          <div className={aboutme.title}>
            <h2 className={intro.gradientText}>WORK</h2>
          </div>
        </section> */}
        <Works setShowBall={setShowBall} />
        {/* <section
          className={aboutme.contact}
          style={{ height: "200vh", marginTop: "20rem" }}
        >
          <div className={aboutme.title}>
            <h2 className={intro.gradientText}>CONTACT</h2>
          </div>
        </section> */}

        <footer className={footer.footer} ref={footerRef}>
          <div className={footer.connectContainer}>
            <div className={footer.topLine}>
              <Image
                src={favicon}
                className={footer.favicon}
                width={200}
                height={200}
              ></Image>
              {/* <p>Let's</p> */}
              <p className={footer.bottomLine}>
                Let's <br />
                connect!
              </p>
            </div>
            <div className={footer.line}></div>
            <div className={footer.CTA}>
              <a
                href="mailto:ngguardiola@gmail.com"
                onMouseEnter={() => setShowBall({ show: true, text: "Mail" })}
                onMouseLeave={() => setShowBall({ show: false, text: "" })}
              >
                nbguardiola@gmail.com
              </a>
              <a
                href="tel:+34636175308"
                onMouseEnter={() => setShowBall({ show: true, text: "Call" })}
                onMouseLeave={() => setShowBall({ show: false, text: "" })}
              >
                +34 636 17 53 08
              </a>
              {/* <a
                href="https://www.linkedin.com/in/nbguardiola/"
                target="_blank"
                onMouseEnter={() => setShowBall({ show: true, text: "Go" })}
                onMouseLeave={() => setShowBall({ show: false, text: "" })}
              >
                Connect
              </a> */}
            </div>
          </div>

          <div className={footer.footerFooter}>
            <div className={footer.footerSection}>
              <p className={classNames(footer.smallTitle, footer.footerText)}>
                Local Time
              </p>{" "}
              <p className={classNames(footer.footerText)}>{currentTime}</p>
            </div>
            <div className={footer.footerSection}>
              <p className={classNames(footer.smallTitle, footer.footerText)}>
                Socials
              </p>{" "}
              <a
                className={classNames(footer.footerText)}
                href="https://www.linkedin.com/in/nbguardiola/"
                target="_blank"
                rel="noopener"
              >
                LinkedIn
              </a>
              <a
                className={classNames(footer.footerText)}
                href="https://github.com/Blondie-TheManWithNoName"
                target="_blank"
                rel="noopener"
              >
                GitHub
              </a>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
