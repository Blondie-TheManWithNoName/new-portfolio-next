import React from "react";
import styles from "../styles/carousell.module.scss";
export default function BotDivider({ height }) {
  return (
    <div className={styles.botDividerContainer}>
      <svg
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        className={styles.svg}
        height={"100px"}
      >
        <path
          fill="#ffffff"
          d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z"
        ></path>
      </svg>
    </div>
  );
}
