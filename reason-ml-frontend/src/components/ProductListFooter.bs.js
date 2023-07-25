

import * as React from "react";
import * as Css from "@emotion/css";

function ProductListFooter(Props) {
  return React.createElement("footer", {
              className: Css.css("\n	font-family: Arial, sans-serif;\n	display: flex;\n	align-items: center;\n	justify-content: space-between;\n	background-color: #fff;\n	margin-top: 2rem;\n\n	.page__copyright {\n		color: #192e66;\n		font-size: 1rem;\n		padding: 1rem;\n	}\n  ")
            }, React.createElement("span", {
                  className: "page__copyright"
                }, "© POC Application"), React.createElement("span", {
                  className: "page__copyright"
                }, "Benchmarking Frontend Framework"));
}

var make = ProductListFooter;

export {
  make ,
}
/* react Not a pure module */
