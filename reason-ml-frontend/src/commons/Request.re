exception GetError(string);

let encodeResponse = (data): array(ProductDecoder.product) => ProductDecoder.decodeProducts(data).products;

let get = (url) => {
  Js.Promise.(
    Fetch.fetch(url)
    |> then_(Fetch.Response.json)
    |> then_(response =>
         switch (Js.Json.decodeObject(response)) {
         | Some(decodedRes) =>
           switch (Js.Dict.get(decodedRes, "error")) {
            | Some(error) =>
             switch (Js.Json.decodeObject(error)) {
             | Some(decodedErr) =>
               switch (Js.Dict.get(decodedErr, "message")) {
                | Some(errorMessage) =>
                  switch (Js.Json.decodeString(errorMessage)) {
                    | Some(decodedErrorMessage) => reject(GetError(decodedErrorMessage))
                    | None => reject(GetError("GET_ERROR"))
                  }
                | None => resolve(encodeResponse(response))
               }
             | None => resolve(encodeResponse(response))
             }

           | None => resolve(encodeResponse(response))
           }
          | None => resolve(encodeResponse(response))
        }
       )
  );
};