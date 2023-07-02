

import * as React from "react";
import * as ReactDom from "react-dom";
import * as Router$ReasonMlFrontend from "./routes/Router.bs.js";

var root = document.querySelector("#reasonml-frontend-root");

if (!(root == null)) {
  ReactDom.render(React.createElement(Router$ReasonMlFrontend.make, {}), root);
}

export {
  
}
/* root Not a pure module */
