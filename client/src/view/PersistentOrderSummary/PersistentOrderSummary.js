import React, { Component } from "react";
import styles from "./PersistentOrderSummary.css";
import SummaryLine from "../../components/list/SummaryLine";
import GrandTotal from "../../components/list/GrandTotal";
import Expand from "../../components/itemDetail/Expand";
import { connect } from "react-redux";
import { fetchOrderSummary, applyPromo } from "../../actions";

class PersistentOrderSummary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tooltipOpen: false,
      detailExpanded: false,
      promoExpanded: false,
      promoInput: ""
    };
  }

  componentDidMount() {
    this.props.fetchOrderSummary();
  }

  toggleToolTip = (boolean = "") => {
    if (boolean === true) {
      this.setState({ tooltipOpen: true });
    } else if (boolean === false) {
      this.setState({ tooltipOpen: false });
    } else {
      this.setState({ tooltipOpen: !this.state.tooltipOpen });
    }
  };

  toggleItemDetail = () => {
    this.setState({ detailExpanded: !this.state.detailExpanded });
  };
  togglePromo = () => {
    this.setState({ promoExpanded: !this.state.promoExpanded });
  };
  handlePromoInput = str => {
    this.setState({ promoInput: str });
  };
  handlePromoSubmit = () => {
    this.props.applyPromo(this.state.promoInput);
  };
  render() {
    const { orderSummary, promo } = this.props;
    const {
      subtotal,
      pickupSavings,
      taxesAndFees,
      total,
      zip,
      items
    } = orderSummary;
    return (
      <div className={styles.orderSummaryContainer}>
        <SummaryLine itemKey={"Subtotal"} itemValue={`\$${subtotal}`} />
        <SummaryLine
          itemKey={"Pickup savings"}
          itemValue={`-\$${pickupSavings}`}
          color={"#de1c24"}
          toggleToolTip={this.toggleToolTip}
          tooltipOpen={this.state.tooltipOpen}
          tooltipContent={
            "Picking up your order in the store helps cut costs, and we pass the savings on to you."
          }
        />
        <SummaryLine
          itemKey={"Est. taxes & fees"}
          itemValue={`\$${taxesAndFees}`}
          itemZip={zip}
        />
        <GrandTotal itemKey={"Est. total"} itemValue={total} />

        <Expand
          type={"item"}
          textWhenClosed={"See item details"}
          textWhenOpened={"Hide item details"}
          items={items}
          expanded={this.state.detailExpanded}
          toggle={this.toggleItemDetail}
        />
        <Expand
          type={"promo"}
          textWhenClosed={"Apply promo code"}
          textWhenOpened={"Hide promo code"}
          expanded={this.state.promoExpanded}
          toggle={this.togglePromo}
          handlePromoInput={this.handlePromoInput}
          handlePromoSubmit={this.handlePromoSubmit}
          promoInput={this.state.promoInput}
        />
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    orderSummary: state.orderSummary
  };
};

PersistentOrderSummary.defaultProps = {
  orderSummary: {}
};

export default connect(
  mapStateToProps,
  { fetchOrderSummary, applyPromo }
)(PersistentOrderSummary);
