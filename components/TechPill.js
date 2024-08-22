import React from "react";
import styles from "../styles/workInfo.module.scss";

export default function TechPill({ name }) {
  return <p className={styles.pill}>{name}</p>;
}
