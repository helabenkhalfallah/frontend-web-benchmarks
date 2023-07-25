

import * as Json_decode from "@glennsl/bs-json/src/Json_decode.bs.js";
import * as Caml_exceptions from "rescript/lib/es6/caml_exceptions.js";

var GetProductsError = /* @__PURE__ */Caml_exceptions.create("ProductDecoder-ReasonMlFrontend.GetProductsError");

function decodeProduct(json) {
  return {
          id: Json_decode.field("id", Json_decode.$$int, json),
          brand: Json_decode.field("brand", Json_decode.string, json),
          category: Json_decode.field("category", Json_decode.string, json),
          description: Json_decode.field("description", Json_decode.string, json),
          title: Json_decode.field("title", Json_decode.string, json),
          thumbnail: Json_decode.field("thumbnail", Json_decode.string, json)
        };
}

function decodeProducts(json) {
  return {
          limit: Json_decode.field("limit", Json_decode.$$int, json),
          skip: Json_decode.field("skip", Json_decode.$$int, json),
          total: Json_decode.field("total", Json_decode.$$int, json),
          products: Json_decode.field("products", (function (param) {
                  return Json_decode.array(decodeProduct, param);
                }), json)
        };
}

export {
  GetProductsError ,
  decodeProduct ,
  decodeProducts ,
}
/* No side effect */
