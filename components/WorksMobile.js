import React, { useState, useRef, useEffect } from "react";
import styles from "../styles/work.module.scss";
import { logos, backgrounds, titles, skills, videos } from "../assets/assets";
import { useRouter } from "next/router";
import classNames from "classnames";

export default function WorksMobile({}) {
  const router = useRouter();

  return (
    <>
      <h2 className={classNames(styles.worksTitleMobile, "smallTitle")}>
        Recent Work
      </h2>
      <div className={styles.worksContainer}>
        <div className={styles.worksTable}>
          {titles.map((title, index) => {
            if (index > 0 && index < titles.length - 1) {
              return (
                <div
                  className={styles.workTable}
                  onClick={() => router.push(titles[index].page)}
                >
                  <h2>{title.title}</h2>
                  <h3>{title.description}</h3>
                </div>
              );
            } else return null;
          })}
        </div>
      </div>
    </>
  );
}

{
  /* import React, { useState, useRef, useEffect } from "react";
import styles from "../styles/work.module.scss";
import { logos, backgrounds, titles, skills, videos } from "../assets/assets";
import { useRouter } from "next/router";
export default function WorksMobile({ titles = [] }) {
  const router = useRouter();
  console.log("Titles array:", titles);

  return (
    <div className={styles.worksContainer}>
      <div className={styles.worksTable}>
        {titles.map((title, index) => {
          // Properly handling the condition within the callback
          if (index > 0 && index < titles.length - 1) {
            return (
              <div
                key={index}
                className={styles.workTable}
                onClick={() => router.push(title.page)} // Access title.page properly
              >
                <h2>{title.title}</h2>
                <h3>{title.description}</h3>
              </div>
            );
          }
          return null; // Ensure you return something for other indices
        })}
      </div>
    </div>
  );
} */
}
