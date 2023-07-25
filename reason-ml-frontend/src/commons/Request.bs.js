

import * as Fetch from "bs-fetch/src/Fetch.bs.js";
import * as Js_dict from "rescript/lib/es6/js_dict.js";
import * as Js_json from "rescript/lib/es6/js_json.js";
import * as Js_promise from "rescript/lib/es6/js_promise.js";
import * as Caml_option from "rescript/lib/es6/caml_option.js";
import * as Caml_exceptions from "rescript/lib/es6/caml_exceptions.js";
import * as ProductDecoder$ReasonMlFrontend from "./ProductDecoder.bs.js";

var GetError = /* @__PURE__ */Caml_exceptions.create("Request-ReasonMlFrontend.GetError");

function encodeResponse(data) {
  return ProductDecoder$ReasonMlFrontend.decodeProducts(data).products;
}

function get(url) {
  return Js_promise.then_((function (response) {
                var decodedRes = Js_json.decodeObject(response);
                if (decodedRes === undefined) {
                  return Promise.resolve(ProductDecoder$ReasonMlFrontend.decodeProducts(response).products);
                }
                var error = Js_dict.get(Caml_option.valFromOption(decodedRes), "error");
                if (error === undefined) {
                  return Promise.resolve(ProductDecoder$ReasonMlFrontend.decodeProducts(response).products);
                }
                var decodedErr = Js_json.decodeObject(Caml_option.valFromOption(error));
                if (decodedErr === undefined) {
                  return Promise.resolve(ProductDecoder$ReasonMlFrontend.decodeProducts(response).products);
                }
                var errorMessage = Js_dict.get(Caml_option.valFromOption(decodedErr), "message");
                if (errorMessage === undefined) {
                  return Promise.resolve(ProductDecoder$ReasonMlFrontend.decodeProducts(response).products);
                }
                var decodedErrorMessage = Js_json.decodeString(Caml_option.valFromOption(errorMessage));
                if (decodedErrorMessage !== undefined) {
                  return Promise.reject({
                              RE_EXN_ID: GetError,
                              _1: decodedErrorMessage
                            });
                } else {
                  return Promise.reject({
                              RE_EXN_ID: GetError,
                              _1: "GET_ERROR"
                            });
                }
              }), Js_promise.then_(Fetch.$$Response.json, fetch(url)));
}

export {
  GetError ,
  encodeResponse ,
  get ,
}
/* No side effect */
