import React from "react";
import FakeContainer from "./FakeContainer";
import { shallow } from "enzyme/build";
import Root from "../../Root";

it("show the FakeContainer", () => {
  const wrapped = shallow(
    <Root>
      <FakeContainer />
    </Root>
  );
  expect(wrapped.find(FakeContainer).length === 3);
});
