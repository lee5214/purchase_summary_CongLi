import React from "react";
import App from "./App";
import { shallow, mount } from "enzyme";
import Root from "../Root";

describe("<App />", () => {
  let wrapper = shallow(
    <Root>
      <App />
    </Root>
  );
  it("show the App with Redux and without crash", () => {
    expect(wrapper.find(App).length).toEqual(1);
  });
});
