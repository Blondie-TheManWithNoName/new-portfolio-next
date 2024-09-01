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
  const [size, setSize] = useState(ballAnimation ? pixelSize : 0);
  const [text, setText] = useState("Hello");
  const [animation, setAnimation] = useState(true);
  const [endAnimation, setEndAnimation] = useState(false);
  let xStart = xStartProp;
  let yStart = yStartProp;
  const { x, y } = useMousePosition();

  const { width, height } = useWindowSize();
  const scrollY = useScrollPosition();

  useEffect(() => {
    if (x !== 0) {
      setSize(show.show ? pixelSize : 0);
      if (show.text !== text) {
        setSize(0);
        setTimeout(() => {
          if (show) setText(show.text);

          setSize(show.show ? pixelSize : 0);
        }, 150);
      }
    }
  }, [show]);

  useEffect(() => {
    if (!ballAnimation) setAnimation(false);
    setTimeout(() => {
      setEndAnimation(true);
    }, 2500);

    return () => {};
  }, []);

  useEffect(() => {
    if ((x !== 0 || y !== 0) && endAnimation && animation) {
      setAnimation(false);
    }
  }, [x, y, endAnimation]);

  useEffect(() => {
    const elements = document.elementsFromPoint(x, y);
    const isHovered = elements.some((element) => {
      element.closest(`.${styles.mouseBallContainer}`);
    });
    //   Update the hovered state
    if (isHovered) setSize(pixelSize);
  }, [scrollY]);
  useEffect(() => {
    console.log("width", width);
  }, [width]);

  return (
    <>
      {
        <motion.div
          className={styles.mouseBall}
          style={{
            x: animation ? xStart : x - pixelSize / 2,
            y: animation ? yStart : y - pixelSize / 2 - 10,
            width: pixelSize,
            height: pixelSize,
            position: `${animation ? `absolute` : `fixed`}`,
          }}
          // className={styles.ballAnimation}
          initial={{
            left: "50%",
          }}
          animate={{
            left: `${animation ? 18 : 0}vw`,
            top: `${animation ? 50 : 0}vh`,
            transition: {
              left: {
                type: "spring",
                damping: 300,
                stiffness: 2500,
                mass: 25,
                delay: `${animation ? 1.5 : 0}`,
              },
              // You can add other properties if needed
            },
          }}
        >
          <motion.div
            initial={{
              width: ballAnimation ? "3000px" : size,
              height: ballAnimation ? "3000px" : size,
              backgroundImage: ballAnimation
                ? "linear-gradient(400deg, #1c1d20 50%, #0086d1 150%, #af4261 200%)"
                : "linear-gradient(45deg,#1c1d20 -100%, #0086d1 0%, #af4261 100%)",
            }}
            animate={{
              width: size,
              height: size,
              backgroundImage:
                "linear-gradient(45deg,#1c1d20 -100%, #0086d1 0%, #af4261 100%)",
              transition: {
                width: {
                  duration: `${animation ? 0.5 : 0.4}`,
                  ease: [0.87, 0, 0.13, 1],
                  delay: `${animation ? 1.5 : 0}`,
                },
                height: {
                  duration: `${animation ? 0.5 : 0.4}`,
                  ease: [0.87, 0, 0.13, 1],
                  delay: `${animation ? 1.5 : 0}`,
                },
                fontSize: {
                  duration: 0.5,
                  ease: [0.87, 0, 0.13, 1],
                  delay: 1.25,
                },
                backgroundImage: {
                  duration: 2,
                  ease: [0.87, 0, 0.13, 1],
                  delay: 0.5,
                },
                // Transition for left
                // You can add other properties if needed
              },
            }}
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
      }

      {
        <motion.div
          className={styles.mouseBall2}
          style={{
            x: animation ? xStart : x - pixelSize / 2,
            y: animation ? yStart : y - pixelSize / 2 - 10,
            width: pixelSize,
            height: pixelSize,
            position: `${animation ? `absolute` : `fixed`}`,
            // display: "fixed",
            // backgroundColor: "blue",
          }}
          initial={{
            left: "48vw",
          }}
          animate={{
            left: `${animation ? 18 : 0}vw`,
            top: `${animation ? 50 : 0}vh`,

            transition: {
              left: {
                type: "spring",
                damping: 300,
                stiffness: 2500,
                mass: 25,
                delay: `${animation ? 1.5 : 0}`,
              },
              // You can add other properties if needed
            },
          }}
        >
          <motion.div
            style={{
              width: size,
              height: size,
              // opacity: `${size > 0 ? 1 : 0}%`,
              // backgroundColor: "red",
            }}
            initial={{
              opacity: 0,
              fontSize: ballAnimation ? "5rem" : "1.25rem",
            }}
            animate={{
              opacity: size > 0 ? 1 : 0,
              fontSize: "1.25rem",
              transition: {
                opacity: {
                  duration: animation ? 0.5 : 0.25,
                  ease: animation ? [0.7, 0, 0.84, 0] : [0.34, 1, 0.64, 1],
                  delay: animation ? 0.5 : 0,
                },
                fontSize: { duration: 1, ease: [0.16, 1, 0.3, 1], delay: 1.5 },
              },
            }}
          >
            {text}
          </motion.div>
        </motion.div>
      }
    </>
  );
}
