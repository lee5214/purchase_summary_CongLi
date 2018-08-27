import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./view/App";
import registerServiceWorker from "./registerServiceWorker";
import Root from "./Root";

const AppContainer = () => (
  <Root>
    <App />
  </Root>
);

ReactDOM.render(<AppContainer />, document.getElementById("root"));
registerServiceWorker();
