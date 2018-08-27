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
  it("has 3 SummaryLine", () => {
    expect(wrapper.find(SummaryLine).length).toEqual(3);
  });

  it("has 1 GrandTotal", () => {
    expect(wrapper.find(GrandTotal).length).toEqual(1);
  });

  it("has 2 Expand", () => {
    expect(wrapper.find(Expand).length).toEqual(2);
  });

  // expand control
  it("has expand button for promo, promo area will show when click", () => {
    wrapper.find("button#expand-button-promo").simulate("click");
    wrapper.update();
    expect(wrapper.find("#expanded-promo-container").length).toEqual(1);
  });

  describe("the promo area function after promo expanded", () => {
    beforeEach(() => {
      wrapper.find("#expand-button-promo").simulate("click");
      wrapper.update();
      wrapper.find("input").simulate("change", {
        target: { value: "test" }
      });
      wrapper.update();
    });

    // promo input
    it("has promo input user can type in, and value is correct", () => {
      expect(wrapper.find("input#promo-input").prop("value")).toEqual("test");
    });

    it("has submit button", () => {
      expect(wrapper.find("button#expanded-promo-submit-btn").length).toEqual(
        1
      );
    });

    it("when promo submit button clicked, input value gets empty", () => {
      wrapper.find("button#expanded-promo-submit-btn").simulate("click");
      wrapper.update();
      expect(wrapper.find("input#promo-input").prop("value")).toEqual("");
    });
  });
});
