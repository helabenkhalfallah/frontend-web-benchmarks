'use strict';

var React = require("react");

var unsafePlaceholder = {};

function makeProps(prim0, prim1) {
  var tmp = {};
  if (prim0 !== undefined) {
    tmp.key = prim0;
  }
  return tmp;
}

var make = React.lazy(function (param) {
      return import("../ProductDetailsPage.bs");
    });

var UnsafePlaceholder = unsafePlaceholder;

exports.unsafePlaceholder = unsafePlaceholder;
exports.UnsafePlaceholder = UnsafePlaceholder;
exports.makeProps = makeProps;
exports.make = make;
/* make Not a pure module */
