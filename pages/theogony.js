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
    </main>
  );
}

export default Theogony;
