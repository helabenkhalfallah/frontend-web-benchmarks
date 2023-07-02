

import * as React from "react";

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

export {
  unsafePlaceholder ,
  UnsafePlaceholder ,
  makeProps ,
  make ,
}
/* make Not a pure module */
