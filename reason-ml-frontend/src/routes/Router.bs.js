

import * as React from "react";
import * as ReasonReactRouter from "reason-react/src/ReasonReactRouter.bs.js";
import * as NotFound$ReasonMlFrontend from "../components/NotFound.bs.js";
import * as ProductListPageLazy$ReasonMlFrontend from "../pages/lazy/ProductListPageLazy.bs.js";
import * as ProductDetailsPageLazy$ReasonMlFrontend from "../pages/lazy/ProductDetailsPageLazy.bs.js";

function Router(Props) {
  var url = ReasonReactRouter.useUrl(undefined, undefined);
  var match = url.path;
  if (match) {
    switch (match.hd) {
      case "product_details" :
          if (!match.tl) {
            return React.createElement(React.Suspense, {
                        children: React.createElement(ProductDetailsPageLazy$ReasonMlFrontend.make, ProductDetailsPageLazy$ReasonMlFrontend.makeProps(undefined, undefined)),
                        fallback: React.createElement("div", undefined, "Loading...")
                      });
          }
          break;
      case "product_list" :
          if (!match.tl) {
            return React.createElement(React.Suspense, {
                        children: React.createElement(ProductListPageLazy$ReasonMlFrontend.make, ProductListPageLazy$ReasonMlFrontend.makeProps(undefined, undefined)),
                        fallback: React.createElement("div", undefined, "Loading...")
                      });
          }
          break;
      default:
        
    }
  }
  return React.createElement(NotFound$ReasonMlFrontend.make, {});
}

var make = Router;

export {
  make ,
}
/* react Not a pure module */
