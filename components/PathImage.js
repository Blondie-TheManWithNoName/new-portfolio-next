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
  className,
}) {
  const rotate = useTransform(scrollY, [startOffset, endOffset], [0, rotation]);

  return (
    <img
      key={index}
      src={image}
      alt={`Parallax ${index}`}
      className={className}
      style={{
        ...style,
        rotate: `${parseFloat(style.rotate) + rotate.get()}deg`,
      }}
    />
  );
}
