import React, { useRef, useEffect } from "react";
import styles from "../styles/workInfo.module.scss";
import classNames from "classnames";
import logo1 from "../public/images/logos/theogony.svg";
import mockupLg from "../public/images/mockup-lg.png";
import Image from "next/image";
import TechPill from "../components/TechPill";
import { useScroll, useTransform, motion } from "framer-motion";

function Theogony() {
  const containerTextRef = useRef(null);
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
          <h3>Role</h3>
          <h3>Page</h3>

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
      </section>
    </main>
  );
}

export default Theogony;
