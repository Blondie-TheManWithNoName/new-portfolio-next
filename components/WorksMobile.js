import React, { useState, useRef, useEffect } from "react";
import styles from "../styles/work.module.scss";
import { logos, backgrounds, titles, skills, videos } from "../assets/assets";

export default function WorksMobile({}) {
  return (
    <div className={styles.worksContainer}>
      <div className={styles.worksTable}>
        {titles.map((title, index) => (
          <div className={styles.workTable}>
            <h2>{title.title}</h2>
            <h3>{title.description}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
