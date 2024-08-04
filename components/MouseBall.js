import React, { useState, useEffect } from "react";
import useMousePosition from "../hooks/useMousePosition";
import useScrollPosition from "../hooks/useScrollPosition";
import styles from "../styles/work.module.scss";
import { motion } from "framer-motion";
import useWindowSize from "../hooks/useWIndowSize";

export default function MouseBall({
  show,
  xStartProp,
  yStartProp,
  ballAnimation,
}) {
  const pixelSize = 75;
  const [size, setSize] = useState(pixelSize);
  const [text, setText] = useState("Hello");
  const [animation, setAnimation] = useState(true);
  let xStart = xStartProp;
  let yStart = yStartProp;
  const { x, y } = useMousePosition();

  const { width, height } = useWindowSize();
  const scrollY = useScrollPosition();

  useEffect(() => {
    console.log("!ballAnimation", !ballAnimation);
    if (!ballAnimation && x !== 0) {
      setAnimation(false);
      setSize(show.show ? pixelSize : 0);
      if (show.text !== text) {
        setSize(0);
        setTimeout(() => {
          setText(show.text);
          setSize(show.show ? pixelSize : 0);
        }, 150);
      }
    }
  }, [show, ballAnimation]);

  useEffect(() => {
    console.log("x", x);
    // if (x !== 0) setAnimation(false);

    return () => {};
  }, [ballAnimation]);

  useEffect(() => {
    // const elements = document.elementsFromPoint(x, y);
    // const isHovered = elements.some((element) => {
    //   element.closest(`.${styles.mouseBallContainer}`);
    // });
    // //   Update the hovered state
    // if (isHovered) setSize(pixelSize);
  }, [scrollY]);

  return (
    <>
      {!ballAnimation && (
        <motion.div
          className={styles.mouseBall}
          style={{
            x: animation ? xStart : x - pixelSize / 2,
            y: animation ? yStart : y - pixelSize / 2 - 10,
            width: pixelSize,
            height: pixelSize,
          }}
        >
          <motion.div
            style={{
              width: size,
              height: size,
              backgroundImage: "linear-gradient(45deg, #0086d1, #af4261)",
              // backgroundImage: `linear-gradient(${45}deg, #0086d1 ${
              //   ((x + y) / (width + height)) * 100 - 50
              // }%, #af4261 ${((x + y) / (width + height)) * 100 + 50}%)`,
            }}
          ></motion.div>
        </motion.div>
      )}

      {!ballAnimation && (
        <motion.div
          className={styles.mouseBall2}
          style={{
            x: animation ? xStart : x - pixelSize / 2,
            y: animation ? yStart : y - pixelSize / 2 - 10,
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
      )}
    </>
  );
}
