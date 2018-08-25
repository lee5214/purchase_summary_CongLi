import React from "react";
import styles from "./SummaryLine.css";

const SummaryLine = ({ itemKey, itemValue, itemZip }) => {
  return (
    <div style={{ margin: "20px 0" }}>
      <div className={styles.orderSummaryLine}>
        <span className={styles.itemTitle}>{itemKey}</span>
        <span className={styles.itemValue}>{itemValue}</span>
      </div>
      {itemZip && (
        <div className={styles.orderSummaryLine}>
          <span className={styles.itemTitle}>(Based on {itemZip})</span>
        </div>
      )}
    </div>
  );
};

export default SummaryLine;
