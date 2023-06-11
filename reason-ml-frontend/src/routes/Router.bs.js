'use strict';

var React = require("react");
var ReasonReactRouter = require("reason-react/src/ReasonReactRouter.bs.js");
var NotFound$ReasonMlFrontend = require("../components/NotFound.bs.js");
var ProductListPage$ReasonMlFrontend = require("../pages/ProductListPage.bs.js");
var ProductDetailsPage$ReasonMlFrontend = require("../pages/ProductDetailsPage.bs.js");

function Router(Props) {
  var url = ReasonReactRouter.useUrl(undefined, undefined);
  var match = url.path;
  if (!match) {
    return React.createElement(ProductListPage$ReasonMlFrontend.make, {});
  }
  switch (match.hd) {
    case "product_details" :
        if (!match.tl) {
          return React.createElement(ProductDetailsPage$ReasonMlFrontend.make, {});
        }
        break;
    case "product_list" :
        if (!match.tl) {
          return React.createElement(React.Suspense, {
                      children: React.createElement(ProductListPage$ReasonMlFrontend.make, {}),
                      fallback: React.createElement("div", undefined, "Loading...")
                    });
        }
        break;
    default:
      
  }
  return React.createElement(NotFound$ReasonMlFrontend.make, {});
}

var make = Router;

exports.make = make;
/* react Not a pure module */
