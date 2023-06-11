'use strict';

var React = require("react");

function ProductList(Props) {
  var message = Props.message;
  return React.createElement("h1", undefined, message);
}

var make = ProductList;

exports.make = make;
/* react Not a pure module */
