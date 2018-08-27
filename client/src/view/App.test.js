import React from "react";
import App from "./App";
import { shallow, mount } from "enzyme";
import Root from "../Root";
import FakeContainer from "./FakeContainer/FakeContainer";
import PersistentOrderSummary from "./PersistentOrderSummary/PersistentOrderSummary";

describe("<App />", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(
      <Root>
        <App />
      </Root>
    );
  });
  afterEach(() => {
    wrapper.unmount();
  });

  it("show the App with Redux and without crash", () => {
    expect(wrapper.find(App).length).toEqual(1);
  });
  it("show the App with Redux and without crash", () => {
    expect(wrapper.find(FakeContainer).length).toEqual(1);
  });
  it("show the App with Redux and without crash", () => {
    expect(wrapper.find(PersistentOrderSummary).length).toEqual(1);
  });
});
