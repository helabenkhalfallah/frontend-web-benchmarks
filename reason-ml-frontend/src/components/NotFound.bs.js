

import * as React from "react";

function NotFound(Props) {
  return React.createElement("div", undefined, React.createElement("h1", undefined, "Technical Error"), React.createElement("p", undefined, "Page Not Found"));
}

var make = NotFound;

export {
  make ,
}
/* react Not a pure module */
