import React from "react";
import FakeContainer from "./FakeContainer";

import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import rootReducer from "../../reducers";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { shallow } from "enzyme/build";

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

it("show the FakeContainer", () => {
  const wrapped = shallow(
    <Provider store={store}>
      <FakeContainer />
    </Provider>
  );
  expect(wrapped.find(FakeContainer).length === 1);
});
