import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import styles from "../styles/work.module.scss";

export default function PathImage({
  image,
  index,
  rotation,
  startOffset,
  endOffset,
  scrollY,
  style,
  className,
}) {
  const rotate = useTransform(scrollY, [startOffset, endOffset], [0, rotation]);

  return (
    <img
      key={index} // Use the index as the key for each image
      src={image}
      alt={`Parallax ${index}`}
      className={className}
      style={{
        ...style,
        rotate: `${parseFloat(style.rotate) + rotate.get()}deg`, // Add rotation based on scroll
      }}
    />
  );
}
