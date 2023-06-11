'use strict';

var React = require("react");

function ProductDetailsView(Props) {
  var message = Props.message;
  return React.createElement("h1", undefined, message);
}

var make = ProductDetailsView;

exports.make = make;
/* react Not a pure module */
