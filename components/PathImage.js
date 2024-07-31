import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function PathImage({
  image,
  index,
  rotation,
  startOffset,
  endOffset,
  scrollY,
  style,
}) {
  const rotate = useTransform(scrollY, [startOffset, endOffset], [0, rotation]);

  return (
    <img
      key={index} // Use the index as the key for each image
      src={image}
      alt={`Parallax ${index}`}
      style={{
        ...style,
        rotate: `${parseFloat(style.rotate) + rotate.get()}deg`, // Add rotation based on scroll
      }}
    />
  );
}
