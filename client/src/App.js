import React, { Component } from "react";
import FakeContainer from "./view/FakeContainer";
import PersistentOrderSummary from "./view/PersistentOrderSummary";

import styles from "./App.css";

class App extends Component {
  render() {
    return (
      <div className={styles.App}>
        <FakeContainer>
          <div className={styles.summaryContainer}>
            <PersistentOrderSummary />
          </div>
        </FakeContainer>
      </div>
    );
  }
}
export default App;
