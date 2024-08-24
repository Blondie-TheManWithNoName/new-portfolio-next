import React, { useRef, useEffect } from "react";
import styles from "../styles/workInfo.module.scss";
import classNames from "classnames";
import logo1 from "../public/images/logos/theogony.svg";
import mockupLg from "../public/images/mockup-lg.png";
import Image from "next/image";
import TechPill from "../components/TechPill";
import { useScroll, useTransform, motion } from "framer-motion";

function Theogony() {
  const containerRef = useRef(null);
  const containerTextRef = useRef(null);

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

  return (
    <main className={styles.main}>
      <motion.div className={styles.intro} style={{ y: transformTextY }}>
        <Image src={logo1} className={styles.logo} alt="Logo" />
        <h1 className={classNames(styles.title, "gradientText")}>Theogony</h1>
        <h2 className={styles.subtitle}>GREEK GODS FAMILY TREE API</h2>
      </motion.div>
      <section>
        <motion.p className={styles.overview} ref={containerTextRef}>
          <i>Theogony API</i> is a REST API that gives you the possibility to
          retrieve information about Greek gods and the relationships and
          partnerships they had. This way, e.g., you are able to trace the
          entire Greek Gods Family Tree from a child to its great, great,
          great... grandfather.
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
            <p>Development & Deploy</p>
          </div>
          <div className={styles.info}>
            <a
              href="http://theogonia.net"
              target="_blank"
              rel="noopener noreferrer"
            >
              theogonia.net
            </a>
          </div>
        </div>

        <div className={styles.mockupContainer}>
          <div className={styles.mockupLg}>
            <Image src={mockupLg} className={styles.mockupLgImage} />
            <div>
              <video muted loop autoPlay>
                <source src={`/videos/output2.mp4`} type="video/mp4" />
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
            <p>
              This is a personal project where I put myself a the challenge to
              create a public API for the community. As I couldn't find too many
              playful APIs for people to make a a code project.
            </p>
            <p style={{ marginTop: "2vh" }}>
              This is a personal project where I put myself a the challenge to
              create a public API for the community. As I couldn't find too many
              playful APIs for people to make a a code project.
            </p>
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
        <div className={styles.nextCaseContainer}>
          <div className={styles.nextCaseTitle}>
            <h3 className={classNames(styles.smallTitle)}>Next Case</h3>
          </div>
          <div className={styles.nextContainer}>
            <div className={styles.logoNextContainer}>
              <Image src={logo1} className={styles.logoNext} alt="Logo" />
            </div>
          </div>
          <h3 className={styles.nextCase}>es Recader</h3>
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

export default Theogony;
