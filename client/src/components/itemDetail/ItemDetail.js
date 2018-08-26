import React from "react";
import styles from "./ItemDetail.css";
export default ({ item }) => {
  return (
    <div className={styles.itemContainer}>
      <div className={styles.imgContainer}>
        <img className={styles.itemImage} src={item.image} />
      </div>
      <div className={styles.itemRight}>
        <div className={styles.posItem}>
          <span className={styles.name}>{item.name}</span>
        </div>
        <div className={styles.posItem}>
          <div className={styles.price}>${item.price}</div>
          <div className={styles.qty}>
            Qty:
            {item.quantity}
          </div>
        </div>
        <div className={styles.posItem}>
          <div className={styles.itemVariant}>Actual color: {item.color}</div>
        </div>
      </div>
    </div>
  );
};
