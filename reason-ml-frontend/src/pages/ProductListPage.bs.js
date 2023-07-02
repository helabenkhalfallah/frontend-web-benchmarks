

import * as React from "react";
import * as ProductListView$ReasonMlFrontend from "../components/ProductListView.bs.js";

function ProductListPage(Props) {
  return React.createElement(ProductListView$ReasonMlFrontend.make, {
              message: "Hello Hela"
            });
}

var make = ProductListPage;

var $$default = ProductListPage;

export {
  make ,
  $$default ,
  $$default as default,
}
/* react Not a pure module */
