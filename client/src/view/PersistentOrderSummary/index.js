import React, { Component } from "react";
import styles from "./PersistentOrderSummary.css";
import SummaryLine from "../../components/list/SummaryLine";
import GrandTotal from "../../components/list/GrandTotal";
import ItemDetailContainer from "../../components/itemDetail/ItemDetailContainer";
import { connect } from "react-redux";
import { fetchOrderSummary } from "../../actions";

class PersistentOrderSummary extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchOrderSummary();
  }
  render() {
    console.log(this.props.orderSummary);
    const {
      subtotal,
      pickupSaving,
      taxes,
      total,
      items
    } = this.props.orderSummary;
    return (
      <div className={styles.orderSummaryContainer}>
        <h1>{subtotal}</h1>
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
        <ItemDetailContainer />
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    orderSummary: state.orderSummary
  };
};
export default connect(
  mapStateToProps,
  { fetchOrderSummary }
)(PersistentOrderSummary);
