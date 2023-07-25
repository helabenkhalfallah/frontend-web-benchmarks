

import * as React from "react";
import * as Belt_Array from "rescript/lib/es6/belt_Array.js";
import * as Css from "@emotion/css";

function ProductListBody(Props) {
  var productList = Props.productList;
  var listStyle = "\n    font-family: Arial, sans-serif;\n    width: 100%;\n  ";
  if (productList.length === 0) {
    return React.createElement("div", {
                className: Css.css(listStyle)
              }, React.createElement("span", undefined, "No Data"));
  } else {
    return React.createElement("div", {
                className: Css.css(listStyle)
              }, React.createElement("ul", undefined, Belt_Array.map(productList, (function (item) {
                          return React.createElement("li", {
                                      key: item.title
                                    }, item.title);
                        }))));
  }
}

var make = ProductListBody;

export {
  make ,
}
/* react Not a pure module */
