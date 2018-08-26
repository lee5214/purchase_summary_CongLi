import React from "react";
import styles from "./SummaryLine.css";

const SummaryLine = ({
  itemKey,
  itemValue,
  itemZip,
  toggleToolTip,
  tooltipOpen,
  tooltipContent,
  color
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.orderSummaryLine}>
        {tooltipContent ? (
          <div>
            <button
              className={`${styles.button} ${styles.cursor}`}
              onFocus={toggleToolTip}
              onBlur={() => toggleToolTip(false)}
            >
              {itemKey}
            </button>
            {tooltipOpen ? (
              <div className={styles.tooltipContainer}>
                <div className={styles.tooltipCaret} />
                <div className={styles.tooltipContentContainer}>
                  {tooltipContent}
                </div>
              </div>
            ) : null}
          </div>
        ) : (
          <span className={styles.itemTitle}>{itemKey}</span>
        )}
        <span className={styles.itemValue} style={{ color: color }}>
          {itemValue}
        </span>
      </div>
      {itemZip && (
        <div className={styles.orderSummaryLine}>
          <span className={styles.itemTitle}>
            (Based on <span className={styles.zip}>{itemZip}</span>)
          </span>
        </div>
      )}
    </div>
  );
};

export default SummaryLine;
