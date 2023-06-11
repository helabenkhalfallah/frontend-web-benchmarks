'use strict';

var React = require("react");
var ReactDom = require("react-dom");
var Router$ReasonMlFrontend = require("./routes/Router.bs.js");

function sqr(x) {
  return Math.imul(x, x);
}

var root = document.querySelector("#reasonml-frontend-root");

if (!(root == null)) {
  ReactDom.render(React.createElement(Router$ReasonMlFrontend.make, {}), root);
}

exports.sqr = sqr;
/* root Not a pure module */
