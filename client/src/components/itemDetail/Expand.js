import React, { Component } from "react";
import ItemDetail from "./ItemDetail";
import styles from "./Expand.css";

export default ({
  type,
  items,
  expanded,
  toggle,
  textWhenClosed,
  textWhenOpened,
  handlePromoInput,
  handlePromoSubmit
}) => {
  return (
    <div className={styles.container}>
      <button className={styles.button} onClick={toggle}>
        {expanded ? (
          <span>
            <span>{textWhenOpened}</span>
            <span className={`${styles.icon} ${styles.iconMinus}`} />
          </span>
        ) : (
          <span>
            <span>{textWhenClosed}</span>
            <span className={`${styles.icon} ${styles.iconPlus}`} />
          </span>
        )}
      </button>

      {expanded && type === "item" && items ? (
        <div>
          {items.map(item => (
            <ItemDetail key={`ordered-${item.id}`} item={item} />
          ))}
        </div>
      ) : null}

      {expanded && type === "promo" ? (
        <div>
          <span className={styles.promoTitle}>Promo code</span>
          <div className={styles.inputContainer}>
            <input
              id={"promo-input"}
              className={styles.input}
              onChange={e => handlePromoInput(e.target.value)}
            />
            <button className={styles.inputButton} onClick={handlePromoSubmit}>
              Apply
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
};
