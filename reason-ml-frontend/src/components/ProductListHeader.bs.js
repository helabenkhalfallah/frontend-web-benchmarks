

import * as React from "react";
import * as Css from "@emotion/css";
import * as ProductListTitle$ReasonMlFrontend from "./ProductListTitle.bs.js";
import * as ProductListSubTitle$ReasonMlFrontend from "./ProductListSubTitle.bs.js";

function ProductListHeader(Props) {
  var title = Props.title;
  var subTitle = Props.subTitle;
  return React.createElement("header", {
              className: Css.css("\n    font-family: Arial, sans-serif;\n    display: block;\n    text-align: center;\n    background-color: #fff;\n    margin-top: 2rem;\n  ")
            }, React.createElement(ProductListTitle$ReasonMlFrontend.make, {
                  title: title
                }), React.createElement(ProductListSubTitle$ReasonMlFrontend.make, {
                  subTitle: subTitle
                }));
}

var make = ProductListHeader;

export {
  make ,
}
/* react Not a pure module */
