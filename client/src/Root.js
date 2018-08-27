import React from "react";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import rootReducer from "./reducers";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

// a HOC for Jest runs with Redux
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
export default props => <Provider store={store}>{props.children}</Provider>;
