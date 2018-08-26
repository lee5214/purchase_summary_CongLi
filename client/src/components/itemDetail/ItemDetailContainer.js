import React, { Component } from "react";
import styles from "./ItemDetailContainer.css";

class ItemDetailContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false
    };
  }

  toggleItemDetail = () => {
    this.setState({ expanded: !this.state.expanded });
  };
  render() {
    return (
      <div>
        <button className={styles.button} onClick={this.toggleItemDetail}>
          {this.state.expanded ? (
            <span>
              <span>Hide item details</span>
              <span className={`${styles.icon} ${styles.iconMinus}`} />
            </span>
          ) : (
            <span>
              <span>See item details</span>
              <span className={`${styles.icon} ${styles.iconPlus}`} />
            </span>
          )}
        </button>

        {this.state.expanded ? (
          <div>
            <div>Item1</div>
            <div>Item1</div>
            <div>Item1</div>
            <div>Item1</div>
          </div>
        ) : null}
      </div>
    );
  }
}

export default ItemDetailContainer;
