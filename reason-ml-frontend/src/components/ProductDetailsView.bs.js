

import * as React from "react";

function ProductDetailsView(Props) {
  var message = Props.message;
  return React.createElement("h1", undefined, message);
}

var make = ProductDetailsView;

export {
  make ,
}
/* react Not a pure module */
