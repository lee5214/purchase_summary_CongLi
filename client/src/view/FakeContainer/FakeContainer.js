import React from "react";
import styles from "./FakeContainer.css";

const FakeContainer = props => {
  return <div className={styles.container}>{props.children} </div>;
};

export default FakeContainer;
