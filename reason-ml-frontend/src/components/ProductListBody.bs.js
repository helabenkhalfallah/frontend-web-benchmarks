

import * as React from "react";
import * as Belt_Array from "rescript/lib/es6/belt_Array.js";
import * as Css from "@emotion/css";

function ProductListBody(Props) {
  var productList = Props.productList;
  var listStyle = "\n    font-family: Arial, sans-serif;\n    width: 100%;\n\n    .product__card {\n      height: 140px;\n      margin: 5px;\n      display: flex;\n      flex-direction: row;\n      align-items: center;\n      background-color: #fff;\n      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n      transition: 0.3s;\n\n      &:hover {\n        box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);\n      }\n    }\n\n    .product__image {\n      width: 80px;\n      height: 80px;\n      aspect-ratio: 16 / 9;\n      object-fit: scale-down;\n      margin-top: 5px;\n    }\n\n    product__infos {\n      display: flex;\n      flex-direction: row;\n      align-items: left;\n    }\n\n    .product__title {\n      line-height: 15px;\n      color: #20397f;\n      font-size: 1rem;\n      margin-left: 1rem;\n    }\n\n    .product__description {\n      line-height: 20px;\n      color: #060b19;\n      font-size: 0.8rem;\n      margin-left: 1rem;\n    }\n\n    .product__link {\n      font-size: 0.8rem;\n      margin-left: 2rem;\n    }\n  ";
  if (productList.length === 0) {
    return React.createElement("div", {
                className: Css.css(listStyle)
              }, React.createElement("span", undefined, "No Data"));
  } else {
    return React.createElement("div", {
                className: Css.css(listStyle)
              }, React.createElement("ul", undefined, Belt_Array.map(productList, (function (item) {
                          return React.createElement("div", {
                                      key: item.title,
                                      className: "product__card"
                                    }, React.createElement("img", {
                                          className: "product__image",
                                          role: "cell",
                                          alt: "Product Thumbnail",
                                          src: item.thumbnail
                                        }), React.createElement("div", {
                                          className: "product__infos",
                                          role: "cell"
                                        }, React.createElement("h3", {
                                              className: "product__title"
                                            }, item.title), React.createElement("p", {
                                              className: "product__description"
                                            }, item.description)));
                        }))));
  }
}

var make = ProductListBody;

export {
  make ,
}
/* react Not a pure module */
