

import * as React from "react";
import * as Css from "@emotion/css";

function ProductListSubTitle(Props) {
  var subTitle = Props.subTitle;
  return React.createElement("h2", {
              className: Css.css("\n		color: #192e66;\n		font-size: 1.25rem;\n		text-align: center;\n  ")
            }, subTitle);
}

var make = ProductListSubTitle;

export {
  make ,
}
/* react Not a pure module */
