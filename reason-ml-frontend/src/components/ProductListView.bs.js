

import * as React from "react";

function ProductListView(Props) {
  var message = Props.message;
  return React.createElement("h1", undefined, message);
}

var make = ProductListView;

export {
  make ,
}
/* react Not a pure module */
