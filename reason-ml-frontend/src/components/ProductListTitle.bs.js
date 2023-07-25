

import * as React from "react";
import * as Css from "@emotion/css";

function ProductListTitle(Props) {
  var title = Props.title;
  return React.createElement("h1", {
              className: Css.css("\n\n		text-align: center;\n  ")
            }, title);
}

var make = ProductListTitle;

export {
  make ,
}
/* react Not a pure module */
