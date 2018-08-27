import React from "react";
import PersistentOrderSummary from "./PersistentOrderSummary";
import { shallow, mount } from "enzyme";
import SummaryLine from "../../components/list/SummaryLine";
import GrandTotal from "../../components/list/GrandTotal";
import Expand from "../../components/itemDetail/Expand";
import ItemDetail from "../../components/itemDetail/ItemDetail";
import Root from "../../Root";

describe("<PersistentOrderSummary />", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(
      <Root>
        <PersistentOrderSummary />
      </Root>
    );
  });
  afterEach(() => {
    wrapper.unmount();
  });

  // components count
  it("has 1 PersistentOrderSummary", () => {
    expect(wrapper.find(PersistentOrderSummary).length).toEqual(1);
  });

  it("has 3 SummaryLine", () => {
    expect(wrapper.find(SummaryLine).length).toEqual(3);
  });

  it("has 1 GrandTotal", () => {
    expect(wrapper.find(GrandTotal).length).toEqual(1);
  });

  it("has 2 Expand", () => {
    expect(wrapper.find(Expand).length).toEqual(2);
  });

  // expand button function
  it("has button for promo", () => {
    wrapper.find("#expand-button-promo").simulate("click");
    wrapper.update();
    expect(wrapper.find("#expanded-promo-container").length).toEqual(1);
  });

  // promo input
  it("has promo input after promo button click, user can type in, and value is correct", () => {
    wrapper.find("#expand-button-promo").simulate("click");
    wrapper.update();
    wrapper.find("input").simulate("change", {
      target: { value: "test" }
    });
    wrapper.update();
    expect(wrapper.find("input").prop("value")).toEqual("test");
  });
});
