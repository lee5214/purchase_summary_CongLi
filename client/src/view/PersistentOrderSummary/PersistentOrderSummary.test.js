import React from "react";
import PersistentOrderSummary from "./PersistentOrderSummary";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import rootReducer from "../../reducers";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { shallow, mount } from "enzyme";
import SummaryLine from "../../components/list/SummaryLine";
import GrandTotal from "../../components/list/GrandTotal";
import Expand from "../../components/itemDetail/Expand";

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

describe("<PersistentOrderSummary />", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(
      <Provider store={store}>
        <PersistentOrderSummary />
      </Provider>
    );
  });
  afterEach(() => {
    wrapper.unmount();
  });

  it("show the PersistentOrderSummary", () => {
    expect(wrapper.find(PersistentOrderSummary).exists());
  });

  it("has SummaryLine", () => {
    expect(wrapper.find(SummaryLine).exists());
  });

  it("has GrandTotal", () => {
    expect(wrapper.find(GrandTotal).exists());
  });

  it("has Expand", () => {
    expect(wrapper.find(Expand).exists());
  });

  it("has an input users can type in", () => {
    expect(wrapper.find("#promo-input").exists());
  });
});
