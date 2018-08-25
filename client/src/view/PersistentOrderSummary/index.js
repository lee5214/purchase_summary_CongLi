import React, { Component } from "react";
import styles from "./PersistentOrderSummary.css";
import SummaryLine from "../../components/list/SummaryLine";
import GrandTotal from "../../components/list/GrandTotal";

class PersistentOrderSummary extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className={styles.orderSummaryContainer}>
        <SummaryLine itemKey={"Subtotal"} itemValue={"$198.41"} />
        <SummaryLine
          itemKey={"Pickup savings"}
          itemValue={"-$7.42"}
          tooltipContent={
            "Picking up your order in the store helps cut costs, and we pass the savings on to you."
          }
        />
        <SummaryLine
          itemKey={"Est. taxes & fees"}
          itemValue={"$18.62"}
          itemZip={"94541"}
        />
        <GrandTotal itemKey={"Est. total"} itemValue={"$209.61"} />
      </div>
    );
  }
}
export default PersistentOrderSummary;
