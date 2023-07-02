'use strict';

var React = require("react");
var ReasonReactRouter = require("reason-react/src/ReasonReactRouter.bs.js");
var NotFound$ReasonMlFrontend = require("../components/NotFound.bs.js");
var ProductListPageLazy$ReasonMlFrontend = require("../pages/lazy/ProductListPageLazy.bs.js");
var ProductDetailsPageLazy$ReasonMlFrontend = require("../pages/lazy/ProductDetailsPageLazy.bs.js");

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

exports.make = make;
/* react Not a pure module */
