import React from "react";
import styles from "./GrandTotal.css";

const GroundTotal = ({ itemKey, itemValue }) => {
  return (
    <div className={styles.grandTotalContainer}>
      <span className={styles.itemTitle}>{itemKey}</span>
      <span className={styles.itemValue}>{itemValue}</span>
    </div>
  );
};

export default GroundTotal;
