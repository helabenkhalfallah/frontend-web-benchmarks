exception GetProductsError(string);

type product = {
  id: int,
  brand: string,
  category: string,
  description: string,
  title: string,
}

type productResponse = {
  limit: int,
  skip: int,
  total: int,
  products: array(product),
}

let decodeProduct = (json) =>
  Json.Decode.{
    id: json |> field("id", int),
    brand: json |> field("brand", string),
    category: json |> field("category", string),
    description: json |> field("description", string),
    title: json |> field("title", string)
  };

let decodeProducts = (json) =>
    Json.Decode.{
      limit: json |> field("limit", int),
      skip: json |> field("skip", int),
      total: json |> field("total", int),
      products: json |> field("products", array(decodeProduct)),
    };
