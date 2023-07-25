

import * as Curry from "rescript/lib/es6/curry.js";
import * as React from "react";
import * as Js_promise from "rescript/lib/es6/js_promise.js";
import * as Request$ReasonMlFrontend from "../commons/Request.bs.js";
import * as ProductListBody$ReasonMlFrontend from "./ProductListBody.bs.js";
import * as ProductListFooter$ReasonMlFrontend from "./ProductListFooter.bs.js";
import * as ProductListHeader$ReasonMlFrontend from "./ProductListHeader.bs.js";

function ProductListView(Props) {
  var match = React.useState(function () {
        return "";
      });
  var setError = match[1];
  var error = match[0];
  var match$1 = React.useState(function () {
        return [];
      });
  var setData = match$1[1];
  var match$2 = React.useState(function () {
        return true;
      });
  var setLoading = match$2[1];
  var match$3 = React.useState(function () {
        return {
                skip: 0,
                limit: 10
              };
      });
  var urlParams = match$3[0];
  React.useEffect((function () {
          var defaultUrl = "https://dummyjson.com/products?skip=" + (String(urlParams.skip) + ("&limit=" + String(urlParams.limit)));
          Js_promise.$$catch((function (error) {
                  return Promise.resolve((console.log(error), Curry._1(setLoading, (function (_previousState) {
                                      return false;
                                    })), Curry._1(setError, (function (param) {
                                      return "An error was occured, please retry another time! :)";
                                    }))));
                }), Js_promise.then_((function (response) {
                      return Promise.resolve((console.log(response), Curry._1(setLoading, (function (_previousState) {
                                          return false;
                                        })), Curry._1(setData, (function (param) {
                                          return response;
                                        })), Curry._1(setError, (function (param) {
                                          return "";
                                        }))));
                    }), Request$ReasonMlFrontend.get(defaultUrl)));
        }), []);
  if (match$2[0] === true) {
    return React.createElement("section", undefined, React.createElement(ProductListHeader$ReasonMlFrontend.make, {
                    title: "Reason Frontend Project",
                    subTitle: "Product List"
                  }), React.createElement("span", undefined, "Loading Data"), React.createElement(ProductListFooter$ReasonMlFrontend.make, {}));
  } else if (error !== "") {
    return React.createElement("section", undefined, React.createElement(ProductListHeader$ReasonMlFrontend.make, {
                    title: "Reason Frontend Project",
                    subTitle: "Product List"
                  }), React.createElement("span", undefined, error), React.createElement(ProductListFooter$ReasonMlFrontend.make, {}));
  } else {
    return React.createElement("section", undefined, React.createElement(ProductListHeader$ReasonMlFrontend.make, {
                    title: "Reason Frontend Project",
                    subTitle: "Product List"
                  }), React.createElement(ProductListBody$ReasonMlFrontend.make, {
                    productList: match$1[0]
                  }), React.createElement(ProductListFooter$ReasonMlFrontend.make, {}));
  }
}

var make = ProductListView;

export {
  make ,
}
/* react Not a pure module */
