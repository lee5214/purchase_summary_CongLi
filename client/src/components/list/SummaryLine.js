import React from "react";
import styles from "./SummaryLine.css";

const SummaryLine = ({
  itemKey,
  itemValue,
  itemZip,
  tooltipContent,
  onClick
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.orderSummaryLine}>
        {tooltipContent ? (
          <button className={`${styles.button} ${styles.cursor}`}>
            {itemKey}
          </button>
        ) : (
          <span className={styles.itemTitle}>{itemKey}</span>
        )}
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
