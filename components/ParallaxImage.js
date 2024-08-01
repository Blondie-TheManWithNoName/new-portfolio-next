import React from "react";
import styles from "../styles/work.module.scss";

import { motion, useScroll, useTransform } from "framer-motion";
import PathImage from "./PathImage";

const ParallaxImage = ({
  imageUrl,
  startOffset,
  endOffset,
  move,
  path,
  fixedPositions,
}) => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [startOffset, endOffset], [0, move]);

  return (
    <motion.div style={{ y }} className={styles.background1}>
      {fixedPositions.map((style, index) => (
        <PathImage
          image={path.src}
          index={index}
          startOffset={startOffset}
          endOffset={endOffset}
          scrollY={scrollY}
          style={{
            width: "10%",
            position: "absolute",
            borderRadius: "1rem",
            ...style.style,
          }}
          rotation={style.rotation}
        />
      ))}
    </motion.div>
  );
};

export default ParallaxImage;
