import React, { Component } from "react";
import FakeContainer from "./FakeContainer/index";
import PersistentOrderSummary from "./PersistentOrderSummary/index";
import styles from "./App.css";

class App extends Component {
  render() {
    return (
      <FakeContainer>
        <div className={styles.summaryContainer}>
          <PersistentOrderSummary />
        </div>
      </FakeContainer>
    );
  }
}
export default App;
