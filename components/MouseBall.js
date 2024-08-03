import React, { useState, useEffect } from "react";
import useMousePosition from "../hooks/useMousePosition";
import useScrollPosition from "../hooks/useScrollPosition";
import styles from "../styles/work.module.scss";
import { motion } from "framer-motion";
import useWindowSize from "../hooks/useWIndowSize";

export default function MouseBall({ show }) {
  const pixelSize = 75;
  const [size, setSize] = useState(show ? pixelSize : 0);
  const [text, setText] = useState("HOLA");
  const { x, y } = useMousePosition();
  const { width, height } = useWindowSize();
  //   const scrollY = useScrollPosition();

  useEffect(() => {
    setSize(show.show ? pixelSize : 0);

    console.log("show.text", show.text, "text", text);
    if (show.text !== text) {
      setSize(0);
      setTimeout(() => {
        setText(show.text);
        setSize(show.show ? pixelSize : 0);
      }, 150);
    }
  }, [show]);

  //   useEffect(() => {
  //     // const elements = document.elementsFromPoint(x, y);
  //     // const isHovered = elements.some((element) => {
  //     //   //   element.closest(`.${styles.mouseBallContainer}`);
  //     // });
  //     // Update the hovered state
  //     // setSize(pixelSize);
  //   }, [scrollY]);

  return (
    <>
      <motion.div
        className={styles.mouseBall}
        style={{
          x: x - pixelSize / 2,
          y: y - pixelSize / 2 - 10,
          width: pixelSize,
          height: pixelSize,
        }}
      >
        <motion.div
          style={{
            width: size,
            height: size,
            backgroundImage: `linear-gradient(${45}deg, #0086d1 ${
              ((x + y) / (width + height)) * 100 - 50
            }%, #af4261 ${((x + y) / (width + height)) * 100 + 50}%)`,
          }}
        ></motion.div>
      </motion.div>

      <motion.div
        className={styles.mouseBall2}
        style={{
          x: x - pixelSize / 2,
          y: y - pixelSize / 2 - 10,
          width: pixelSize,
          height: pixelSize,
        }}
      >
        <motion.div
          style={{
            width: size,
            height: size,
          }}
        >
          {text}
        </motion.div>
      </motion.div>
    </>
  );
}
