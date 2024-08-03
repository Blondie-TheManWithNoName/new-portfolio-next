import React from "react";
import styles from "../styles/work.module.scss";
import classNames from "classnames";

import { motion, useScroll, useTransform } from "framer-motion";
import PathImage from "./PathImage";

const ParallaxImage = ({
  imageUrl,
  startOffset,
  className,
  endOffset,
  move,
  path,
  fixedPositions,
}) => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [startOffset, endOffset], [0, move]);

  const dynamicClass = classNames(styles.container, {
    [styles.backgroundImage]: className === "backgroundImage",
    [styles.bgCards]: className === "bgCards",
  });

  return (
    <motion.div style={{ y }} className={styles.background1}>
      {fixedPositions.map((style, index) => (
        <PathImage
          image={
            Array.isArray(path) ? path[index % path.length].src : path?.src
          }
          index={index}
          startOffset={startOffset}
          endOffset={endOffset}
          scrollY={scrollY}
          className={dynamicClass}
          style={{
            ...style.style,
          }}
          rotation={style.rotation}
        />
      ))}
    </motion.div>
  );
};

export default ParallaxImage;
