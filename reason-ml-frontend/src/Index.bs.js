'use strict';

var React = require("react");
var ReactDom = require("react-dom");
var Router$ReasonMlFrontend = require("./routes/Router.bs.js");

var root = document.querySelector("#reasonml-frontend-root");

if (!(root == null)) {
  ReactDom.render(React.createElement(Router$ReasonMlFrontend.make, {}), root);
}

/* root Not a pure module */
