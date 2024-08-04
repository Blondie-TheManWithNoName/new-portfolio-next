import React from "react";
import styles from "../styles/work.module.scss";
import { motion } from "framer-motion";

export default function BallAnimation({ ballRed }) {
  return (
    <motion.div
      className={styles.ballAnimation}
      initial={{
        marginLeft: "49vw",
      }}
      animate={{
        marginLeft: "20vw",
        transition: {
          marginLeft: {
            type: "spring",
            damping: 200,
            stiffness: 1000,
            mass: 20,
            delay: 1.5,
          },
          // You can add other properties if needed
        },
      }}
    >
      <motion.div
        initial={{
          width: "3000px",
          height: "3000px",
          fontSize: "2rem",
          backgroundImage:
            "linear-gradient(400deg, #1c1d20 50%, #0086d1 150%, #af4261 200%)",
        }}
        animate={{
          width: "75px",
          height: "75px",
          fontSize: "1.3rem",
          backgroundImage:
            "linear-gradient(45deg,#1c1d20 -100%, #0086d1 0%, #af4261 100%)",
          transition: {
            width: { duration: 0.5, ease: [0.87, 0, 0.13, 1], delay: 1.5 },
            height: { duration: 0.5, ease: [0.87, 0, 0.13, 1], delay: 1.5 },
            fontSize: { duration: 0.5, ease: [0.87, 0, 0.13, 1], delay: 1.25 },
            backgroundImage: {
              duration: 2,
              ease: [0.87, 0, 0.13, 1],
              delay: 0.5,
            },
            // Transition for margin
            // You can add other properties if needed
          },
        }}
        className={styles.animatedBall}
      >
        <motion.div
          initial={{
            opacity: 0,
            fontSize: "5rem",
          }}
          animate={{
            opacity: 1,
            fontSize: "1.25rem",
            transition: {
              opacity: { duration: 0.5, ease: [0.7, 0, 0.84, 0], delay: 0.5 },
              fontSize: { duration: 1, ease: [0.16, 1, 0.3, 1], delay: 1.5 },
            },
          }}
        >
          Hello
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
