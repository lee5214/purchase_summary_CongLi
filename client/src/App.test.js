import React from "react";
import App from "./App";
import { shallow } from "enzyme";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import rootReducer from "./reducers";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

it("show the App with Redux and without crash", () => {
  const wrapped = shallow(<App />);
  expect(
    wrapped
      .find(
        <Provider store={store}>
          <App />
        </Provider>
      )
      .exists()
  );
});
